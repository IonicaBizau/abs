# abs [![Support this project][donate-now]][paypal-donations]

A library to convert a path into an absolute path.

## Installation

```sh
$ npm i abs
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

 - [`engine-tools`](https://github.com/jillix/engine-tools) by jillix

 - [`fwatcher`](https://github.com/IonicaBizau/node-fwatcher)

 - [`ghcal`](https://github.com/IonicaBizau/ghcal)

 - [`git-issues`](https://github.com/softwarescales/git-issues) by Gabriel Petrovay

 - [`git-repos`](https://github.com/IonicaBizau/node-git-repos#readme)

 - [`git-stats`](https://github.com/IonicaBizau/git-stats)

 - [`github-labeller`](https://github.com/IonicaBizau/github-labeller#readme)

 - [`gpm`](https://github.com/IonicaBizau/node-gpm)

 - [`messager`](https://github.com/IonicaBizau/node-messager#readme)

 - [`mongof`](https://github.com/IonicaBizau/node-mongof)

 - [`namy`](https://github.com/IonicaBizau/namy)

 - [`pm2-meteor`](https://github.com/andruschka/pm2-meteor) by andruschka

 - [`ssh-remote`](https://github.com/IonicaBizau/ssh-remote)

 - [`statique`](https://github.com/IonicaBizau/node-statique)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md