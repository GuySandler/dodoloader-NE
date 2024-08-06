/* eslint-disable */

var cleanup = {
	run: function(full_reset=true) {
		if (isMapLoaded == false) {
			console.error("Map is not loaded");
			return;
		}
		if (full_reset == true) {
			currentMapId = null;
			isMapLoaded = false;
			map = {
				render_update: function() {},
				physics_update: function() {},
				section_update: function() {}
			}
			cc.hard_reset();
		}

		for (let i=0;i<maker.ending_count;i++) {
			let mesh_name = "E" + i;
			let mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		for (let i=0;i<maker.platform_count;i++) {
			let mesh_name = "P" + i;
			let mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		for (let i=0;i<maker.cone_count;i++) {
			let mesh_name = "C" + i;
			let mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		for (let i=0;i<maker.cylinder_count;i++) {
			let mesh_name = "Y" + i;
			let mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		for (let i=0;i<maker.sphere_count;i++) {
			let mesh_name = "S" + i;
			let mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		cones = [];
		endings = [];
		jumppads = [];
		driftPads = [];
		maker.platform_count = 0;
		maker.cone_count = 0;
		maker.cylinder_count = 0;
		maker.sphere_count = 0;
		maker.ending_count = 0;
	}
}