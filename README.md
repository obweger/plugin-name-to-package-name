# plugin-name-to-package-name

Transforms plugin names into package names, as seen at e.g. [`eslint`](https://eslint.org/), [`stricter`](https://github.com/atlassian/stricter), and others.

From `eslint`'s [Working with Plugins](https://eslint.org/docs/developer-guide/working-with-plugins):

> Each plugin is an npm module with a name in the format of `eslint-plugin-<plugin-name>`, such as `eslint-plugin-jquery`. You can also use scoped packages in the format of `@<scope>/eslint-plugin-<plugin-name>` such as `@jquery/eslint-plugin-jquery` or even `@<scope>/eslint-plugin` such as `@jquery/eslint-plugin`.

## Installation

```shell
$ npm install plugin-name-to-package-name
```

```js
const { transform } = require('plugin-name-to-package-name');

console.log(transform('@foo/bar', 'some-plugin')); // @foo/some-plugin-bar
```

## Usage

`transform` takes two parameters; the `pluginName`, and the `pluginPrefix`. In the above example, `pluginName` is `'@foo/bar'` and `pluginPrefix` is `some-plugin`.

## Contributions

Yes please!