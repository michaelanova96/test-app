/**
 * Ignores case conventions (e.g. `"fooBar"`, `"FOO_BAR"`, `"FooBar"` and
 * `"foo_bar"` will return the value of prop `"FO_ob_AR"`).
 *
 * @param value - The value to be proxied.
 *
 * @returns A proxy that ignores case conventions on props.
 */
export declare function ignoreCase<Value>(value: Value): Value;
