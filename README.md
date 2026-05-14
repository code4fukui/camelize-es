# camelize-es

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Recursively transform object keys or a string to camel-case.

This project is an ES module fork of the original [camelize 1.0.0](https://www.npmjs.com/package/camelize) library, making it suitable for modern JavaScript projects and direct browser usage with no dependencies.

## Example

```js
import { camelize } from 'https://code4fukui.github.io/camelize-es/camelize.js';

const obj = {
    fee_fie_foe: 'fum',
    beep_boop: [
        { 'abc.xyz': 'mno' },
        { 'foo-bar': 'baz' }
    ]
};
const res = camelize(obj);
console.log(JSON.stringify(res, null, 2));
```

Output:

```json
{
  "feeFieFoe": "fum",
  "beepBoop": [
    {
      "abcXyz": "mno"
    },
    {
      "fooBar": "baz"
    }
  ]
}
```

## Features

-   Recursively converts object keys to `camelCase`.
-   Handles deeply nested objects and arrays.
-   Converts standalone strings (e.g., `'foo-bar'` to `'fooBar'`).
-   Preserves `Date` and `RegExp` instances without modification.
-   Zero dependencies.
-   ES module format for easy import via CDN.

## API

### `camelize(input)`

Converts the keys of an object/array or a single string to camel-case.

-   **`input`** (`Object` | `Array` | `string`): The object, array, or string to transform.
-   **Returns**: A new object, array, or string with its keys/value transformed. The original input is not modified.

## Attribution

This project is based on the work of James Halliday.

-   **Original Author**: James Halliday
-   **Email**: mail@substack.net
-   **URL**: http://substack.net

## License

MIT