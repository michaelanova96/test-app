function transformKey(key) {
    return key.replaceAll("_", "").toLowerCase();
}
/**
 * Ignores case conventions (e.g. `"fooBar"`, `"FOO_BAR"`, `"FooBar"` and
 * `"foo_bar"` will return the value of prop `"FO_ob_AR"`).
 *
 * @param value - The value to be proxied.
 *
 * @returns A proxy that ignores case conventions on props.
 */
export function ignoreCase(value) {
    if (!(typeof value === "object" && value !== null)) {
        return value;
    }
    const keys = Object.keys(value);
    const keyToTransformedKeyMappings = new Map(keys.map((key) => [transformKey(key), key]));
    if (keyToTransformedKeyMappings.size !== keys.length) {
        throw Object.assign(new TypeError("Keys must not differ only by case convention"), {
            keyToTransformedKeyMappings: Object.keys(value)
                .map((key) => [transformKey(key), key])
                .sort(([a], [b]) => a.localeCompare(b)),
        });
    }
    return new Proxy(value, {
        get(target, key, receiver) {
            return ignoreCase(typeof key === "string"
                ? Reflect.get(target, keyToTransformedKeyMappings.get(transformKey(key)) ?? key, receiver)
                : Reflect.get(target, key, receiver));
        },
    });
}
