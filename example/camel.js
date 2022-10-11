import { camelize } from "../camelize.js";

const obj = {
    fee_fie_foe: 'fum',
    beep_boop: [
        { 'abc.xyz': 'mno' },
        { 'foo-bar': 'baz' }
    ]
};
const res = camelize(obj);
console.log(JSON.stringify(res, null, 2));
