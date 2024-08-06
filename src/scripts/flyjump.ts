/* eslint-disable */

var flyjump = {
	can_jump: false,
	jump_sess: 0,
	last_frame: 0,
	impulse_sess: 0,
	impulse_vec: null,
	init: function() {
		this.can_jump = false;
		this.last_frame = 0;
		this.jump_sess = 0;
		this.impulse_sess = 0;
		this.impulse_vec = null;

		isTouchingDriftPad = false
	},
	compute_loop: function() {
		isTouchingDriftPad = this.getIsTouchingDriftPad()

		if (score - this.last_frame > 35) {
			var can_jump = false;

			const [point1, point2] = this.getIntersectPoints()
			for (let platform of jumppads) {
				if (platform.intersectsPoint(point1) || platform.intersectsPoint(point2)) {
					can_jump = true;
					break;
				}
			}

			if (can_jump) {
				this.can_jump = can_jump;
				// amount of frames u can jump for, after exiting contact with platform.
				// this is due to human reaction time.
                // cayotee time here
				this.jump_sess = 13;
			}
		}
	},
	render_loop: function() {
		if (this.jump_sess > 0) {
			this.jump_sess -= 1;
		} else {
            // ground check
			this.can_jump = false;
		}

		if (this.impulse_sess > 0) {
			player.physicsImpostor.setLinearVelocity(this.impulse_vec);
			this.impulse_sess -= 1;
		}
	},
	jump: function() {
		const maps_with_legacy_jump = ["jump_pads", "dodo_kong", "colosseum", "do_not_jump", "deadly_precision", "asteroid_belt", "technocracy"];
		if (maps_with_legacy_jump.indexOf(currentMapId) >= 0) {
			this.legacy_jump();
			return;
		}
		if (!this.can_jump && window.platformermode == false) {return}
		this.last_frame = score;
		this.can_jump = false;

		var ImpulseVector = gravity;
		ImpulseMagnitude = -1.4 * jumpHeight * 0.9;
		ImpulseVector = ImpulseVector.scale(ImpulseMagnitude);
		ImpulseVector.x += 9 * jumpSpeed * Math.sin(rotation - 3.14) * 0.24;
		ImpulseVector.z += 9 * jumpSpeed * Math.cos(rotation - 3.14) * 0.24;

		player.physicsImpostor.setLinearVelocity(ImpulseVector);
		this.impulse_sess = 5;
		this.impulse_vec = ImpulseVector;
	},
	legacy_jump: function() {
		if (!this.can_jump) return
		this.last_frame = score;
		this.can_jump = false;

		player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0,0,0));

		var ImpulseVector = gravity;
		ImpulseMagnitude = -1.4 * jumpHeight;
		ImpulseVector = ImpulseVector.scale(ImpulseMagnitude);
		ImpulseVector.x += 9 * jumpSpeed * Math.sin(rotation - 3.14);
		ImpulseVector.z += 9 * jumpSpeed * Math.cos(rotation - 3.14);
		player.physicsImpostor.applyImpulse(ImpulseVector, player.getAbsolutePosition());

		this.impulse_sess = 0;
		this.impulse_vec = ImpulseVector;
	},
	getIntersectPoints: function() {
		function limit(x) {
			if (x < -1) x = -1;
			if (x > 1) x = 1;
			return x * 0.5;
		}
		return [
			new BABYLON.Vector3(player.position.x + limit(gravity.x), player.position.y + limit(gravity.y), player.position.z + limit(gravity.z)),
			new BABYLON.Vector3(player.position.x + 2*limit(gravity.x), player.position.y + 2*limit(gravity.y), player.position.z + 2*limit(gravity.z)),
		]
	},
	getIsTouchingDriftPad() {
		const [point1, point2] = this.getIntersectPoints()
		for (let platform of driftPads) {
			if (platform.intersectsPoint(point1) || platform.intersectsPoint(point2)) {
				return true
			}
		}
		return false
	}
}