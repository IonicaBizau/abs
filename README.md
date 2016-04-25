
# abs [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/abs.svg)](https://www.npmjs.com/package/abs) [![Downloads](https://img.shields.io/npm/dt/abs.svg)](https://www.npmjs.com/package/abs) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A library to convert a path into an absolute path.

## :cloud: Installation

```sh
$ npm i --save abs
```


## :clipboard: Example



```js
const abs = require("abs");

console.log(abs("/foo"));
// => "/foo"

console.log(abs("foo"));
// => "/path/to/where/you/are/foo"

console.log(abs("~/foo"));
// => "/home/username/foo"
```

## :memo: Documentation


### `abs(input)`
Computes the absolute path of an input.

#### Params
- **String** `input`: The input path (if not provided, the current working directory will be returned).

#### Return
- **String** The absolute path.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bible`](https://github.com/BibleJS/BibleApp)—Read the Holy Bible via the command line.
 - [`blah`](https://github.com/IonicaBizau/blah)—A command line tool to optimize the repetitive actions.
 - [`cdnjs-importer`](https://github.com/cdnjs/cdnjs-importer)—Easy way to import a library into CDNJS.
 - [`cli-sunset`](https://github.com/IonicaBizau/cli-sunset)—A fancy command line tool for knowing the sunset time.
 - [`emojer-cli`](https://github.com/IonicaBizau/emojer-cli#readme)—Command line tool for emojer.
 - [`engine-app`](https://github.com/jillix/engine-app#readme) (by jillix)—Engine app related helper functions.
 - [`engine-paths`](https://github.com/jillix/engine-paths#readme) (by jillix)—Keeping the Engine paths in one place.
 - [`engine-tools`](https://github.com/jillix/engine-tools) (by jillix)—Engine Tools library and CLI app.
 - [`fwatcher`](https://github.com/IonicaBizau/node-fwatcher)—Watch files for changes.
 - [`gh-notifier`](https://bitbucket.org/IonicaBizau/gh-notifier#readme)—Receive desktop notifications from your GitHub dashboard.
 - [`ghcal`](https://github.com/IonicaBizau/ghcal)—See the GitHub contributions calendar of a user in the command line.
 - [`git-issues`](https://github.com/softwarescales/git-issues) (by Gabriel Petrovay)—Git issues extension to list issues of a Git project
 - [`git-repos`](https://github.com/IonicaBizau/node-git-repos#readme)—Find all the git repositories in a specified directory, recursively.
 - [`git-stats`](https://github.com/IonicaBizau/git-stats)—Local git statistics including GitHub-like contributions calendars.
 - [`github-labeller`](https://github.com/IonicaBizau/github-labeller#readme)—Automagically create issue labels in your GitHub projects.
 - [`gpm`](https://github.com/IonicaBizau/gpm)—npm + git = gpm - Install NPM packages and dependencies from git repositories.
 - [`gry`](https://github.com/IonicaBizau/node-gry)—A minimalist NodeJS wrapper for the `git` commands. `gry` stands for the Git RepositorY.
 - [`idea`](https://github.com/IonicaBizau/idea)—A lightweight CLI tool and module for keeping ideas in a safe place quick and easy.
 - [`image-to-ascii-cli`](https://github.com/IonicaBizau/image-to-ascii-cli#readme)—View images in text format, in your terminal.
 - [`messager`](https://github.com/IonicaBizau/node-messager#readme)—Inter-process communication made simple.
 - [`mongof`](https://github.com/IonicaBizau/node-mongof)—Sync MongoDB collections with JSON files.
 - [`namy`](https://github.com/IonicaBizau/namy)—Gets the name of the exported function.
 - [`np-init`](https://github.com/IonicaBizau/np-init#readme)—Easily start a npm package from scratch.
 - [`package-json-path`](https://github.com/IonicaBizau/package-json-path#readme)—Get the package.json path in a specific directory.
 - [`packy`](https://github.com/IonicaBizau/packy#readme)—Set default fields in your package.json files.
 - [`pm2-meteor`](https://github.com/andruschka/pm2-meteor) (by andruschka)—Simplest way to deploy, scale and run Meteor Apps with PM2.
 - [`rucksack`](https://github.com/IonicaBizau/rucksack#readme)—Bundle js files by replacing the require calls in-place.
 - [`ssh-remote`](https://github.com/IonicaBizau/ssh-remote)—Automagically switch on the SSH remote url in a Git repository.
 - [`statique`](https://github.com/IonicaBizau/statique)—A Node.JS static server module with built-in cache options and route features.
 - [`tithe`](https://github.com/IonicaBizau/tithe)—Organize and track the tithe payments.
 - [`web-term`](https://github.com/IonicaBizau/web-term)—A full screen terminal in your browser.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
