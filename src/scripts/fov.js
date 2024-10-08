/* eslint-disable */
// import {VSingleplayer} from "../assets/VSingleplayer";
// import {camera} from "./start";
// import {VSingleplayer} from "../assets/VSingleplayer";
// import {camera} from "./start";
window.fov = {
	radius: 1,
	y_offset: 2,
	mul1: 1,
	mul2: 1,
	init: function() {
		// this.set_mul1(VSingleplayer.settings.fovLevel);
		this.set_mul1(window.settings.fovLevel);
		this.apply();
	},
	set_mul1: function(option) {
		if (option == "x1") {
			this.mul1 = 0.8;
			this.radius = 1;
		} else if (option == "x2") {
			this.mul1 = 1.0;
			this.radius = 0.75;
		} else if (option == "x3") {
			this.mul1 = 1.4;
			this.radius = 0.5;
		}
		this.apply();
		
		// fov		0.8		1.4
		// y		2		1.2
		// r 		1		0.4
	},
	set_mul2: function(value) {
		this.mul2 = value;
		this.apply();
	},
	apply: function() {
		var intensity = this.mul1 * this.mul2;
		window.camera.fov = Math.min(intensity, 2.8);
	}
}
// export { fov }
// export default fov;