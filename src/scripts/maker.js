/* eslint-disable */
import * as BABYLON from "@babylonjs/core";
// import { scene } from "./start";
// import { decorations } from "./decorations";
// import { cones, jumppads, driftPads, endings } from "./start";
// import {decorations} from "./decorations";
// import {jumppads, driftPads, cones, endings} from "./start"
let KILLER_BOUNCE = 999999
window.maker = {
    platform_count: 0,
    cone_count: 0,
    cylinder_count: 0,
    sphere_count: 0,
    ending_count: 0,
    plat1: null,
    plat2: null,
    plat3: null,
    init: function() {
        // console.log('Maker init called');
        this.add_root_meshes("cone", 2, (i) => {
            // return BABYLON.Mesh.CreateCylinder("cone"+i, 1.0, 0.0, 1.0, 5, 1, window.scene, false, BABYLON.Mesh.DEFAULTSIDE);
            return BABYLON.MeshBuilder.CreateCylinder("cone"+i, {height:1.0, diameterTop:0.0, diameterBottom:1.0, tessellation:5, subdivisions:1}, window.scene);
        });
        this.add_root_meshes("plat", 8, (i) => {
            // return BABYLON.Mesh.CreateBox("plat"+i,1, window.scene);
            return BABYLON.MeshBuilder.CreateBox("plat"+i, { size:1 }, window.scene);
        });
        this.add_root_meshes("sphere", 5, (i) => {
            // return BABYLON.Mesh.CreateSphere("sphere"+i, 10, 1, window.scene);
            return BABYLON.MeshBuilder.CreateSphere("sphere"+i, { segments:10, diameter:1 }, window.scene);
        });
    },
    add_root_meshes: function(name, count, fn) {
        for (var i=0;i<count;i++) {
            this[name+i] = fn(i);
            window.decorations.decorate(this[name+i], name+i);
            this[name+i].isVisible = false;
            this[name+i].cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
        }
    },
    make_platform: function(posList, rotList, sizList, imat=0, bounce=0, mass=0, friction=0.6, jump=false, air=false, isKiller=false, isDriftOn=false) {
        let godmode = document.getElementById("godmode");
        if (godmode.checked) {KILLER_BOUNCE = 0}
        if (isKiller == true) {
            bounce = KILLER_BOUNCE
        }
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        let rX = rotList[1]; let rY = rotList[0]; let rZ = rotList[2];
        let sX = sizList[0]; let sY = sizList[1]; let sZ = sizList[2];
        pY += Math.random() * 0.0007;
        // Mesh
        let mesh_name = "P" + this.platform_count;
        var platform;

        function isNum(x) {
            return (isNaN(Math.round(x)) == false);
        }
        if (isNum(imat)) {
            imat = Math.round(imat);
            platform = (this["plat"+imat] || this["plat"+0]).createInstance(mesh_name);
            if (imat == -1) platform.isVisible = false;
            BABYLON.Tags.AddTagsTo(platform, "mesh");
            BABYLON.Tags.AddTagsTo(platform, "platform");
        } else {
            platform = BABYLON.Mesh.CreateBox(mesh_name,1, window.scene);
            platform.cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
            let color_obj = window.decorations.hexToRgb("#"+imat);
            platform.material = window.decorations.rgba_mat(color_obj.r, color_obj.g, color_obj.b, color_obj.a);
            BABYLON.Tags.AddTagsTo(platform, "platform");
            BABYLON.Tags.AddTagsTo(platform, "mesh");
        }
        
        // Set
        platform.scaling = new BABYLON.Vector3(sX,sY,sZ);
        platform.position = new BABYLON.Vector3(pX,pY,pZ);
        platform.rotation = new BABYLON.Vector3(rX,rY,rZ);

        if (air == false) {
            // platform.physicsImpostor = new BABYLON.PhysicsImpostor(platform, BABYLON.PhysicsImpostor.BoxImpostor, { mass: mass, restitution: bounce, friction: friction}, window.scene);
            // new BABYLON.PhysicsAggregate(platform, BABYLON.PhysicsShapeType.BOX, scene);
            // platform.setMassProperties({
            //     mass: 1,
            //     friction: 0.2,
            //     restitution: 0.3
            // });
            new BABYLON.PhysicsAggregate(platform, BABYLON.PhysicsShapeType.BOX, { mass: mass, friction: friction, restitution: bounce }, window.scene);
        }
        if (jump == true) {
            window.jumppads.push(platform);
        }
        if (isDriftOn == true) {
            window.driftPads.push(platform)
        }

        // Tracker
        this.platform_count += 1;
    },
    make_cone: function(posList, imat) {
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        // Mesh
        let mesh_name = "C" + this.cone_count;
        
        if ((imat == true) || (imat == false)) {
            imat = (imat == true) ? 1 : 0;
        }

        var cone;
        if (isNaN(Math.round(imat)) == false) {
            imat = Math.round(imat);
            cone = (this["cone"+imat] || this["cone"+0]).createInstance(mesh_name);
            if (imat == -1) cone.isVisible = false;
            BABYLON.Tags.AddTagsTo(cone, "mesh cone");
        } else {
            // cone = BABYLON.Mesh.CreateCylinder(mesh_name, 1.0, 0.0, 1.0, 5, 1, window.scene, false, BABYLON.Mesh.DEFAULTSIDE);
            cone = BABYLON.MeshBuilder.CreateCylinder(mesh_name, {height:1, diameterTop:0, diameterBottom:1, tessellation:5, subdivisions:1}, window.scene)
            cone.cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
            let color_obj = window.decorations.hexToRgb("#"+imat);
            cone.material = window.decorations.rgba_mat(color_obj.r, color_obj.g, color_obj.b, color_obj.a);
            BABYLON.Tags.AddTagsTo(cone, "mesh cone");
        }
        
        // Set
        cone.position = new BABYLON.Vector3(pX,pY,pZ);
        cone.scaling.y = 1.2;
        cone.freezeWorldMatrix();
        // Tracker
        window.cones.push(cone);
        this.cone_count += 1;
    },
    make_sphere: function(posList, r, imat=0, bounce=0, mass=0, friction=0.6, air=false, isKiller=false) {
        if (isKiller == true) {
            bounce = KILLER_BOUNCE
        }
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        // Mesh
        let mesh_name = "S" + this.sphere_count;
        var sphere;

        if (isNaN(Math.round(imat)) == false) {
            imat = Math.round(imat);
            sphere = (this["sphere"+imat] || this["sphere"+0]).createInstance(mesh_name);
            if (imat == -1) sphere.isVisible = false;
            BABYLON.Tags.AddTagsTo(sphere, "mesh sphere");
        } else {
            sphere = BABYLON.Mesh.CreateSphere(mesh_name, 10, 1, window.scene);
            sphere.cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
            let color_obj = window.decorations.hexToRgb("#"+imat);
            sphere.material = window.decorations.rgba_mat(color_obj.r, color_obj.g, color_obj.b, color_obj.a);
            BABYLON.Tags.AddTagsTo(sphere, "mesh sphere");
        }
        // Set
        sphere.position = new BABYLON.Vector3(pX,pY,pZ);
        sphere.scaling = new BABYLON.Vector3(r,r,r);
        sphere.freezeWorldMatrix(); // // Don't use: ???

        if (air == false) {
            // sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: mass, restitution: bounce, friction: friction }, window.scene);
            new BABYLON.PhysicsAggregate(sphere, BABYLON.PhysicsShapeType.SPHERE, { mass: mass, friction: friction, restitution: bounce }, window.scene);
        }

        // Tracker
        this.sphere_count += 1;
    },
    make_ending: function(posList) {
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        // Mesh
        let mesh_name = "E" + this.ending_count;
        var ending = BABYLON.Mesh.CreateCylinder(mesh_name, 2.0, 2.0, 2.0, 8, 1, window.scene, false, BABYLON.Mesh.DEFAULTSIDE);
        BABYLON.Tags.AddTagsTo(ending, "mesh end");
        ending.position = new BABYLON.Vector3(pX, pY, pZ);
        // Visuals
        ending.material = window.decorations.materials.ending;
        ending.freezeWorldMatrix();
        // Physics
        window.endings.push(ending);
        this.ending_count += 1;
    },
    make_cylinder: function(posList, rotList, sizList, imat=0, bounce=0, mass=0, friction=0.6, air=false, topR=1, isKiller=false) {
        if (isKiller == true) {
            bounce = KILLER_BOUNCE
        }
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        let rX = rotList[1]; let rY = rotList[0]; let rZ = rotList[2];
        let sX = sizList[0]; let sY = sizList[1]; let sZ = sizList[2];
        
        const height = 1;//sY;
        const radius = 1;//sZ;

        // var mesh = BABYLON.Mesh.CreateCylinder("Y" + this.cylinder_count, height, radius * topR, radius, 12, 1, window.scene, false, BABYLON.Mesh.DEFAULTSIDE);
        var mesh = BABYLON.MeshBuilder.CreateCylinder("Y" + this.cylinder_count, {height:height, diameterTop:radius * topR, diameterBottom:radius, tessellation:12, subdivisions:1}, window.scene);
        BABYLON.Tags.AddTagsTo(mesh, "mesh cylinder");
        mesh.scaling = new BABYLON.Vector3(sX,sY,sZ);
        mesh.position = new BABYLON.Vector3(pX,pY,pZ);
        mesh.rotation = new BABYLON.Vector3(rX,rY,rZ);
        
        if (air == false) {
            // mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: mass, restitution: bounce, friction: friction }, window.scene);
            new BABYLON.PhysicsAggregate(mesh, BABYLON.PhysicsShapeType.CYLINDER, { mass: mass, friction: friction, restitution: bounce }, window.scene);
        }

        if (isNaN(Math.round(imat)) == false) {
            imat = Math.round(imat);
            window.decorations.decorate(mesh, "cylinder"+imat);
        } else {
            let color_obj = window.decorations.hexToRgb("#"+imat);
            mesh.material = window.decorations.rgba_mat(color_obj.r, color_obj.g, color_obj.b, color_obj.a);
        }
        if (imat == -1) mesh.isVisible = false;
        this.cylinder_count += 1;
    },
    make_start: function(posList) {
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        this.make_platform([pX,pY,pZ+9], [0,0,0], [3,0.5, 14]);
    },
    og_tree: function(positionX, positionY, positionZ) {
        var greenTexture = window.decorations.materials.cylinder5;
        var brownTexture = window.decorations.materials.cylinder6;


        var cylinderXD = BABYLON.Mesh.CreateCylinder("Y" + this.cylinder_count, 0.65, 0.0, 3.3, 10, 1, window.scene, false, BABYLON.Mesh.DEFAULTSIDE);
        cylinderXD.position.z = (positionZ);
        cylinderXD.position.x = (positionX * -1);
        cylinderXD.position.y = (positionY + 1);
        cylinderXD.physicsImpostor = new BABYLON.PhysicsImpostor(cylinderXD, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0.0, restitution: 0.0 }, window.scene);
        cylinderXD.material = greenTexture;
        this.cylinder_count += 1;

        var cylinderXD2 = BABYLON.Mesh.CreateCylinder("Y" + this.cylinder_count, 1.65, 0.3, 0.3, 10, 1, window.scene, false, BABYLON.Mesh.DEFAULTSIDE);
        cylinderXD2.position.z = (positionZ);
        cylinderXD2.position.x = (positionX * -1);
        cylinderXD2.position.y = (positionY);
        cylinderXD2.physicsImpostor = new BABYLON.PhysicsImpostor(cylinderXD2, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0.0, restitution: 0.0 }, window.scene);
        cylinderXD2.material = brownTexture;

        this.cylinder_count += 1;
    },
    og_cone: function(positionY, positionZ, positionX) {
        var fireTexture = window.decorations.materials.cylinder4;
        var cylinder = BABYLON.Mesh.CreateCylinder("Y" + this.cylinder_count, 0.45, 0.0, 0.45, 10, 1, window.scene, false, BABYLON.Mesh.DEFAULTSIDE);
        cylinder.position.z = (positionZ);
        cylinder.position.x = (positionX);
        cylinder.position.y = (positionY);
        cylinder.physicsImpostor = new BABYLON.PhysicsImpostor(cylinder, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0.0, restitution: 0.0 }, window.scene);
        cylinder.material = fireTexture;

        this.cylinder_count += 1;
    },
    og_cylinder(positionX, positionY, positionZ, rotationY, rotationX, rotationZ, rad, hei) {
        var cylinderXD = BABYLON.Mesh.CreateCylinder("Y" + this.cylinder_count, hei, rad, rad, 12, 1, window.scene, false, BABYLON.Mesh.DEFAULTSIDE);
        cylinderXD.position.z = (positionZ);
        cylinderXD.position.x = (positionX * -1);
        cylinderXD.position.y = (positionY);
        cylinderXD.physicsImpostor = new BABYLON.PhysicsImpostor(cylinderXD, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0.0, restitution: 0.0 }, window.scene);
        cylinderXD.material = window.decorations.materials.cylinder1;
        cylinderXD.rotation.x = (rotationX * (Math.PI / 180)); // complete
        cylinderXD.rotation.y = (rotationY * (Math.PI / 180)); // complete
        cylinderXD.rotation.z = (rotationZ * (Math.PI / 180)); // complete

        this.cylinder_count += 1;
    }
}
// console.log(maker.init)
// export {maker};
export default {maker};