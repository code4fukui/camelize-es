# camelize-es

オブジェクトのキーまたは文字列を再帰的にキャメルケースに変換します。

このプロジェクトは、オリジナルの[camelize 1.0.0](https://www.npmjs.com/package/camelize)ライブラリをESモジュール化したフォークであり、モダンなJavaScriptプロジェクトや、依存関係なしでのブラウザでの直接利用に適しています。

## 例

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

出力:

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

## 特徴

- オブジェクトのキーを再帰的に`camelCase`に変換します。
- 深くネストされたオブジェクトや配列を処理します。
- 単独の文字列を変換します（例: `'foo-bar'` を `'fooBar'` に変換）。
- `Date` および `RegExp` インスタンスは変更せずに保持します。
- 依存関係ゼロ。
- CDN経由で簡単にインポートできるESモジュール形式。

## API

### `camelize(input)`

オブジェクト/配列のキー、または単一の文字列をキャメルケースに変換します。

- **`input`** (`Object` | `Array` | `string`): 変換するオブジェクト、配列、または文字列。
- **戻り値**: キー/値が変換された新しいオブジェクト、配列、または文字列。元の入力は変更されません。

## クレジット

このプロジェクトは、James Halliday氏の成果物に基づいています。

- **オリジナル著者**: James Halliday
- **Email**: mail@substack.net
- **URL**: http://substack.net

## ライセンス

MIT
