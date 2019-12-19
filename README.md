A prepared package for new HTML/CSS/JS projects and easy coding using Webpack.

![Webpack Document Blank](src/assets/webpack-document-blank.png)

# Features

## 1. Organization

| Feature                          | Description                                                |
| -------------------------------- | ---------------------------------------------------------- |
| 🧊 [Webpack][1]                  | Automatic bundler                                          |
| 📊 [Webpack Bundle Analyzer][16] | Generate report to visualise bundle contents.              |
| ⚙️ [NPM Scripts][2]              | Preconfigured scripts (development, build and clean tasks) |
| 🦋 [Prettier][14]                | Opinionated code formatter.                                |

[1]: https://webpack.js.org/
[2]: https://docs.npmjs.com/misc/scripts
[14]: https://prettier.io/
[16]: https://github.com/webpack-contrib/webpack-bundle-analyzer

### NPM Scripts

| NPM Command              | Description                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------ |
| `npm run dev`            | Local webserver for development (serve + watch) <sup>\*</sup>                        |
| `npm run watch`          | Watch changes (dev for use with external server: apache, nginx, local server...)     |
| `npm run lint:css`       | Lint CSS files with stylelint (`src/css/\*.css` )                                    |
| `npm run lint:js`        | Lint Javascript files with eslint (`src/js/\*.js` )                                  |
| `npm run lint:ts`        | Lint Typescript files with eslint (`src/js/\*.ts` )                                  |
| `npm run lint`           | Lint both (CSS & Javascript & Typescript)                                            |
| `npm run clean:cache`    | Remove `dist` and `build` folder.                                                    |
| `npm run clean:all`      | Reset default repo and remove cache and all npm generated files.                     |
| `npm run build`          | Automatic production build (for website upload). <sup>\*</sup>                       |
| `npm run build:gh-pages` | Automatic production build for GitHub Pages. <sup>\*\*</sup>                         |
| `npm run deploy`         | Optional deploy `docs` folder (master branch) to `gh-pages` branch <sup>\*\*\*</sup> |

<sup>\*</sup> <small>Includes size detailed report ([Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer))</small>

<sup>\*\*</sup> <small>GitHub Pages URL is https://user.github.io/<strong>reponame</strong>/.</small> Don't forget change `name` to **reponame** in your `package.json`.</small><br>
<sup>\*\*</sup> <small>**DANGER**: In this template, GitHub build save into `docs/` folder. Require enable in Settings.</small>

<sup>\*\*\*</sup> <small>Alternative build deploy for [GitHub Pages](https://pages.github.com/)</small>

## 2. HTML & Styles

| Feature                       | Description                                                 |
| ----------------------------- | ----------------------------------------------------------- |
| 🌀 [PostCSS][3]               | Pre, post and transform CSS with JS                         |
| 👓 [PostCSS Preset-env][4]    | Convert modern CSS into browsers can understand             |
| 🍂 [Autoprefixer][5]          | Auto add CSS prefix properties                              |
| 🔮 [PostCSS Easy Import][17]  | Allow imports (rel, node_modules, remote...) from CSS files |
| ➕ [PostCSS Mixins][6]        | Support for CSS mixins (functions-in-css)                   |
| 🅰️ [PostCSS Font Magician][7] | Auto import Google Fonts                                    |
| 🔧 [CleanCSS][8]              | Auto minify & optimize CSS code                             |
| 🤵 [StyleLint][9]             | Review CSS code for improve quality, tips and avoid errors  |

[3]: https://postcss.org/
[4]: https://preset-env.cssdb.org/features
[5]: https://autoprefixer.github.io/
[6]: https://github.com/postcss/postcss-mixins
[7]: https://github.com/jonathantneal/postcss-font-magician
[8]: https://github.com/jakubpawlowicz/clean-css
[9]: https://stylelint.io/
[17]: https://github.com/TrySound/postcss-easy-import

## 3. Javascript

| Feature                          | Description                                                        |
| -------------------------------- | ------------------------------------------------------------------ |
| 💼 [Babel][10]                   | Transpile Future Javascript to ES5.                                |
| 🎁 [Babel Preset-typescript][15] | Smart preset to remove types from Typescript.                      |
| 🎁 [Babel Preset-env][11]        | Smart preset to write ES2015+ (ES6/ES7/ES8) Javascript.            |
| 🌎 [Browserlist][12]             | Compatibilize code to specific browsers.                           |
| 👁️ [ESLint][13]                  | Review Javascript code for improve quality, tips and avoid errors. |

[10]: https://babeljs.io/
[15]: https://babeljs.io/docs/en/babel-preset-typescript
[11]: https://babeljs.io/docs/en/babel-preset-env
[12]: https://browserl.ist/
[13]: https://eslint.org/

# Usage

- `master` branch: Vanilla document blank project

## Requirements / Recommended

- node 12+ / npm 6+: https://github.com/nodesource/distributions/blob/master/README.md#debinstall
- Prettier for VSCode: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- Icons for VSCode: https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons
- ESLint for VSCode: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- StyleLint for VSCode: https://marketplace.visualstudio.com/items?itemName=stuartzhang.stylelint-stzhang

## Master branch

```
git clone https://github.com/ManzDev/webpack-document-blank folder-project
cd folder-project
rm -rf .git
npm install
npm run dev
```
