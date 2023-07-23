import { useEffect } from "react";
import "./App.css";
import * as THREE from "three";
console.log(THREE);

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const sizes = {
      width: 800,
      height: 600,
    };
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 3;
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("canvas"),
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);
  }, []);
  return (
    <>
      <canvas />
    </>
  );
}

export default App;
