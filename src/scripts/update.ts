/* eslint-disable */


var update = {
	loop: function() {
		if (!isMapLoaded) return
		scene.render();
		if (isSpectating) {
			this.loopWhileSpectating();
		} else if (alive) {
			this.loopWhilePlaying();
		}
	},
	loopWhileSpectating() {
		spectateAnimationValue += 1;

		camera.rotation.x = 0.1 + Math.sqrt(spectateAnimationValue * 0.0015);
		camera.rotation.z = 0;
		camera.rotation.y = Math.PI;

		camera.position.x = 0;
		camera.position.z = -0.2 * spectateAnimationValue;
		camera.position.y = 2 + 0.2 * spectateAnimationValue;
	},
	loopWhilePlaying() {
		try {
			score += 1;
			window.tsTriggers.onFrame()
			// render call
            this.player_move();
			map.render_update();
			map.section_update();
			flyjump.render_loop();
			// physics call
			if (score % physics_call_rate == 0) {
                // god mode
                this.collision_check();
				map.physics_update();
				flyjump.compute_loop();
				this.update_overlay();
			}
		} catch(err) {
			console.log(err);
		}
	},
    // spesific god mode
	collision_check: function() {
        let godmodeCheckbox = document.getElementById("godmode");
        let freeze = document.getElementById("freeze");
        if (!godmodeCheckbox.checked) {
            if (player.position.y < -20) {change_state.die('Fell To Death')}
            if (player.position.y > 80) {change_state.die('Left The Orbit')}
            this.checkConeCollision()
        }
        this.checkEndingCollision()
	},
	checkConeCollision() {
		for (let i=0;i<maker.cone_count;i++) {
			let cone = cones[i];
			if (this.are_touching(player, cone, 0.5)) {
				change_state.die('Died From Cone');
				break;
			}
		}
	},
	checkEndingCollision() {
		if (score < 10) return
		for (let i=0;i<maker.ending_count;i++) {
			let ending = endings[i];
			if (this.are_touching(player, ending, 1.2)) { // previously 1.0
				change_state.win();
				break;
			}
		}
	},
	player_move: function() {
		// steer
		if ((controls.space) && (score > 10)) {
			flyjump.jump();
		}
		if (!this.shouldSpin()) {
			player.physicsImpostor.setAngularVelocity(new BABYLON.Vector3(0,0,0));
			player.rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0,0,0),0);
		}
		const rotationAdjustment = window.tsTriggers.getRotationAdjustment()
		rotation += rotationAdjustment
		player.rotation.y = rotation;

        let freeze = document.getElementById("freeze");
        if (window.platformermode) {}
        else if (freeze.checked == false) {
            const positionAdjustment = window.tsTriggers.getPositionAdjustment()
            player.position.x += positionAdjustment.x;
            player.position.z += positionAdjustment.z;
        }
		// light & camera
        let freecam = document.getElementById("freecam");
        let follow = document.getElementById("follow");
        if (!freecam.checked) {
            let rotation_offsetted = rotation + cameraRightAngle;
            camera.position.x = player.position.x + Math.sin(rotation_offsetted) * cam_horizontal;
            camera.position.z = player.position.z + Math.cos(rotation_offsetted) * cam_horizontal;
            camera.position.y = player.position.y + cam_vertical;
            camera.rotation.y = 3.14 + rotation_offsetted;
            camera.rotation.x = cam_depression;
        }
        else if (follow.checked) {
            camera.setTarget(player.position)
        }
		light.position = camera.position;
	},
	shouldSpin: function() {
        let spinCheckbox = document.getElementById("spin");
        if (spinCheckbox.checked == false) {
            if (flyjump.can_jump) return false;
            if (speed === default_speed) return true;
            if (speed === 0.2) return true;
            return false
        }
        else {return false;}
	},
	are_touching: function(a, b, r) {
		let dz = a.position.z - b.position.z;
		if (Math.abs(dz) < r) {
			let dx = a.position.x - b.position.x;
			if (Math.abs(dx) < r) {
				let dy = a.position.y - b.position.y;
				if (Math.abs(dy) < r * 1.5) {
					return true;
				}
			}
		}
		return false;
	},
	set_gravity: function(val) {
        let gravitytoggle = document.getElementById("gravityoverwrite")
		if (!gravitytoggle.checked) {
            scene.gravity = new BABYLON.Vector3(0, val, 0);
            gravity = scene.gravity;
            scene.getPhysicsEngine().setGravity(scene.gravity);
            player.applyGravity = true;
        }
	},
	update_overlay: function() {
		const isJumpEnabled = flyjump.can_jump;
		cape_wings.isVisible = isJumpEnabled;
		window.tsTriggers.setJumpEnabledSignVisibility(isJumpEnabled);

        window.tsTriggers.setPlatformerSignVisibility(window.platformermode);

		const isControlsReversed = (steer < 0);
		cape_tail.isVisible = isControlsReversed;
		window.tsTriggers.setControlsReversedSignVisibility(isControlsReversed);

		window.tsTriggers.setDriftEnabledSignVisibility(isTouchingDriftPad);
	}
}