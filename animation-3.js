import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import CCapture from 'ccapture.js-npmfixed';

// Main application class
class SVGTo3D {
  constructor() {
    // Configuration defaults
    this.config = {
      extrusion: {
        depth: 20,
        bevelEnabled: true,
        bevelThickness: 4,
        bevelSize: 4,
        bevelSegments: 10
      },
      size: {
        scale: 15, // Overall scale of the object
      },
      rotation: {
        speed: 0.01,
        enabled: true
      },
      background: '#000000',
      zoom: 20,
      showHelpers: false,
      mergeMeshes: false,
      materialType: 'matcap1', // 'matcap', 'standard', 'basic'
      material: {
        baseColor: '#000000',
        blendMode: 'additive', // 'additive', 'normal', 'multiply'
        opacity: 0.8,
        emissiveIntensity: 1.0,
        wireframe: false
      },
      video: {
        fps: 60,
        duration: 4,
        format: 'webm',
        rotations: 1,
        aspectRatio: '16:9', // New aspect ratio setting
        width: 1920,         // Default HD size
        height: 1080,
        padding: 0.2  // 20% padding around the object
      }
    };

    // Recording state
    this.isRecording = false;
    this.capturer = null;
    this.recordingStartTime = 0;
    this.recordingFrames = 0;

    // Create debounced functions
    this.regenerateDebounced = this.debounce(this.regenerate3D.bind(this), 100);

    // Store loaded matcap textures
    this.matcapTextures = new Map();
    
    // Base URLs
    this.localMatcapPath = './';  // For default matcaps
    this.remoteMatcapBasePath = 'https://raw.githubusercontent.com/nidorx/matcaps/master/';

    // Initialize the application
    this.init();
  }

  async init() {
    // Create scene
    this.scene = new THREE.Scene();
    this.updateBackgroundColor();

    // Create camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.updateCameraPosition();

    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(this.renderer.domElement);

    // Add orbit controls (disabled for user interaction)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.enabled = false; // Disable user interaction

    // Create a group to hold the 3D SVG
    this.svgGroup = new THREE.Group();
    this.scene.add(this.svgGroup);

    // Status display
    this.statusElement = document.createElement('div');
    this.statusElement.style.position = 'absolute';
    this.statusElement.style.bottom = '10px';
    this.statusElement.style.left = '10px';
    this.statusElement.style.color = 'white';
    this.statusElement.style.fontFamily = 'monospace';
    this.statusElement.style.padding = '10px';
    this.statusElement.style.backgroundColor = 'rgba(0,0,0,0.5)';
    document.body.appendChild(this.statusElement);

    // Handle window resize
    window.addEventListener('resize', () => this.onWindowResize());

    // Load textures asynchronously
    await this.loadTextures();
    
    // Add center and axis helpers
    this.addHelpers();
    
    // Setup UI controls
    this.setupControls();
    
    // Start animation loop
    this.animate();
    
    // Load default SVG
    this.loadSVG('./logo.svg');
  }

  loadTextures() {
    return new Promise((resolve) => {
      this.textureLoader = new THREE.TextureLoader();
      
      // Create an array to track loading progress
      const texturePromises = [];
      
      // Helper function to create a promise for each texture
      const loadTexture = (url) => {
        return new Promise((resolveTexture) => {
          this.textureLoader.load(
            url,
            (texture) => resolveTexture(texture),
            undefined,
            (error) => {
              console.error(`Error loading texture ${url}:`, error);
              resolveTexture(null); // Resolve with null on error
            }
          );
        });
      };
      
      // Load all textures
      Promise.all([
        // loadTexture('./matcap-1.png').then(texture => this.matcapTexture1 = texture),
        loadTexture('./Spidververse2_MatCap.png').then(texture => this.matcapTexture1 = texture),
        loadTexture('./matcap-2.png').then(texture => this.matcapTexture2 = texture),
        loadTexture('./matcap-3.png').then(texture => this.matcapTexture3 = texture),
        loadTexture('./matcap-4.png').then(texture => this.matcapTexture4 = texture),
        loadTexture('./matcap-5.png').then(texture => this.matcapTexture5 = texture),
        loadTexture('./matcap-6.png').then(texture => this.matcapTexture6 = texture),
        loadTexture('./matcap-7.png').then(texture => this.matcapTexture7 = texture),
        loadTexture('./matcap-8.png').then(texture => this.matcapTexture8 = texture),
        loadTexture('./matcap-9.png').then(texture => this.matcapTexture9 = texture),
        loadTexture('./matcap-10.png').then(texture => this.matcapTexture10 = texture)
      ])
      .then(() => {
        console.log("All textures loaded or attempted");
        resolve();
      })
      .catch(error => {
        console.error("Error in texture loading:", error);
        resolve(); // Continue even if there's an error
      });
    });
  }

