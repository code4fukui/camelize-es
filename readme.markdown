# camelize-es

recursively transform key strings to camel-case

forked [camelize 1.0.0](https://www.npmjs.com/package/camelize)

## example

``` js
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

output:

```
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

## methods

``` js
import { camelize } from 'https://code4fukui.github.io/camelize-es/camelize.js';
```

### camelize(obj)

Convert the key strings in `obj` to camel-case recursively.

## author

- name:  James Halliday
- email: mail@substack.net
- url http://substack.net

## license

MIT
