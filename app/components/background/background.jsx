"use client";

import { useEffect } from 'react';
import * as THREE from 'three';

import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';

export default function Background({parentID, onLoad}){

    //Map function
    let map = (x, in_min, in_max, out_min, out_max) => {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    useEffect(()=>{
        if(typeof window === "undefined") return;

        //Parent  
        const parent = document.getElementById(parentID);

        //Renderer
        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(1.5);
        renderer.autoClear = true;
        renderer.domElement.style.position = "absolute";
        renderer.domElement.style.top = "0";
        renderer.domElement.style.left = "0";
        renderer.domElement.style.zIndex = "-1";
        parent.appendChild(renderer.domElement);

        //Camera
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.set(50, 200, 0);
        camera.lookAt(new THREE.Vector3(50, 0, 0));
        camera.rotateZ(-90 * Math.PI / 180);
        camera.updateProjectionMatrix();

        //Scene
        const scene = new THREE.Scene();

        //Clock
        const clock = new THREE.Clock();

        //Shader uniforms
        let shaderUniforms = {
            u_time: {value: 0.0},
            u_mouse_position: {value: new THREE.Vector3(0, 0, 0)}
        }

        //Object assembly
        const groundGeometry = new THREE.BoxGeometry(500, 0, 500, 1000, 1, 1000);
        const groundMaterial = new THREE.ShaderMaterial({ fragmentShader: fragmentShader, vertexShader: vertexShader, uniforms: shaderUniforms});
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        scene.add(ground)

        //Renderer loop | Updating uniforms
        function update () {
            shaderUniforms.u_time.value = clock.getElapsedTime() * 7; 
            requestAnimationFrame(update); 
            renderer.render(scene, camera);
        }update();

        //Updating uniforms
        window.addEventListener("mousemove", (e)=>{
            shaderUniforms.u_mouse_position.value = new THREE.Vector3(
                map(e.x, 0, window.innerWidth, 0, 10),
                map(e.y, 0, window.innerHeight, 0, 10),
                0
            );
        });

        window.addEventListener("resize", ()=>{
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        });

        onLoad();

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate();

        
    }, []);

    return (<></>);
}











// "use client";

// import { useEffect } from 'react';
// import * as THREE from 'three';

// export default function Background({ parentID, onLoad }) {

//     // Map function
//     let map = (x, in_min, in_max, out_min, out_max) => {
//         return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
//     };

//     // Load shaders as a promise
//     const loadShader = (url) => {
//         return fetch(url).then((res) => res.text());
//     };

//     useEffect(() => {
//         if (typeof window === "undefined") return;

//         // Load shaders
//         Promise.all([
//             loadShader('./shaders/fragment.glsl'),
//             loadShader('./shaders/vertex.glsl')
//         ]).then(([fragmentShader, vertexShader]) => {
//             // Parent
//             const parent = document.getElementById(parentID);

//             // Renderer
//             const renderer = new THREE.WebGLRenderer({ antialias: true });
//             renderer.setSize(window.innerWidth, window.innerHeight);
//             renderer.setPixelRatio(1);
//             renderer.autoClear = true;
//             renderer.domElement.style.position = "absolute";
//             renderer.domElement.style.top = "0";
//             renderer.domElement.style.left = "0";
//             renderer.domElement.style.zIndex = "-1";
//             parent.appendChild(renderer.domElement);

//             // Camera
//             const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
//             camera.position.set(50, 200, 0);
//             camera.lookAt(new THREE.Vector3(50, 0, 0));
//             camera.rotateZ(-90 * Math.PI / 180);
//             camera.updateProjectionMatrix();

//             // Scene
//             const scene = new THREE.Scene();

//             // Clock
//             const clock = new THREE.Clock();

//             // Shader uniforms
//             let shaderUniforms = {
//                 u_time: { value: 0.0 },
//                 u_mouse_position: { value: new THREE.Vector3(0, 0, 0) }
//             };

//             // Object assembly
//             const groundGeometry = new THREE.BoxGeometry(500, 0, 500, 1000, 1, 1000);
//             const groundMaterial = new THREE.ShaderMaterial({
//                 fragmentShader,
//                 vertexShader,
//                 uniforms: shaderUniforms
//             });
//             const ground = new THREE.Mesh(groundGeometry, groundMaterial);
//             scene.add(ground);

//             // Renderer loop | Updating uniforms
//             function update() {
//                 shaderUniforms.u_time.value = clock.getElapsedTime() * 7;
//                 requestAnimationFrame(update);
//                 renderer.render(scene, camera);
//             }
//             update();

//             // Updating uniforms
//             window.addEventListener("mousemove", (e) => {
//                 shaderUniforms.u_mouse_position.value = new THREE.Vector3(
//                     map(e.x, 0, window.innerWidth, 0, 10),
//                     map(e.y, 0, window.innerHeight, 0, 10),
//                     0
//                 );
//             });

//             window.addEventListener("resize", () => {
//                 renderer.setSize(window.innerWidth, window.innerHeight);
//                 camera.aspect = window.innerWidth / window.innerHeight;
//                 camera.updateProjectionMatrix();
//             });

//             onLoad();

//             function animate() {
//                 requestAnimationFrame(animate);
//                 renderer.render(scene, camera);
//             }

//             animate();
//         });
//     }, []);

//     return (<></>);
// }
