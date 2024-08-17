/* eslint-disable */
// import { camera, light, player, scene } from "./start.js";
import * as BABYLON from "@babylonjs/core";
const INF = 90000000000000;

// defaults
// set speed
let speedtoggle = document.getElementById("speedoverwrite")
let speedOverwrite = document.getElementById("speed");

// let default_speed;
const default_radius = 2.5;
const default_steer = 0.022;
window.default_gravity = -9;
// const physics_call_rate = 2; // higher = better performance. lower = better accuracy.
window.physics_call_rate = 2;
const default_cameraDownAngle = 0.3;
const default_cameraRightAngle = 0;
const default_jumpSpeed = 1;
const default_jumpHeight = 1;


// current
// var speed;// = default_speed;
// var steer;// = default_steer;
// var gravity;

// var jumpSpeed;
// var jumpHeight;

// var radius;// = default_radius;
// var cameraDownAngle;// = default_cameraDownAngle;
// var cameraRightAngle;// = default_cameraRightAngle;

// solved
// var cam_horizontal = 0;
// var cam_vertical = 0;
// var cam_depression = 0;

window.cc = {
	default: {},
	monkey: {},
	set_default: function() {
		this.default["camera.maxZ"] = () => {return 300};
		this.default["camera.fov mul2"] = () => {return 1};
		this.default["light.intensity"] = () => {return 1.0};
		this.default["radius"] = () => {return default_radius;};
		this.default["cameraDownAngle"] = () => {return default_cameraDownAngle;};
		this.default["cameraRightAngle"] = () => {return default_cameraRightAngle;};
		this.default["jumpSpeed"] = () => {return default_jumpSpeed;};
		this.default["jumpHeight"] = () => {return default_jumpHeight;};
		this.default["speed"] = () => {
            let freeze = document.getElementById("freeze");
            if (speedtoggle.checked) {
                window.default_speed = speedOverwrite;
                return speedOverwrite.value;
            }
            else if (freeze.checked) {
                window.default_speed=0;return 0
            }
            else {
                window.default_speed = 0.28;
                return 0.28;
            }
        };
		this.default["steer"] = () => {return default_steer};
		this.default["player.scaling"] = () => {return new BABYLON.Vector3(1, 0.16, 1)};
		this.default["scene.clearColor"] = () => {return new BABYLON.Color4(0,0,0,1)};
		this.default["scene.ambientColor"] = () => {return new BABYLON.Color4(1,1,1,1)};
		this.default["light.diffuse"] = () => {return new BABYLON.Color4(1, 1, 1, 1)};
		this.default["light.specular"] = () => {return new BABYLON.Color3(1, 1, 1)};
		this.default["light.groundColor"] = () => {return new BABYLON.Color3(0, 0, 0)};
		this.default["gravity"] = () => {
            let gravitytoggle = document.getElementById("gravityoverwrite")
            let gravityOverwrite = document.getElementById("gravity");
            let freeze = document.getElementById("freeze");
            if (gravitytoggle.checked) {
                return new BABYLON.Vector3(0,gravityOverwrite.value,0)
            }
            else if (freeze.checked) {
                return new BABYLON.Vector3(0,0,0)
            }
            else {return new BABYLON.Vector3(0,-9,0)}
        }
		this.default["camera.upVector"] = () => {return new BABYLON.Vector3(0,1,0)};
	},
	set_monkey: function(key, val) {
		this.monkey[key] = val;
	},
	get: function(const_key, top_vec=null) {
        // console.log("get", const_key);
        // console.log("thing", this.default[const_key]);
		var vec = this.default[const_key](); // is this meant to not be a function?
		if (Object.keys(vec).length == 0) {
			// scalar
			var arr = [vec, this.monkey[const_key], top_vec].filter(v => v != null);
			return arr[arr.length - 1];
		} else {
	        // vector
	        let is_color = ((vec.r) && (vec.g) && (vec.b));
	        let arr = [this.monkey[const_key], top_vec];
	        if (is_color) {
	        	for (var i=0;i<2;i++) {
	        		let ar = arr[i];
	        		if (ar) {
	        			vec = ar;
	        		}
	        	}
	        } else {
		        for (let key in vec) {
		        	for (var i=0;i<2;i++) {
		        		let ar = arr[i];
		        		if ((ar != null) && (ar[key] != null)) {
		        			vec[key] = ar[key];
		        		}
		        	}
		        }
		    }
	        return vec;
	    }
	},
	refresh: function() {
		window.cameraMaxZ = this.get("camera.maxZ");
		window.light.intensity = this.get("light.intensity");
		window.radius = this.get("radius");
		window.cameraDownAngle = this.get("cameraDownAngle");
		window.cameraRightAngle = this.get("cameraRightAngle");
		window.speed = this.get("speed");
		window.steer = this.get("steer");
		window.player.scaling = this.get("player.scaling");
		window.scene.clearColor = this.get("scene.clearColor");
		window.scene.ambientColor = this.get("scene.ambientColor");
		window.light.diffuse = this.get("light.diffuse");
		window.light.specular = this.get("light.specular");
		window.light.groundColor = this.get("light.groundColor");
		window.jumpSpeed = this.get("jumpSpeed"); // <-- problem here
		window.jumpHeight = this.get("jumpHeight");
		window.a.fov_mul2(null);
		window.a.g(null, null, null);
		window.a.d(null, null, null);
		window.a.t(null, null, null);
		window.a.cam_d(null);
	},
	hard_reset: function() {
		cc.monkey = {};
	}
}

// export default {cc, default_speed, default_radius, default_steer, default_gravity, physics_call_rate, default_cameraDownAngle, default_cameraRightAngle, default_jumpSpeed, default_jumpHeight, INF};