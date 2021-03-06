# staticsite-starterkit3

Starter Kit for a Simple Website Development.

## Features

- Compile HTML files from Jade templates.
- Prettify HTML formats.
- Transform latest CSS syntaxes to compatible ones(Using [PostCSS](http://postcss.org/) and [cssnext](http://cssnext.io/)).
- Enable to use [@import](https://github.com/postcss/postcss-import), [nesting](https://github.com/postcss/postcss-nested), [mixins](https://github.com/postcss/postcss-mixins), and [simple variables](https://github.com/postcss/postcss-simple-vars) like SCSS syntaxes.
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
cssnext({browsers: ['last 2 version']})
```

More specific Browserslist queries are [here](https://github.com/ai/browserslist#queries).
