// import "src/assets/index.css";
// import "src/assets/VSingleplayer.css"

//modloader auto generated (old interperter)
const WEBSITE_URL = "https://icedodo.onionfist.com";
const ALL_DIFFICULTIES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const LATEST_MAP_CODE_VERSION = "v8";
const NEWCOMER_GRADUATE_AT_MAP_COMPLETION_COUNT = 0;
const ULTRAHARD_UNLOCK_AT_OVERALL_PERCENT = 0.0;
const FINDER_MAX_RESULTS = 100;
const CLOSE_BUTTON_TEXT = "Close [X]";

const Addcup = JSON.parse(localStorage.getItem("CupNames"))

let AddMapTocup = JSON.parse(localStorage.getItem("CupMaps"))
function convertStringToArray(input) {
    const jsonString = `[${input}]`;
    const resultArray = JSON.parse(jsonString);
    return resultArray;
}
const inputString = AddMapTocup;
const formattedInputString = inputString.toString().replace(/(\w+):/g, '"$1":');
AddMapTocup = convertStringToArray(formattedInputString);

const Addskin = JSON.parse(localStorage.getItem("CupImages"))



// DO NOT DELETE clear all lines above this one DO NOT DELETE
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const relList = document.createElement("link").relList;
// if (relList && relList.supports && relList.supports("modulepreload")) return // disabled by bug
for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {processPreload(link);}
new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type !== "childList") {
        continue;
        }
        for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
            processPreload(node);
        }
    }
}).observe(document, { childList: true, subtree: true });
function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity) fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy) fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials") fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
}
function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
}
class ArrayUtils {
  static getAverage(array) {
    if (array.length === 0)
      throw new Error("array is empty");
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }
  static areEqual(array1, array2) {
    if (array1.length !== array2.length)
      return false;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i])
        return false;
    }
    return true;
  }
  static getRandomElement(array) {
    if (array.length === 0)
      throw new Error("array is empty");
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  static getUniqueTexts(array) {
    const uniqueElements = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (uniqueElements.includes(element))
        continue;
      uniqueElements.push(element);
    }
    return uniqueElements;
  }
  static getArrayWithRemovedElement(oldArray, elementToRemove) {
    const newArray = [];
    for (const oldElement of oldArray) {
      if (oldElement == elementToRemove)
        continue;
      newArray.push(oldElement);
    }
    return newArray;
  }
}
class SponsorUtils {
  static getRandomSponsor() {
    const allSponsors = SponsorUtils.getAllSponsors();
    if (allSponsors.length === 0)
      return null;
    return ArrayUtils.getRandomElement(allSponsors);
  }
  static getAllSponsors() {
    return [];
  }
}
class FSponsorManager {
  constructor() {
  }
  onPageLoaded() {
    const sponsor = SponsorUtils.getRandomSponsor();
    if (sponsor == null) {
      FSponsorManager.deleteSponsorInquiryLink();
      return;
    }
    this.createSponsorDiv(sponsor);
  }
  onDeath() {
    const sponsor = SponsorUtils.getRandomSponsor();
    if (sponsor == null)
      return;
    this.updateSponsorDiv(sponsor);
  }
  createSponsorDiv(sponsor) {
    const anchor = document.createElement("a");
    anchor.href = sponsor.href;
    anchor.target = "_blank";
    anchor.setAttribute("id", "sponsorAnchor");
    const image = document.createElement("img");
    image.classList.add("noDrag");
    image.classList.add("hoverOutline");
    image.style.width = "728px";
    image.style.height = "90px";
    image.src = sponsor.image;
    image.setAttribute("id", "sponsorImage");
    anchor.appendChild(image);
    const containerDiv = document.getElementById("endingHorizontalBag");
    if (containerDiv == null)
      throw new Error("containerDiv is null");
    containerDiv.appendChild(anchor);
    FSponsorManager.setSponsorName(sponsor);
  }
  updateSponsorDiv(sponsor) {
    const sponsorAnchor = document.getElementById("sponsorAnchor");
    const sponsorImage = document.getElementById("sponsorImage");
    sponsorAnchor.href = sponsor.href;
    sponsorImage.src = sponsor.image;
    FSponsorManager.setSponsorName(sponsor);
  }
  static setSponsorName(sponsor) {
    const sponsorNameDiv = document.getElementById("sponsorName");
    sponsorNameDiv.innerText = `Our sponsor: ${sponsor.name}`;
  }
  static deleteSponsorInquiryLink() {
    const sponsorInquiryLinkDiv = document.getElementById("sponsorInquiryLink");
    if (sponsorInquiryLinkDiv == null)
      return;
    sponsorInquiryLinkDiv.remove();
  }
}
const base = "";
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
function normalizeStyle(value) {
  if (isArray$1(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*.*?\*\//gs;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray$1(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray$1(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray$1(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray$1 = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this.active = true;
    this.effects = [];
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  run(fn) {
    if (this.active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  on() {
    activeEffectScope = this;
  }
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this.active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
      this.active = false;
    }
  }
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    trackEffects(dep);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray$1(target)) {
    const newLength = toNumber(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray$1(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray$1(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray$1(dep) ? dep : [...dep];
  for (const effect of effects) {
    if (effect.computed) {
      triggerEffect(effect);
    }
  }
  for (const effect of effects) {
    if (!effect.computed) {
      triggerEffect(effect);
    }
  }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
const get = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray$1(target);
    if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow) {
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray$1(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray$1(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray$1(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    return true;
  },
  deleteProperty(target, key) {
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()));
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep);
    }
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
var _a;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this[_a] = false;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
_a = "__v_isReadonly";
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  return cRef;
}
function warn(msg, ...args) {
  return;
}
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    console.error(err);
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray$1(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(seen2, i = isFlushing ? flushIndex + 1 : 0) {
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.pre) {
      queue.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen2) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
  const diff = getId(a) - getId(b);
  if (diff === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff;
};
function flushJobs(seen2) {
  isFlushPending = false;
  isFlushing = true;
  queue.sort(comparator);
  const check = NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (false)
          ;
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs();
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs();
    }
  }
}
function emit$1(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => isString(a) ? a.trim() : a);
    }
    if (number) {
      args = rawArgs.map(toNumber);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray$1(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function pushScopeId(id) {
  currentScopeId = id;
}
function popScopeId() {
  currentScopeId = null;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (false)
        ;
      result = normalizeVNode(render2.length > 1 ? render2(props, false ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },
        slots,
        emit
      } : { attrs, slots, emit }) : render2(props, null));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root = cloneVNode(root, fallthroughAttrs);
      }
    }
  }
  if (vnode.dirs) {
    root = cloneVNode(root);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    root.transition = vnode.transition;
  }
  {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray$1(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function provide(key, value) {
  if (!currentInstance)
    ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else
      ;
  }
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  const instance = currentInstance;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray$1(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else
        ;
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else {
      return NOOP;
    }
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance)
      job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect = new ReactiveEffect(getter, scheduler);
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }
  const unwatch = () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
  if (ssrCleanup)
    ssrCleanup.push(unwatch);
  return unwatch;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen2) {
  if (!isObject(value) || value["__v_skip"]) {
    return value;
  }
  seen2 = seen2 || /* @__PURE__ */ new Set();
  if (seen2.has(value)) {
    return value;
  }
  seen2.add(value);
  if (isRef(value)) {
    traverse(value.value, seen2);
  } else if (isArray$1(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen2);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen2);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], seen2);
    }
  }
  return value;
}
function defineComponent(options) {
  return isFunction(options) ? { setup: options, name: options.name } : options;
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(type, hook, keepAliveRoot, true);
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
    return vnode;
  }
  const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (dir) {
      if (isFunction(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(Component, false);
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache, index) {
  let ret;
  const cached = cache && cache[index];
  if (isArray$1(source) || isString(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index] = ret;
  }
  return ret;
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
  $: (i) => i,
  $el: (i) => i.vnode.el,
  $data: (i) => i.data,
  $props: (i) => i.props,
  $attrs: (i) => i.attrs,
  $slots: (i) => i.slots,
  $refs: (i) => i.refs,
  $parent: (i) => getPublicInstance(i.parent),
  $root: (i) => getPublicInstance(i.root),
  $emit: (i) => i.emit,
  $options: (i) => resolveMergedOptions(i),
  $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
  $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
  $watch: (i) => instanceWatch.bind(i)
});
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else
      ;
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc");
  }
  const {
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    expose,
    inheritAttrs,
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (!isObject(data))
      ;
    else {
      instance.data = reactive(data);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray$1(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$1(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
  if (isArray$1(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key, opt.default, true);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v) => injected.value = v
        });
      } else {
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook(hook, instance, type) {
  callWithAsyncErrorHandling(isArray$1(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject(raw)) {
    if (isArray$1(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else
    ;
}
function resolveMergedOptions(instance) {
  const base2 = instance.type;
  const { mixins, extends: extendsOptions } = base2;
  const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
  const cached = cache.get(base2);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base2;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) => mergeOptions$1(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions$1(resolved, base2, optionMergeStrategies);
  }
  if (isObject(base2)) {
    cache.set(base2, resolved);
  }
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions$1(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose")
      ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$1(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const { props, attrs, vnode: { patchFlag } } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[0]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray$1(raw)) {
    for (let i = 0; i < raw.length; i++) {
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray$1(opt) || isFunction(opt) ? { type: opt } : Object.assign({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0] = booleanIndex > -1;
          prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray$1(expectedTypes)) {
    return expectedTypes.findIndex((t) => isSameType(t, type));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray$1(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot$1 = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (false)
      ;
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot$1(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      instance.slots = toRaw(children);
      def(children, "_", type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        extend(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: true,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = Object.assign({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    let isMounted = false;
    const app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else
          ;
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          const vnode = createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        }
      },
      unmount() {
        if (isMounted) {
          render(null, app._container);
          delete app._container.__vue_app__;
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray$1(rawRef)) {
    rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray$1(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? hasOwn(setupState, ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray$1(existing) && remove(existing, refValue);
          } else {
            if (!isArray$1(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (hasOwn(setupState, ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                ref2.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (hasOwn(setupState, ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          ref2.value = value;
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else
          ;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = true;
  const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref2, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        }
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else
          ;
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { type, props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
    } else if (!optimized) {
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
        if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true);
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(el, instance.subTree, instance, parentSuspense, null);
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(
              () => !instance.isUnmounted && hydrateSubTree()
            );
          } else {
            hydrateSubTree();
          }
        } else {
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(
          prevTree,
          nextTree,
          hostParentNode(prevTree.el),
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          isSVG
        );
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
        }
      }
    };
    const effect = instance.effect = new ReactiveEffect(
      componentUpdateFn,
      () => queueJob(update),
      instance.scope
    );
    const update = instance.update = () => effect.run();
    update.id = instance.uid;
    toggleRecurse(instance, true);
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs();
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++)
        newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove3 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove3();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove3, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const { type, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, update, subTree, um } = instance;
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPreFlushCbs();
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray$1(ch1) && isArray$1(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
const isTeleport = (type) => type.__isTeleport;
const Fragment = Symbol(void 0);
const Text = Symbol(void 0);
const Comment = Symbol(void 0);
const Static = Symbol(void 0);
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
  return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(type, props, true);
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject(style)) {
      if (isProxy(style) && !isArray$1(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray$1(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx
  };
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray$1(child)) {
    return createVNode(
      Fragment,
      null,
      child.slice()
    );
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray$1(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray$1(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid$1++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    emit: null,
    emitted: null,
    propsDefaults: EMPTY_OBJ,
    inheritAttrs: type.inheritAttrs,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit$1.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  const { setup } = Component;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else
    ;
  finishComponentSetup(instance, isSSR);
}
let compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(extend({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions(instance);
    resetTracking();
    unsetCurrentInstance();
  }
}
function createAttrsProxy(instance) {
  return new Proxy(instance.attrs, {
    get(target, key) {
      track(instance, "get", "$attrs");
      return target[key];
    }
  });
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  let attrs;
  {
    return {
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  }
}
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject(propsOrChildren) && !isArray$1(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
const ssrContextKey = Symbol(``);
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    return ctx;
  }
};
const version = "3.2.45";
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is, props) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  insertStaticContent(content, parent, anchor, isSVG, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;
      if (isSVG) {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      before ? before.nextSibling : parent.firstChild,
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString(next);
  if (next && !isCssString) {
    for (const key in next) {
      setStyle(style, key, next[key]);
    }
    if (prev && !isString(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
  } else {
    const currentDisplay = style.display;
    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
    if ("_vod" in el) {
      style.display = currentDisplay;
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray$1(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null)
      val = "";
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean = isSpecialBooleanAttr(key);
    if (value == null || isBoolean && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? "" : value);
    }
  }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  if (key === "value" && el.tagName !== "PROGRESS" && !el.tagName.includes("-")) {
    el._value = value;
    const newValue = value == null ? "" : value;
    if (el.value !== newValue || el.tagName === "OPTION") {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
  }
  needRemove && el.removeAttribute(key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray$1(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
  } else {
    return value;
  }
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && nativeOnRE.test(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key) && isString(value)) {
    return false;
  }
  return key in el;
}
const getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"] || false;
  return isArray$1(fn) ? (value) => invokeArrayFns(fn, value) : fn;
};
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  const target = e.target;
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
const vModelText = {
  created(el, { modifiers: { lazy, trim, number } }, vnode) {
    el._assign = getModelAssigner(vnode);
    const castToNumber = number || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", (e) => {
      if (e.target.composing)
        return;
      let domValue = el.value;
      if (trim) {
        domValue = domValue.trim();
      }
      if (castToNumber) {
        domValue = toNumber(domValue);
      }
      el._assign(domValue);
    });
    if (trim) {
      addEventListener(el, "change", () => {
        el.value = el.value.trim();
      });
    }
    if (!lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  },
  mounted(el, { value }) {
    el.value = value == null ? "" : value;
  },
  beforeUpdate(el, { value, modifiers: { lazy, trim, number } }, vnode) {
    el._assign = getModelAssigner(vnode);
    if (el.composing)
      return;
    if (document.activeElement === el && el.type !== "range") {
      if (lazy) {
        return;
      }
      if (trim && el.value.trim() === value) {
        return;
      }
      if ((number || el.type === "number") && toNumber(el.value) === value) {
        return;
      }
    }
    const newValue = value == null ? "" : value;
    if (el.value !== newValue) {
      el.value = newValue;
    }
  }
};
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn, modifiers) => {
  return (event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = hyphenate(event.key);
    if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) {
      return fn(event);
    }
  };
};
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app._component;
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    container.innerHTML = "";
    const proxy = mount(container, false, container instanceof SVGElement);
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || obj[Symbol.toStringTag] === "Module";
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = isArray(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop = () => {
};
const isArray = Array.isArray;
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const hashPos = location2.indexOf("#");
  let searchPos = location2.indexOf("?");
  if (hashPos < searchPos && hashPos >= 0) {
    searchPos = -1;
  }
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base2) {
  if (!base2 || !pathname.toLowerCase().startsWith(base2.toLowerCase()))
    return pathname;
  return pathname.slice(base2.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a, b) {
  const aLastIndex = a.matched.length - 1;
  const bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length)
    return false;
  for (const key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a, b) {
  return isArray(a) ? isEquivalentArray(a, b) : isArray(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
  return isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (segment === ".")
      continue;
    if (segment === "..") {
      if (position > 1)
        position--;
    } else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base2) {
  if (!base2) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base2 = baseEl && baseEl.getAttribute("href") || "/";
      base2 = base2.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base2 = "/";
    }
  }
  if (base2[0] !== "/" && base2[0] !== "#")
    base2 = "/" + base2;
  return removeTrailingSlash(base2);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base2, location2) {
  return base2.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base2, location2) {
  const { pathname, search, hash } = location2;
  const hashPos = base2.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base2.slice(hashPos)) ? base2.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base2);
  return path + search + hash;
}
function useHistoryListeners(base2, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base2, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index = listeners.indexOf(callback);
      if (index > -1)
        listeners.splice(index, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener);
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base2) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base2, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      position: history2.length - 1,
      replaced: true,
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace2) {
    const hashIndex = base2.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base2 : base2.slice(hashIndex)) + to : createBaseLocation() + base2 + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        console.error(err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    const state = assign({}, history2.state, buildState(
      historyState.value.back,
      to,
      historyState.value.forward,
      true
    ), data, { position: historyState.value.position });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign(
      {},
      historyState.value,
      history2.state,
      {
        forward: to,
        scroll: computeScrollPosition()
      }
    );
    changeLocation(currentState.current, currentState, true);
    const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base2) {
  base2 = normalizeBase(base2);
  const historyNavigation = useHistoryStateNavigation(base2);
  const historyListeners = useHistoryListeners(base2, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign({
    location: "",
    base: base2,
    go,
    createHref: createHref.bind(null, base2)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = Symbol("");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
  {
    return assign(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [90];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i = 1; i < match.length; i++) {
      const value = match[i] || "";
      const key = keys[i - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (isArray(param) && !repeatable) {
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          }
          const text = isArray(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path || "/";
  }
  return {
    re,
    score,
    keys,
    parse,
    stringify
  };
}
function compareScoreArray(a, b) {
  let i = 0;
  while (i < a.length && i < b.length) {
    const diff = b[i] - a[i];
    if (diff)
      return diff;
    i++;
  }
  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a, b) {
  let i = 0;
  const aScore = a.score;
  const bScore = b.score;
  while (i < aScore.length && i < bScore.length) {
    const comp = compareScoreArray(aScore[i], bScore[i]);
    if (comp)
      return comp;
    i++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Invalid path "${path}"`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i < path.length) {
    char = path[i++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign(parser, {
    record,
    parent,
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign({}, mainNormalizedRecord, {
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if (mainNormalizedRecord.children) {
        const children = mainNormalizedRecord.children;
        for (let i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      }
      originalRecord = originalRecord || matcher;
      if (matcher.record.components && Object.keys(matcher.record.components).length || matcher.record.name || matcher.record.redirect) {
        insertMatcher(matcher);
      }
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index = matchers.indexOf(matcherRef);
      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes2() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i = 0;
    while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
      i++;
    matchers.splice(i, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign(
        paramsFromLocation(
          currentLocation.params,
          matcher.keys.filter((k) => !k.optional).map((k) => k.name)
        ),
        location2.params && paramsFromLocation(location2.params, matcher.keys.map((k) => k.name))
      );
      path = matcher.stringify(params);
    } else if ("path" in location2) {
      path = location2.path;
      matcher = matchers.find((m) => m.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes.forEach((route) => addRoute(route));
  return { addRoute, resolve: resolve2, removeRoute, getRoutes: getRoutes2, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || null : record.component && { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "boolean" ? props : props[name];
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }
  return options;
}
function isRecordChildOf(record, parent) {
  return parent.children.some((child) => child === record || isRecordChildOf(record, child));
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
const matchedRouteKey = Symbol("");
const viewDepthKey = Symbol("");
const routerKey = Symbol("");
const routeLocationKey = Symbol("");
const routerViewLocationKey = Symbol("");
function useCallbacks() {
  let handlers = [];
  function add2(handler) {
    handlers.push(handler);
    return () => {
      const i = handlers.indexOf(handler);
      if (i > -1)
        handlers.splice(i, 1);
    };
  }
  function reset() {
    handlers = [];
  }
  return {
    add: add2,
    list: () => handlers,
    reset
  };
}
function guardToPromiseFn(guard, to, from, record, name) {
  const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false) {
        reject(createRouterError(4, {
          from,
          to
        }));
      } else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
          enterCallbackArray.push(valid);
        }
        resolve2();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to, from, next);
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    guardCall.catch((err) => reject(err));
  });
}
function extractComponentsGuards(matched, guardType, to, from) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
      } else {
        let componentPromise = rawComponent();
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink(props) {
  const router2 = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router2.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1)
      return index;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent(e)) {
      return router2[unref(props.replace) ? "replace" : "push"](
        unref(props.to)
      ).catch(noop);
    }
    return Promise.resolve();
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
    return;
  if (e.defaultPrevented)
    return;
  if (e.button !== void 0 && e.button !== 0)
    return;
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e.preventDefault)
    e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: { MODE: 3 },
  setup(props, { attrs, slots }) {
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const injectedDepth = inject(viewDepthKey, 0);
    const depth = computed(() => {
      let initialDepth = unref(injectedDepth);
      const { matched } = routeToDisplay.value;
      let matchedRoute;
      while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
        initialDepth++;
      }
      return initialDepth;
    });
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
    provide(viewDepthKey, computed(() => depth.value + 1));
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const currentName = props.name;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[currentName];
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[currentName];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return normalizeSlot(slots.default, { Component: component, route }) || component;
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = applyToParams.bind(null, decode);
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    }
  }
  function getRoutes2() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    return assign({
      fullPath,
      hash,
      query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
        newTargetLocation.params = {};
      }
      return assign({
        query: to.query,
        hash: to.hash,
        params: "path" in newTargetLocation ? {} : to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(
        assign(locationAsObject(shouldRedirect), {
          state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
          force,
          replace: replace2
        }),
        redirectedFrom || targetLocation
      );
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(
        from,
        from,
        true,
        false
      );
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(failure2, 2)) {
          return pushWithRedirect(
            assign({
              replace: replace2
            }, locationAsObject(failure2.to), {
              state: typeof failure2.to === "object" ? assign({}, data, failure2.to.state) : data,
              force
            }),
            redirectedFrom || toLocation
          );
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of to.matched) {
        if (record.beforeEnter && !from.matched.includes(record)) {
          if (isArray(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    for (const guard of afterGuards.list())
      guard(to, from, failure);
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      if (!router2.listening)
        return;
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(error, 4 | 8)) {
          return error;
        }
        if (isNavigationFailure(error, 2)) {
          pushWithRedirect(
            error.to,
            toLocation
          ).then((failure) => {
            if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop);
          return Promise.reject();
        }
        if (info.delta) {
          routerHistory.go(-info.delta, false);
        }
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(
          toLocation,
          from,
          false
        );
        if (failure) {
          if (info.delta && !isNavigationFailure(failure, 8)) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop);
    });
  }
  let readyHandlers = useCallbacks();
  let errorHandlers = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorHandlers.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve3, reject) => {
      readyHandlers.add([resolve3, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve3, reject]) => err ? reject(err) : resolve3());
      readyHandlers.reset();
    }
    return err;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router2 = {
    currentRoute,
    listening: true,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes: getRoutes2,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady,
    install(app) {
      const router3 = this;
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router3;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        reactiveRoute[key] = computed(() => currentRoute.value[key]);
      }
      app.provide(routerKey, router3);
      app.provide(routeLocationKey, reactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
    }
  };
  return router2;
}
function runGuardQueue(guards) {
  return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i = 0; i < len; i++) {
    const recordFrom = from.matched[i];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
const _hoisted_1$1 = { class: "appMain" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1$1, [
        createVNode(unref(RouterView), { class: "routerView" })
      ]);
    };
  }
});
const App_vue_vue_type_style_index_0_scoped_89c65bae_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-89c65bae"]]);
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
class MiscUtils {
  static getNumberEnumKeys(myEnum) {
    return Object.keys(myEnum).map((key) => myEnum[key]).filter((value) => typeof value === "number");
  }
  static getStringEnumKeys(myEnum) {
    return Object.keys(myEnum).filter((key) => isNaN(Number(key)));
  }
  static getStringEnumValues(myEnum) {
    return MiscUtils.getStringEnumKeys(myEnum).map((key) => myEnum[key]);
  }
  static getSimpleHash(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
      const chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash;
  }
  static deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  static getSmallDelay() {
    return new Promise((resolve2) => {
      setTimeout(() => {
        resolve2();
      }, 200);
    });
  }
}
// menu controls
var BagIdEnum = /* @__PURE__ */ ((BagIdEnum2) => {
  BagIdEnum2["LeftVerticalWide"] = "onionfist-com_300x600_5";
  BagIdEnum2["RightVerticalWide"] = "onionfist-com_300x600_6";
  BagIdEnum2["LeftVerticalThin"] = "onionfist-com_160x600_1";
  BagIdEnum2["RightVerticalThin"] = "onionfist-com_160x600_2";
  BagIdEnum2["Horizontal"] = "onionfist-com_728x90";
  return BagIdEnum2;
})(BagIdEnum || {});
MiscUtils.getStringEnumValues(BagIdEnum);
// not effecting game
const API_SERVER_URL = "https://icedodo-api.onionfist.com";
var LinkEnum = /* @__PURE__ */ ((LinkEnum2) => {
  LinkEnum2["Discord"] = "https://discord.com/invite/onionfist-studio-750973906986467349";
  LinkEnum2["Instagram"] = "https://www.instagram.com/seojoon.y/";
  LinkEnum2["Youtube"] = "https://www.youtube.com/@pepperblow8054";
  LinkEnum2["IceDodoOnWebstore"] = "https://chrome.google.com/webstore/detail/ice-dodo/jhidcpailhmpjpbdbhceiaeeggkalgmd";
  LinkEnum2["MapMakingTutorial"] = "https://onionfist.com/ice_map_tut/";
  LinkEnum2["Homepage"] = "https://onionfist.com/";
  LinkEnum2["PrivacyPolicy"] = "https://onionfist.com/privacy_policy";
  LinkEnum2["TermsOfService"] = "https://onionfist.com/terms_of_service";
  return LinkEnum2;
})(LinkEnum || {});
var PageIdEnum = /* @__PURE__ */ ((PageIdEnum2) => {
  PageIdEnum2[PageIdEnum2["Game"] = 0] = "Game";
  PageIdEnum2[PageIdEnum2["Menu"] = 1] = "Menu";
  PageIdEnum2[PageIdEnum2["Credits"] = 2] = "Credits";
  PageIdEnum2[PageIdEnum2["Settings"] = 3] = "Settings";
  PageIdEnum2[PageIdEnum2["Cups"] = 4] = "Cups";
  PageIdEnum2[PageIdEnum2["Skins"] = 5] = "Skins";
  PageIdEnum2[PageIdEnum2["Finder"] = 6] = "Finder";
  PageIdEnum2[PageIdEnum2["Achievements"] = 7] = "Achievements";
  return PageIdEnum2;
})(PageIdEnum || {});
var StorageKeyEnum = /* @__PURE__ */ ((StorageKeyEnum2) => {
  StorageKeyEnum2["IsNewcomer"] = "isNewcomer";
  StorageKeyEnum2["DeviceId"] = "deviceId";
  StorageKeyEnum2["IsSoundOn"] = "isSoundOn";
  StorageKeyEnum2["IsAutoRestartOn"] = "isAutoRestartOn";
  StorageKeyEnum2["LocalCompletedMaps"] = "completedMaps";
  StorageKeyEnum2["RemoteCompletedMaps"] = "remoteCompletedMaps";
  StorageKeyEnum2["CloudCompletedMaps"] = "cloudCompletedMaps";
  StorageKeyEnum2["BaseTexture"] = "baseTexture";
  StorageKeyEnum2["FovLevel"] = "fovLevel";
  StorageKeyEnum2["IsSkyboxOn"] = "isSkyboxOn";
  StorageKeyEnum2["ScreenResolution"] = "screenResolution";
  StorageKeyEnum2["DidMigrateLegacyData"] = "didMigrateLegacyData";
  StorageKeyEnum2["LastReadNewsSimpleHash"] = "lastReadNewsSimpleHash";
  StorageKeyEnum2["LastOpenedCupId"] = "lastOpenedCupId";
  StorageKeyEnum2["SelectedSkinId"] = "selectedSkinId";
  StorageKeyEnum2["RenderLoop"] = "renderLoop";
  StorageKeyEnum2["NextPointPopupIndex"] = "nextPointPopupIndex";
  StorageKeyEnum2["DoNotShowJumpEnabledPopupAgain"] = "doNotShowJumpEnabledPopupAgain";
  StorageKeyEnum2["DoNotShowDriftEnabledPopupAgain"] = "doNotShowDriftEnabledPopupAgain";
  StorageKeyEnum2["MultiplayerName"] = "multiplayerName";
  StorageKeyEnum2["FavoriteMapIds"] = "favoriteMapIds";
  StorageKeyEnum2["LastVersionText"] = "lastVersionText";
  StorageKeyEnum2["LastMapIds"] = "lastMapIds";
  StorageKeyEnum2["AddedMapIds"] = "addedMapIds";
  StorageKeyEnum2["SelectedSoundtrack"] = "selectedSoundtrack";
  StorageKeyEnum2["LastSyncTimeMs"] = "lastSyncTimeMs";
  StorageKeyEnum2["IsSortedByCompletion"] = "isSortedByCompletion";
  StorageKeyEnum2["DoesUserHaveEpilepsy"] = "doesUserHaveEpilepsy";
  StorageKeyEnum2["UnlockedPuzzleSkinIds"] = "unlockedPuzzleSkinIds";
  return StorageKeyEnum2;
})(StorageKeyEnum || {});
var StorageValueEnum = /* @__PURE__ */ ((StorageValueEnum2) => {
  StorageValueEnum2["Yes"] = "yes";
  StorageValueEnum2["No"] = "no";
  StorageValueEnum2["Maybe"] = "maybe";
  StorageValueEnum2["On"] = "on";
  StorageValueEnum2["Off"] = "off";
  StorageValueEnum2["Vsync"] = "vsync";
  StorageValueEnum2["Fixed"] = "fixed";
  StorageValueEnum2["Dark"] = "dark";
  StorageValueEnum2["Bright"] = "bright";
  StorageValueEnum2["X1"] = "x1";
  StorageValueEnum2["X2"] = "x2";
  StorageValueEnum2["X3"] = "x3";
  StorageValueEnum2["Resolution400"] = "400p";
  StorageValueEnum2["Resolution600"] = "600p";
  StorageValueEnum2["Resolution900"] = "900p";
  StorageValueEnum2["Music1"] = "Uprise";
  StorageValueEnum2["Music2"] = "Bloom";
  StorageValueEnum2["Music3"] = "Dodo Synthesis";
  StorageValueEnum2["Music4"] = "Brink";
  StorageValueEnum2["MusicDefault"] = "Cup";
  return StorageValueEnum2;
})(StorageValueEnum || {});
var QueryKeyEnum = /* @__PURE__ */ ((QueryKeyEnum2) => {
  QueryKeyEnum2["MapId"] = "mapId";
  QueryKeyEnum2["MapUrl"] = "mapUrl";
  QueryKeyEnum2["MapCodeVersion"] = "mapCodeVersion";
  QueryKeyEnum2["RoomCode"] = "roomCode";
  QueryKeyEnum2["PageId"] = "pageId";
  QueryKeyEnum2["CrashedText"] = "crashedText";
  QueryKeyEnum2["IsMultiplayer"] = "isMultiplayer";
  QueryKeyEnum2["FirstRoute"] = "firstRoute";
  return QueryKeyEnum2;
})(QueryKeyEnum || {});
var ColorEnum = /* @__PURE__ */ ((ColorEnum2) => {
  ColorEnum2["Green"] = "#56e04c";
  ColorEnum2["Red"] = "#e04c4f";
  ColorEnum2["Gray"] = "#666666";
  return ColorEnum2;
})(ColorEnum || {});
var RouteEnum = /* @__PURE__ */ ((RouteEnum2) => {
  RouteEnum2["Boot"] = "/";
  RouteEnum2["Singleplayer"] = "/singleplayer";
  RouteEnum2["Multiplayer"] = "/multiplayer";
  RouteEnum2["Sync"] = "/sync";
  RouteEnum2["Info"] = "/info";
  RouteEnum2["Crashed"] = "/crashed";
  RouteEnum2["Account"] = "/account";
  return RouteEnum2;
})(RouteEnum || {});
class DeploymentUtils {
  static isLocalhost() {
    return window.location.hostname === "localhost";
  }
  static getIcedodoVersionText() {
    return 0.181;
  }
  static isExtension() {
    if (window.chrome == null)
      return false;
    if (window.chrome.storage == null)
      return false;
    return true;
  }
}
const _sfc_main = defineComponent({
  data() {
    const data = {
      isExtension: DeploymentUtils.isExtension()
    };
    return data;
  },
  methods: {},
  mounted() {
  }
});
const VBoot_vue_vue_type_style_index_0_scoped_4be08e94_lang = "";
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<div class="bootContents" data-v-4be08e94><p class="textSmall colorGray2" data-v-4be08e94>Onionfist Studio</p><h1 class="textLarge colorPinkDark" data-v-4be08e94>ICE DODO</h1><p class="textSmall" data-v-4be08e94>Loading game ...</p><p class="textSmall colorGray2" data-v-4be08e94>Version 0.181</p></div>', 1);
const _hoisted_2 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("main", {
    class: normalizeClass(["bootMain", { bootMainExtension: _ctx.isExtension, bootMainWebsite: !_ctx.isExtension }])
  }, _hoisted_2, 2);
}
const VBoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4be08e94"]]);
function getRoutes() {
  const websiteAndExtensionRoutes = [
    {
      path: "/",
      component: VBoot
    },
    {
      path: RouteEnum.Singleplayer,
    //   component: () => __vitePreload(() => import("src/assetsVSingleplayer.ts"), true ? ["./VSingleplayer.ts","./VSingleplayer.css"] : void 0)
    }
  ];
  return websiteAndExtensionRoutes;
}
const router = createRouter({
  history: createWebHistory("/"),
  routes: getRoutes()
});
class FStorage {
  static async getString(key) {
    if (!DeploymentUtils.isExtension())
      return localStorage.getItem(key) ?? null;
    return new Promise((resolve2) => {
      const chrome2 = window.chrome;
      chrome2.storage.local.get(key, function(result) {
        resolve2(result[key] ?? null);
      });
    });
  }
  static async getInteger(key) {
    const value = await FStorage.getString(key);
    if (value == null)
      return null;
    return parseInt(value, 10);
  }
  static async set(key, value) {
    if (!DeploymentUtils.isExtension()) {
      localStorage.setItem(key, value);
      return;
    }
    return new Promise((resolve2) => {
      const saveObject = { [key]: value };
      const chrome2 = window.chrome;
      chrome2.storage.local.set(saveObject, function() {
        resolve2();
      });
    });
  }
  static async setIfGetStringIsNull(key, value) {
    const currentValue = await FStorage.getString(key);
    if (currentValue != null)
      return;
    await FStorage.set(key, value);
  }
  static async destroy(key) {
    localStorage.removeItem(key);
    if (!DeploymentUtils.isExtension())
      return;
    return new Promise((resolve2) => {
      const chrome2 = window.chrome;
      chrome2.storage.local.remove(key, function() {
        resolve2();
      });
    });
  }
  static async destroyEverything() {
    localStorage.clear();
    if (!DeploymentUtils.isExtension())
      return;
    return new Promise((resolve2) => {
      const chrome2 = window.chrome;
      chrome2.storage.local.clear(function() {
        chrome2.storage.sync.clear(function() {
          resolve2();
        });
      });
    });
  }
}
// localstorage mods
// FStorage.set(StorageKeyEnum.IsNewcomer, StorageValueEnum.No);

class SettingsUtils {
  static async onBoot() {
    for (const settingsItem of SettingsUtils.getAllSettingsItems()) {
      const isCurrentSettingValid = await SettingsUtils.getIsCurrentSettingValid(settingsItem);
      if (!isCurrentSettingValid)
        await FStorage.set(settingsItem.storageKey, settingsItem.defaultStorageValue);
      const currentStorageValue = await FStorage.getString(settingsItem.storageKey);
      SettingsUtils.setSettingsItemGlobalVariable(settingsItem, currentStorageValue);
    }
  }
  static setSettingsItemGlobalVariable(settingsItem, storageValue) {
    switch (settingsItem.storageKey) {
      case StorageKeyEnum.BaseTexture:
        window.settings.baseTexture = storageValue;
        break;
      case StorageKeyEnum.FovLevel:
        window.settings.fovLevel = storageValue;
        break;
      case StorageKeyEnum.IsSkyboxOn:
        window.settings.skyboxEnabled = storageValue;
        break;
      case StorageKeyEnum.ScreenResolution:
        window.settings.screenRes = storageValue;
        break;
      case StorageKeyEnum.RenderLoop:
        window.settings.renderLoop = storageValue;
        break;
    }
  }
  static async getIsCurrentSettingValid(settingsItem) {
    const currentValue = await FStorage.getString(settingsItem.storageKey);
    if (currentValue == null)
      return false;
    if (!settingsItem.storageValues.includes(currentValue))
      return false;
    return true;
  }
  static getAllSettingsItemsExceptResolutionIfExtension() {
    const allSettingsItems = SettingsUtils.getAllSettingsItems();
    if (!DeploymentUtils.isExtension())
      return allSettingsItems;
    return allSettingsItems.filter((settingsItem) => settingsItem.storageKey !== StorageKeyEnum.ScreenResolution);
  }
  static getAllSettingsItems() {
    return [
      {
        name: "Sound",
        storageKey: StorageKeyEnum.IsSoundOn,
        storageValues: [StorageValueEnum.On, StorageValueEnum.Off],
        defaultStorageValue: StorageValueEnum.On
      },
      {
        name: "Auto Restart",
        storageKey: StorageKeyEnum.IsAutoRestartOn,
        storageValues: [StorageValueEnum.On, StorageValueEnum.Off],
        defaultStorageValue: StorageValueEnum.Off
      },
      {
        name: "Render Loop",
        storageKey: StorageKeyEnum.RenderLoop,
        storageValues: [StorageValueEnum.Vsync, StorageValueEnum.Fixed],
        defaultStorageValue: StorageValueEnum.Vsync
      },
      {
        name: "Texture",
        storageKey: StorageKeyEnum.BaseTexture,
        storageValues: [StorageValueEnum.Bright, StorageValueEnum.Dark],
        defaultStorageValue: StorageValueEnum.Bright
      },
      {
        name: "Fov Level",
        storageKey: StorageKeyEnum.FovLevel,
        storageValues: [StorageValueEnum.X1, StorageValueEnum.X2, StorageValueEnum.X3],
        defaultStorageValue: StorageValueEnum.X1
      },
      {
        name: "Galaxy",
        storageKey: StorageKeyEnum.IsSkyboxOn,
        storageValues: [StorageValueEnum.On, StorageValueEnum.Off],
        defaultStorageValue: StorageValueEnum.Off
      },
      {
        name: "Resolution",
        storageKey: StorageKeyEnum.ScreenResolution,
        storageValues: [StorageValueEnum.Resolution400, StorageValueEnum.Resolution600, StorageValueEnum.Resolution900],
        defaultStorageValue: StorageValueEnum.Resolution600
      },
      {
        name: "Song",
        storageKey: StorageKeyEnum.SelectedSoundtrack,
        storageValues: [StorageValueEnum.MusicDefault, StorageValueEnum.Music1, StorageValueEnum.Music2, StorageValueEnum.Music3, StorageValueEnum.Music4],
        defaultStorageValue: StorageValueEnum.MusicDefault
      }
    ];
  }
}
class FGlobalManager {
  constructor(world) {
    __publicField(this, "world");
    this.world = world;
    this.setValuesOnGameLoaded();
  }
  setValuesOnGameLoaded() {
    window.alive = false;
    window.score = 0;
    window.deployment = { is_chrome_ext: DeploymentUtils.isExtension() };
    window.controls = {
      left: false,
      right: false,
      space: false,
      down: false
    };
    window.tsTriggers = {
      onMapLoaded: () => {
      },
      onDeath: (deathMessage) => this.world.endingManager.onDeath(deathMessage),
      onWin: () => this.world.endingManager.onWin(),
      onFrame: () => this.world.onFrame(),
      setInGameMessage: (message) => this.world.overlayManager.setInGameMessage(message),
      hideInGameMessage: () => this.world.overlayManager.hideInGameMessage(),
      setJumpEnabledSignVisibility: (isVisible) => this.world.overlayManager.setJumpEnabledSignVisibility(isVisible),
      setControlsReversedSignVisibility: (isVisible) => this.world.overlayManager.setControlsReversedSignVisibility(isVisible),
      setPlatformerSignVisibility: (isVisible) => this.world.overlayManager.setPlatformerSignVisibility(isVisible),
      setDriftEnabledSignVisibility: (isVisible) => this.world.overlayManager.setDriftEnabledSignVisibility(isVisible),
      getRotationAdjustment: () => this.world.playerManager.getRotationAdjustment(),
      getPositionAdjustment: () => this.world.playerManager.getPositionAdjustment(),
      onEngineFailed: () => this.world.displayEngineFailedPopup()
    };
  }
  static onBoot() {
    window.settings = {};
  }
}
// init cups
let iteration = 36
let customCupnum = []
var CupIdEnum = /* @__PURE__ */ ((CupIdEnum2) => {
  CupIdEnum2[CupIdEnum2["Newcomer"] = 0] = "Newcomer";
  CupIdEnum2[CupIdEnum2["Pilot"] = 1] = "Pilot";
  CupIdEnum2[CupIdEnum2["Ye"] = 2] = "Ye";
  CupIdEnum2[CupIdEnum2["Jay"] = 3] = "Jay";
  CupIdEnum2[CupIdEnum2["Tim"] = 4] = "Tim";
  CupIdEnum2[CupIdEnum2["Golden"] = 5] = "Golden";
  CupIdEnum2[CupIdEnum2["Rocky"] = 6] = "Rocky";
  CupIdEnum2[CupIdEnum2["June"] = 7] = "June";
  CupIdEnum2[CupIdEnum2["Bean"] = 8] = "Bean";
  CupIdEnum2[CupIdEnum2["Fish"] = 9] = "Fish";
  CupIdEnum2[CupIdEnum2["Furby"] = 10] = "Furby";
  CupIdEnum2[CupIdEnum2["Abc"] = 11] = "Abc";
  CupIdEnum2[CupIdEnum2["Crazy"] = 12] = "Crazy";
  CupIdEnum2[CupIdEnum2["Kazil"] = 13] = "Kazil";
  CupIdEnum2[CupIdEnum2["Mango"] = 14] = "Mango";
  CupIdEnum2[CupIdEnum2["Sleepy"] = 15] = "Sleepy";
  CupIdEnum2[CupIdEnum2["Moosh"] = 16] = "Moosh";
  CupIdEnum2[CupIdEnum2["Thero"] = 17] = "Thero";
  CupIdEnum2[CupIdEnum2["Awehero"] = 18] = "Awehero";
  CupIdEnum2[CupIdEnum2["Doom"] = 19] = "Doom";
  CupIdEnum2[CupIdEnum2["Carrot"] = 20] = "Carrot";
  CupIdEnum2[CupIdEnum2["Dark"] = 21] = "Dark";
  CupIdEnum2[CupIdEnum2["Rytai"] = 22] = "Rytai";
  CupIdEnum2[CupIdEnum2["Ghoul"] = 23] = "Ghoul";
  CupIdEnum2[CupIdEnum2["Zhou"] = 24] = "Zhou";
  CupIdEnum2[CupIdEnum2["Insolence"] = 25] = "Insolence";
  CupIdEnum2[CupIdEnum2["Skilled"] = 26] = "Skilled";
  CupIdEnum2[CupIdEnum2["Squirrel"] = 27] = "Squirrel";
  CupIdEnum2[CupIdEnum2["PainBumpo"] = 28] = "PainBumpo";
  CupIdEnum2[CupIdEnum2["Modded"] = 29] = "Modded";
  CupIdEnum2[CupIdEnum2["Collab"] = 30] = "Collab";
  CupIdEnum2[CupIdEnum2["Dodo"] = 31] = "Dodo";
  CupIdEnum2[CupIdEnum2["Og"] = 32] = "Og";
  CupIdEnum2[CupIdEnum2["Brew"] = 33] = "Brew";
  CupIdEnum2[CupIdEnum2["Vault"] = 34] = "Vault";
  CupIdEnum2[CupIdEnum2["Ultrahard"] = 35] = "Ultrahard";
//   programatically add in cup to ID
  if (Addcup != null) {
    for (let i of Addcup) {
        CupIdEnum2[CupIdEnum2[i] = iteration] = i;
        customCupnum.push(iteration)
        iteration++;
    }
  }
  return CupIdEnum2;
})(CupIdEnum || {});
const ALL_CUP_IDS = MiscUtils.getNumberEnumKeys(CupIdEnum);
// init skins
let Skiniteration = 58
var SkinIdEnum = /* @__PURE__ */ ((SkinIdEnum2) => {
  SkinIdEnum2[SkinIdEnum2["Default"] = 0] = "Default";
  SkinIdEnum2[SkinIdEnum2["Newcomer"] = 1] = "Newcomer";
  SkinIdEnum2[SkinIdEnum2["Pilot"] = 2] = "Pilot";
  SkinIdEnum2[SkinIdEnum2["Carrot"] = 3] = "Carrot";
  SkinIdEnum2[SkinIdEnum2["Rocky"] = 4] = "Rocky";
  SkinIdEnum2[SkinIdEnum2["Dodo"] = 5] = "Dodo";
  SkinIdEnum2[SkinIdEnum2["Skilled"] = 6] = "Skilled";
  SkinIdEnum2[SkinIdEnum2["Furby"] = 7] = "Furby";
  SkinIdEnum2[SkinIdEnum2["Doom"] = 8] = "Doom";
  SkinIdEnum2[SkinIdEnum2["Kazil"] = 9] = "Kazil";
  SkinIdEnum2[SkinIdEnum2["Zhou"] = 10] = "Zhou";
  SkinIdEnum2[SkinIdEnum2["Ye"] = 11] = "Ye";
  SkinIdEnum2[SkinIdEnum2["Tim"] = 12] = "Tim";
  SkinIdEnum2[SkinIdEnum2["Ghoul"] = 13] = "Ghoul";
  SkinIdEnum2[SkinIdEnum2["Abc"] = 14] = "Abc";
  SkinIdEnum2[SkinIdEnum2["Rytai"] = 15] = "Rytai";
  SkinIdEnum2[SkinIdEnum2["Moosh"] = 16] = "Moosh";
  SkinIdEnum2[SkinIdEnum2["Dark"] = 17] = "Dark";
  SkinIdEnum2[SkinIdEnum2["Awehero"] = 18] = "Awehero";
  SkinIdEnum2[SkinIdEnum2["Jay"] = 19] = "Jay";
  SkinIdEnum2[SkinIdEnum2["Golden"] = 20] = "Golden";
  SkinIdEnum2[SkinIdEnum2["Bean"] = 21] = "Bean";
  SkinIdEnum2[SkinIdEnum2["Fish"] = 22] = "Fish";
  SkinIdEnum2[SkinIdEnum2["Thero"] = 23] = "Thero";
  SkinIdEnum2[SkinIdEnum2["Crazy"] = 24] = "Crazy";
  SkinIdEnum2[SkinIdEnum2["June"] = 25] = "June";
  SkinIdEnum2[SkinIdEnum2["Sleepy"] = 26] = "Sleepy";
  SkinIdEnum2[SkinIdEnum2["Mango"] = 27] = "Mango";
  SkinIdEnum2[SkinIdEnum2["Insolence"] = 28] = "Insolence";
  SkinIdEnum2[SkinIdEnum2["Squirrel"] = 29] = "Squirrel";
  SkinIdEnum2[SkinIdEnum2["PainBumpo"] = 30] = "PainBumpo";
  SkinIdEnum2[SkinIdEnum2["Modded"] = 31] = "Modded";
  SkinIdEnum2[SkinIdEnum2["Collab"] = 32] = "Collab";
  SkinIdEnum2[SkinIdEnum2["Og"] = 33] = "Og";
  SkinIdEnum2[SkinIdEnum2["Ultrahard"] = 34] = "Ultrahard";
  SkinIdEnum2[SkinIdEnum2["Diff1"] = 35] = "Diff1";
  SkinIdEnum2[SkinIdEnum2["Diff2"] = 36] = "Diff2";
  SkinIdEnum2[SkinIdEnum2["Diff3"] = 37] = "Diff3";
  SkinIdEnum2[SkinIdEnum2["Diff4"] = 38] = "Diff4";
  SkinIdEnum2[SkinIdEnum2["Diff5"] = 39] = "Diff5";
  SkinIdEnum2[SkinIdEnum2["Diff6"] = 40] = "Diff6";
  SkinIdEnum2[SkinIdEnum2["Diff7"] = 41] = "Diff7";
  SkinIdEnum2[SkinIdEnum2["Diff8"] = 42] = "Diff8";
  SkinIdEnum2[SkinIdEnum2["Diff9"] = 43] = "Diff9";
  SkinIdEnum2[SkinIdEnum2["Diff10"] = 44] = "Diff10";
  SkinIdEnum2[SkinIdEnum2["Diff11"] = 45] = "Diff11";
  SkinIdEnum2[SkinIdEnum2["PointsA"] = 46] = "PointsA";
  SkinIdEnum2[SkinIdEnum2["PointsB"] = 47] = "PointsB";
  SkinIdEnum2[SkinIdEnum2["PointsC"] = 48] = "PointsC";
  SkinIdEnum2[SkinIdEnum2["PointsD"] = 49] = "PointsD";
  SkinIdEnum2[SkinIdEnum2["PointsE"] = 50] = "PointsE";
  SkinIdEnum2[SkinIdEnum2["PointsF"] = 51] = "PointsF";
  SkinIdEnum2[SkinIdEnum2["PercentA"] = 52] = "PercentA";
  SkinIdEnum2[SkinIdEnum2["PercentB"] = 53] = "PercentB";
  SkinIdEnum2[SkinIdEnum2["PercentC"] = 54] = "PercentC";
  SkinIdEnum2[SkinIdEnum2["PercentD"] = 55] = "PercentD";
  SkinIdEnum2[SkinIdEnum2["PercentE"] = 56] = "PercentE";
  SkinIdEnum2[SkinIdEnum2["PuzzleA"] = 57] = "PuzzleA";
//   programatically add in cup to ID
    if (Addskin != null) {
        for (let i of Addskin) {
            SkinIdEnum2[SkinIdEnum2[i] = Skiniteration] = i;
            customCupnum.push(Skiniteration)
            Skiniteration++;
        }
    }
  return SkinIdEnum2;
})(SkinIdEnum || {});
const ALL_SKIN_IDS = MiscUtils.getNumberEnumKeys(SkinIdEnum);
// init music
var SoundFileEnum = /* @__PURE__ */ ((SoundFileEnum2) => {
  SoundFileEnum2["Bloom"] = "music/bloom.mp3";
  SoundFileEnum2["Brink"] = "music/brink.mp3";
  SoundFileEnum2["Dodosynthesis"] = "music/dodosynthesis.mp3";
  SoundFileEnum2["Dodozart_by_insolence"] = "music/dodozart_by_insolence.mp3";
  SoundFileEnum2["Microburst"] = "music/microburst.mp3";
  SoundFileEnum2["Stairways"] = "music/stairways.mp3";
  SoundFileEnum2["Tokyo"] = "music/tokyo.mp3";
  SoundFileEnum2["Valkyrie"] = "music/valkyrie.mp3";
  SoundFileEnum2["Uprise"] = "music/uprise.mp3";
  SoundFileEnum2["Death"] = "sounds/death.wav";
  SoundFileEnum2["LevelComplete"] = "sounds/level_complete.wav";
  SoundFileEnum2["Click"] = "sounds/click.wav";
  return SoundFileEnum2;
})(SoundFileEnum || {});
const ALL_SOUND_FILE_PATHS = MiscUtils.getStringEnumValues(SoundFileEnum);
class CupUtils {
  static getCupName(cupId) {
    if (cupId === CupIdEnum.Newcomer)
      return "Ice Dodo";
    return CupIdEnum[cupId] + " Cup"; // can have custom suffix
  }
  static getShortCupName(cupId) {
    if (cupId === CupIdEnum.Newcomer)
      return "Ice Dodo";
    return CupIdEnum[cupId];
  }
  static getCupSkinUrl(cupId) {
    if (cupId >= 36) {
        // return "/assets/skins/"+Addskin[cupId-36]+".png";
        return JSON.parse(localStorage.getItem("CupImages"))[cupId-36];
    }
    else {
        return `/assets/skins/${CupIdEnum[cupId].toLowerCase()}.png`;
    }
  }
  static isOnlyOnWebsite(cupId, isExtension) {
    if (!isExtension)
      return false;
    switch (cupId) {
      case CupIdEnum.Vault:
      case CupIdEnum.Dodo:
      case CupIdEnum.Brew:
      case CupIdEnum.Og:
        return false; // disables online only
      default:
        return false;
    }
  }
  static getCupByDeltaIndex(cupId, deltaIndex) {
    const nextIndex = ALL_CUP_IDS.indexOf(cupId) + deltaIndex;
    if (nextIndex < 0)
      return CupIdEnum.Ultrahard;
    if (nextIndex >= ALL_CUP_IDS.length)
      return CupIdEnum.Newcomer;
    return ALL_CUP_IDS[nextIndex];
  }
  // cup music
  static getBackgroundMusicForCup(cupId) {
    switch (cupId) {
      case CupIdEnum.Newcomer:
        return SoundFileEnum.Uprise;
      case CupIdEnum.Pilot:
        return SoundFileEnum.Bloom;
      case CupIdEnum.Carrot:
        return SoundFileEnum.Microburst;
      case CupIdEnum.Rocky:
        return SoundFileEnum.Dodosynthesis;
      case CupIdEnum.Dodo:
        return SoundFileEnum.Uprise;
      case CupIdEnum.Skilled:
        return SoundFileEnum.Dodozart_by_insolence;
      case CupIdEnum.Furby:
        return SoundFileEnum.Microburst;
      case CupIdEnum.Doom:
        return SoundFileEnum.Uprise;
      case CupIdEnum.Insolence:
        return SoundFileEnum.Microburst;
      case CupIdEnum.Dark:
        return SoundFileEnum.Uprise;
      case CupIdEnum.Kazil:
        return SoundFileEnum.Stairways;
      case CupIdEnum.Zhou:
        return SoundFileEnum.Uprise;
      case CupIdEnum.Ye:
        return SoundFileEnum.Tokyo;
      case CupIdEnum.Tim:
        return SoundFileEnum.Valkyrie;
      case CupIdEnum.Ghoul:
        return SoundFileEnum.Uprise;
      case CupIdEnum.Abc:
        return SoundFileEnum.Bloom;
      case CupIdEnum.Rytai:
        return SoundFileEnum.Uprise;
      case CupIdEnum.Jay:
        return SoundFileEnum.Dodosynthesis;
      case CupIdEnum.Golden:
        return SoundFileEnum.Uprise;
      case CupIdEnum.Bean:
        return SoundFileEnum.Dodozart_by_insolence;
      case CupIdEnum.Fish:
        return SoundFileEnum.Microburst;
      case CupIdEnum.Thero:
        return SoundFileEnum.Uprise;
      case CupIdEnum.Crazy:
        return SoundFileEnum.Stairways;
      case CupIdEnum.June:
        return SoundFileEnum.Uprise;
      case CupIdEnum.Sleepy:
        return SoundFileEnum.Tokyo;
      case CupIdEnum.Mango:
        return SoundFileEnum.Valkyrie;
      case CupIdEnum.Squirrel:
        return SoundFileEnum.Uprise;
      case CupIdEnum.PainBumpo:
        return SoundFileEnum.Microburst;
      case CupIdEnum.Moosh:
        return SoundFileEnum.Valkyrie;
      case CupIdEnum.Awehero:
        return SoundFileEnum.Valkyrie;
      case CupIdEnum.Modded:
        return SoundFileEnum.Bloom;
      case CupIdEnum.Collab:
        return SoundFileEnum.Uprise;
      case CupIdEnum.Og:
        return SoundFileEnum.Valkyrie;
      case CupIdEnum.Brew:
        return SoundFileEnum.Dodosynthesis;
      case CupIdEnum.Vault:
        return SoundFileEnum.Stairways;
      case CupIdEnum.Ultrahard:
        return SoundFileEnum.Uprise;
    case CupIdEnum.test:
        return SoundFileEnum.Uprise;
    }
  }
  // cup descriptions
  static getCupDescription(cupId) {
    switch (cupId) {
      case CupIdEnum.Newcomer:
        return "Easy maps for beginners.";
      case CupIdEnum.Pilot:
        return "Maps made by handsome uPilot. He aimed for his maps to be for beginners or players who are just bad.";
      case CupIdEnum.Carrot:
        return "Maps made by Carrots";
      case CupIdEnum.Rocky:
        return "Maps made by Rocky707";
      case CupIdEnum.Dodo:
        return "Maps made by Dododo73, the creator of the game.";
      case CupIdEnum.Skilled:
        return "Maps made by SkilledAndKilled (Currently Retired from mapmaking)";
      case CupIdEnum.Furby:
        return "Maps made by Furby (Currently Retired from mapmaking)";
      case CupIdEnum.Doom:
        return "Maps made by XDoomation (Currently Retired from mapmaking)";
      case CupIdEnum.Kazil:
        return "Maps made by Kazil (Currently Retired from mapmaking)";
      case CupIdEnum.Zhou:
        return "Maps made by Zhou Yu";
      case CupIdEnum.Ye:
        return "Maps made by David Ye";
      case CupIdEnum.Tim:
        return "Maps made by TimTam";
      case CupIdEnum.Awehero:
        return "Maps made by Awehero";
      case CupIdEnum.Moosh:
        return "Maps made by Moosh";
      case CupIdEnum.Ghoul:
        return "Maps made by Ghoul (Currently Retired from mapmaking)";
      case CupIdEnum.Abc:
        return "Maps made by ABC123";
      case CupIdEnum.Dark:
        return "Maps made by Darrk";
      case CupIdEnum.Rytai:
        return "Maps made by Rytai (Currently Retired from mapmaking)";
      case CupIdEnum.Golden:
        return "Bonus cup made by multiple mapmakers, presented by Golden. She is the main founder of the Ice Dodo tournaments";
      case CupIdEnum.Bean:
        return "Bonus cup made by multiple mapmakers, presented by Bean. He was a maptester who would reject basically every map that would be submitted of the game.";
      case CupIdEnum.Fish:
        return "Bonus cup named after catfishpie who is a loyal mapmaker and let other mapmakers put maps in his cup.";
      case CupIdEnum.Crazy:
        return "Bonus cup with maps made by multiple mapmakers, presented by Cr4zy";
      case CupIdEnum.Jay:
        return "Maps made by Jay (Currently Retired from mapmaking)";
      case CupIdEnum.Thero:
        return "Bonus cup with maps made by multiple mapmakers, presented by Thero. ";
      case CupIdEnum.June:
        return "Bonus cup with maps made by multiple mapmakers, presented by June.";
      case CupIdEnum.Sleepy:
        return "Bonus cup with maps made by multiple mapmakers, by sleepy. He was the top leaderboard contestant for 8 months straight.";
      case CupIdEnum.Mango:
        return "Bonus cup with maps made by multiple mapmakers, presented by Mango";
      case CupIdEnum.Squirrel:
        return "Bonus cup with maps made by multiple mapmakers, presented by Squirrel";
      case CupIdEnum.PainBumpo:
        return "Maps made by Bumpo and Painkiller, the 1st and 2nd place winners of 2023 map making contest.";
      case CupIdEnum.Insolence:
        return "Bonus cup with maps made by multiple mapmakers, presented by The Insolence Watches You";
      case CupIdEnum.Modded:
        return "Maps that were hard-coded in Javascript. They run custom scripts. Play at your own risk!";
      case CupIdEnum.Collab:
        return "Maps made in collaboration by 2 or more map makers.";
      case CupIdEnum.Og:
        return "Maps made before 2018.";
      case CupIdEnum.Brew:
        return "Maps brewing in the map development pool! They are not officially added yet.";
      case CupIdEnum.Vault:
        return "Maps that were so bad we decided to get rid of them.";
      case CupIdEnum.Ultrahard:
        return "Extremely hard maps. Difficulty 10-11.";
      case CupIdEnum.test:
        return "Test mod cup";
    }
  }
}
// cups
let cupiteration = 0;
class CondensedMapUtils {
  static getCondensedMapListings(cupId) {
    switch (cupId) {
      case CupIdEnum.Newcomer:
        return [
          { diff: 1, id: "tut1", name: "Welcome Map", num: 0 },
          { diff: 1, id: "hello_world", name: "Hello World", num: 1 },
          { diff: 1, id: "trek", name: "Trek", num: 2 },
          { diff: 1, id: "coaster", name: "Coaster", num: 3 },
          { diff: 1, id: "slow_walk", name: "Slow Walk", num: 4 },
          { diff: 2, id: "bumper", name: "Bumper", num: 5 },
          { diff: 2, id: "ice2", name: "Snowboarder", num: 6 },
          { diff: 2, id: "ez_map", name: "EZ Map", num: 7 },
          { diff: 2, id: "heights", name: "Heights", num: 8 },
          { diff: 2, id: "beach", name: "Beach", num: 9 },
          { diff: 2, id: "beardedbaby", name: "Mountain", num: 10 },
          { diff: 2, id: "boat_bounce", name: "Boat Bounce", num: 11 },
          { diff: 2, id: "jetty", name: "Jetty", num: 12 },
          { diff: 3, id: "og2", name: "Challenge", num: 13 },
          { diff: 3, id: "og35", name: "Graphics Test", num: 14 },
          { diff: 3, id: "scorpion", name: "Scorpion", num: 15 },
          { diff: 3, id: "topsy_turvy", name: "Topsy Turvy", num: 16 },
          { diff: 3, id: "speed_jump", name: "Speed Jump", num: 17 },
          { diff: 3, id: "dodo_type_beat", name: "Dodo Type Beat", num: 18 },
          { diff: 3, id: "easydrifting", name: "Easy Drifting", num: 19 },
          { diff: 4, id: "conveyor", name: "Conveyor", num: 20 },
          { diff: 4, id: "frost_factory", name: "Frost Factory", num: 21 },
          { diff: 4, id: "blink_street", name: "Blink Street", num: 22 },
          { diff: 4, id: "motor", name: "Motor", num: 23 },
          { diff: 5, id: "coneycliffs", name: "Coney Cliffs", num: 24 },
          { diff: 5, id: "spacetest", name: "Space Test", num: 25 }
        ];
      case CupIdEnum.Pilot:
        return [
          { diff: 1, id: "bounce", name: "Bounce" },
          { diff: 1, id: "coaster", name: "Coaster" },
          { diff: 1, id: "nothing_is_easy", name: "Nothing is Easy" },
          { diff: 2, id: "going_through", name: "Going Through" },
          { diff: 2, id: "bottom_to_top", name: "Bottom To Top" },
          { diff: 2, id: "bumper", name: "Bumper" },
          { diff: 2, id: "steep_walls", name: "Steep Walls" },
          { diff: 2, id: "crazy_cones", name: "Crazy Cones" },
          { diff: 2, id: "trust", name: "Trust" },
          { diff: 3, id: "gravity_bounce", name: "Gravity Bounce" },
          { diff: 3, id: "launch", name: "Launch" },
          { diff: 3, id: "soaring", name: "Soaring" },
          { diff: 3, id: "first_person", name: "First Person" },
          { diff: 3, id: "holographic", name: "Holographic" },
          { diff: 3, id: "think_fast", name: "Think Fast" },
          { diff: 3, id: "jump_path", name: "Jump Path" },
          { diff: 3, id: "bridge_of_speed", name: "Bridge Of Speed" },
          { diff: 3, id: "mixed_leaps", name: "Mixed Leaps" },
          { diff: 3, id: "moving_bridge", name: "Moving Bridge" }
        ];
      case CupIdEnum.Carrot:
        return [
          { diff: 1, id: "lanterns", name: "Lanterns" },
          { diff: 3, id: "megafauna", name: "Megafauna" },
          { diff: 3, id: "dodo_type_beat", name: "Dodo Type Beat" },
          { diff: 3, id: "mirror", name: "Mirror" },
          { diff: 3, id: "remote_control", name: "remote control" },
          { diff: 3, id: "afterlife", name: "AFTERLIFE" },
          { diff: 4, id: "blink_street", name: "Blink Street" },
          { diff: 4, id: "asteroid_belt", name: "Asteroid Belt" },
          { diff: 5, id: "redlights", name: "Red Lights Green Lights" },
          { diff: 5, id: "conefield", name: "Conefield" },
          { diff: 5, id: "necropolis", name: "Necropolis" },
          { diff: 5, id: "solar_system", name: "Solar System" },
          { diff: 5, id: "trial_by_magic", name: "Trial by Magic" },
          { diff: 5, id: "celestial_magnetism", name: "Celestial Magnetism" },
          { diff: 5, id: "phantasmagoria", name: "Phantasmagoria" },
          { diff: 6, id: "snowmen_land", name: "Snowmen Land" },
          { diff: 6, id: "snowmenace", name: "Snowmenace" },
          { diff: 6, id: "stardust", name: "Project Stardust" },
          { diff: 6, id: "climbing_dodo_fortress", name: "Climbing Dodo Fortress" },
          { diff: 6, id: "utopia_is_up_there", name: "Utopia is Up There" },
          { diff: 7, id: "prison_is_2d", name: "Prison is 2D" },
          { diff: 7, id: "revolving_cube_floats", name: "Revolving Cube Floats" },
          { diff: 7, id: "verdant_cubism", name: "Verdant Cubism" },
          { diff: 8, id: "spacecanyon", name: "Space Canyon" }
        ];
      case CupIdEnum.Awehero:
        return [
          { diff: 1, id: "dodo_circuit", name: "Dodo Circuit" },
          { diff: 2, id: "colors", name: "Colors" },
          { diff: 2, id: "fire_fighter", name: "Fire Fighter" },
          { diff: 3, id: "gymnasium", name: "Gymnasium" },
          { diff: 3, id: "moon_jumps", name: "Moon Jumps" },
          { diff: 4, id: "sherbet_land", name: "Sherbet Land" },
          { diff: 4, id: "play_fort", name: "Play Fort" },
          { diff: 4, id: "push_the_block", name: "Push the Block" },
          { diff: 4, id: "squid_dodo", name: "Squid Dodo" },
          { diff: 5, id: "ice_hockey", name: "Ice Hockey" },
          { diff: 5, id: "soccer", name: "Soccer" },
          { diff: 5, id: "escape_the_box", name: "Escape the Box" },
          { diff: 5, id: "dodo_says", name: "Dodo Says" },
          { diff: 6, id: "button_maze", name: "Button maze" },
          { diff: 6, id: "rock_climbing", name: "Rock Climbing" },
          { diff: 7, id: "dodos_among_us", name: "Dodos among us" }
        ];
      case CupIdEnum.Rocky:
        return [
          { diff: 0, id: "ice_bot", name: "Ice Bot" },
          { diff: 1, id: "hello_world", name: "Hello World" },
          { diff: 1, id: "temple", name: "Temple" },
          { diff: 1, id: "neo", name: "Neo" },
          { diff: 1, id: "jump_pads", name: "Jump Pads" },
          { diff: 2, id: "gearbox", name: "Gearbox" },
          { diff: 2, id: "rooftops", name: "Rooftops" },
          { diff: 2, id: "pool", name: "Pool" },
          { diff: 2, id: "parke", name: "Parke" },
          { diff: 2, id: "hide_and_seek", name: "Hide and Seek" },
          { diff: 2, id: "tilted_tracks", name: "Tilted Tracks" },
          { diff: 2, id: "the_floor_is_lava", name: "The Floor Is Lava" },
          { diff: 2, id: "stone_path", name: "Stone Path" },
          { diff: 3, id: "pyrovision", name: "Pyrovision" },
          { diff: 3, id: "asteroids", name: "Asteroids" },
          { diff: 3, id: "triskaidekaphobia", name: "Triskaidekaphobia" },
          { diff: 3, id: "automatic_and_manual", name: "Automatic and Manual" },
          { diff: 3, id: "barn", name: "Barn" },
          { diff: 3, id: "pathway", name: "Pathway" },
          { diff: 3, id: "blindness", name: "Blindness" },
          { diff: 3, id: "desserts", name: "Desserts" },
          { diff: 3, id: "spook", name: "Spook" },
          { diff: 3, id: "the_backrooms", name: "The Backrooms" },
          { diff: 4, id: "cone_haven", name: "Cone Haven" },
          { diff: 4, id: "shrink_ray", name: "Shrink Ray" },
          { diff: 4, id: "pac_dodo", name: "Pac Dodo" },
          { diff: 5, id: "rotating_spirals", name: "Rotating Spirals" },
          { diff: 4, id: "memory_game", name: "Memory Game" },
          { diff: 4, id: "colosseum", name: "Colosseum" },
          { diff: 4, id: "wipeout", name: "Wipeout" },
          { diff: 4, id: "icerace", name: "Icerace" },
          { diff: 5, id: "minecarts", name: "Minecarts" },
          { diff: 5, id: "thero", name: "Thero" },
          { diff: 5, id: "troll_map", name: "Troll Map" },
          { diff: 5, id: "point_of_no_return", name: "Point Of No Return" },
          { diff: 5, id: "skating", name: "Skating" },
          { diff: 5, id: "papercut", name: "Papercut" },
          { diff: 6, id: "tight_path", name: "Tight Path" },
          { diff: 6, id: "chase", name: "Chase" },
          { diff: 6, id: "gravity_chamber", name: "Gravity Chamber" },
          { diff: 6, id: "wall_jumps", name: "Wall Jumps" },
          { diff: 7, id: "sinking_ship", name: "Sinking Ship" },
          { diff: 8, id: "weaving", name: "Weaving" },
          { diff: 8, id: "rhythm", name: "Rhythm" },
          { diff: 9, id: "dragon_dance", name: "Dragon Dance" }
        ];
      case CupIdEnum.Dodo:
        return [
          { diff: 1, id: "tut1", name: "Welcome Map", num: 0 },
          { diff: 2, id: "castle", name: "Castle", num: 1 },
          { diff: 2, id: "ice2", name: "Snowboarder", num: 2 },
          { diff: 2, id: "ravine", name: "Ravine", num: 3 },
          { diff: 3, id: "ice1", name: "Icy Path", num: 4 },
          { diff: 4, id: "motor", name: "Motor", num: 5 },
          { diff: 4, id: "floating_fortress", name: "Floating Fortress", num: 6 },
          { diff: 5, id: "cone2", name: "The Red Hats", num: 7 },
          { diff: 5, id: "cone3", name: "Dangerous Zone", num: 8 },
          { diff: 5, id: "tenet", name: "Tenet", num: 9 },
          { diff: 6, id: "cone1", name: "4D Demon Cinema", num: 10 },
          { diff: 8, id: "inverted_playground", name: "Inverted Playground", num: 11 }
        ];
      case CupIdEnum.Skilled:
        return [
          { diff: 1, id: "alley", name: "Alley" },
          { diff: 4, id: "train", name: "Train" },
          { diff: 4, id: "rotating_blades", name: "Rotating Blades" },
          { diff: 5, id: "acceleration_and_brakes", name: "Acceleration and Brakes" },
          { diff: 5, id: "broken_bridge", name: "Broken Bridge" },
          { diff: 5, id: "sharp_turning", name: "Sharp turning" },
          { diff: 5, id: "flipside", name: "Flipside" },
          { diff: 5, id: "flame", name: "Flame" },
          { diff: 6, id: "lightning", name: "Lightning" },
          { diff: 6, id: "moving_blocks", name: "Moving Blocks" },
          { diff: 6, id: "blind_spot", name: "Blind Spot" },
          { diff: 6, id: "teleport", name: "Teleport" },
          { diff: 6, id: "parkour", name: "Parkour" },
          { diff: 6, id: "transcendence", name: "Transcendence" },
          { diff: 6, id: "skiing", name: "Skiing" },
          { diff: 7, id: "bridge_of_peril", name: "Bridge of Peril" },
          { diff: 7, id: "racetrack", name: "Racetrack" },
          { diff: 8, id: "encirclement", name: "Encirclement" },
          { diff: 9, id: "phase_shift", name: "Phase shift" }
        ];
      case CupIdEnum.Furby:
        return [
          { diff: 2, id: "the_sloth", name: "The Sloth" },
          { diff: 2, id: "ice_cold", name: "Ice Cold" },
          { diff: 2, id: "king_of_the_clouds", name: "King of the Clouds" },
          { diff: 2, id: "geometrical", name: "Geometrical" },
          { diff: 3, id: "invisible_maze", name: "Invisible Maze" },
          { diff: 4, id: "trapped_temple", name: "Trapped Temple" },
          { diff: 4, id: "glass_staircase", name: "Glass Staircase" },
          { diff: 4, id: "micrododo", name: "Micrododo" },
          { diff: 4, id: "super_dodo_bros", name: "Super Dodo Bros" },
          { diff: 5, id: "the_cheetah", name: "The Cheetah" },
          { diff: 5, id: "haunted_ruins", name: "Haunted Ruins" },
          { diff: 6, id: "cutting_corners", name: "Cutting Corners" },
          { diff: 6, id: "nascar", name: "NASCAR" },
          { diff: 6, id: "ninja_warrior", name: "Ninja Warrior" },
          { diff: 7, id: "spitting_spikes", name: "Spitting Spikes" },
          { diff: 7, id: "chichen_itza", name: "Chichen Itza" },
          { diff: 8, id: "balance_beam", name: "Balance Beam" }
        ];
      case CupIdEnum.Doom:
        return [
          { diff: 1, id: "slow_walk", name: "Slow Walk" },
          { diff: 2, id: "ez_map", name: "EZ Map" },
          { diff: 2, id: "gradual_climb", name: "Gradual Climb" },
          { diff: 3, id: "speed_jump", name: "Speed Jump" },
          { diff: 3, id: "wall_of_force", name: "Wall of Force" },
          { diff: 4, id: "invisible_road", name: "Invisible Road" },
          { diff: 5, id: "dragon_domain", name: "Dragon Domain" },
          { diff: 5, id: "volcano", name: "Volcano" },
          { diff: 5, id: "cone_elevator", name: "Cone-Elevator" },
          { diff: 6, id: "u_turn2", name: "U Turn" },
          { diff: 7, id: "sea_of_fire", name: "Sea of Fire" },
          { diff: 7, id: "into_the_sky", name: "Into the Sky" },
          { diff: 7, id: "1c3d0d0", name: "1c3d0d0" },
          { diff: 8, id: "tube_elevator", name: "Tube elevator" },
          { diff: 8, id: "skilledorkilled", name: "Skilledorkilled" }
        ];
      case CupIdEnum.Kazil:
        return [
          { diff: 0, id: "no_hands", name: "No Hands" },
          { diff: 1, id: "trek", name: "Trek" },
          { diff: 3, id: "scorpion", name: "Scorpion" },
          { diff: 3, id: "trailblazer", name: "Trailblazer" },
          { diff: 3, id: "easydrifting", name: "Easy Drifting" },
          { diff: 3, id: "secrettunnel", name: "Secret Tunnel" },
          { diff: 4, id: "snake_climb", name: "Snake Climb" },
          { diff: 5, id: "moving_road", name: "Moving Road" },
          { diff: 5, id: "sky_run", name: "Sky Run" },
          { diff: 5, id: "race", name: "Race" },
          { diff: 6, id: "observatory", name: "Observatory" },
          { diff: 6, id: "crosspath", name: "Cross Path" },
          { diff: 6, id: "apartment", name: "Apartment" }
        ];
      case CupIdEnum.Zhou:
        return [
          { diff: 2, id: "autumn", name: "Autumn" },
          { diff: 2, id: "beach", name: "Beach" },
          { diff: 2, id: "chemistry", name: "Chemistry" },
          { diff: 2, id: "memoirs", name: "Memoirs" },
          { diff: 3, id: "ruins", name: "Ruins" },
          { diff: 4, id: "dodo_eat_ice", name: "Dodo Eat Ice" },
          { diff: 4, id: "castle_in_the_sky", name: "Castle in the Sky" },
          { diff: 5, id: "mini_golf", name: "Mini Golf" },
          { diff: 6, id: "sector_8", name: "Sector 8" },
          { diff: 6, id: "spin_dodge", name: "Spin Dodge" },
          { diff: 6, id: "cone_maze", name: "Cone Maze" },
          { diff: 7, id: "portals", name: "Portals" },
          { diff: 7, id: "dodo_tower", name: "Dodo Tower" },
          { diff: 7, id: "piano", name: "Piano" },
          { diff: 7, id: "air_road", name: "Air Road" },
          { diff: 9, id: "skill_trail", name: "Skill Trial" },
          { diff: 9, id: "cyan_citadel", name: "Cyan Citadel" },
          { diff: 9, id: "upside_down_city", name: "Upside Down City" }
        ];
      case CupIdEnum.Ye:
        return [
          { diff: 1, id: "flip_turn", name: "Flip Turn" },
          { diff: 2, id: "arithmetic", name: "Arithmetic" },
          { diff: 2, id: "through_the_block", name: "Through the Block" },
          { diff: 2, id: "holes_and_cracks", name: "Holes and Cracks" },
          { diff: 2, id: "jetty", name: "Jetty" },
          { diff: 2, id: "the_golden_brick", name: "The Golden Brick" },
          { diff: 3, id: "earthquake", name: "Earthquake" },
          { diff: 3, id: "shapes", name: "Shapes" },
          { diff: 3, id: "topsy_turvy", name: "Topsy Turvy" },
          { diff: 4, id: "messiness", name: "Messiness" },
          { diff: 4, id: "fade", name: "Fade" },
          { diff: 4, id: "plot_twist", name: "Plot Twist" },
          { diff: 4, id: "into_fire", name: "Into Fire" },
          { diff: 5, id: "ambiguity", name: "Ambiguity" },
          { diff: 5, id: "left_and_right", name: "Left and Right" },
          { diff: 6, id: "triple_troll", name: "Triple Troll" },
          { diff: 7, id: "finding_patterns", name: "finding patterns" },
          { diff: 7, id: "deadly_precision", name: "Deadly Precision" }
        ];
      case CupIdEnum.Tim:
        return [
          { diff: 2, id: "ffffff", name: "ffffff" },
          { diff: 2, id: "pantheon", name: "Pantheon" },
          { diff: 3, id: "dreamscapes", name: "Dreamscapes" },
          { diff: 3, id: "badlands", name: "Badlands" },
          { diff: 3, id: "honeylands", name: "Honeylands" },
          { diff: 3, id: "silly_cube_level", name: "Silly Cube Level" },
          { diff: 4, id: "reaction", name: "Reaction" },
          { diff: 4, id: "block_flight", name: "Block Flight" },
          { diff: 4, id: "industrial", name: "Industrial" },
          { diff: 4, id: "firefrost", name: "Firefrost" },
          { diff: 5, id: "falling_game", name: "Falling Game" },
          { diff: 5, id: "sinking_incline", name: "Sinking Incline" },
          { diff: 5, id: "symmetrism", name: "Symmetrism" },
          { diff: 6, id: "moonrunner", name: "Moonrunner" },
          { diff: 7, id: "power_rooms", name: "Power Rooms" },
          { diff: 8, id: "ironriver_rapids", name: "Ironriver Rapids" },
          { diff: 8, id: "spinwhirl_street", name: "Spinwhirl Street" }
        ];
      case CupIdEnum.Ghoul:
        return [
          { diff: 2, id: "high_and_low", name: "High and Low" },
          { diff: 4, id: "land_to_sky", name: "Land to sky" },
          { diff: 4, id: "cave", name: "Cave" },
          { diff: 4, id: "desert", name: "Desert" },
          { diff: 4, id: "waterfall", name: "Waterfall" },
          { diff: 5, id: "river", name: "River" },
          { diff: 5, id: "space_junk", name: "Space Junk" },
          { diff: 6, id: "polymorph", name: "Polymorph" },
          { diff: 6, id: "technocracy", name: "Technocracy" },
          { diff: 6, id: "city", name: "City" },
          { diff: 7, id: "serpents_tail", name: "Serpents Tail" },
          { diff: 7, id: "darkness", name: "Darkness" },
          { diff: 8, id: "rabid", name: "Rabid" }
        ];
      case CupIdEnum.Abc:
        return [
          { diff: 1, id: "sidewalk", name: "Sidewalk" },
          { diff: 2, id: "trainway", name: "trainway" },
          { diff: 2, id: "neighbourhood", name: "Neighbourhood" },
          { diff: 3, id: "drums", name: "Drums" },
          { diff: 3, id: "wilderness", name: "Wilderness" },
          { diff: 4, id: "opposite_day", name: "Opposite Day" },
          { diff: 4, id: "road_race", name: "Road Race" },
          { diff: 4, id: "mushroom_peninsula", name: "Mushroom peninsula" },
          { diff: 5, id: "a_thundery_journey", name: "A Thundery Journey" },
          { diff: 5, id: "moonwalk", name: "moonwalk" },
          { diff: 6, id: "wall_to_wall", name: "Wall To Wall" },
          { diff: 6, id: "fatal_leaps", name: "Fatal Leaps" },
          { diff: 6, id: "operations", name: "Operations" },
          { diff: 7, id: "wall_paths", name: "Wall Paths" },
          { diff: 7, id: "anguished", name: "Anguished" },
          { diff: 8, id: "provoking", name: "Provoking" }
        ];
      case CupIdEnum.Rytai:
        return [
          { diff: 3, id: "tubes", name: "Tubes" },
          { diff: 4, id: "rebound", name: "Rebound" },
          { diff: 4, id: "chemical_breakout", name: "Chemical breakout" },
          { diff: 4, id: "eternal_atake", name: "Eternal Atake" },
          { diff: 5, id: "entity", name: "Entity" },
          { diff: 5, id: "blue_bird", name: "Blue Bird" },
          { diff: 5, id: "rocky_climb", name: "Rocky Climb" },
          { diff: 5, id: "dark_realm", name: "Dark Realm" },
          { diff: 6, id: "heartattack", name: "Heart Attack" },
          { diff: 6, id: "tremor", name: "Tremor" },
          { diff: 7, id: "pinpoint", name: "PinPoint" }
        ];
      case CupIdEnum.Jay:
        return [
          { diff: 3, id: "equilibrium", name: "Equilibrium" },
          { diff: 3, id: "speedrunner", name: "Speedrunner" },
          { diff: 3, id: "geyser", name: "Geyser" },
          { diff: 3, id: "aurora", name: "Aurora" },
          { diff: 4, id: "odyssey", name: "Odyssey" },
          { diff: 4, id: "illusions", name: "Illusions" },
          { diff: 4, id: "sunset", name: "Sunset" },
          { diff: 4, id: "frost_factory", name: "Frost Factory" },
          { diff: 5, id: "caik", name: "Caik" },
          { diff: 5, id: "stratosphere", name: "Stratosphere" },
          { diff: 6, id: "rust", name: "Rust" },
          { diff: 6, id: "vindicated", name: "Vindicated" }
        ];
      case CupIdEnum.Golden:
        return [
          { diff: 1, id: "infiltration", name: "Infiltration" },
          { diff: 1, id: "dodo_cube", name: "Dodo Cube" },
          { diff: 2, id: "snow_hill", name: "Snow hill" },
          { diff: 2, id: "grass_hill", name: "Grass Hill" },
          { diff: 2, id: "skittletopia", name: "Skittletopia" },
          { diff: 3, id: "centred", name: "Centred" },
          { diff: 3, id: "walking_with_wienerdogs", name: "walking with wienerdogs" },
          { diff: 3, id: "2_dollar_minecraft", name: "2 Dollar Minecraft" },
          { diff: 3, id: "trippy", name: "Trippy" },
          { diff: 3, id: "ominous_cave", name: "Ominous cave" },
          { diff: 4, id: "wrenched_water_pipes", name: "Wrenched Water Pipes" },
          { diff: 4, id: "keyboard", name: "Keyboard" },
          { diff: 4, id: "clocks", name: "Clocks" },
          { diff: 4, id: "computer_realm", name: "Computer Realm" },
          { diff: 4, id: "colour_wheel", name: "Colour Wheel" },
          { diff: 5, id: "blind_maze", name: "Blind Maze" },
          { diff: 5, id: "side_to_side", name: "Side to Side" },
          { diff: 6, id: "slippery_path", name: "Slippery Path" },
          { diff: 6, id: "cosmic_dogfight", name: "Cosmic Dogfight" },
          { diff: 6, id: "albus", name: "Albus" },
          { diff: 6, id: "the_unseen", name: "the unseen" },
          { diff: 6, id: "gelatinous", name: "Gelatinous" },
          { diff: 7, id: "anomaly", name: "Anomaly" },
          { diff: 7, id: "dna", name: "DNA" },
          { diff: 8, id: "chaos_zone", name: "Chaos Zone" }
        ];
      case CupIdEnum.Bean:
        return [
          { diff: 1, id: "contrast", name: "Contrast" },
          { diff: 1, id: "dash_of_the_canyon", name: "Dash Of The Canyon" },
          { diff: 1, id: "basketball", name: "Basketball" },
          { diff: 2, id: "beardedbaby", name: "Mountain" },
          { diff: 3, id: "touchdown", name: "Touchdown" },
          { diff: 4, id: "igloos", name: "Igloos" },
          { diff: 4, id: "sungjoon", name: "Turning Challenge" },
          { diff: 4, id: "treetops", name: "Treetops" },
          { diff: 5, id: "dull_to_rainbow", name: "Dull to Rainbow" },
          { diff: 5, id: "tack_zone", name: "tack zone" },
          { diff: 5, id: "facility_failure", name: "facility failure" },
          { diff: 6, id: "flight", name: "Flight" },
          { diff: 6, id: "dodo_rebound", name: "Dodo Rebound" },
          { diff: 7, id: "leaps_of_faith", name: "Leaps of Faith" },
          { diff: 7, id: "everest", name: "Everest" },
          { diff: 7, id: "dodo_kong", name: "Dodo Kong" }
        ];
      case CupIdEnum.Fish:
        return [
          { diff: 2, id: "boat_bounce", name: "Boat Bounce" },
          { diff: 3, id: "radioactive", name: "Radioactive" },
          { diff: 3, id: "dark_alley", name: "Dark Alley" },
          { diff: 3, id: "uphill_battle", name: "Uphill Battle" },
          { diff: 3, id: "into_the_night", name: "Into the Night" },
          { diff: 4, id: "space_invasion", name: "Space Invasion" },
          { diff: 4, id: "city_parkour", name: "City Parkour" },
          { diff: 4, id: "scale", name: "Scale" },
          { diff: 4, id: "factory_escape", name: "Factory Escape" },
          { diff: 4, id: "fish_parkour", name: "Fish Parkour" },
          { diff: 5, id: "totally_not_gd", name: "Totally Not GD" },
          { diff: 5, id: "underwater", name: "Underwater" },
          { diff: 5, id: "gravity_jump", name: "Gravity Jump" },
          { diff: 5, id: "spike_dash", name: "Spike Dash" },
          { diff: 6, id: "road_rage", name: "Road Rage" },
          { diff: 6, id: "ramp_rush", name: "Ramp Rush" },
          { diff: 6, id: "coral_ocean", name: "Coral Ocean" },
          { diff: 6, id: "dodo_launch", name: "Dodo Launch" },
          { diff: 7, id: "permafrost", name: "Permafrost" }
        ];
      case CupIdEnum.Thero:
        return [
          { diff: 1, id: "colour_panel", name: "Colour panel" },
          { diff: 2, id: "ski_slope", name: "Ski Slope" },
          { diff: 3, id: "blizzard", name: "Blizzard" },
          { diff: 3, id: "smoke", name: "Smoke" },
          { diff: 3, id: "cone_city", name: "Cone City" },
          { diff: 3, id: "zestyverse", name: "zestyverse" },
          { diff: 4, id: "treacherous_overpass", name: "Treacherous Overpass" },
          { diff: 4, id: "behind_the_wall", name: "Behind the Wall" },
          { diff: 5, id: "verglas", name: "Verglas" },
          { diff: 5, id: "sawmill", name: "Sawmill" },
          { diff: 5, id: "dukki_lake", name: "Dukki Lake" },
          { diff: 5, id: "sunset_jump", name: "Sunset Jump" },
          { diff: 6, id: "magma_outbreak", name: "Magma Outbreak" },
          { diff: 6, id: "maple_leaf", name: "maple leaf" },
          { diff: 6, id: "green_greens", name: "Green Greens" },
          { diff: 7, id: "goofier_ahh", name: "goofier ahh" },
          { diff: 7, id: "find_a_way", name: "Find a Way" },
          { diff: 8, id: "skill_issue", name: "Skill Issue" },
          { diff: 9, id: "goofy_ahh", name: "goofy ahh" }
        ];
      case CupIdEnum.Crazy:
        return [
          { diff: 2, id: "shortcuts", name: "Shortcuts" },
          { diff: 2, id: "odd_one_out", name: "Odd One Out" },
          { diff: 3, id: "glitchy_dodo", name: "Glitchy Dodo" },
          { diff: 3, id: "cone_cylinder", name: "Cone Cylinder" },
          { diff: 3, id: "spaceshot", name: "Spaceshot" },
          { diff: 3, id: "playground", name: "Playground" },
          { diff: 3, id: "through_the_hole", name: "Through the Hole" },
          { diff: 3, id: "primary_jumps", name: "Primary Jumps" },
          { diff: 3, id: "dodo_crash", name: "dodo crash" },
          { diff: 4, id: "rainbow", name: "Rainbow" },
          { diff: 4, id: "in_a_machine", name: "In a Machine" },
          { diff: 4, id: "a_dangerous_climb", name: "A Dangerous Climb" },
          { diff: 4, id: "restart", name: "Restart" },
          { diff: 5, id: "hyperdrive", name: "Hyperdrive" },
          { diff: 5, id: "there_is_no_map", name: "There Is No Map" },
          { diff: 5, id: "rainbow_cliffs", name: "Rainbow Cliffs" },
          { diff: 6, id: "colour_land", name: "Colour Land" },
          { diff: 6, id: "there_is_a_map", name: "There Is a Map" },
          { diff: 6, id: "burning_bridge", name: "Burning Bridge" },
          { diff: 6, id: "skimountain", name: "Skimountain" },
          { diff: 7, id: "dodo_nullius", name: "Dodo Nullius" },
          { diff: 7, id: "waterpark", name: "Waterpark" }
        ];
      case CupIdEnum.June:
        return [
          { diff: 1, id: "u_main_one", name: "U_Main_One" },
          { diff: 2, id: "u_main_two", name: "U_Main_Two" },
          { diff: 2, id: "tracks", name: "Tracks" },
          { diff: 2, id: "colourful_doors", name: "Colourful Doors" },
          { diff: 3, id: "hills", name: "Hills" },
          { diff: 3, id: "solar_land", name: "Solar Land" },
          { diff: 4, id: "ready_player_1", name: "Ready Player 1" },
          { diff: 4, id: "spiky_peaks", name: "Spiky Peaks" },
          { diff: 4, id: "drops_of_doom", name: "Drops of Doom" },
          { diff: 4, id: "hop_hop", name: "Hop Hop" },
          { diff: 4, id: "tilty_blocks", name: "Tilty Blocks" },
          { diff: 4, id: "dodge", name: "Dodge" },
          { diff: 4, id: "icy_street", name: "Icy Street" },
          { diff: 5, id: "twistedroad", name: "Twisted Road" },
          { diff: 5, id: "speed_round", name: "Speed Round" },
          { diff: 6, id: "speedway", name: "Speedway" },
          { diff: 6, id: "the_cone_road", name: "The Cone Road" },
          { diff: 6, id: "dual_path", name: "Dual Path" },
          { diff: 6, id: "summit", name: "Summit" },
          { diff: 6, id: "dodo_neo", name: "Dodo Neo" }
        ];
      case CupIdEnum.Sleepy:
        return [
          { diff: 2, id: "centipede", name: "Centipede" },
          { diff: 2, id: "relaxing_climb", name: "Relaxing Climb" },
          { diff: 2, id: "haunted_manor", name: "Haunted Manor" },
          { diff: 3, id: "atmosphere", name: "Atmosphere" },
          { diff: 3, id: "agency", name: "Agency" },
          { diff: 3, id: "unexpected", name: "Unexpected" },
          { diff: 3, id: "outside_the_box", name: "Outside the Box" },
          { diff: 4, id: "transported", name: "Transported" },
          { diff: 4, id: "climbing_training", name: "Climbing Training" },
          { diff: 4, id: "spacetrail", name: "SpaceTrail" },
          { diff: 4, id: "slackline", name: "Slackline" },
          { diff: 4, id: "fall_dodo", name: "Fall Dodo" },
          { diff: 5, id: "roundabout", name: "Roundabout" },
          { diff: 5, id: "fire_and_water", name: "Fire and Water" },
          { diff: 5, id: "peak", name: "Peak" },
          { diff: 5, id: "day_in_the_park", name: "Day In The Park" },
          { diff: 5, id: "twisty_loops", name: "Twisty Loops" },
          { diff: 5, id: "drifting_dodo", name: "Drifting Dodo" },
          { diff: 6, id: "heist", name: "Heist" },
          { diff: 6, id: "technique_track", name: "Technique Track" },
          { diff: 7, id: "forest", name: "Forest" },
          { diff: 7, id: "heaven_and_hell", name: "Heaven and Hell" },
          { diff: 7, id: "neon_bridge", name: "neon bridge" },
          { diff: 8, id: "china_grove", name: "China Grove" }
        ];
      case CupIdEnum.Mango:
        return [
          { diff: 1, id: "open_world", name: "open world" },
          { diff: 1, id: "dodo_shooter", name: "dodo shooter" },
          { diff: 2, id: "heights", name: "Heights" },
          { diff: 2, id: "ring_of_fire", name: "Ring of Fire" },
          { diff: 2, id: "entity_overload", name: "Entity Overload" },
          { diff: 3, id: "up_and_down", name: "Up And Down" },
          { diff: 3, id: "doors_of_doom", name: "Doors of Doom" },
          { diff: 4, id: "windingpath", name: "Winding Path" },
          { diff: 4, id: "viridescent", name: "Viridescent" },
          { diff: 4, id: "tumbles_and_turns", name: "Tumbles and Turns" },
          { diff: 5, id: "archipelago", name: "Archipelago" },
          { diff: 5, id: "road_chasing", name: "Road Chasing" },
          { diff: 5, id: "dodo_on_ice", name: "Dodo on ice" },
          { diff: 5, id: "earth_exploration", name: "Earth Exploration" },
          { diff: 5, id: "leaps_in_the_limelight", name: "Leaps in the Limelight" },
          { diff: 5, id: "tile_jump", name: "Tile Jump" },
          { diff: 5, id: "patterns", name: "Patterns" },
          { diff: 6, id: "spiral", name: "Spiral" },
          { diff: 6, id: "cones_and_chaos", name: "Cones and Chaos" },
          { diff: 6, id: "obstacle_lane", name: "Obstacle Lane" },
          { diff: 6, id: "dodo_tiles", name: "Dodo tiles" },
          { diff: 7, id: "coral_reef", name: "Coral Reef" },
          { diff: 7, id: "spacewalk", name: "Spacewalk" }
        ];
      case CupIdEnum.Moosh:
        return [
          { diff: 3, id: "rng_fun", name: "RNG Fun" },
          { diff: 3, id: "house_of_doom", name: "House of Doom" },
          { diff: 3, id: "jumping_challenge", name: "Jumping Challenge" },
          { diff: 3, id: "mapmm", name: "MapMM" },
          { diff: 3, id: "trickster", name: "Trickster" },
          { diff: 4, id: "the_log", name: "The Log" },
          { diff: 4, id: "across_lava", name: "Across Lava" },
          { diff: 5, id: "trenches_and_ramps", name: "Trenches and Ramps" },
          { diff: 6, id: "around_saturn", name: "Around Saturn" },
          { diff: 6, id: "ice_age", name: "Ice Age" },
          { diff: 6, id: "the_throwback", name: "The Throwback" },
          { diff: 6, id: "dragonfly", name: "Dragonfly" },
          { diff: 6, id: "unsettled_blocks", name: "Unsettled Blocks" },
          { diff: 7, id: "spinnin", name: "Spinnin" },
          { diff: 8, id: "pirate_lord", name: "Pirate Lord" }
        ];
      case CupIdEnum.Squirrel:
        return [
          { diff: 2, id: "bored", name: "Bored" },
          { diff: 2, id: "traintrouble", name: "TrainTrouble" },
          { diff: 3, id: "do_not_jump", name: "Do Not Jump" },
          { diff: 3, id: "ez_street", name: "Ez Street" },
          { diff: 4, id: "prototype", name: "Prototype" },
          { diff: 4, id: "the_dodo_escape", name: "The Dodo Escape" },
          { diff: 4, id: "dodo_rex", name: "Dodo Rex" },
          { diff: 4, id: "relics", name: "Relics" },
          { diff: 5, id: "cylinder_insanity", name: "Cylinder Insanity" },
          { diff: 5, id: "overflow", name: "Overflow" },
          { diff: 5, id: "coneycliffs", name: "Coney Cliffs" },
          { diff: 5, id: "spacetest", name: "Space Test" },
          { diff: 5, id: "crossgravity", name: "Cross Gravity" },
          { diff: 5, id: "ring_stacks", name: "Ring Stacks" },
          { diff: 6, id: "dodo_a", name: "Dodo's Adventure" },
          { diff: 7, id: "space_track", name: "Space Track" },
          { diff: 7, id: "dodo_dash", name: "Dodo Dash" }
        ];
      case CupIdEnum.PainBumpo:
        return [
          { diff: 1, id: "the_harvest", name: "The Harvest" },
          { diff: 1, id: "dodo_cinema", name: "Dodo Cinema" },
          { diff: 3, id: "frozen_cave", name: "Frozen Cave" },
          { diff: 4, id: "cool_purple_crystals", name: "Cool Purple Crystals" },
          { diff: 5, id: "chicanery", name: "Chicanery" },
          { diff: 5, id: "eyes_in_the_water", name: "Eyes in the Water" },
          { diff: 5, id: "no_jokes", name: "no jokes" },
          { diff: 6, id: "motion_medley", name: "Motion Medley" },
          { diff: 9, id: "diamond_blade", name: "Diamond Blade" },
          { diff: 9, id: "radiance", name: "Radiance" }
        ];
      case CupIdEnum.Dark:
        return [
          { diff: 5, id: "oblivion", name: "Oblivion" },
          { diff: 5, id: "caution", name: "Caution: Slippery Floor" },
          { diff: 5, id: "neon_loops", name: "Neon Loops" },
          { diff: 5, id: "orangescapes", name: "Orangescapes" },
          { diff: 5, id: "subzero", name: "Subzero" },
          { diff: 6, id: "a_cybers_world", name: "A CYBER'S WORLD?" },
          { diff: 6, id: "acid_lake", name: "Acid Lake" },
          { diff: 6, id: "functions", name: "Functions" },
          { diff: 6, id: "achromatopsia", name: "Achromatopsia" },
          { diff: 6, id: "decay", name: "Decay" },
          { diff: 6, id: "the_salt_complex", name: "The Salt Complex" },
          { diff: 7, id: "hotel", name: "Hotel" },
          { diff: 7, id: "h", name: "H" },
          { diff: 7, id: "the_drift_complex", name: "The Drift Complex" },
          { diff: 7, id: "hourglass", name: "Hourglass" },
          { diff: 7, id: "pipe_dreams", name: "Pipe Dreams" },
          { diff: 7, id: "ominous_crypt", name: "Ominous Crypt" },
          { diff: 7, id: "smart_not_nerd_fan_club", name: "Smart Not Nerd Fan Club" },
          { diff: 7, id: "fried_tennis_ball", name: "Fried Tennis Ball" },
          { diff: 8, id: "false_tranquility", name: "False Tranquility" },
          { diff: 8, id: "test_unity_plugin_place_1", name: "test_unity_plugin_place_1" }
        ];
      case CupIdEnum.Insolence:
        return [
          { diff: 2, id: "ski_championship", name: "Ski Championship" },
          { diff: 2, id: "tropical_paradise", name: "Tropical Paradise" },
          { diff: 3, id: "sunset_forest", name: "Sunset Forest" },
          { diff: 3, id: "portal_illusion", name: "Portal Illusion" },
          { diff: 3, id: "rgb", name: "RGB" },
          { diff: 3, id: "abandoned_warehouse", name: "Abandoned Warehouse" },
          { diff: 4, id: "light_show", name: "Light Show" },
          { diff: 4, id: "halloween", name: "Halloween" },
          { diff: 4, id: "savanna", name: "Savanna" },
          { diff: 4, id: "forest_trail", name: "Forest Trail" },
          { diff: 5, id: "dementia", name: "dementia" },
          { diff: 6, id: "warehouse_maintenance", name: "Warehouse Maintenance" },
          { diff: 6, id: "360", name: "360" },
          { diff: 7, id: "dune", name: "Dune" },
          { diff: 7, id: "pull_force", name: "pull force" },
          { diff: 7, id: "sewer_survival", name: "Sewer Survival" },
          { diff: 9, id: "havoc_zone", name: "Havoc Zone" }
        ];
      case CupIdEnum.Modded:
        return [
          { diff: 0, id: "EngineV9", name: "Engine V9"},
          { diff: 0, id: "bad_apple", name: "Bad Apple" },
          { diff: 1, id: "orbit", name: "Orbit" },
          { diff: 6, id: "ice_rhythm", name: "Ice Rhythm" },
          { diff: 6, id: "space_gauntlet", name: "Space Gauntlet" },
          { diff: 8, id: "dual", name: "Dual" }
        ];
      case CupIdEnum.Collab:
        return [
          { diff: 1, id: "easter", name: "Easter" },
          { diff: 3, id: "ghost_road", name: "Ghost road" },
          { diff: 3, id: "darkest_depths", name: "Darkest Depths" },
          { diff: 3, id: "microcosm", name: "Microcosm" },
          { diff: 4, id: "tightrope", name: "Tightrope" },
          { diff: 4, id: "conveyor", name: "Conveyor" },
          { diff: 4, id: "bullseye", name: "Bullseye" },
          { diff: 4, id: "cosmos_cruise", name: "Cosmos Cruise" },
          { diff: 4, id: "lily_lotus_lake", name: "Lily Lotus Lake" },
          { diff: 4, id: "snake", name: "Snake" },
          { diff: 4, id: "track_together", name: "Track together" },
          { diff: 4, id: "library", name: "Library" },
          { diff: 4, id: "parkour_mountain", name: "Parkour Mountain" },
          { diff: 5, id: "cliffhanger", name: "Cliffhanger" },
          { diff: 5, id: "romantic_turnaround", name: "Romantic Turnaround" },
          { diff: 5, id: "dual_colors", name: "Dual Colors" },
          { diff: 5, id: "booby_traps", name: "Booby Traps" },
          { diff: 5, id: "plane_crash", name: "Plane Crash" },
          { diff: 5, id: "burst", name: "Burst" },
          { diff: 6, id: "rocky_road", name: "Rocky Road" },
          { diff: 6, id: "50_jumps", name: "50 Jumps" },
          { diff: 6, id: "milk_flood", name: "Milk Flood" },
          { diff: 6, id: "hotdog", name: "hotdog" },
          { diff: 7, id: "ambush", name: "Ambush" },
          { diff: 7, id: "portaltropolis", name: "Portaltropolis" },
          { diff: 7, id: "danger_dragon", name: "Danger Dragon" },
          { diff: 8, id: "circuit", name: "Circuit" },
          { diff: 8, id: "azul_lights", name: "Azul Lights" },
          { diff: 8, id: "megacollab", name: "Megacollab" },
          { diff: 8, id: "the_poolrooms", name: "The Poolrooms" },
          { diff: 9, id: "rage_fuel", name: "Rage Fuel" },
          { diff: 9, id: "shuriken", name: "shuriken" }
        ];
      case CupIdEnum.Og:
        return [
          { diff: 1, id: "og1", name: "Beginners Map" },
          { diff: 2, id: "og16", name: "EZ Map" },
          { diff: 3, id: "og2", name: "Challenge" },
          { diff: 3, id: "og4", name: "Special Map" },
          { diff: 3, id: "og35", name: "Graphics Test" },
          { diff: 4, id: "og3", name: "Cones" },
          { diff: 4, id: "og19", name: "Grandpa Hobo" },
          { diff: 4, id: "og23", name: "Hop 2 3 4" },
          { diff: 4, id: "og26", name: "Rip" },
          { diff: 4, id: "og36", name: "ISKL" },
          { diff: 4, id: "og38", name: "Horrible Map" },
          { diff: 4, id: "og40", name: "Snake" },
          { diff: 4, id: "og31", name: "2018 New Concept" },
          { diff: 5, id: "og9", name: "Hacks" },
          { diff: 5, id: "og15", name: "Doge" },
          { diff: 5, id: "og24", name: "hi" },
          { diff: 5, id: "og27", name: "OK" },
          { diff: 5, id: "og37", name: "CLIMB" },
          { diff: 5, id: "og39", name: "Gravity" },
          { diff: 5, id: "og17", name: "Boost" },
          { diff: 5, id: "og5", name: "Cake" },
          { diff: 6, id: "og7", name: "Cloud" },
          { diff: 6, id: "og11", name: "Volcano" },
          { diff: 6, id: "og18", name: "Slowness" },
          { diff: 6, id: "og22", name: "No Name" },
          { diff: 6, id: "og25", name: "123456789" },
          { diff: 7, id: "og8", name: "999999" },
          { diff: 7, id: "og12", name: "Cats can fly" },
          { diff: 7, id: "og10", name: "Liam" },
          { diff: 7, id: "og14", name: "Bonus Level" },
          { diff: 7, id: "og20", name: "Up Up and Away" },
          { diff: 7, id: "og28", name: "kk Unicorn" },
          { diff: 7, id: "og29", name: "Derp" },
          { diff: 7, id: "og32", name: "Too Many Cones" },
          { diff: 7, id: "og33", name: "Bounce & Jumps" },
          { diff: 7, id: "og34", name: "Some Maze" },
          { diff: 8, id: "og6", name: "Impossible Christmas Map" },
          { diff: 8, id: "og13", name: ":D" },
          { diff: 8, id: "og21", name: "Zigzag" },
          { diff: 8, id: "og30", name: "-___-" }
        ];
      case CupIdEnum.Vault:
        return [
          { diff: 1, id: "glass_walkway", name: "Glass Walkway" },
          { diff: 1, id: "lucid_dreams", name: "Lucid Dreams" },
          { diff: 2, id: "basic_training", name: "Basic Training" },
          { diff: 3, id: "advanced_training", name: "Advanced Training" },
          { diff: 3, id: "palindrome", name: "Palindrome" },
          { diff: 3, id: "choice", name: "Choice" },
          { diff: 3, id: "split_paths", name: "Split Paths" },
          { diff: 3, id: "super_dodo_lane", name: "Super Dodo Lane" },
          { diff: 3, id: "slides", name: "Slides" },
          { diff: 4, id: "speed_tunnel", name: "Speed Tunnel" },
          { diff: 4, id: "follow_the_path", name: "Follow the Path" },
          { diff: 4, id: "green_gravity", name: "Green Gravity" },
          { diff: 4, id: "reversed_jumping", name: "Reversed Jumping" },
          { diff: 5, id: "bad_advice", name: "Bad Advice" },
          { diff: 5, id: "route", name: "Route" },
          { diff: 5, id: "skinny_road", name: "Skinny Road" },
          { diff: 5, id: "ice_cocos", name: "Ice Cocos" },
          { diff: 6, id: "avalanche", name: "Avalanche" },
          { diff: 6, id: "anarchy", name: "Anarchy" },
          { diff: 6, id: "gravity_chaos", name: "Gravity Chaos" },
          { diff: 6, id: "ice_track", name: "Ice Track" },
          { diff: 6, id: "reversed_road", name: "Reversed Road" },
          { diff: 6, id: "spider", name: "Spider" },
          { diff: 7, id: "intense_training", name: "Intense Training" },
          { diff: 7, id: "maze", name: "Maze" },
          { diff: 7, id: "thinning", name: "Thinning" },
          { diff: 7, id: "spiral_staircase", name: "Spiral Staircase" },
          { diff: 7, id: "cone_dodging", name: "Cone Dodging" },
          { diff: 8, id: "the_extra_virgin_olive_oil_complex", name: "The Extra Virgin Olive Oil Complex" },
          { diff: 8, id: "ascend", name: "Ascend" },
          { diff: 8, id: "gravitational_pull", name: "Gravitational Pull" },
          { diff: 8, id: "troll_track", name: "Troll Track" },
          { diff: 9, id: "a_last_journey", name: "A Last Journey" },
          { diff: 9, id: "finger_breaker", name: "Finger breaker" }
        ];
      case CupIdEnum.Brew:
        return [];
      case CupIdEnum.Ultrahard:
        return [
          { diff: 10, id: "0001", name: ".0001" },
          { diff: 10, id: "cosmic_canyon", name: "Cosmic Canyon" },
          { diff: 10, id: "slider", name: "Slider" },
          { diff: 10, id: "absolute_zero", name: "Absolute Zero" },
          { diff: 10, id: "wall_riders", name: "Wall Riders" },
          { diff: 10, id: "5d_demon_cinema", name: "5D Demon Cinema" },
          { diff: 11, id: "mayhem", name: "Mayhem" }
        ];

        default:
            return [

            ];
    }
  }
}
class EpilepsyUtils {
  static doesMapNeedEpilepsyWarning(mapId) {
    switch (mapId) {
      case "lightning":
      case "into_fire":
      case "ghost_road":
      case "trippy":
      case "spin_dodge":
        return true;
      default:
        return false;
    }
  }
}
class MapUtils {
  static getNextMapListing(currentMapListing, isExtension) {
    const mapListings = MapUtils.getMapListings(currentMapListing.cupId);
    const currentMapIndex = mapListings.findIndex((mapListing) => mapListing.mapId === currentMapListing.mapId);
    if (currentMapIndex === -1)
      throw new Error("Map not found in cup");
    if (currentMapIndex === mapListings.length - 1)
      return MapUtils.getRandomMapListingInCup(currentMapListing.cupId);
    return mapListings[currentMapIndex + 1];
  }
  static getAllMapIds() {
    const allMapIds = [];
    for (const cupId of ALL_CUP_IDS) {
      let condensedMapListings = CondensedMapUtils.getCondensedMapListings(cupId);

      if (customCupnum.includes(cupId)) {
        condensedMapListings = AddMapTocup[cupId-36];
      }
      for (const condensedMapListing of condensedMapListings) {
        if (allMapIds.includes(condensedMapListing.id))
          continue;
        allMapIds.push(condensedMapListing.id);
      }
    }
    return allMapIds;
  }
  static getAllMapListingsOfDifficulty(difficulty, isVaultIncluded) {
    const searchResults = [];
    for (const cupId of ALL_CUP_IDS) {
      if (cupId === CupIdEnum.Vault && isVaultIncluded === false)
        continue;
      const mapListings = MapUtils.getMapListings(cupId);
      for (const mapListing of mapListings) {
        if (MapUtils.doesContain(searchResults, mapListing))
          continue;
        if (mapListing.diff == difficulty)
          searchResults.push(mapListing);
      }
    }
    return searchResults;
  }
  static doesContain(mapListings, mapListing) {
    return mapListings.some((_mapListing) => _mapListing.mapId === mapListing.mapId);
  }
  static getMapListingFromMapId(mapId) {
    for (const cupId of ALL_CUP_IDS) {
      const mapListings = MapUtils.getMapListings(cupId);
      for (const mapListing of mapListings) {
        if (mapListing.mapId === mapId)
          return mapListing;
      }
    }
    return null;
  }
  static areMapListingsEqual(mapListing1, mapListing2) {
    if (mapListing1 == null && mapListing2 == null)
      return true;
    if (mapListing1 == null || mapListing2 == null)
      return false;
    return mapListing1.mapId === mapListing2.mapId;
  }
  static getRandomMapListingInCup(cupId) {
    return ArrayUtils.getRandomElement(MapUtils.getMapListingsWithoutEpilepsyWarning(cupId));
  }
  static getMapListingForTryAnotherMap(currentMapListing, isExtension) {
    const allPossibilities = [];
    for (const cupId of ALL_CUP_IDS) {
      if (cupId === CupIdEnum.Ultrahard)
        continue;
      if (cupId === CupIdEnum.Vault)
        continue;
      if (cupId === CupIdEnum.Newcomer)
        continue;
      if (CupUtils.isOnlyOnWebsite(cupId, isExtension))
        continue;
      const mapListings = MapUtils.getMapListings(cupId);
      for (const mapListing of mapListings) {
        if (currentMapListing.mapId === mapListing.mapId)
          continue;
        if (mapListing.diff > currentMapListing.diff + 1)
          continue;
        if (EpilepsyUtils.doesMapNeedEpilepsyWarning(mapListing.mapId))
          continue;
        allPossibilities.push(mapListing);
      }
    }
    if (allPossibilities.length === 0)
      return MapUtils.getRandomMapListingInCup(currentMapListing.cupId);
    return allPossibilities[Math.floor(Math.random() * allPossibilities.length)];
  }
  static getNextMapListingToPlayInCup(cupId, mapCompletionDictionary, isExtension) {
    const mapListings = MapUtils.getMapListings(cupId);
    for (const mapListing of mapListings) {
      const didCompleteMap = mapCompletionDictionary[mapListing.mapId].count > 0;
      if (!didCompleteMap)
        return mapListing;
    }
    return MapUtils.getRandomMapListingInCup(cupId);
  }
  static getRandomMapListing() {
    const cupId = ArrayUtils.getRandomElement(ALL_CUP_IDS);
    return MapUtils.getRandomMapListingInCup(cupId);
  }
  static getMapListings(cupId) {
    const mapListings = [];
    for (const condensedMapListing of CondensedMapUtils.getCondensedMapListings(cupId)) {
      mapListings.push({
        cupId,
        mapId: condensedMapListing.id,
        diff: condensedMapListing.diff,
        name: condensedMapListing.name,
        num: condensedMapListing.num
      });
    }
    if (AddMapTocup != null) {
        if (cupId >= 36 && cupId < 36 + AddMapTocup.length) {
            for (let condensedMapListingMod of AddMapTocup[cupId-36]) {
                mapListings.push({
                    cupId: cupId,
                    mapId: condensedMapListingMod.id,
                    diff: condensedMapListingMod.diff,
                    name: condensedMapListingMod.name,
                    // num: condensedMapListing.num
                });
            }
        }
    }
    return mapListings;
  }
  static getMapListingsWithoutEpilepsyWarning(cupId) {
    const mapListings = MapUtils.getMapListings(cupId);
    return mapListings.filter((mapListing) => !EpilepsyUtils.doesMapNeedEpilepsyWarning(mapListing.mapId));
  }
  static isValidMapId(mapId) {
    if (typeof mapId !== "string")
      return false;
    if (mapId.length == 0)
      return false;
    if (mapId.length > 50)
      return false;
    const doesMapIdExist = MapUtils.getAllMapIds().includes(mapId);
    if (!doesMapIdExist)
      return false;
    return true;
  }
  static getCompletedMapsMergedUnique(completedMaps) {
    const uniqueCompletedMaps = [];
    for (const completedMap of completedMaps) {
      const uniqueCompletedMap = uniqueCompletedMaps.find((_uniqueCompletedMap) => _uniqueCompletedMap.mapId === completedMap.mapId);
      if (uniqueCompletedMap == null) {
        uniqueCompletedMaps.push(completedMap);
        continue;
      }
      uniqueCompletedMap.count += completedMap.count;
      uniqueCompletedMap.time = Math.min(uniqueCompletedMap.time, completedMap.time);
    }
    return uniqueCompletedMaps;
  }
}
const SOFT_MAX_RECENTLY_ADDED_MAPS = 10;
const HARD_MAX_RECENTLY_ADDED_MAPS = 35;
class RecentMapUtils {
  static async onBoot() {
    const newMapIds = MapUtils.getAllMapIds();
    await FStorage.setIfGetStringIsNull(StorageKeyEnum.LastVersionText, DeploymentUtils.getIcedodoVersionText());
    await FStorage.setIfGetStringIsNull(StorageKeyEnum.AddedMapIds, JSON.stringify([]));
    await FStorage.setIfGetStringIsNull(StorageKeyEnum.LastMapIds, JSON.stringify(newMapIds));
    const isNewVersion = await RecentMapUtils.isNewVersion();
    if (!isNewVersion)
      return;
    const oldMapIds = await RecentMapUtils.getMapIdsFromStorageKey(StorageKeyEnum.LastMapIds);
    const addedMapIds = RecentMapUtils.getAddedMapIds(oldMapIds, newMapIds);
    await FStorage.set(StorageKeyEnum.LastVersionText, DeploymentUtils.getIcedodoVersionText());
    await FStorage.set(StorageKeyEnum.LastMapIds, JSON.stringify(newMapIds));
    await RecentMapUtils.appendAddedMapIds(addedMapIds);
  }
  static async getRecentMapListings() {
    return RecentMapUtils.getMapListingsFromStorageKey(StorageKeyEnum.AddedMapIds);
  }
  static async getFavoriteMapListings() {
    return RecentMapUtils.getMapListingsFromStorageKey(StorageKeyEnum.FavoriteMapIds);
  }
  static async getMapListingsFromStorageKey(storageKey) {
    const addedMapIds = await RecentMapUtils.getMapIdsFromStorageKey(storageKey);
    const mapListings = [];
    for (const cupId of ALL_CUP_IDS) {
      const cupMapListings = MapUtils.getMapListings(cupId);
      for (const cupMapListing of cupMapListings) {
        if (!addedMapIds.includes(cupMapListing.mapId))
          continue;
        if (MapUtils.doesContain(mapListings, cupMapListing))
          continue;
        mapListings.push(cupMapListing);
      }
    }
    const mapListingsSorted = mapListings.sort((a, b) => {
      const aIndex = addedMapIds.indexOf(a.mapId);
      const bIndex = addedMapIds.indexOf(b.mapId);
      return aIndex - bIndex;
    });
    return mapListingsSorted;
  }
  static async isNewVersion() {
    const lastVersionText = await FStorage.getString(StorageKeyEnum.LastVersionText);
    if (lastVersionText == null)
      return false;
    return lastVersionText !== DeploymentUtils.getIcedodoVersionText();
  }
  static getAddedMapIds(oldMapIds, newMapIds) {
    const addedMapIds = [];
    for (const newMapId of newMapIds) {
      if (oldMapIds.includes(newMapId))
        continue;
      addedMapIds.push(newMapId);
    }
    return addedMapIds;
  }
  static async getMapIdsFromStorageKey(storageKey) {
    const lastMapIds = await FStorage.getString(storageKey);
    if (lastMapIds == null)
      return [];
    return JSON.parse(lastMapIds);
  }
  static async appendAddedMapIds(addedMapIds) {
    const currentAddedMapIds = await RecentMapUtils.getMapIdsFromStorageKey(StorageKeyEnum.AddedMapIds);
    const newAddedMapIds = [];
    for (const addedMapId of addedMapIds) {
      if (newAddedMapIds.length >= HARD_MAX_RECENTLY_ADDED_MAPS)
        break;
      newAddedMapIds.push(addedMapId);
    }
    for (const currentAddedMapId of currentAddedMapIds) {
      if (newAddedMapIds.includes(currentAddedMapId))
        continue;
      if (newAddedMapIds.length >= SOFT_MAX_RECENTLY_ADDED_MAPS)
        break;
      newAddedMapIds.push(currentAddedMapId);
    }
    await FStorage.set(StorageKeyEnum.AddedMapIds, JSON.stringify(newAddedMapIds));
  }
}
const EXTENSION_ID = "jhidcpailhmpjpbdbhceiaeeggkalgmd";
class SyncUtils {
  static async onBoot() {
    if (DeploymentUtils.isExtension())
      return;
    const deviceId = await FStorage.getString(StorageKeyEnum.DeviceId);
    if (deviceId != null)
      return;
    const newDeviceId = "device" + Date.now() + Math.random().toString().replace("0.", "");
    await FStorage.set(StorageKeyEnum.DeviceId, newDeviceId);
  }
  static hasExtension() {
    if (chrome == null)
      return false;
    if (chrome.runtime == null)
      return false;
    return true;
  }
  static async getRemoteCompletedMapsFromExtension(localCompletedMaps) {
    return new Promise((resolve2) => {
      const message = {
        code: "sync_extension_and_website",
        payload: JSON.stringify(localCompletedMaps)
      };
      chrome.runtime.sendMessage(EXTENSION_ID, message, (response) => {
        const lastError = chrome.runtime.lastError;
        if (lastError != null) {
          console.log("getRemoteCompletedMapsFromExtension err");
          console.error(lastError);
          resolve2({ remoteCompletedMaps: [], hasError: true });
        } else {
          const remoteCompletedMaps = JSON.parse(response);
          resolve2({ remoteCompletedMaps });
        }
      });
    });
  }
  static async setCloudCompletedMapsOnExtension(cloudCompletedMaps) {
    return new Promise((resolve2) => {
      const message = {
        code: "set_cloud_completed_maps",
        payload: JSON.stringify(cloudCompletedMaps)
      };
      chrome.runtime.sendMessage(EXTENSION_ID, message, (response) => {
        const lastError = chrome.runtime.lastError;
        if (lastError != null) {
          console.log("setCloudCompletedMapsOnExtension err");
          console.error(lastError);
          resolve2(null);
        } else {
          resolve2(null);
        }
      });
      setTimeout(() => {
        resolve2(null);
      }, 1500);
    });
  }
  static async setFavoriteMapsOnExtension(favoriteMapIds) {
    return new Promise((resolve2) => {
      const message = {
        code: "set_favorite_map_ids",
        payload: JSON.stringify(favoriteMapIds)
      };
      chrome.runtime.sendMessage(EXTENSION_ID, message, (response) => {
        const lastError = chrome.runtime.lastError;
        if (lastError != null) {
          console.log("setFavoriteMapsOnExtension err");
          console.error(lastError);
          resolve2(null);
        } else {
          resolve2(null);
        }
      });
      setTimeout(() => {
        resolve2(null);
      }, 1500);
    });
  }
  static getCompletionCount(completedMaps) {
    let completionCount = 0;
    for (const completedMap of completedMaps) {
      completionCount += completedMap.count;
    }
    return completionCount;
  }
}
class UrlUtils {
  static getRouteNameOrCrash() {
    const slashSplit = location.href.split("/");
    const lastSplit = slashSplit[slashSplit.length - 1];
    const routeName = lastSplit.split("?")[0].split("#")[0].split("&")[0].trim();
    const route = "/" + routeName;
    if (!UrlUtils.isValidRoute(route))
      UrlUtils.crash("Invalid route: " + route);
    console.log("route", route);
    return route;
  }
  static getQueryValue(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
  }
  static getQueryDict() {
    const queryDict = {};
    const allQueryKeys = MiscUtils.getStringEnumValues(QueryKeyEnum);
    for (const queryKey of allQueryKeys) {
      const queryValue = UrlUtils.getQueryValue(queryKey);
      if (queryValue == null)
        continue;
      queryDict[queryKey] = queryValue;
    }
    return queryDict;
  }
  static isValidRoute(route) {
    const allRoutes = MiscUtils.getStringEnumValues(RouteEnum);
    return allRoutes.includes(route);
  }
  static crash(crashedTextOrNull) {
    console.log("crash", crashedTextOrNull);
    const crashedText = crashedTextOrNull ?? "Unknown error";
    const queryText = `?crashedText=${crashedText}`;
    UrlUtils.goToRoute(RouteEnum.Crashed, queryText);
    throw new Error(crashedText);
  }
  static goToRoute(route, queryText = "") {
    if (DeploymentUtils.isExtension()) {
      window.open(WEBSITE_URL + route + queryText, "_blank");
    } else {
      window.location.href = route + queryText;
    }
  }
}
class NewcomerUtils {
  static async onBoot(queryDict) {
    await NewcomerUtils.resetStorageIfNewcomer();
    await NewcomerUtils.graduateNewcomerIfOpeningNonFeaturedMap(queryDict);
  }
  static async graduateNewcomerIfOpeningNonFeaturedMap(queryDict) {
    if (queryDict[QueryKeyEnum.MapId] == null)
      return;
    if (NewcomerUtils.isMapInFeaturedCup(queryDict[QueryKeyEnum.MapId]))
      return;
    await FStorage.set(StorageKeyEnum.IsNewcomer, StorageValueEnum.No);
  }
  static async resetStorageIfNewcomer() {
    if (await NewcomerUtils.didNewcomerGraduateInStorage())
      return;
    FStorage.set(StorageKeyEnum.LastOpenedCupId, CupIdEnum.Newcomer);
  }
  static isMapInFeaturedCup(findingMapId) {
    for (const mapListing of MapUtils.getMapListings(CupIdEnum.Newcomer)) {
      if (mapListing.mapId === findingMapId)
        return true;
    }
    return false;
  }
  static async didNewcomerGraduateInStorage() {
    const newcomerStorageValue = await FStorage.getString(StorageKeyEnum.IsNewcomer);
    return newcomerStorageValue === StorageValueEnum.No;
  }
  static async isNewcomer(mainProgressState) {
    if (await NewcomerUtils.didNewcomerGraduateInStorage())
      return false;
    const isNewcomerCalculate = mainProgressState.overallProgress.completedMaps < NEWCOMER_GRADUATE_AT_MAP_COMPLETION_COUNT;
    if (!isNewcomerCalculate)
      await FStorage.set(StorageKeyEnum.IsNewcomer, StorageValueEnum.No);
    return isNewcomerCalculate;
  }
  static createNewcomerHelpPopupItem(mainProgressState) {
    const mapsToComplete = NEWCOMER_GRADUATE_AT_MAP_COMPLETION_COUNT - mainProgressState.overallProgress.completedMaps; // progress found?
    return {
      title: "Help",
      bodyAsHtml: `
                Welcome to the Ice Dodo!
                <br><br>sdfdsfsdfsfsdfsdfsdf
                Use the arrow keys to move.
                Hit the green portal to win.
                Do not fall off or hit the spikes.
                <br><br>
                Complete ${mapsToComplete} more maps to unlock the full game!
            `,
      buttons: []
    };
  }
}
class MapPropertyUtils {
  static async onBoot() {
    await FStorage.setIfGetStringIsNull(StorageKeyEnum.DoesUserHaveEpilepsy, StorageValueEnum.Maybe);
  }
  static async shouldDisplayEpilepsyWarning(mapId) {
    const epilepsyValue = await FStorage.getString(StorageKeyEnum.DoesUserHaveEpilepsy);
    if (epilepsyValue === StorageValueEnum.No)
      return false;
    return EpilepsyUtils.doesMapNeedEpilepsyWarning(mapId);
  }
}
class FEntryManager {
  static async init() {
    const queryDict = UrlUtils.getQueryDict();
    window.currentRoute = FEntryManager.getCurrentRoute(queryDict);
    const app = createApp(App);
    app.use(router);
    app.mount("#app");
    router.push("/");
    console.log("Ice dodo version: " + DeploymentUtils.getIcedodoVersionText());
    if (queryDict[QueryKeyEnum.MapUrl] != null && queryDict[QueryKeyEnum.MapCodeVersion] !== LATEST_MAP_CODE_VERSION) {
      alert("Please upgrade the blender compiler code to the latest version: " + LATEST_MAP_CODE_VERSION);
      return;
    }
    FGlobalManager.onBoot();
    await NewcomerUtils.onBoot(queryDict);
    await RecentMapUtils.onBoot();
    await SyncUtils.onBoot();
    await SettingsUtils.onBoot();
    await MapPropertyUtils.onBoot();
    await FStorage.setIfGetStringIsNull(StorageKeyEnum.SelectedSkinId, SkinIdEnum.Default);
    router.push({ path: window.currentRoute, query: queryDict });
  }
  static getCurrentRoute(queryDict) {
    if (DeploymentUtils.isExtension())
      return RouteEnum.Singleplayer;
    if (queryDict[QueryKeyEnum.IsMultiplayer] === "yes")
      return RouteEnum.Multiplayer;
    if (queryDict[QueryKeyEnum.FirstRoute] != null) {
      const route = "/" + queryDict[QueryKeyEnum.FirstRoute];
      if (!UrlUtils.isValidRoute(route))
        UrlUtils.crash("Invalid route: " + route);
      return route;
    }
    const routeName = UrlUtils.getRouteNameOrCrash();
    if (routeName === RouteEnum.Boot)
      return RouteEnum.Singleplayer;
    return routeName;
  }
}
void FEntryManager.init();
window.sponsorManager = new FSponsorManager();
// minified exports
export {
  ALL_CUP_IDS as A,
  MapPropertyUtils as B,
  CupIdEnum as C,
  DeploymentUtils as D,
  toDisplayString as E,
  FStorage as F,
  normalizeClass as G,
  Fragment as H,
  renderList as I,
  createVNode as J,
  resolveComponent as K,
  LATEST_MAP_CODE_VERSION as L,
  MapUtils as M,
  NewcomerUtils as N,
  normalizeStyle as O,
  PageIdEnum as P,
  RecentMapUtils as Q,
  RouteEnum as R,
  StorageKeyEnum as S,
  withDirectives as T,
  ULTRAHARD_UNLOCK_AT_OVERALL_PERCENT as U,
  vModelText as V,
  WEBSITE_URL as W,
  withKeys as X,
  QueryKeyEnum as Y,
  _export_sfc as _,
  FINDER_MAX_RESULTS as a,
  ALL_DIFFICULTIES as b,
  ALL_SKIN_IDS as c,
  SkinIdEnum as d,
  CupUtils as e,
  UrlUtils as f,
  API_SERVER_URL as g,
  MiscUtils as h,
  CLOSE_BUTTON_TEXT as i,
  LinkEnum as j,
  StorageValueEnum as k,
  NEWCOMER_GRADUATE_AT_MAP_COMPLETION_COUNT as l,
  ColorEnum as m,
  SoundFileEnum as n,
  ALL_SOUND_FILE_PATHS as o,
  SettingsUtils as p,
  ArrayUtils as q,
  FGlobalManager as r,
  defineComponent as s,
  createElementBlock as t,
  createBaseVNode as u,
  createCommentVNode as v,
  createStaticVNode as w,
  openBlock as x,
  pushScopeId as y,
  popScopeId as z
};
