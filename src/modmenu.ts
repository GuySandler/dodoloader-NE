import $ from "jquery";
import * as BABYLON from "@babylonjs/core";
$(document).ready(function () {
    $(".modmenuOption").hide();
    $(".LevelEditorOption").hide();
    $(".LevelEditorObjects").hide();
    $(".LevelEditorControl").hide();
    $(".LevelEditorAdd").hide();
    $("#cheats").hide();
    $("#gravitytoggle").hide();
    $("#speedtoggle").hide();
    $("#dodocontrols").hide();

    $("#testbutton").click(function() {
        sphere = BABYLON.MeshBuilder.CreateIcoSphere("icosphere", options = {radius: 3, subdivisions: 4}, scene);
        sphere.position = new BABYLON.Vector3(0, 2, -50);
        // player.scale = new BABYLON.Vector3(0.1, 0.1, 0.1);
        player.scaling = new BABYLON.Vector3(2, 2, 2);
        physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 1, friction: 0.1}, scene)
    })

    let lasthighlight;
    $("#ObjectSelector").on("input", function() {
        try{meshes[lasthighlight].showBoundingBox = false;}catch{}
        lasthighlight = $(this).val();
        meshes[$(this).val()].showBoundingBox = true;
    });

    let meshes;
    let platforms;
    let cones;
    let spheres;
    let ends;
    let cylinders;
    let TextureName = [];
    let TextureColor = [];
    function GetAllObjects() {
        meshes = null;
        platforms = null;
        cones = null;
        spheres = null;
        ends = null;
        cylinders = null;
        TextureName = [];
        TextureColor = [];
        document.getElementById("ObjectSelector").innerHTML = "<option> </option>";
        meshes = scene.getMeshesByTags("mesh")
        platforms = scene.getMeshesByTags("platform")
        cones = scene.getMeshesByTags("cone")
        spheres = scene.getMeshesByTags("sphere")
        ends = scene.getMeshesByTags("end")
        cylinders = scene.getMeshesByTags("cylinder")
        for(let i = 0;i < meshes.length;i++) {
            document.getElementById("ObjectSelector").innerHTML += "<option value="+i+">"+meshes[i].name+"</option>"
        }
        for (let i = 0;i<meshes.length;i++){
            TextureName.push(meshes[i].material.name);
            TextureColor.push(meshes[i].material.diffuseColor);
        }
        TextureName = JSON.stringify(TextureName)
        TextureColor = JSON.stringify(TextureColor)
    }
    $("#GetAllObjects").click(function() {
        GetAllObjects();
    })
    $("#DeleteAllMadeObjects").click(function(){
        for(let i = 0;i < boxnum;i++) {
            scene.getMeshByName("box"+i).dispose()
        }
        for(let i = 0;i < cylindernum;i++) {
            scene.getMeshByName("cylinder"+i).dispose()
        }
        boxnum = 0;
        cylindernum = 0;
        GetAllObjects()
    })
    $("#DeleteSelectedMadeObjects").click(function(){
        meshes[$("#ObjectSelector").val()].dispose();
        GetAllObjects()
    })
    let boxnum = 0
    let cylindernum = 0
    $("#addBox").click(function() {
        // texture
        let mat = new BABYLON.StandardMaterial("mat", scene);
        mat.diffuseTexture = new BABYLON.Texture("assets/textures/bright.png", scene);
        mat.diffuseTexture.uScale = mat.diffuseTexture.vScale = 1.0;
        mat.backFaceCulling = false;
        mat.freeze();

        let box = BABYLON.MeshBuilder.CreateBox("box"+boxnum, options={size:2}, scene);
        BABYLON.Tags.AddTagsTo(box, "mesh");
        box.physicsImpostor = new BABYLON.PhysicsImpostor(box, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0, friction: 0.6}, scene)
        box.material = mat;
        
        boxnum++
        GetAllObjects()
    })
    $("#addcylinder").click(function() {
        // texture
        let mat = new BABYLON.StandardMaterial("mat", scene);
        mat.diffuseTexture = new BABYLON.Texture("assets/textures/bright.png", scene);
        mat.diffuseTexture.uScale = mat.diffuseTexture.vScale = 1.0;
        mat.backFaceCulling = false;
        mat.freeze();

        let cylinder = BABYLON.MeshBuilder.CreateCylinder("cylinder"+cylindernum, options={height:2}, scene);
        cylinder.checkCollisions = true;
        cylinder.applyGravity = false;
        cylinder.isPickable = false;
        scene.collisionsEnabled = true;
        camera.checkCollisions = true;
        BABYLON.Tags.AddTagsTo(cylinder, "mesh");
        cylinder.physicsImpostor = new BABYLON.PhysicsImpostor(cylinder, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0, restitution: 0, friction: 0.6}, scene)
        cylinder.material = mat;
        
        cylindernum++
        GetAllObjects()
    })
    function Transform(x=meshes[$("#ObjectSelector").val()].position.x,y=meshes[$("#ObjectSelector").val()].position.y,z=meshes[$("#ObjectSelector").val()].position.z,
                        xs=meshes[$("#ObjectSelector").val()].scaling.x,ys=meshes[$("#ObjectSelector").val()].scaling.y,zs=meshes[$("#ObjectSelector").val()].scaling.z,
                        xr,yr,zr) {
        try{meshes[$("#ObjectSelector").val()].position = new BABYLON.Vector3(x,y,z)} catch{}
        if (xr != undefined && yr != undefined && zr != undefined) {
            try{
                var rotationX = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.X, BABYLON.Tools.ToRadians(xr));
                var rotationY = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(yr));
                var rotationZ = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Z, BABYLON.Tools.ToRadians(zr));
                var combinedRotation = rotationZ.multiply(rotationY).multiply(rotationX);
                meshes[$("#ObjectSelector").val()].rotationQuaternion = combinedRotation;
            } catch{}
        }
        try{meshes[$("#ObjectSelector").val()].scaling = new BABYLON.Vector3(xs,ys,zs)} catch{}
        if ($("#TextureSelector").val() == ''){}
        else if ($("#TextureSelector").val() == 'bright.png'){meshes[$("#ObjectSelector").val()].material = decorations.bright}
        else if ($("#TextureSelector").val() == 'dark.png'){meshes[$("#ObjectSelector").val()].material = decorations.dark}
        else if ($("#TextureSelector").val() == 'flare.png'){meshes[$("#ObjectSelector").val()].material = decorations.flare}
        else if ($("#TextureSelector").val() == 'icedd.png'){meshes[$("#ObjectSelector").val()].material = decorations.icedd}
        else if ($("#TextureSelector").val() == 'pm1.png'){meshes[$("#ObjectSelector").val()].material = decorations.pm1}
        else if ($("#TextureSelector").val() == 'pm2.png'){meshes[$("#ObjectSelector").val()].material = decorations.pm2}
    }
    $("#ControlButton").click(function() {
        Transform(
            $("#x").val() !== "" ? $("#x").val() : undefined,$("#y").val() !== "" ? $("#y").val() : undefined,$("#z").val() !== "" ? $("#z").val() : undefined,
            $("#xs").val() !== "" ? $("#xs").val() : undefined,$("#ys").val() !== "" ? $("#ys").val() : undefined,$("#zs").val() !== "" ? $("#zs").val() : undefined,
            $("#xr").val() !== "" ? $("#xr").val() : undefined,$("#yr").val() !== "" ? $("#yr").val() : undefined,$("#zr").val() !== "" ? $("#zr").val() : undefined)
    })
    let MapInit = '';
    function Distance3D(x1, y1, z1, x2, y2, z2) {
        return Math.sqrt(
            Math.abs(Math.pow(x2 - x1, 2)) + 
            Math.abs(Math.pow(y2 - y1, 2)) + 
            Math.abs(Math.pow(z2 - z1, 2))
        );
    }
    let MapScript1;
    let MapScirpt2;
    let MapScirpt3;
    let MapScirpt4;
    // let debugmesh = BABYLON.MeshBuilder.CreateBox("box", options={size: 0.1}, scene);
    // debugmesh.position = new BABYLON.Vector3(vertices[0].x, vertices[0].y, vertices[0].z)
    // debugmesh = BABYLON.MeshBuilder.CreateBox("box", options={size: 0.1}, scene);
    // debugmesh.position = new BABYLON.Vector3(vertices[4].x, vertices[4].y, vertices[4].z)
    function ExportMap() {
        GetAllObjects();
        MapScript1 = 'var map = {title: "EngineV9Level",song: "env2",maker: "Someone",spawn: [0, 0.5, 0],init: function() {let box;';
        MapScirpt2 = `let meshes = scene.getMeshesByTags("mesh");let platforms = scene.getMeshesByTags("platform");let cones = scene.getMeshesByTags("cone");let ends = scene.getMeshesByTags("end");decorations.decorateCustomLevel(meshes, platforms, cones, ends, ${TextureName}, ${TextureColor})},`
        MapScirpt3 = 'post: function() {},section_id: 0,section_update: function() {},reset: function() {},'
        MapScirpt4 = 'player_move: function() {},physics_update: function() {},render_update: function() {},}'
        for (let i = 0; i < platforms.length; i++) {
            platforms[i].computeWorldMatrix(true);
            let worldMatrix = platforms[i].getWorldMatrix();

            let rotationQuaternion = platforms[i].rotationQuaternion;
            if (!rotationQuaternion) {
                rotationQuaternion = BABYLON.Quaternion.RotationYawPitchRoll(platforms[i].rotation.y, platforms[i].rotation.x, platforms[i].rotation.z);
            }
            let rotation = rotationQuaternion.toEulerAngles();

            let data = BABYLON.VertexData.ExtractFromMesh(platforms[i]);
            data.transform(worldMatrix);
            // 0 1 corners
            // 0 2 width
            // 0 3 height
            // 0 4 depth
            let boundingBox = platforms[i].getBoundingInfo().boundingBox;
            let center = boundingBox.center;
            let vertices = boundingBox.vectorsWorld
            let width = Distance3D(vertices[0].x, vertices[0].y, vertices[0].z, vertices[2].x, vertices[2].y, vertices[2].z);
            let height = Distance3D(vertices[0].x, vertices[0].y, vertices[0].z, vertices[3].x, vertices[3].y, vertices[3].z);
            let depth = Distance3D(vertices[0].x, vertices[0].y, vertices[0].z, vertices[4].x, vertices[4].y, vertices[4].z);

            MapInit += `box = BABYLON.MeshBuilder.CreateBox('${platforms[i].name}', {size: 1}, scene);
                        box.scaling = new BABYLON.Vector3(${width}, ${height}, ${depth});
                        box.position = new BABYLON.Vector3(${center.x}, ${center.y}, ${center.z});
                        box.physicsImpostor = new BABYLON.PhysicsImpostor(box, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0, friction: 0.6}, scene);
                        box.rotation = new BABYLON.Vector3(${rotation.x}, ${rotation.y}, ${rotation.z});
                        BABYLON.Tags.AddTagsTo(box, 'mesh platform');`;
        }
        for (let i = 0; i < cones.length; i++) {
            cones[i].computeWorldMatrix(true);
            let worldMatrix = cones[i].getWorldMatrix();

            let rotationQuaternion = cones[i].rotationQuaternion;
            if (!rotationQuaternion) {
                rotationQuaternion = BABYLON.Quaternion.RotationYawPitchRoll(cones[i].rotation.y, cones[i].rotation.x, cones[i].rotation.z);
            }
            let rotation = rotationQuaternion.toEulerAngles();

            let data = BABYLON.VertexData.ExtractFromMesh(cones[i]);
            data.transform(worldMatrix);
            // 0 1 corners
            // 0 2 width
            // 0 3 height
            // 0 4 depth
            let boundingBox = cones[i].getBoundingInfo().boundingBox;
            let center = boundingBox.center;
            let vertices = boundingBox.vectorsWorld
            let width = Distance3D(vertices[0].x, vertices[0].y, vertices[0].z, vertices[2].x, vertices[2].y, vertices[2].z);
            let height = Distance3D(vertices[0].x, vertices[0].y, vertices[0].z, vertices[3].x, vertices[3].y, vertices[3].z);
            let depth = Distance3D(vertices[0].x, vertices[0].y, vertices[0].z, vertices[4].x, vertices[4].y, vertices[4].z);
            MapInit += `cone = BABYLON.MeshBuilder.CreateCylinder('${cones[i].name}', {diameterTop: 0, diameterBottom:${width}, height:${height-0.1}}, scene);
                                cone.scaling = new BABYLON.Vector3(${width}, ${height-0.05}, ${depth});
                                cone.position = new BABYLON.Vector3(${center.x-0.05}, ${center.y}, ${center.z});
                                cone.rotation = new BABYLON.Vector3(${rotation.x}, ${rotation.y}, ${rotation.z});
                                cone.physicsImpostor = new BABYLON.PhysicsImpostor(cone, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0, friction: 0.6}, scene);
                                cone.physicsImpostor.registerOnPhysicsCollide(player.physicsImpostor, function(main, collided) {
                                    window.change_state.die("Died From Cone");
                                });
                                BABYLON.Tags.AddTagsTo(cone, 'mesh cone');`;
        }
        for (let i = 0; i < ends.length; i++) {
            ends[i].computeWorldMatrix(true);
            let worldMatrix = ends[i].getWorldMatrix();

            let rotationQuaternion = ends[i].rotationQuaternion;
            if (!rotationQuaternion) {
                rotationQuaternion = BABYLON.Quaternion.RotationYawPitchRoll(ends[i].rotation.y, ends[i].rotation.x, ends[i].rotation.z);
            }
            let rotation = rotationQuaternion.toEulerAngles();

            let data = BABYLON.VertexData.ExtractFromMesh(ends[i]);
            data.transform(worldMatrix);
            // 0 1 corners
            // 0 2 width
            // 0 3 height
            // 0 4 depth
            let boundingBox = ends[i].getBoundingInfo().boundingBox;
            let center = boundingBox.center;
            let vertices = boundingBox.vectorsWorld
            let width = Distance3D(vertices[0].x, vertices[0].y, vertices[0].z, vertices[2].x, vertices[2].y, vertices[2].z);
            let height = Distance3D(vertices[0].x, vertices[0].y, vertices[0].z, vertices[3].x, vertices[3].y, vertices[3].z);
            MapInit += `end = BABYLON.MeshBuilder.CreateCylinder('${ends[i].name}', {diameterTop: ${width}, diameterBottom:${width}, height:${height}}, scene);
                                end.position = new BABYLON.Vector3(${center.x-0.05}, ${center.y}, ${center.z});
                                end.rotation = new BABYLON.Vector3(${rotation.x}, ${rotation.y}, ${rotation.z});
                                end.physicsImpostor = new BABYLON.PhysicsImpostor(end, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0, restitution: 0, friction: 0.6}, scene);
                                end.physicsImpostor.registerOnPhysicsCollide(player.physicsImpostor, function(main, collided) {
                                    window.change_state.win();
                                });
                                BABYLON.Tags.AddTagsTo(end, 'mesh end');`;
        }
        // eval(MapInit)
        return MapScript1+MapInit+MapScirpt2+MapScirpt3+MapScirpt4
    }
    $("#Export").click(function(){
        const script = ExportMap();
        $("#ExportMap").val(script);
    })

    $('#PracticeX').val('0');
    $('#PracticeY').val('1');
    $('#PracticeZ').val('0');
    $('#PracticeR').val('0');
    $('#gravity').val('-9');
    $('#speed').val('0.28');
    $("#speedindicator").text($("#speed").val());
    $("#gravityindicator").text($("#gravity").val());

    $("#togglemenu").click(function () {
        $(".modmenuOption").toggle();
    });
    $("#toggleLevelEditor").click(function () {
        $(".LevelEditorOption").toggle();
    });
    $("#toggleLevelEditorObjects").click(function () {
        $(".LevelEditorObjects").toggle();
    });
    $("#toggleLevelEditorControl").click(function () {
        $(".LevelEditorControl").toggle();
    });
    $("#toggleLevelEditorAdd").click(function () {
        $(".LevelEditorAdd").toggle();
    });
    $("#toggledodocontrols").click(function () {
        $("#dodocontrols").toggle();
    });
    $("#togglecheats").click(function () {
        $("#cheats").toggle();
    });
    $("#gravityoverwrite").click(function () {
        $("#gravitytoggle").toggle();
    });
    $("#speedoverwrite").click(function () {
        $("#speedtoggle").toggle();
    });

    $("#gravity").on("input", function() {
        $("#gravityindicator").text($(this).val());
    });
    $("#speed").on("input", function() {
        $("#speedindicator").text($(this).val());
    });

    $("#home").click(function () {
        camera.position = new BABYLON.Vector3(0,0,0);
    });
    $("#up").click(function () {
        camera.position.y += 1;
    });
    $("#left").click(function () {
        camera.position.x += 1;
    });
    $("#right").click(function () {
        camera.position.x -= 1;
    });
    $("#down").click(function () {
        camera.position.y -= 1;
    });
    $("#foreward").click(function () {
        camera.position.z -= 1;
    });
    $("#backward").click(function () {
        camera.position.z += 1;
    });

    // rotation
    $("#Chome").click(function () {
        camera.rotation = new BABYLON.Vector3(0,0,0);
    });
    $("#Cup").click(function () {
        camera.rotation.x -= .25;
    });
    $("#Cleft").click(function () {
        camera.rotation.y -= .25;
    });
    $("#Cright").click(function () {
        camera.rotation.y += .25;
    });
    $("#Cdown").click(function () {
        camera.rotation.x += .25;
    });
    
    $(document).keypress(function(event) {
        // move
        if (event.key === "j") {
            camera.position.x += 1;
        }
        if (event.key === "l") {
            camera.position.x -= 1;
        }
        if (event.key === "k") {
            camera.position.z += 1;
        }
        if (event.key === "i") {
            camera.position.z -= 1;
        }
        if (event.key === "p") {
            camera.position.y += 1;
        }
        if (event.key === ";") {
            camera.position.y -= 1;
        }
        // rotation
        if (event.key === "J") {
            camera.rotation.y -= .25;
        }
        if (event.key === "L") {
            camera.rotation.y += .25;
        }
        if (event.key === "K") {
            camera.rotation.x += .25;
        }
        if (event.key === "I") {
            camera.rotation.x -= .25;
        }
    });
});