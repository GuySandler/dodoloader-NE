/* eslint-disable */
// import {start} from './start.js';
// import {decorations} from './decorations.js';
// import {maker} from './maker.js';
// import {fov} from './fov.js';
// import map from "window.currentMapId";
// import {map} from "../maps/infiltration.js"; // change later
// import {cc} from './const_controller.js';
// import { change_state } from './change_state.js';
// import System from 'es-module-loader/core/loader-polyfill.js';
// System.import("../maps/"+window.currentMapId).then(function(m) {
//     console.log(m);
//   });
// async function importModule() {
//     try {
//        const module = await import("../maps/"+window.currentMapId);
//     } catch (error) {
//        console.log('import failed');
//     }
//  }
// console.log(maker) I had an undefined issue solved by just adding {} to the import. I hate this
// console.log('Logging maker:', maker);
// console.log('Type of maker:', typeof maker);
// console.log('Maker keys:', Object.keys(maker));
// console.log('Maker init method:', maker.init);
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders/glTF";

window.boot = {
    didPreload: false,
    preload: async function() {
        if (this.didPreload) return;
        this.didPreload = true;
        await window.start.init();
        await window.decorations.init();
        await window.maker.init();
        await window.start.create_scene();
        await window.cc.set_default();
        await window.decorations.add_particle_system();
    }, // interesting. preload works, init breaks it
    init: async function() {
        setTimeout(async () => {
            await window.fov.init();
            await window.flyjump.init();
            // const mapScript = document.querySelector('#map-script').innerHTML;
            // eval(mapScript);
            await window.map.init();
            await window.cc.refresh()
            window.decorations.addOrRemoveSkybox()
            await window.change_state.spawn(); // <-- problem here
            // await premium.updatePremiumRequirementMet();
            await window.map.post();
            // window.camera.target = window.player;
            window.camera.lockedTarget = window.player;
            // window.playerPhysicsImpostor.setAngularVelocity(BABYLON.Vector3.Zero());
            // window.player.physicsBody.setLinearVelocity(BABYLON.Vector3.Zero()); // not here?
            // var viewer = new BABYLON.PhysicsViewer();
            // scene.meshes.forEach((mesh) => {
            //     if (mesh.physicsBody) {
            //         viewer.showBody(mesh.physicsBody);
            //     }
            // });
            // Load the asset (e.g., from a .glb or .babylon file)
            await BABYLON.SceneLoader.ImportMesh("", "src/assets/models/", "jet.glb", scene, function (meshes) {
                let rootMesh = meshes[0];
                rootMesh.position = new BABYLON.Vector3(10, 0, 0);
                rootMesh.rotation = new BABYLON.Vector3(0, Math.PI / 4, 0);
                rootMesh.scaling = new BABYLON.Vector3(2, 2, 2);
                window.jet = rootMesh;
            });
            // window.jet = await BABYLON.SceneLoader.Append("src/assets/models/", "jet.glb", scene, function (container) {
            //     container.addAllToScene();
            //     var parentName = 'car-parent'
            //     var parent = new BABYLON.Mesh(parentName, scene);

            //     let orientation = 180;
            //     // change orientation to suit the direction of the car
            //     parent.rotation = new BABYLON.Vector3 (
            //     BABYLON.Tools.ToRadians(0),
            //     BABYLON.Tools.ToRadians(orientation),
            //     BABYLON.Tools.ToRadians(0)
            //     )

            //     container.meshes.forEach(mesh => {
            //         mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, friction: 0.01, restitution: 0 }, scene);

            //         mesh.setParent(parent);
            



            //     var yaw = BABYLON.Tools.ToRadians(0);
            //     var pitch = BABYLON.Tools.ToRadians(0);
            //     var roll = BABYLON.Tools.ToRadians(0);
            //     var yprQuaternion = BABYLON.Quaternion.RotationYawPitchRoll(yaw, pitch, roll);

            //     // parent.rotate(new BABYLON.Vector3(0, 0.5, 0), BABYLON.Tools.ToRadians(90));
            //     parent.rotationQuaternion = yprQuaternion;
            //     resolve(parent)
            // });
        }, 500);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// export default {boot};