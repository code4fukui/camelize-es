# camelize-es

recursively transform key strings to camel-case

forked [camelize 1.0.0](https://www.npmjs.com/package/camelize)

## example

``` js
var camelize = require('camelize');
var obj = {
    fee_fie_foe: 'fum',
    beep_boop: [
        { 'abc.xyz': 'mno' },
        { 'foo-bar': 'baz' }
    ]
};
var res = camelize(obj);
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

### methods

``` js
var camelize = require('camelize')
```

### camelize(obj)

Convert the key strings in `obj` to camel-case recursively.

## install

With [npm](https://npmjs.org) do:

```
npm install camelize
```

To use in the browser, use [browserify](http://browserify.org).

## author

- name:  James Halliday
- email: mail@substack.net
- url http://substack.net

## license

MIT
