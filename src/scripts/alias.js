/* eslint-disable */
// import {maker} from './maker.js';
// import {scene, player, camera} from './start.js';
// import {cc} from './const_controller.js';
// import {cc, cam_horizontal, cam_vertical, cam_depression} from './const_controller.js';
// console.log(cam_horizontal)
import * as BABYLON from "@babylonjs/core";
// import {fov} from './fov.js';

window.IS_ICEPARTY = false;

// console.log('maker:', maker.make_platform);
window.a = {
    p: function(q,r,s, imat, bounce, mass, friction, jump, air, isKiller, isDriftOn) {
        if (!imat) imat = (IS_ICEPARTY) ? 1 : 0;
        if (!bounce) bounce = 0;
    	window.maker.make_platform(q,r,s, imat, bounce, mass, friction, jump, air, isKiller, isDriftOn);
    },
    y: function(q,r,s, imat, bounce, mass, friction, air, topr, isKiller) {
        if (!imat) imat = (IS_ICEPARTY) ? 1 : 0;
        if (!bounce) bounce = 0;
        window.maker.make_cylinder(q,r,s, imat, bounce, mass, friction, air, topr, isKiller);
    },
    s: function(q,radius, imat, bounce, mass, friction, air, isKiller) {
        window.maker.make_sphere(q, radius, imat, bounce, mass, friction, air, isKiller);
    },
    c: function(q, iceparty) {
        if (iceparty == null) iceparty = (IS_ICEPARTY) ? true : false;
    	window.maker.make_cone(q, iceparty);
    },
    e: function(q) {
    	window.maker.make_ending(q);
    },
    m: function(id) {
    	return window.scene.getMeshByName(id);
    },
    re: function(id, q, r, s) { // reset
        let mesh = window.scene.getMeshByName(id);
        // mesh.rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        mesh.rotation = new BABYLON.Vector3(0, 0, 0);
        mesh.rotation.x = r[1];
        mesh.rotation.y = r[0];
        mesh.rotation.z = r[2];
        mesh.position.x = q[0];
        mesh.position.y = q[1];
        mesh.position.z = q[2];
        mesh.scaling.x = s[0];
        mesh.scaling.y = s[1];
        mesh.scaling.z = s[2];
        if (mesh.physicsImpostor) {
            // mesh.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0,0,0));
            // mesh.physicsImpostor.setAngularVelocity(new BABYLON.Quaternion(0,0,0,0));
            mesh.applyImpulse(
                new BABYLON.Vector3(0,0,0),
                window.player.absolutePosition
            );
        }
    },
    g: function(x,y,z) {
        let vec = window.cc.get("gravity", {
            x: (x != null) ? x*default_gravity : null,
            y: (y != null) ? y*default_gravity : null,
            z: (z != null) ? z*default_gravity : null
        });
        window.gravity = vec; // hopefully this won't bite me back, I think it did
        window.scene.getPhysicsEngine().setGravity(vec);
    },
    d: function(x,y,z) {
        window.player.scaling = window.cc.get("player.scaling", {x,y,z});
    },
    cam_d: function(_radius) {
        let cam_d = window.cc.get("radius", _radius)
        let cam_cd = window.cc.get("cameraDownAngle", null);

        let cam_horizontal = cam_d * cam_d;
        let cam_vertical = cam_horizontal * Math.tan(cam_cd * 1.3);
        let cam_depression = cam_cd;
    },
    cam_cd: function(_cameraDownAngle) {
        let cam_d = window.cc.get("radius", null);
        let cam_cd = window.cc.get("cameraDownAngle", (_cameraDownAngle != null) ? _cameraDownAngle * Math.PI / 180 : null);

        cam_horizontal = cam_d * cam_d;
        cam_vertical = cam_horizontal * Math.tan(cam_cd * 1.3);
        cam_depression = cam_cd;
    },
    cam_cr: function(_cameraRightAngle) {
        window.cameraRightAngle = window.cc.get("cameraRightAngle", (_cameraRightAngle != null) ? _cameraRightAngle * Math.PI / 180 : null);
    },
    t: function(x,y,z) {
        window.cameraUpVector = window.cc.get("camera.upVector", {x,y,z});
    },
    mov: function(id, axis, value) {
        window.scene.getMeshByName(id).position[axis] += value * default_speed;
    },
    rot: function(id, axis, value) {
        window.scene.getMeshByName(id).rotation[axis] += value * default_steer;
    },
    siz: function(id, axis, value) {
        window.scene.getMeshByName(id).scaling[axis] += value / 100;
    },
    fov_mul2: function(_mul2) {
        let mul2 = window.cc.get("camera.fov mul2", _mul2);
        window.fov.set_mul2(mul2);
        window.fov.apply();
    },
    u: function(id) {
        window.scene.getMeshByName(id).unfreezeWorldMatrix();
    },
    msg_set: function(text) {
        window.tsTriggers.setInGameMessage(text)
    },
    msg_del: function() {
        window.tsTriggers.hideInGameMessage()
    },
    js: function(v) {
        jumpSpeed = window.cc.get("jumpSpeed", v);
    },
    jh: function(v) {
        jumpHeight = window.cc.get("jumpHeight", v);
    },
    og: function(mat, p1,p2,p3, r1,r2,r3, s1,s2,s3) {
        var mat_map = {
            ice: 0,
            fire: 5,
            green: 6,
            brown: 7,
            water: 8,
            invisible: -1,
            fall: 0
        }
        if (mat != "fall") {
            this.p([p1 * (-1),p2,p3], [r1*(Math.PI / 180),r2*(Math.PI / 180),r3*(Math.PI / 180)], [s1,s2,s3], mat_map[mat] || 0);
        } else {
            this.p([p1 * (-1),p2,p3], [r1*(Math.PI / 180),r2*(Math.PI / 180),r3*(Math.PI / 180)], [s1,s2,s3], mat_map[mat] || 0, 1, 0.2, 0);
        }
        
    },
    og_end: function(p1, p2, p3, yr) {
        this.e([p1,p2,p3]);
    },
    og_c: function(p1,p2,p3) {
        window.maker.og_cone(p1,p2,p3);
    },
    og_y: function(positionX, positionY, positionZ, rotationY, rotationX, rotationZ, rad, hei) {
        window.maker.og_cylinder(positionX, positionY, positionZ, rotationY, rotationX, rotationZ, rad, hei);
    },
    og_tree: function(p1,p2,p3) {
        window.maker.og_tree(p1,p2,p3);
    }
}
// export {a};
// export default a;