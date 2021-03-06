export default function keyMirror<T extends Record<string, unknown>>(
  obj: T
): { [K in keyof T]: K } {
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): Argument must be an object.');
  }

  const ret: any = {};
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }

    ret[key] = key;
  }
  return ret;
}
