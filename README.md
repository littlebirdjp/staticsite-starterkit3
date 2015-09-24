# staticsite-starterkit3
Starter Kit for a Simple Website Development.

## Features

- Compile HTML files from Jade templates.
- Prettify HTML formats.
- Transform latest CSS syntaxes to compatible ones(Using [cssnext](http://cssnext.io/)).
- Enable to use [nesting](https://github.com/postcss/postcss-nested), [mixins](https://github.com/postcss/postcss-mixins), and [simple variables](https://github.com/postcss/postcss-simple-vars) like SCSS syntaxes.
- Include a reset CSS automatically.
- Run Browser-Sync when compiling files.

## Requirement

- node.js
- "Editor Config" Package if using Sublime Text.

## Installation

Install required packages.

```
$ npm i
```

## Usage

Run watching tasks with a command with...

```
$ gulp
```

or

```
$ npm start
```

## Option

[cssnext functions](http://cssnext.io/features/) are automatically adopted depending on browser options.  
So, Change the setting in gulpfile.js for your project's requiement.

```
browsers: 'last 2 versions'
```

More specific Browserslist queries are [here](https://github.com/ai/browserslist#queries).

## Trouble Shooting

When using the postcss-nested plugin, You may encounter an error message like blow.

```
Your current PostCSS version is 4.1.16, but postcss-nested uses 5.0.4. Perhaps this is the source of the error below.
```

In that case, Try this command at `./node_modules/gulp-cssnext/node_modules/cssnext` directory to upgrade PostCSS version.

```
$ npm i postcss@5.0.4 --save
```

I hope this error will be fixed in the next version of gulp-cssnext.
