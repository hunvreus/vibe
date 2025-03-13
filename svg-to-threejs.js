import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222);

// Camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 20;

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// SVG group
const svgGroup = new THREE.Group();
scene.add(svgGroup);

// Reference cube
const cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
scene.add(new THREE.Mesh(cubeGeometry, cubeMaterial));

// Axes helper
scene.add(new THREE.AxesHelper(10));

// Status display
const statusElement = document.createElement('div');
Object.assign(statusElement.style, {
  position: 'absolute', bottom: '10px', left: '10px', color: 'white',
  fontFamily: 'monospace', padding: '10px', backgroundColor: 'rgba(0,0,0,0.5)'
});
document.body.appendChild(statusElement);

// Load SVG from URL
const svgUrl = './public/logo.svg';
statusElement.textContent = 'Loading SVG...';

// Simple SVG loading
fetch(svgUrl)
  .then(response => response.text())
  .then(svgText => {
    const loader = new SVGLoader();
    const svgData = loader.parse(svgText);
    
    // Create material
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    
    // Add all paths to the group
    svgData.paths.forEach(path => {
      path.subPaths.forEach(subPath => {
        const geometry = new THREE.BufferGeometry().setFromPoints(subPath.getPoints());
        svgGroup.add(new THREE.Line(geometry, material));
      });
    });
    
    // Center and scale
    const box = new THREE.Box3().setFromObject(svgGroup);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    
    const scale = 10 / Math.max(size.x, size.y);
    svgGroup.scale.set(scale, -scale, scale); // Flip Y
    svgGroup.position.set(-center.x * scale, center.y * scale, 0);
    
    statusElement.textContent = `Loaded SVG with ${svgData.paths.length} paths`;
  })
  .catch(error => {
    console.error("Error loading SVG:", error);
    statusElement.textContent = `Error: ${error.message}`;
  });

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();