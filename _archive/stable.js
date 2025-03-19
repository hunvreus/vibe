import * as THREE from 'three';

// Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // Black background

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 15;

// Create renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Load matcap texture
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load('./matcap.jpg', () => {
  console.log('Matcap texture loaded successfully');
});

// Create a group to hold the logo
const logoGroup = new THREE.Group();

// Create material with matcap
const createMatcapMaterial = () => {
  return new THREE.MeshMatcapMaterial({
    matcap: matcapTexture,
    side: THREE.DoubleSide
  });
};

// Create the left part of the logo (the "L" shape)
function createLeftPart() {
  // Create a custom shape for the "L"
  const shape = new THREE.Shape();
  
  // Starting point
  shape.moveTo(0, 0);
  
  // Draw the L shape (scaled to match original SVG proportions)
  shape.lineTo(4, 0);      // Top horizontal line
  shape.lineTo(4, 20);     // Vertical line
  shape.lineTo(0, 20);     // Bottom horizontal line
  shape.lineTo(0, 0);      // Close the shape
  
  // Create extrusion settings
  const extrudeSettings = {
    steps: 2,
    depth: 2,
    bevelEnabled: true,
    bevelThickness: 0.5,
    bevelSize: 0.5,
    bevelOffset: 0,
    bevelSegments: 5
  };
  
  // Create geometry
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  
  // Create mesh
  const material = createMatcapMaterial();
  const mesh = new THREE.Mesh(geometry, material);
  
  return mesh;
}

// Create the right part of the logo (the arrow shape)
function createRightPart() {
  // Create a custom shape for the arrow
  const shape = new THREE.Shape();
  
  // Starting point (top left of arrow)
  shape.moveTo(0, 0);
  
  // Draw the arrow shape
  shape.lineTo(10, 10);    // Diagonal line to middle right
  shape.lineTo(0, 20);     // Diagonal line to bottom left
  shape.lineTo(5, 20);     // Bottom horizontal line
  shape.lineTo(15, 10);    // Diagonal line to middle right
  shape.lineTo(5, 0);      // Diagonal line to top
  shape.lineTo(0, 0);      // Close the shape
  
  // Create extrusion settings
  const extrudeSettings = {
    steps: 2,
    depth: 2,
    bevelEnabled: true,
    bevelThickness: 0.5,
    bevelSize: 0.5,
    bevelOffset: 0,
    bevelSegments: 5
  };
  
  // Create geometry
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  
  // Create mesh
  const material = createMatcapMaterial();
  const mesh = new THREE.Mesh(geometry, material);
  
  return mesh;
}

// Create logo parts
const leftPart = createLeftPart();
const rightPart = createRightPart();

// Position the parts
leftPart.position.set(-10, -10, 0);
rightPart.position.set(0, -10, 0);

// Add parts to logo group
logoGroup.add(leftPart);
logoGroup.add(rightPart);

// Center the logo
const box = new THREE.Box3().setFromObject(logoGroup);
const center = box.getCenter(new THREE.Vector3());
const size = box.getSize(new THREE.Vector3());

// Move the group so its center is at the origin
logoGroup.position.x = -center.x;
logoGroup.position.y = -center.y;
logoGroup.position.z = -center.z;

// Scale the logo
const maxDim = Math.max(size.x, size.y, size.z);
const targetSize = 10;
const scale = targetSize / maxDim;
logoGroup.scale.set(scale, scale, scale);

// Add logo to scene
scene.add(logoGroup);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  logoGroup.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();