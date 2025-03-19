import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222);

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 20;

// Create renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Add controls for better inspection
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Load matcap texture
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load('./matcap.jpg');

// Create a group to hold the 3D SVG
const svgGroup = new THREE.Group();
scene.add(svgGroup);

// Status display
const statusElement = document.createElement('div');
statusElement.style.position = 'absolute';
statusElement.style.bottom = '10px';
statusElement.style.left = '10px';
statusElement.style.color = 'white';
statusElement.style.fontFamily = 'monospace';
statusElement.style.padding = '10px';
statusElement.style.backgroundColor = 'rgba(0,0,0,0.5)';
document.body.appendChild(statusElement);

// Load and process SVG
function loadSVG(url) {
  // Clear previous content
  while(svgGroup.children.length > 0) {
    const mesh = svgGroup.children[0];
    mesh.geometry.dispose();
    mesh.material.dispose();
    svgGroup.remove(mesh);
  }
  
  statusElement.textContent = 'Loading SVG...';
  
  const loader = new SVGLoader();
  
  loader.load(
    url,
    function(data) {
      statusElement.textContent = 'Processing SVG...';
      console.log('SVG loaded successfully');
      
      const paths = data.paths;
      console.log(`Found ${paths.length} paths in SVG`);
      
      if (paths.length === 0) {
        statusElement.textContent = 'Error: No paths found in SVG';
        return;
      }
      
      // Process each path
      for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const shapes = path.toShapes(true);
        
        console.log(`Path ${i} has ${shapes.length} shapes`);
        
        if (shapes.length === 0) {
          console.warn(`Path ${i} has no shapes`);
          continue;
        }
        
        // Process each shape
        for (let j = 0; j < shapes.length; j++) {
          const shape = shapes[j];
          
          // Create extrusion settings
          const extrudeSettings = {
            depth: 2,
            bevelEnabled: true,
            bevelThickness: 0.2,
            bevelSize: 0.2,
            bevelSegments: 5
          };
          
          // Create geometry
          const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
          
          // Create material
          const material = new THREE.MeshMatcapMaterial({
            matcap: matcapTexture,
            side: THREE.DoubleSide
          });
          
          // Create mesh
          const mesh = new THREE.Mesh(geometry, material);
          svgGroup.add(mesh);
          
          console.log(`Added 3D shape for path ${i}, shape ${j}`);
        }
      }
      
      // Center and scale
      const box = new THREE.Box3().setFromObject(svgGroup);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      // Center the group
      svgGroup.position.x = -center.x;
      svgGroup.position.y = -center.y;
      svgGroup.position.z = -center.z;
      
      // Scale to reasonable size
      const maxDim = Math.max(size.x, size.y, size.z);
      const targetSize = 10;
      const scale = targetSize / maxDim;
      svgGroup.scale.set(scale, scale, scale);
      
      statusElement.textContent = `SVG converted to 3D: ${paths.length} paths, ${svgGroup.children.length} meshes`;
    },
    function(xhr) {
      statusElement.textContent = `Loading: ${Math.round(xhr.loaded / xhr.total * 100)}%`;
    },
    function(error) {
      console.error('Error loading SVG:', error);
      statusElement.textContent = `Error loading SVG: ${error.message}`;
    }
  );
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  // Rotate the SVG
  if (svgGroup.children.length > 0) {
    svgGroup.rotation.y += 0.01;
  }
  
  controls.update();
  renderer.render(scene, camera);
}

animate();

// Load the SVG
loadSVG('./logo.svg');

// Add file input for user to load their own SVG
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = '.svg';
fileInput.style.position = 'absolute';
fileInput.style.top = '10px';
fileInput.style.left = '10px';

fileInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const svgData = e.target.result;
      const blob = new Blob([svgData], {type: 'image/svg+xml'});
      const url = URL.createObjectURL(blob);
      loadSVG(url);
    };
    reader.readAsText(file);
  }
});

document.body.appendChild(fileInput);