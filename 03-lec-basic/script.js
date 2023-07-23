const scene = new THREE.Scene();

// objects - can be primitive geometry, imported models, particles, lights, etc.
// object have geometry/shapes and materials...
const geometry = new THREE.BoxGeometry(1, 1, 1);
// BoxGeometry is a class that creates a cube
// it accepts 3 parameters: width, height, depth respectively

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
// anything which has to be shown on the canva has to be added in scene.

// now we have to specify how to look at the created scene, with the help of camera.
const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// perspective camera is just like eyes, far objects are small and near objects are big
// PerspectiveCamera is a class that creates a camera
// it accepts 2 parameters: field of view, aspect ratio respectively
// field of view is like small hole, when it is small, it is like zoomed in, and when it is big, it is like zoomed out
// and feels like fish eye lens.
// and then add the created camera on the scene.
scene.add(camera);

// now that scene have object and camera, we need to render it on the screen with the help of renderer.
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
// we also need to specify the size of the renderer
renderer.setSize(sizes.width, sizes.height);
// and finally render the scene with the help of renderer and camera.
renderer.render(scene, camera);

// but as everything in the scene is positioned in the center by default, camera is curretnly inside the 3d object. which is not good.
// so we need to move the camera a little bit back.
