import {
    M as c,
    F as l,
    S as i,
    W as r,
    T as m,
    G as d
} from "./index-56282c9a.js";
class a {
    static async getCompletionDictionary() {
        const e = {},
            t = c.getAllMapIds(),
            o = await a.getTotalCompletedMaps();
        for (const n of t) {
            const s = o.find(p => p.mapId === n);
            e[n] = {
                count: s == null ? 0 : s.count,
                time: s == null ? 1 / 0 : s.time
            }
        }
        return e
    }
    static async onMapCompleted(e, t, o = 1) {
        const n = await a.getLocalCompletedMaps(),
            s = n.find(p => p.mapId === e);
        if (s == null) {
            const p = {
                mapId: e,
                time: t,
                count: o
            };
            n.push(p)
        } else s.time = Math.min(s.time, t), s.count += o;
        await a.overwriteLocalCompletedMapsWithArray(n)
    }
    static async overwriteLocalCompletedMapsWithArray(e) {
        const t = JSON.stringify(e);
        await l.set(i.LocalCompletedMaps, t)
    }
    static async getLocalCompletedMaps() {
        return await a.readCompletedMapsStorageKey(i.LocalCompletedMaps)
    }
    static async getRemoteCompletedMaps() {
        return await a.readCompletedMapsStorageKey(i.RemoteCompletedMaps)
    }
    static async getCloudCompletedMaps() {
        return await a.readCompletedMapsStorageKey(i.CloudCompletedMaps)
    }
    static openMapListingInWebsite(e) {
        if (e == null) throw new Error("mapListing is null");
        window.open(r + "/?mapId=" + e.mapId, "_blank")
    }
    static openBrewListingInWebsite(e) {
        const t = `${r}/singleplayer?mapCodeVersion=${m}&mapUrl=${encodeURIComponent(e.jsUrl)}`;
        window.open(t, "_blank")
    }
    static getUnbeatenMapListings(e) {
        const t = [];
        for (const o in e) {
            if (e[o].count > 0) continue;
            const n = c.getMapListingFromMapId(o);
            if (n != null && !c.doesContain(t, n) && (t.push(n), t.length >= d)) break
        }
        return t
    }
    static async getTotalCompletedMaps() {
        const e = await a.getLocalCompletedMaps(),
            t = await a.getRemoteCompletedMaps(),
            o = await a.getCloudCompletedMaps();
        return c.getCompletedMapsMergedUnique([...e, ...t, ...o])
    }
    static async getDeviceCompletedMaps() {
        const e = await a.getLocalCompletedMaps(),
            t = await a.getRemoteCompletedMaps();
        return c.getCompletedMapsMergedUnique([...e, ...t])
    }
    static async readCompletedMapsStorageKey(e) {
        const t = await l.getString(e);
        return t == null ? [] : JSON.parse(t)
    }
}
export {
    a as C
};