  addHelpers() {
    // Create a group for helpers
    this.helpersGroup = new THREE.Group();
    this.scene.add(this.helpersGroup);
    
    // Add axes helper
    const axesHelper = new THREE.AxesHelper(5);
    this.helpersGroup.add(axesHelper);
    
    // Add center sphere
    const centerGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const centerMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const centerSphere = new THREE.Mesh(centerGeometry, centerMaterial);
    this.helpersGroup.add(centerSphere);
    
    // Add grid helper
    const gridHelper = new THREE.GridHelper(10, 10, 0x888888, 0x444444);
    this.helpersGroup.add(gridHelper);
    
    // Add bounding box helper (will be updated when SVG is loaded)
    this.boxHelper = new THREE.Box3Helper(new THREE.Box3(), 0x00ffff);
    this.helpersGroup.add(this.boxHelper);
    
    // Update helper visibility based on config
    this.updateHelperVisibility();
  }
  
  updateHelperVisibility() {
    if (this.helpersGroup) {
      this.helpersGroup.visible = this.config.showHelpers;
    }
  }

  updateBackgroundColor() {
    this.scene.background = new THREE.Color(this.config.background);
  }

  updateCameraPosition() {
    this.camera.position.z = this.config.zoom;
    this.camera.updateProjectionMatrix();
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  setupControls() {
    // Create control panel container
    const panel = document.createElement('div');
    panel.style.position = 'absolute';
    panel.style.top = '10px';
    panel.style.right = '10px';
    panel.style.backgroundColor = 'rgba(0,0,0,0.7)';
    panel.style.padding = '10px';
    panel.style.borderRadius = '5px';
    panel.style.color = 'white';
    panel.style.fontFamily = 'Arial, sans-serif';
    panel.style.maxWidth = '300px';
    panel.style.maxHeight = '80vh';
    panel.style.overflowY = 'auto';
    
    // Add title
    const title = document.createElement('h3');
    title.textContent = 'SVG to 3D Controls';
    title.style.marginTop = '0';
    panel.appendChild(title);

    // Size controls
    this.addControlGroup(panel, 'Size Settings', [
      { name: 'Scale', min: 1, max: 50, step: 0.5, value: this.config.size.scale, callback: (val) => {
        this.config.size.scale = Number(val);
        this.regenerateDebounced();
      }},
    ]);

    // Extrusion controls
    this.addControlGroup(panel, 'Extrusion Settings', [
      { name: 'Depth', min: 0.1, max: 100, step: 0.1, value: this.config.extrusion.depth, callback: (val) => {
        this.config.extrusion.depth = Number(val);
        this.regenerateDebounced();
      }},
    ]);

    // Bevel controls
    this.addControlGroup(panel, 'Bevel Settings', [
      { name: 'Thickness', min: 0, max: 10, step: 0.1, value: this.config.extrusion.bevelThickness, callback: (val) => {
        this.config.extrusion.bevelThickness = Number(val);
        this.regenerateDebounced();
      }},
      { name: 'Size', min: 0, max: 10, step: 0.1, value: this.config.extrusion.bevelSize, callback: (val) => {
        this.config.extrusion.bevelSize = Number(val);
        this.regenerateDebounced();
      }},
      { name: 'Segments', min: 1, max: 100, value: this.config.extrusion.bevelSegments, callback: (val) => {
        this.config.extrusion.bevelSegments = Number(val);
        this.regenerateDebounced();
      }},
      { 
        name: 'Enable Bevel', 
        type: 'checkbox', 
        checked: this.config.extrusion.bevelEnabled, 
        callback: (checked) => {
          this.config.extrusion.bevelEnabled = checked;
          this.regenerateDebounced();
        }
      }
    ]);

    // Rotation controls
    this.addControlGroup(panel, 'Animation', [
      { name: 'Rotation Speed', min: 0, max: 0.2, step: 0.001, value: this.config.rotation.speed, callback: (val) => {
        this.config.rotation.speed = Number(val);
      }},
      { 
        name: 'Enable Rotation', 
        type: 'checkbox', 
        checked: this.config.rotation.enabled, 
        callback: (checked) => {
          this.config.rotation.enabled = checked;
        }
      }
    ]);

    // Visual controls
    this.addControlGroup(panel, 'Visual Settings', [
      { 
        name: 'Background Color', 
        type: 'color', 
        value: this.config.background, 
        callback: (val) => {
          this.config.background = val;
          this.updateBackgroundColor();
        }
      },
      { 
        name: 'Zoom', 
        min: 5, 
        max: 200, 
        step: 1,
        value: this.config.zoom, 
        callback: (val) => {
          this.config.zoom = Number(val);
          this.updateCameraPosition();
        }
      },
      {
        name: 'Show Helpers',
        type: 'checkbox',
        checked: this.config.showHelpers,
        callback: (checked) => {
          this.config.showHelpers = checked;
          this.updateHelperVisibility();
        }
      },
      {
        name: 'Merge Meshes',
        type: 'checkbox',
        checked: this.config.mergeMeshes,
        callback: (checked) => {
          this.config.mergeMeshes = checked;
          this.regenerateDebounced();
        }
      }
    ]);

    // Material type selector
    this.addControlGroup(panel, 'Material Type', [
      {
        name: 'Material',
        type: 'select',
        options: [
          { value: 'matcap1', label: 'Matcap 1' },
          { value: 'matcap2', label: 'Matcap 2' },
          { value: 'matcap3', label: 'Matcap 3' },
          { value: 'matcap4', label: 'Matcap 4' },
          { value: 'matcap5', label: 'Matcap 5' },
          { value: 'matcap6', label: 'Matcap 6' },
          { value: 'matcap7', label: 'Matcap 7' },
          { value: 'matcap8', label: 'Matcap 8' },
          { value: 'matcap9', label: 'Matcap 9' },
          { value: 'matcap10', label: 'Matcap 10' },
          { value: 'standard', label: 'Standard' },
          { value: 'basic', label: 'Basic' }
        ],
        value: this.config.materialType,
        callback: (val) => {
          this.config.materialType = val;
          this.regenerateDebounced();
        }
      }
    ]);

    // Material Settings
    this.addControlGroup(panel, 'Material Settings', [
      { 
        name: 'Base Color', 
        type: 'color', 
        value: this.config.material.baseColor, 
        callback: (val) => {
          this.config.material.baseColor = val;
          this.regenerateDebounced();
        }
      },
      {
        name: 'Blend Mode',
        type: 'select',
        options: [
          { value: 'normal', label: 'Normal' },
          { value: 'additive', label: 'Additive (Screen)' },
          { value: 'multiply', label: 'Multiply' }
        ],
        value: this.config.material.blendMode,
        callback: (val) => {
          this.config.material.blendMode = val;
          this.regenerateDebounced();
        }
      },
      {
        name: 'Opacity',
        min: 0,
        max: 1,
        step: 0.05,
        value: this.config.material.opacity,
        callback: (val) => {
          this.config.material.opacity = Number(val);
          this.regenerateDebounced();
        }
      },
      {
        name: 'Emissive Intensity',
        min: 0,
        max: 2,
        step: 0.1,
        value: this.config.material.emissiveIntensity,
        callback: (val) => {
          this.config.material.emissiveIntensity = Number(val);
          this.regenerateDebounced();
        }
      },
      {
        name: 'Wireframe',
        type: 'checkbox',
        checked: this.config.material.wireframe,
        callback: (checked) => {
          this.config.material.wireframe = checked;
          this.regenerateDebounced();
        }
      }
    ]);

    // Video export controls
    this.addControlGroup(panel, 'Video Export', [
      {
        name: 'Format',
        type: 'select',
        options: [
          { value: 'webm', label: 'WebM (Best Quality)' },
          { value: 'gif', label: 'GIF (Smaller Size)' }
        ],
        value: this.config.video.format,
        callback: (val) => {
          this.config.video.format = val;
        }
      },
      {
        name: 'Aspect Ratio',
        type: 'select',
        options: [
          { value: '16:9', label: '16:9 Landscape (1920×1080)' },
          { value: '9:16', label: '9:16 Portrait (1080×1920)' },
          { value: '1:1', label: '1:1 Square (1080×1080)' },
          { value: '4:3', label: '4:3 Classic (1440×1080)' }
        ],
        value: this.config.video.aspectRatio,
        callback: (val) => {
          this.config.video.aspectRatio = val;
          this.updateVideoResolution();
        }
      },
      {
        name: 'FPS',
        min: 24,
        max: 60,
        step: 1,
        value: this.config.video.fps,
        callback: (val) => {
          this.config.video.fps = Number(val);
        }
      },
      {
        name: 'Rotations',
        min: 1,
        max: 4,
        step: 1,
        value: 1,
        callback: (val) => {
          const rotations = Number(val);
          this.config.video.rotations = rotations;
        }
      }
    ]);

    // Add download video button
    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download Video';
    downloadButton.style.marginTop = '10px';
    downloadButton.style.padding = '10px';
    downloadButton.style.width = '100%';
    downloadButton.style.backgroundColor = '#4CAF50';
    downloadButton.style.color = 'white';
    downloadButton.style.border = 'none';
    downloadButton.style.borderRadius = '4px';
    downloadButton.style.cursor = 'pointer';
    downloadButton.style.fontSize = '14px';
    downloadButton.style.fontWeight = 'bold';
    
    downloadButton.addEventListener('click', () => {
      if (!this.isRecording) {
        // Disable the button and show progress
        downloadButton.disabled = true;
        downloadButton.style.backgroundColor = '#cccccc';
        downloadButton.textContent = 'Preparing Video...';
        
        // Start recording process
        this.startRecording();
        
        // Update button state during recording
        const updateProgress = () => {
          if (this.isRecording) {
            const progress = Math.round((this.recordingFrames / (this.config.video.fps * this.config.video.duration)) * 100);
            downloadButton.textContent = `Recording: ${progress}%`;
            requestAnimationFrame(updateProgress);
          } else {
            downloadButton.disabled = false;
            downloadButton.style.backgroundColor = '#4CAF50';
            downloadButton.textContent = 'Download Video';
          }
        };
        updateProgress();
      }
    });
    
    panel.appendChild(downloadButton);

    // File input for SVG upload
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
          const blob = new Blob([svgData], {type: 'image/svg+xml'});
          const url = URL.createObjectURL(blob);
          this.loadSVG(url);
        };
        reader.readAsText(file);
      }
    });
    
    fileGroup.appendChild(fileInput);
    panel.appendChild(fileGroup);

    // Add reset button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset to Default SVG';
    resetButton.style.marginTop = '15px';
    resetButton.style.padding = '5px 10px';
    resetButton.style.width = '100%';
    resetButton.addEventListener('click', () => {
      this.loadSVG('./logo.svg');
    });
    panel.appendChild(resetButton);

    // Add export button
    const exportButton = document.createElement('button');
    exportButton.textContent = 'Export as GLTF';
    exportButton.style.marginTop = '10px';
    exportButton.style.padding = '5px 10px';
    exportButton.style.width = '100%';
    exportButton.addEventListener('click', () => {
      this.exportToGLTF();
    });
    panel.appendChild(exportButton);

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
        controlRow.appendChild(input);
      } else if (control.type === 'color') {
        input = document.createElement('input');
        input.type = 'color';
        input.value = control.value;
        input.addEventListener('input', () => control.callback(input.value));
        controlRow.appendChild(input);
      } else if (control.type === 'select') {
        input = document.createElement('select');
        input.style.flexGrow = '1';
        
        control.options.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option.value;
          optionElement.textContent = option.label;
          input.appendChild(optionElement);
        });
        
        input.value = control.value;
        input.addEventListener('change', () => control.callback(input.value));
        controlRow.appendChild(input);
      } else {
        // Default to range input
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
        valueDisplay.style.minWidth = '40px';
        valueDisplay.style.textAlign = 'right';
        
        input.addEventListener('input', () => {
          const val = input.value;
          valueDisplay.textContent = val;
          control.callback(val);
        });
        
        controlRow.appendChild(input);
        controlRow.appendChild(valueDisplay);
      }
      
      group.appendChild(controlRow);
    });
    
    panel.appendChild(group);
  }

  loadSVG(url) {
    // Clear previous content
    this.clearSVGGroup();
    
    this.statusElement.textContent = 'Loading SVG...';
    
    const loader = new SVGLoader();
    
    loader.load(
      url,
      (data) => this.processSVG(data),
      (xhr) => {
        this.statusElement.textContent = `Loading: ${Math.round(xhr.loaded / xhr.total * 100)}%`;
      },
      (error) => {
        console.error('Error loading SVG:', error);
        this.statusElement.textContent = `Error loading SVG: ${error.message}`;
      }
    );
  }

  clearSVGGroup() {
    this.disposeObject(this.svgGroup);
    
    // Reset the group
    this.svgGroup.position.set(0, 0, 0);
    this.svgGroup.rotation.set(0, 0, 0);
    this.svgGroup.scale.set(1, 1, 1);
  }
  
  disposeObject(obj) {
    while(obj.children.length > 0) {
      const child = obj.children[0];
      this.disposeObject(child);
      obj.remove(child);
    }
    
    if (obj.geometry) obj.geometry.dispose();
    
    if (obj.material) {
      if (Array.isArray(obj.material)) {
        obj.material.forEach(material => this.disposeMaterial(material));
      } else {
        this.disposeMaterial(obj.material);
      }
    }
  }
  
  disposeMaterial(material) {
    // Dispose textures
    for (const key in material) {
      const value = material[key];
      if (value && typeof value === 'object' && 'isTexture' in value) {
        value.dispose();
      }
    }
    material.dispose();
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
    
    // Store the SVG data for later regeneration
    this.svgData = data;
    
    // Generate 3D from the SVG
    this.generate3D();
  }

  createMaterial() {
    const matcapNumberMatch = this.config.materialType.match(/^matcap(\d+)$/);
    if (matcapNumberMatch) {
      const matcapNum = parseInt(matcapNumberMatch[1]);
      if (matcapNum >= 1 && matcapNum <= 10) {
        const texture = this[`matcapTexture${matcapNum}`];
        if (!texture) {
          console.warn(`Matcap texture ${matcapNum} not loaded, falling back to basic`);
          return new THREE.MeshBasicMaterial({ color: 0x3366cc, side: THREE.DoubleSide });
        }

        // Create an array of materials
        return [
          // Base color material
          new THREE.MeshBasicMaterial({
            color: new THREE.Color(this.config.material.baseColor),
            side: THREE.DoubleSide,
            wireframe: this.config.material.wireframe
          }),
          // Matcap material with configurable blending
          new THREE.MeshMatcapMaterial({
            matcap: texture,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: this.config.material.opacity,
            blending: this.getBlendMode(),
            wireframe: this.config.material.wireframe
          })
        ];
      }
    }
  
    switch (this.config.materialType) {
      case 'standard':
        return new THREE.MeshStandardMaterial({
          color: 0x3366cc,
          metalness: 0.5,
          roughness: 0.5,
          side: THREE.DoubleSide
        });
      case 'basic':
      default:
        return new THREE.MeshBasicMaterial({
          color: 0x3366cc,
          side: THREE.DoubleSide
        });
    }
  }

  generate3D() {
    if (!this.svgData) return;
    
    this.clearSVGGroup();
    
    const paths = this.svgData.paths;
    const material = this.createMaterial();
    const geometries = [];
    
    // Collect all geometries without centering them individually
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      
      try {
        const shapes = path.toShapes(true);
        
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
          geometries.push(geometry);
        }
      } catch (error) {
        console.error(`Error processing path ${i}:`, error);
      }
    }
    
    if (geometries.length > 0) {
      let finalGeometry;
      
      if (this.config.mergeMeshes) {
        // Merge all geometries into one
        try {
          finalGeometry = BufferGeometryUtils.mergeGeometries(geometries);
        } catch (error) {
          console.error('Error merging geometries:', error);
          finalGeometry = geometries[0]; // Fallback to first geometry
        }
      } else {
        // Create a single geometry by combining without merging
        finalGeometry = new THREE.BufferGeometry();
        const mergedGeometries = BufferGeometryUtils.mergeGeometries(geometries);
        finalGeometry.copy(mergedGeometries);
      }
      
      // Center the combined geometry
      finalGeometry.center();
      
      // Create meshes from the centered geometry
      if (Array.isArray(material)) {
        material.forEach((mat) => {
          const mesh = new THREE.Mesh(finalGeometry.clone(), mat);
          this.svgGroup.add(mesh);
        });
      } else {
        const mesh = new THREE.Mesh(finalGeometry, material);
        this.svgGroup.add(mesh);
      }
      
      // Dispose individual geometries
      geometries.forEach(geometry => geometry.dispose());
    }
    
    if (this.config.materialType === 'standard') {
      this.addLighting();
    }
    
    this.centerSVG();
    
    this.statusElement.textContent = `SVG converted to 3D: ${paths.length} paths, ${this.svgGroup.children.length} meshes`;
  }
  
  addLighting() {
    // Remove any existing lights
    this.scene.children.forEach(child => {
      if (child.isLight) this.scene.remove(child);
    });
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    this.scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);
  }

  regenerate3D() {
    // Store the current rotation
    const currentRotation = new THREE.Euler().copy(this.svgGroup.rotation);
    
    // Reset rotation before regenerating
    this.svgGroup.rotation.set(0, 0, 0);
    
    // Regenerate the 3D model with updated settings
    this.generate3D();
    
    // Restore rotation after centering is complete
    this.svgGroup.rotation.copy(currentRotation);
  }

  centerSVG() {
    // Reset scale before measuring
    this.svgGroup.scale.set(1, 1, 1);
    this.svgGroup.updateMatrixWorld(true);
    
    // Get the bounding box of the object
    const box = new THREE.Box3().setFromObject(this.svgGroup);
    
    if (box.isEmpty()) {
      console.warn("Empty bounding box detected");
      return;
    }
    
    const size = box.getSize(new THREE.Vector3());
    
    // Apply scale based on the configured size
    const maxDim = Math.max(size.x, size.y);
    const scale = this.config.size.scale / maxDim;
    this.svgGroup.scale.set(scale, scale, scale);
    
    // Update the world matrix
    this.svgGroup.updateMatrixWorld(true);
    
    // Update the box helper
    if (this.boxHelper) {
      const centeredBox = new THREE.Box3().setFromObject(this.svgGroup);
      this.boxHelper.box.copy(centeredBox);
    }
  }

  exportToGLTF() {
    // Create a clone of the SVG group to export
    const exportGroup = this.svgGroup.clone();
    
    // Create a new scene with just the SVG
    const exportScene = new THREE.Scene();
    exportScene.add(exportGroup);
    
    // Add lighting if using standard material
    if (this.config.materialType === 'standard') {
      const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
      exportScene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1);
      exportScene.add(directionalLight);
    }
    
    // Create exporter
    const exporter = new GLTFExporter();
    
    // Export the scene
    exporter.parse(
      exportScene,
      (gltf) => {
        // Create download link
        const blob = new Blob([gltf], { type: 'application/octet-stream' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'svg-3d-model.glb';
        link.click();
        
        // Clean up
        URL.revokeObjectURL(link.href);
      },
      (error) => {
        console.error('Error exporting GLTF:', error);
        this.statusElement.textContent = `Error exporting: ${error.message}`;
      },
      { binary: true } // Export as GLB (binary GLTF)
    );
    
    this.statusElement.textContent = 'Exporting model...';
  }

  updateVideoResolution() {
    switch (this.config.video.aspectRatio) {
      case '16:9':
        this.config.video.width = 1920;
        this.config.video.height = 1080;
        break;
      case '9:16':
        this.config.video.width = 1080;
        this.config.video.height = 1920;
        break;
      case '1:1':
        this.config.video.width = 1080;
        this.config.video.height = 1080;
        break;
      case '4:3':
        this.config.video.width = 1440;
        this.config.video.height = 1080;
        break;
    }
  }

  createRecordingOverlay() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '1000';

    const content = document.createElement('div');
    content.style.backgroundColor = '#222';
    content.style.padding = '20px';
    content.style.borderRadius = '10px';
    content.style.textAlign = 'center';
    content.style.color = 'white';
    content.style.maxWidth = '80%';

    const title = document.createElement('h2');
    title.style.margin = '0 0 20px 0';
    title.textContent = 'Recording Video';
    content.appendChild(title);

    const progress = document.createElement('div');
    progress.style.marginBottom = '20px';
    progress.textContent = 'Preparing...';
    content.appendChild(progress);

    const preview = document.createElement('div');
    preview.style.display = 'none';
    preview.style.marginTop = '20px';
    content.appendChild(preview);

    const buttonContainer = document.createElement('div');
    buttonContainer.style.marginTop = '20px';
    buttonContainer.style.display = 'none';

    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download';
    downloadButton.style.marginRight = '10px';
    downloadButton.style.padding = '10px 20px';
    buttonContainer.appendChild(downloadButton);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.padding = '10px 20px';
    closeButton.addEventListener('click', () => {
      document.body.removeChild(overlay);
      this.onRecordingComplete();
    });
    buttonContainer.appendChild(closeButton);

    content.appendChild(buttonContainer);
    overlay.appendChild(content);

    return {
      overlay,
      progress,
      preview,
      buttonContainer,
      downloadButton
    };
  }

  startRecording() {
    // Create and add overlay
    const ui = this.createRecordingOverlay();
    document.body.appendChild(ui.overlay);

    // Create recording camera
    const recordingCamera = new THREE.PerspectiveCamera(
      75,
      this.config.video.width / this.config.video.height,
      0.1,
      1000
    );
    
    // Calculate camera position to fit object with padding
    const box = new THREE.Box3().setFromObject(this.svgGroup);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y);
    const fov = recordingCamera.fov * (Math.PI / 180);
    const cameraZ = (maxDim / 2) / Math.tan(fov / 2) * (1 + this.config.video.padding * 2);
    recordingCamera.position.z = cameraZ;
    recordingCamera.updateProjectionMatrix();

    // Create offscreen renderer
    const recordingRenderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    recordingRenderer.setSize(this.config.video.width, this.config.video.height);
    recordingRenderer.setPixelRatio(1);

    // Calculate frames needed for complete rotation(s)
    const framesPerRotation = Math.ceil((2 * Math.PI) / this.config.rotation.speed);
    const totalFrames = framesPerRotation * this.config.video.rotations;
    
    // Store original rotation speed
    this.originalRotationSpeed = this.config.rotation.speed;
    
    // Reset rotation to start position
    this.svgGroup.rotation.y = 0;

    // Initialize CCapture
    this.capturer = new CCapture({
      format: this.config.video.format,
      workersPath: './',
      framerate: this.config.video.fps,
      verbose: false,
      display: false,
      quality: this.config.video.format === 'gif' ? 5 : 0.92,
      width: this.config.video.width,
      height: this.config.video.height,
      ...(this.config.video.format === 'gif' ? {
        repeat: 0,
        workers: navigator.hardwareConcurrency || 4,
        workerPath: './gif.worker.js'
      } : {
        name: 'looping-animation'
      })
    });

    // Start recording
    this.isRecording = true;
    this.recordingFrames = 0;
    this.totalFrames = totalFrames;
    this.recordingRenderer = recordingRenderer;
    this.recordingCamera = recordingCamera;
    this.recordingUI = ui;
    this.capturer.start();

    // Start background recording loop
    this.recordFrame();
  }

  recordFrame() {
    if (!this.isRecording) return;

    // Rotate the object
    this.svgGroup.rotation.y += this.config.rotation.speed;

    // Render frame
    this.recordingRenderer.render(this.scene, this.recordingCamera);
    this.capturer.capture(this.recordingRenderer.domElement);

    // Update progress
    const progress = Math.round((this.recordingFrames / this.totalFrames) * 100);
    this.recordingUI.progress.textContent = `Recording: ${progress}%`;

    this.recordingFrames++;
    
    if (this.recordingFrames >= this.totalFrames) {
      this.stopRecording();
    } else {
      // Schedule next frame using setTimeout instead of requestAnimationFrame
      setTimeout(() => this.recordFrame(), 1000 / this.config.video.fps);
    }
  }

  stopRecording() {
    if (!this.isRecording) return;
    this.isRecording = false;

    // Restore original rotation speed
    this.config.rotation.speed = this.originalRotationSpeed;

    // Update progress
    this.recordingUI.progress.textContent = 'Processing video...';

    this.capturer.stop();
    this.capturer.save((blob) => {
      const url = URL.createObjectURL(blob);
      
      // Show preview
      this.recordingUI.preview.style.display = 'block';
      if (this.config.video.format === 'webm') {
        const video = document.createElement('video');
        video.src = url;
        video.controls = true;
        video.loop = true;
        video.style.maxWidth = '100%';
        video.style.maxHeight = '60vh';
        this.recordingUI.preview.appendChild(video);
      } else {
        const img = document.createElement('img');
        img.src = url;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '60vh';
        this.recordingUI.preview.appendChild(img);
      }

      // Setup download button
      this.recordingUI.buttonContainer.style.display = 'block';
      this.recordingUI.downloadButton.addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = url;
        a.download = `looping-animation.${this.config.video.format}`;
        a.click();
      });

      this.recordingUI.progress.textContent = 'Video ready!';
    });

    // Cleanup
    if (this.recordingRenderer) {
      this.recordingRenderer.dispose();
      this.recordingRenderer = null;
    }
  }

  animate(timestamp) {
    requestAnimationFrame((t) => this.animate(t));
    
    // Rotate the SVG if enabled
    if (this.config.rotation.enabled && this.svgGroup.children.length > 0) {
      this.svgGroup.rotation.y += this.config.rotation.speed;
    }
    
    this.controls.update();

    // Regular rendering
    if (!this.isRecording) {
      this.renderer.render(this.scene, this.camera);
    }
    // Recording rendering
    else {
      // Render at recording resolution
      this.recordingRenderer.render(this.scene, this.camera);
      this.capturer.capture(this.recordingRenderer.domElement);

      // Update progress
      const progress = Math.round((this.recordingFrames / this.totalFrames) * 100);
      this.recordingUI.progress.textContent = `Recording: ${progress}%`;
      
      this.recordingFrames++;
      if (this.recordingFrames >= this.totalFrames) {
        this.stopRecording();
      }

      // Still render preview at window resolution
      this.renderer.render(this.scene, this.camera);
    }
  }

  onRecordingComplete() {
    // Re-enable controls if needed
    this.controls.enabled = true;
  }

  // Utility function for debouncing
  debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Add this helper method to handle blend modes
  getBlendMode() {
    switch (this.config.material.blendMode) {
      case 'additive':
        return THREE.AdditiveBlending;
      case 'multiply':
        return THREE.MultiplyBlending;
      case 'normal':
      default:
        return THREE.NormalBlending;
    }
  }
}

// Initialize the application
const app = new SVGTo3D();