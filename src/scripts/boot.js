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
            window.playerPhysicsImpostor.setAngularVelocity(BABYLON.Vector3.Zero());
        }, 500);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// export default {boot};