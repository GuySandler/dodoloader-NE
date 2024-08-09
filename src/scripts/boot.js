/* eslint-disable */
import start from './start.js';
import decorations from './decorations.js';
import {maker} from './maker.js';
// console.log(maker) I had an undefined issue solved by just adding {} to the import. I hate this
// console.log('Logging maker:', maker);
// console.log('Type of maker:', typeof maker);
// console.log('Maker keys:', Object.keys(maker));
// console.log('Maker init method:', maker.init);
export var boot = {
    didPreload: false,
    preload: async function() {
        if (this.didPreload) return;
        this.didPreload = true;
        await start.init();
        await decorations.init();
        maker.init();
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
// export default {boot};