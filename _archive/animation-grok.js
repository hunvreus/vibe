import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class SVGTo3D {
  constructor() {
    this.config = {
      extrusion: {
        depth: 20,
        bevelEnabled: true,
        bevelThickness: 20,
        bevelSize: 10,
        bevelSegments: 50
      },
      rotation: {
        speed: 0.01,
        enabled: true
      },
      background: '#222222',
      zoom: 20,
      showHelpers: true
    };

    this.init();
    this.setupControls();
    this.addHelpers();
    this.loadSVG('./logo.svg');
    this.animate();
  }

  init() {
    this.scene = new THREE.Scene();
    this.updateBackgroundColor();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.updateCameraPosition();

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.enabled = false;

    this.textureLoader = new THREE.TextureLoader();
    this.matcapTexture = null;
    this.textureLoader.load('./matcap.jpg', (texture) => {
      this.matcapTexture = texture;
      this.regenerate3D();
    });

    this.material = null; // Will be set after texture loads
    this.svgGroup = new THREE.Group();
    this.scene.add(this.svgGroup);

    this.statusElement = document.createElement('div');
    Object.assign(this.statusElement.style, {
      position: 'absolute', bottom: '10px', left: '10px', color: 'white',
      fontFamily: 'monospace', padding: '10px', backgroundColor: 'rgba(0,0,0,0.5)'
    });
    document.body.appendChild(this.statusElement);

    window.addEventListener('resize', () => this.onWindowResize());
  }

  addHelpers() {
    this.helpersGroup = new THREE.Group();
    this.scene.add(this.helpersGroup);

    this.helpersGroup.add(new THREE.AxesHelper(5));
    this.helpersGroup.add(new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xffff00 })
    ));
    this.helpersGroup.add(new THREE.GridHelper(10, 10, 0x888888, 0x444444));
    this.boxHelper = new THREE.Box3Helper(new THREE.Box3(), 0x00ffff);
    this.helpersGroup.add(this.boxHelper);

    this.updateHelperVisibility();
  }

  updateHelperVisibility() {
    if (this.helpersGroup) this.helpersGroup.visible = this.config.showHelpers;
  }

  updateBackgroundColor() {
    this.scene.background = new THREE.Color(this.config.background);
  }

  updateCameraPosition() {
    this.camera.position.z = this.config.zoom;
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  setupControls() {
    const panel = document.createElement('div');
    Object.assign(panel.style, {
      position: 'absolute', top: '10px', right: '10px', backgroundColor: 'rgba(0,0,0,0.7)',
      padding: '10px', borderRadius: '5px', color: 'white', fontFamily: 'Arial, sans-serif', maxWidth: '300px'
    });

    const title = document.createElement('h3');
    title.textContent = 'SVG to 3D Controls';
    title.style.marginTop = '0';
    panel.appendChild(title);

    this.addControlGroup(panel, 'Extrusion Settings', [
      { name: 'Depth', min: 1, max: 50, value: this.config.extrusion.depth, callback: (val) => {
        this.config.extrusion.depth = Number(val);
        this.regenerate3D();
      }},
    ]);

    this.addControlGroup(panel, 'Bevel Settings', [
      { name: 'Thickness', min: 1, max: 50, value: this.config.extrusion.bevelThickness, callback: (val) => {
        this.config.extrusion.bevelThickness = Number(val);
        this.regenerate3D();
      }},
      { name: 'Size', min: 1, max: 50, value: this.config.extrusion.bevelSize, callback: (val) => {
        this.config.extrusion.bevelSize = Number(val);
        this.regenerate3D();
      }},
      { name: 'Segments', min: 1, max: 100, value: this.config.extrusion.bevelSegments, callback: (val) => {
        this.config.extrusion.bevelSegments = Number(val);
        this.regenerate3D();
      }},
    ]);

    this.addControlGroup(panel, 'Animation', [
      { name: 'Rotation Speed', min: 0, max: 0.1, step: 0.001, value: this.config.rotation.speed, callback: (val) => {
        this.config.rotation.speed = Number(val);
      }},
      { name: 'Enable Rotation', type: 'checkbox', checked: this.config.rotation.enabled, callback: (checked) => {
        this.config.rotation.enabled = checked;
      }}
    ]);

    this.addControlGroup(panel, 'Visual Settings', [
      { name: 'Background Color', type: 'color', value: this.config.background, callback: (val) => {
        this.config.background = val;
        this.updateBackgroundColor();
      }},
      { name: 'Zoom', min: 5, max: 100, value: this.config.zoom, callback: (val) => {
        this.config.zoom = Number(val);
        this.updateCameraPosition();
      }},
      { name: 'Show Helpers', type: 'checkbox', checked: this.config.showHelpers, callback: (checked) => {
        this.config.showHelpers = checked;
        this.updateHelperVisibility();
      }}
    ]);

    const fileGroup = document.createElement('div');
    fileGroup.style.marginTop = '15px';
    const fileLabel = document.createElement('div');
    fileLabel.textContent = 'Upload SVG File';
    fileGroup.appendChild(fileLabel);

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.svg';
    fileInput.style.marginTop = '5px';
    fileInput.style.width = '100%';
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const svgData = e.target.result;
          const blob = new Blob([svgData], { type: 'image/svg+xml' });
          const url = URL.createObjectURL(blob);
          this.loadSVG(url);
        };
        reader.readAsText(file);
      }
    });
    fileGroup.appendChild(fileInput);
    panel.appendChild(fileGroup);

    document.body.appendChild(panel);
  }

  addControlGroup(panel, title, controls) {
    const group = document.createElement('div');
    group.style.marginTop = '15px';

    const groupTitle = document.createElement('div');
    groupTitle.textContent = title;
    groupTitle.style.fontWeight = 'bold';
    groupTitle.style.marginBottom = '5px';
    group.appendChild(groupTitle);

    controls.forEach(control => {
      const controlRow = document.createElement('div');
      controlRow.style.display = 'flex';
      controlRow.style.alignItems = 'center';
      controlRow.style.marginTop = '5px';

      const label = document.createElement('label');
      label.textContent = control.name + ': ';
      label.style.flexBasis = '40%';
      controlRow.appendChild(label);

      let input;
      if (control.type === 'checkbox') {
        input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = control.checked;
        input.addEventListener('change', () => control.callback(input.checked));
      } else if (control.type === 'color') {
        input = document.createElement('input');
        input.type = 'color';
        input.value = control.value;
        input.addEventListener('input', () => control.callback(input.value));
      } else {
        input = document.createElement('input');
        input.type = 'range';
        input.min = control.min;
        input.max = control.max;
        input.step = control.step || 1;
        input.value = control.value;
        input.style.flexGrow = '1';

        const valueDisplay = document.createElement('span');
        valueDisplay.textContent = control.value;
        valueDisplay.style.marginLeft = '5px';
        valueDisplay.style.minWidth = '30px';
        valueDisplay.style.textAlign = 'right';

        input.addEventListener('input', () => {
          valueDisplay.textContent = input.value;
          control.callback(input.value);
        });

        controlRow.appendChild(input);
        controlRow.appendChild(valueDisplay);
      }

      if (control.type === 'checkbox' || control.type === 'color') {
        controlRow.appendChild(input);
      }

      group.appendChild(controlRow);
    });

    panel.appendChild(group);
  }

  loadSVG(url) {
    this.clearSVGGroup();
    this.statusElement.textContent = 'Loading SVG...';

    const loader = new SVGLoader();
    loader.load(
      url,
      (data) => this.processSVG(data),
      (xhr) => this.statusElement.textContent = `Loading: ${Math.round(xhr.loaded / xhr.total * 100)}%`,
      (error) => {
        console.error('Error loading SVG:', error);
        this.statusElement.textContent = `Error loading SVG: ${error.message}`;
      }
    );
  }

  clearSVGGroup() {
    while (this.svgGroup.children.length > 0) {
      const mesh = this.svgGroup.children[0];
      if (mesh.geometry) mesh.geometry.dispose();
      if (mesh.material) mesh.material.dispose();
      this.svgGroup.remove(mesh);
    }
  }

  processSVG(data) {
    this.statusElement.textContent = 'Processing SVG...';
    console.log('SVG loaded successfully');

    const paths = data.paths;
    console.log(`Found ${paths.length} paths in SVG`);

    if (paths.length === 0) {
      this.statusElement.textContent = 'Error: No paths found in SVG';
      return;
    }

    this.svgData = data;
    this.generate3D();
  }

  generate3D() {
    if (!this.svgData || !this.matcapTexture) return;

    this.clearSVGGroup();

    const paths = this.svgData.paths;

    if (!this.material) {
      this.material = new THREE.MeshMatcapMaterial({
        matcap: this.matcapTexture,
        side: THREE.DoubleSide
      });
    }

    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const shapes = path.toShapes(true);

      console.log(`Path ${i} has ${shapes.length} shapes`);

      if (shapes.length === 0) {
        console.warn(`Path ${i} has no shapes`);
        continue;
      }

      for (let j = 0; j < shapes.length; j++) {
        const shape = shapes[j];
        const extrudeSettings = {
          depth: this.config.extrusion.depth,
          bevelEnabled: this.config.extrusion.bevelEnabled,
          bevelThickness: this.config.extrusion.bevelThickness,
          bevelSize: this.config.extrusion.bevelSize,
          bevelSegments: this.config.extrusion.bevelSegments
        };

        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        const mesh = new THREE.Mesh(geometry, this.material);
        this.svgGroup.add(mesh);
      }
    }

    this.centerSVG();
    this.statusElement.textContent = `SVG converted to 3D: ${paths.length} paths, ${this.svgGroup.children.length} meshes`;
  }

  regenerate3D() {
    this.generate3D();
  }

  centerSVG() {
    const box = new THREE.Box3().setFromObject(this.svgGroup);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    console.log("SVG bounds:", box.min, box.max);
    console.log("SVG center:", center);
    console.log("SVG size:", size);

    this.svgGroup.position.set(-center.x, -center.y, -center.z);

    const maxDim = Math.max(size.x, size.y, size.z);
    const targetSize = 10;
    const scale = targetSize / maxDim;
    this.svgGroup.scale.set(scale, scale, scale);

    if (this.boxHelper) {
      const centeredBox = new THREE.Box3().setFromObject(this.svgGroup);
      this.boxHelper.box.copy(centeredBox);
    }

    const newBox = new THREE.Box3().setFromObject(this.svgGroup);
    console.log("Centered SVG bounds:", newBox.min, newBox.max);
    console.log("Centered SVG center:", newBox.getCenter(new THREE.Vector3()));
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    if (this.config.rotation.enabled && this.svgGroup.children.length > 0) {
      this.svgGroup.rotation.y += this.config.rotation.speed;
    }
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}

const app = new SVGTo3D();