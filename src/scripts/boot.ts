/* eslint-disable */

var boot = {
    didPreload: false,
    preload: async function() {
        if (this.didPreload) return;
        this.didPreload = true;
        await start.init();
        await decorations.init();
        await maker.init();
        await start.create_scene();
        await cc.set_default();
        await decorations.add_particle_system();
    },
    init: async function() {
        await fov.init();
        await flyjump.init();
        const mapScript = document.querySelector('#map-script').innerHTML;
        eval(mapScript);
        await map.init();
        await cc.refresh()
        decorations.addOrRemoveSkybox()
        await change_state.spawn();
        // await premium.updatePremiumRequirementMet();
        await map.post();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
