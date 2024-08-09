/* eslint-disable */
import {rotation, spectateAnimationValue, player} from './start.js';
import * as BABYLON from "@babylonjs/core";
import {map} from "../maps/infiltration.js"; // change later
import {cc} from './const_controller.js';
export var change_state = {
	die: function(deathMessage) {
		if (!alive) return
		alive = false;
		window.tsTriggers.onDeath(deathMessage);
	},
	spawn: function() {
		alive = true;
		score = 0;
		flyjump.last_frame = 0;
        let rotation = 0
		// rotation = document.getElementById("PracticeR").value;
		let spectateAnimationValue = 5;
		// world
		player.rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0,0,0),0);
		player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0,0,0));
		player.physicsImpostor.setAngularVelocity(new BABYLON.Quaternion(0,1,0,0));
        if (!document.getElementById("PracticeMode").checked) {
		    player.position = new BABYLON.Vector3(map.spawn[0],map.spawn[1],map.spawn[2]);
            player.rotation = new BABYLON.Vector3(0,0,0);
        }
        else {
            player.position = new BABYLON.Vector3(document.getElementById("PracticeX").value,document.getElementById("PracticeY").value,document.getElementById("PracticeZ").value);
            player.rotation = new BABYLON.Vector3(0,0,0);
            rotation = parseFloat(document.getElementById("PracticeR").value);
        }
		cc.refresh();
		map.reset();
	}, 
	win: function() {
		if (!alive) return
		alive = false;
		window.tsTriggers.onWin()
	}
}
export default {change_state};