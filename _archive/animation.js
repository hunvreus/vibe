import * as THREE from 'three';

// Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // Black background

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

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

// Create materials with matcap
const createMatcapMaterial = () => {
  return new THREE.MeshMatcapMaterial({
    matcap: matcapTexture,
    side: THREE.DoubleSide
  });
};

// Create the left part of the logo (vertical bar)
const leftBarGeometry = new THREE.BoxGeometry(1, 4, 0.5);
const leftBarMaterial = createMatcapMaterial();
const leftBar = new THREE.Mesh(leftBarGeometry, leftBarMaterial);
leftBar.position.set(-2, 0, 0);
logoGroup.add(leftBar);

// Create the right part of the logo (arrow)
// Arrow head
const arrowHeadGeometry = new THREE.ConeGeometry(1, 2, 4);
const arrowHeadMaterial = createMatcapMaterial();
const arrowHead = new THREE.Mesh(arrowHeadGeometry, arrowHeadMaterial);
arrowHead.rotation.z = -Math.PI / 2; // Rotate to point right
arrowHead.position.set(2, 0, 0);
logoGroup.add(arrowHead);

// Arrow body
const arrowBodyGeometry = new THREE.BoxGeometry(3, 0.5, 0.5);
const arrowBodyMaterial = createMatcapMaterial();
const arrowBody = new THREE.Mesh(arrowBodyGeometry, arrowBodyMaterial);
arrowBody.position.set(0, 0, 0);
logoGroup.add(arrowBody);

// Add logo to scene
scene.add(logoGroup);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  // Rotate logo around Y axis only
  logoGroup.rotation.y += 0.01;
  
  renderer.render(scene, camera);
}

animate();

console.log("Animation started with matcap material");

