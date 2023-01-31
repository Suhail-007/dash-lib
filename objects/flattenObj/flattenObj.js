export function flattenObjs(obj) {
  let newObj = {};

  for (const key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      const nobj = flattenObjs(obj[key]);

      for (const nkey in nobj) {
        newObj[nkey] = nobj[nkey];
      }
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj
}

flattenObjs(deepNestedObj);