/* eslint-disable */
// import {rotation, spectateAnimationValue, player} from './start.js';
import * as BABYLON from "@babylonjs/core";
// import {map} from "../maps/infiltration.js"; // change later
// import {cc} from './const_controller.js';
window.change_state = {
	die: function(deathMessage) {
		if (!window.alive) return
		window.alive = false;
		window.tsTriggers.onDeath(deathMessage);
	},
	spawn: function() {
		// window.alive = true; // problem here? really?
		window.score = 0;
		window.flyjump.last_frame = 0;
        window.rotation = 0
		// // rotation = document.getElementById("PracticeR").value;
		window.spectateAnimationValue = 5;
		// // world
		// window.player.rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0,0,0),0); // this also breaks it (probably legacy code issue)
        window.player.rotation = new BABYLON.Vector3(0, 0, 0);
		// window.player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0,0,0));
        window.player.applyImpulse(
            new BABYLON.Vector3(0,0,0),
            window.player.absolutePosition
        );
		// window.player.physicsImpostor.setAngularVelocity(new BABYLON.Quaternion(0,1,0,0)); // hopefully the top one does that
        if (!document.getElementById("PracticeMode").checked) {
		    window.player.position = new BABYLON.Vector3(window.map.spawn[0],window.map.spawn[1],window.map.spawn[2]);
            window.player.rotation = new BABYLON.Vector3(0,0,0);
        }
        else {
            window.player.position = new BABYLON.Vector3(document.getElementById("PracticeX").value,document.getElementById("PracticeY").value,document.getElementById("PracticeZ").value);
            window.player.rotation = new BABYLON.Vector3(0,0,0);
            window.rotation = parseFloat(document.getElementById("PracticeR").value);
        }
		window.cc.refresh();
		window.map.reset(); // only breaks map
	},
	win: function() {
		if (!window.alive) return
		window.alive = false;
		window.tsTriggers.onWin()
	}
}
// export default {change_state};