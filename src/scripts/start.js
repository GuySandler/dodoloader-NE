/* eslint-disable */
import * as BABYLON from "@babylonjs/core";
// import { decorations } from "./decorations";
// import { decorations } from "./decorations";
// game objects
// var camera = null;
// var light = null;
// var player = null;
// var cape_wings = null;
// var cape_tail = null;

window.endings = [];
window.cones = [];
window.jumppads = [];
window.driftPads = [];

// // game essentials
// var canvas = null;
// var engine = null;
// var scene = null;

// // game variables
// var rotation = 0;
// var isTouchingDriftPad = false
window.isSpectating = false
// var spectateAnimationValue = 0
// var currentMapId = null
// var isMapLoaded = false
// var currentRoute = '/'

window.start = {
	init: async function() {
        // window.platformermode = true
		window.canvas = await document.getElementById("renderCanvas");
		window.engine = await this.asyncEngineCreation();
		window.scene = await new BABYLON.Scene(engine, {antialiasing: false});
        // console.log("scene created");
		const gravityVector = new BABYLON.Vector3(0,-9, 0);
		window.scene.enablePhysics(gravityVector);
	},
	asyncEngineCreation: async function() {
		try {
			return this.createDefaultEngine();
		} catch(e) {
			console.log("the available createEngine function failed.");
			window.tsTriggers.onEngineFailed()
		}
	},
	createDefaultEngine: function() {
		return new BABYLON.Engine(canvas, true, {
			deterministicLockstep: false,
			disableWebGL2Support: false,
			// lockstepMaxSteps: 4,
		  	// timeStep: 1 / 60,
		});
	},
	create_scene: function() {
		window.scene.clearColor = new BABYLON.Color4(0,0,0,1);
        // scene.clearColor = new BABYLON.Color4(225,225,225,1);
		window.scene.ambientColor = new BABYLON.Color4(0,0,0,1);
        // scene.ambientColor = new BABYLON.Color4(225,225,225,0);

		// camera
		window.camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 2, 10), scene);
		window.camera.setTarget(BABYLON.Vector3.Zero());
		window.camera.rotation.y = -3.14;
		window.camera.rotation.x = 0.3;
		window.camera.rotation.z = 0;
		window.camera.speed = 0;
		window.camera.maxZ = 300; //200; //120;
		window.camera.noRotationConstraint = true;

		// player
		window.player = BABYLON.Mesh.CreateBox("player",0.5,scene);
		window.player.scaling = new BABYLON.Vector3(1, 0.16, 1);
		window.player.physicsImpostor = new BABYLON.PhysicsImpostor(player, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1.0, restitution: 1.0, friction: 0.5}, scene);

		window.player.position = new BABYLON.Vector3(0,0,0);
		window.player.applyGravity = true;
		window.player.checkCollisions = true;
		// light
	    window.light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
	    window.light.intensity = 1.0;
	    window.light.parent = camera;

	    // cape_wings
		window.cape_wings = new BABYLON.Mesh("custom", scene);

		var wings_vertexData = new BABYLON.VertexData();
		wings_vertexData.positions = [
			1,0,-1,
			3,0,0,
			1,0,1,
			-1,0,-1,
			-3,0,0,
			-1,0,1
		];
		wings_vertexData.indices = [0, 1, 2, 3, 4, 5];
		wings_vertexData.applyToMesh(cape_wings);

		window.cape_wings.material = window.decorations.rgba_mat(255,255,255,1);

		window.cape_wings.scaling.x = 0.3;
		window.cape_wings.scaling.y = 0.3;
		window.cape_wings.scaling.z = 0.3;
		window.cape_wings.isVisible = false;
		window.cape_wings.parent = player;

		// cape_tail
		window.cape_tail = new BABYLON.Mesh("custom", scene);
		
		var tail_vertexData = new BABYLON.VertexData();
		tail_vertexData.positions = [
			-1,0,1,
			0,0,3,
			1,0,1,
		];
		tail_vertexData.indices = [0, 1, 2];
		tail_vertexData.applyToMesh(cape_tail);

		window.cape_tail.material = window.decorations.rgba_mat(255,255,255,1);

		window.cape_tail.scaling.x = 0.3;
		window.cape_tail.scaling.y = 0.3;
		window.cape_tail.scaling.z = 0.3;
		window.cape_tail.isVisible = false;
		window.cape_tail.parent = player;

	}
}

// export {scene, player, camera, light, cape_wings, cape_tail, start, currentMapId, isMapLoaded, currentRoute, rotation, isTouchingDriftPad, isSpectating, spectateAnimationValue, endings, cones, jumppads, driftPads};
// export default start;