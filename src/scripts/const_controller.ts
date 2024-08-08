/* eslint-disable */
// note: I only used AI to explain what this.default["camera.maxZ"] = () => {return 300}; is (for example) and the weird error Element implicitly has an 'any' type because expression of type '"cameraRightAngle"' can't be used to index type '{}'. Property 'cameraRightAngle' does not exist on type '{}'.ts(7053)
import * as BABYLON from "@babylonjs/core";
import { a } from "./alias";
import { scene, light, camera, player } from "./start";
const INF = 90000000000000;

// defaults
let speedtoggle = document.getElementById("speedoverwrite") as HTMLInputElement;
let speedOverwrite = document.getElementById("speed") as HTMLInputElement;

let default_speed;
const default_radius = 2.5;
const default_steer = 0.022;
const default_gravity = -9;
const physics_call_rate = 2;
const default_cameraDownAngle = 0.3;
const default_cameraRightAngle = 0;
const default_jumpSpeed = 1;
const default_jumpHeight = 1;

// current
var speed;
var steer;
var gravity;

var jumpSpeed;
var jumpHeight;

var radius;
var cameraDownAngle;
var cameraRightAngle;

// solved
var cam_horizontal = 0;
var cam_vertical = 0;
var cam_depression = 0;

interface DefaultSettings {
    "camera.maxZ": () => number;
    "camera.fov mul2": () => number;
    "light.intensity": () => number;
    "radius": () => number;
    "cameraDownAngle": () => number;
    "cameraRightAngle": () => number;
    "jumpSpeed": () => number;
    "jumpHeight": () => number;
    "speed": () => number;
    "steer": () => number;
    "player.scaling": () => BABYLON.Vector3;
    "scene.clearColor": () => BABYLON.Color4;
    "scene.ambientColor": () => BABYLON.Color4;
    "light.diffuse": () => BABYLON.Color4;
    "light.specular": () => BABYLON.Color3;
    "light.groundColor": () => BABYLON.Color3;
    "gravity": () => BABYLON.Vector3;
    "camera.upVector": () => BABYLON.Vector3;
}

var cc = {
    default: {} as DefaultSettings,
    monkey: {} as { [key: string]: any },
    set_default: function () {
        this.default["camera.maxZ"] = () => 300;
        this.default["camera.fov mul2"] = () => 1;
        this.default["light.intensity"] = () => 1.0;
        this.default["radius"] = () => default_radius;
        this.default["cameraDownAngle"] = () => default_cameraDownAngle;
        this.default["cameraRightAngle"] = () => default_cameraRightAngle;
        this.default["jumpSpeed"] = () => default_jumpSpeed;
        this.default["jumpHeight"] = () => default_jumpHeight;
        this.default["speed"] = () => {
            let freeze = document.getElementById("freeze") as HTMLInputElement;
            if (speedtoggle && speedtoggle.checked) {
                default_speed = speedOverwrite;
                return parseFloat(speedOverwrite.value);
            } else if (freeze && freeze.checked) {
                default_speed = 0;
                return 0;
            } else {
                default_speed = 0.28;
                return 0.28;
            }
        };
        this.default["steer"] = () => default_steer;
        this.default["player.scaling"] = () => new BABYLON.Vector3(1, 0.16, 1);
        this.default["scene.clearColor"] = () => new BABYLON.Color4(0, 0, 0, 1);
        this.default["scene.ambientColor"] = () => new BABYLON.Color4(1, 1, 1, 1);
        this.default["light.diffuse"] = () => new BABYLON.Color4(1, 1, 1, 1);
        this.default["light.specular"] = () => new BABYLON.Color3(1, 1, 1);
        this.default["light.groundColor"] = () => new BABYLON.Color3(0, 0, 0);
        this.default["gravity"] = () => {
            let gravitytoggle = document.getElementById("gravityoverwrite") as HTMLInputElement;
            let gravityOverwrite = document.getElementById("gravity") as HTMLInputElement;
            let freeze = document.getElementById("freeze") as HTMLInputElement;
            if (gravitytoggle && gravitytoggle.checked) {
                return new BABYLON.Vector3(0, parseFloat(gravityOverwrite.value), 0);
            } else if (freeze && freeze.checked) {
                return new BABYLON.Vector3(0, 0, 0);
            } else {
                return new BABYLON.Vector3(0, -9, 0);
            }
        };
        this.default["camera.upVector"] = () => new BABYLON.Vector3(0, 1, 0);
    },
    set_monkey: function (key, val) {
        this.monkey[key] = val;
    },
    get: function (const_key, top_vec = null) {
        var vec = this.default[const_key]();
        if (Object.keys(vec).length === 0) {
            // scalar
            var arr = [vec, this.monkey[const_key], top_vec].filter(v => v != null);
            return arr[arr.length - 1];
        } else {
            // vector
            let is_color = vec.r !== undefined && vec.g !== undefined && vec.b !== undefined;
            let arr = [this.monkey[const_key], top_vec];
            if (is_color) {
                for (var i = 0; i < 2; i++) {
                    let ar = arr[i];
                    if (ar) {
                        vec = ar;
                    }
                }
            } else {
                for (let key in vec) {
                    for (var i = 0; i < 2; i++) {
                        let ar = arr[i];
                        if (ar != null && ar[key] != null) {
                            vec[key] = ar[key];
                        }
                    }
                }
            }
            return vec;
        }
    },
    refresh: function () {
        camera.maxZ = this.get("camera.maxZ");
        light.intensity = this.get("light.intensity");
        radius = this.get("radius");
        cameraDownAngle = this.get("cameraDownAngle");
        cameraRightAngle = this.get("cameraRightAngle");
        speed = this.get("speed");
        steer = this.get("steer");
        player.scaling = this.get("player.scaling");
        scene.clearColor = this.get("scene.clearColor");
        scene.ambientColor = this.get("scene.ambientColor");
        light.diffuse = this.get("light.diffuse");
        light.specular = this.get("light.specular");
        light.groundColor = this.get("light.groundColor");
        jumpSpeed = this.get("jumpSpeed");
        jumpHeight = this.get("jumpHeight");
        a.fov_mul2(null);
        a.g(null, null, null);
        a.d(null, null, null);
        a.t(null, null, null);
        a.cam_d(null);
    },
    hard_reset: function () {
        cc.monkey = {};
    }
};

export {
    cc, INF, default_speed, default_radius, default_steer, default_gravity,
    physics_call_rate, default_cameraDownAngle, default_cameraRightAngle,
    default_jumpSpeed, default_jumpHeight, speed, steer, gravity, jumpSpeed,
    jumpHeight, radius, cameraDownAngle, cameraRightAngle, cam_horizontal,
    cam_vertical, cam_depression
};
