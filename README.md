# abs [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/abs.svg)](https://www.npmjs.com/package/abs) [![Downloads](https://img.shields.io/npm/dt/abs.svg)](https://www.npmjs.com/package/abs) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A library to convert a path into an absolute path.

## Installation

```sh
$ npm i --save abs
```

## Example

```js
// Dependencies
var Abs = require("abs");

console.log(Abs("/foo"));
// => "/foo"

console.log(Abs("foo"));
// => "/path/to/where/you/are/foo"

console.log(Abs("~/foo"));
// => "/home/username/foo"
```

## Documentation

### `Abs(input)`
Computes the absolute path of an input.

#### Params
- **String** `input`: The input path.

#### Return
- **String** The absolute path.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`bible`](https://github.com/BibleJS/BibleApp)

 - [`cdnjs-importer`](https://github.com/cdnjs/cdnjs-importer)

 - [`engine-paths`](https://github.com/jillix/engine-paths#readme) by jillix

 - [`engine-tools`](https://github.com/jillix/engine-tools) by jillix

 - [`fwatcher`](https://github.com/IonicaBizau/node-fwatcher)

 - [`gh-notifier`](https://bitbucket.org/IonicaBizau/gh-notifier#readme)

 - [`ghcal`](https://github.com/IonicaBizau/ghcal)

 - [`git-issues`](https://github.com/softwarescales/git-issues) by Gabriel Petrovay

 - [`git-repos`](https://github.com/IonicaBizau/node-git-repos#readme)

 - [`git-stats`](https://github.com/IonicaBizau/git-stats)

 - [`github-labeller`](https://github.com/IonicaBizau/github-labeller#readme)

 - [`gpm`](https://github.com/IonicaBizau/gpm)

 - [`idea`](https://github.com/IonicaBizau/idea)

 - [`messager`](https://github.com/IonicaBizau/node-messager#readme)

 - [`mongof`](https://github.com/IonicaBizau/node-mongof)

 - [`namy`](https://github.com/IonicaBizau/namy)

 - [`pm2-meteor`](https://github.com/andruschka/pm2-meteor) by andruschka

 - [`ssh-remote`](https://github.com/IonicaBizau/ssh-remote)

 - [`statique`](https://github.com/IonicaBizau/node-statique)

 - [`web-term`](https://github.com/IonicaBizau/web-term)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md