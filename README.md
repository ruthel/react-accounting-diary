<h1 align="center">react-accounting-diary</h1>

<p align="center"><strong>✂️ Component making to generate a accounting diary and export image.</strong></p>

[//]: # (<p align="center">)

[//]: # (<a href="/LICENSE"><img src="https://img.shields.io/github/license/bubkoo/html-to-image?style=flat-square" alt="MIT License"></a>)

[//]: # (<a href="https://www.typescriptlang.org"><img alt="Language" src="https://img.shields.io/badge/language-TypeScript-blue.svg?style=flat-square"></a>)

[//]: # (<a href="https://github.com/bubkoo/html-to-image/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square"></a>)

[//]: # (<a href="https://github.com/bubkoo/html-to-image/actions/workflows/ci.yml"><img alt="build" src="https://img.shields.io/github/workflow/status/bubkoo/html-to-image/%F0%9F%91%B7%E3%80%80CI/master?logo=github&style=flat-square"></a>)

[//]: # (<a href="https://app.codecov.io/gh/bubkoo/html-to-image"><img alt="coverage" src="https://img.shields.io/codecov/c/gh/bubkoo/html-to-image?logo=codecov&style=flat-square&token=BWweeU2uNX"></a>)

[//]: # (<a href="https://lgtm.com/projects/g/bubkoo/html-to-image/context:javascript" rel="nofollow"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/bubkoo/html-to-image.svg?logo=lgtm&style=flat-square" /></a>)

[//]: # (</p>)

[//]: # ()
[//]: # (<p align="center">)

[//]: # (<a href="https://www.npmjs.com/package/html-to-image" rel="nofollow"><img alt="NPM Package" src="https://img.shields.io/npm/v/html-to-image.svg?style=flat-square" /></a>)

[//]: # (<a href="https://www.npmjs.com/package/html-to-image" rel="nofollow"><img alt="NPM Downloads" src="http://img.shields.io/npm/dm/html-to-image.svg?style=flat-square" /></a>)

[//]: # (<a href="https://david-dm.org/bubkoo/html-to-image?type=dev" rel="nofollow"><img alt="devDependencies Status" src="https://david-dm.org/bubkoo/html-to-image/dev-status.svg?style=flat-square" /></a>)

[//]: # (</p>)


# Accounting Diary Generator

This project was created and is compatible with React library.

## Available Scripts
In the project directory, you can run:

## Install
```shell
npm i --save react-accounting-diary
```
or
```bash
yarn add react-accounting-diary
```
## Usage
 ```jsx
import React from "react";
import AccountingDiary from 'react-accounting-diary/lib/AccountingDiary'

function App() {
  return (
    <div>
      <AccountingDiary/>
    </div>);
}
export default App;


 ```
### Step 1
After installing firstly the version of the dependency, install a compatible version of node-sass, especially  version 4.14+

### Step 2
From next step, your will have to install a compatible version of sass in global mode in your computer

Just by the insertion of the component your will be able to work and create your model of accounting diary.
But if you want to personalise it your can go with the following example code:


Just by the insertion of the component your will be able to work and create your model of accounting diary.
But if you want to personalise it your can go with the following example code:

### Example:

 ```jsx
import React from "react";
import AccountingDiary from 'react-accounting-diary/lib/AccountingDiary'

function App() {
  return (
    <div>
      <AccountingDiary
        title='My new test in dev'
        account={{
          width: 120,
          color:'#ff00ff'
        }}
        amount={{
          width: 120
        }}/>
    </div>);
}
export default App;
 ```

### Properties

| Name      | Description                                                                                                                                                                              | 
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| saveColor | Hex color, `default: #ffffff` use to set the color of the button that generate the export image of the the diary                                                                         |
| saveIcon  | Hex color default: <Download size={16}/> use to set the icon of the button that generate the export image of the the diary <br/> The libraries use to set the svg icon is react-feather |
| title     | Title of the the accounting-diary                                                                                                                                                        |
| account   | Object element use to set behaviour of the account number part in the diary: **see below**                                                                                               |
| amount    | Object element use to set behaviour of the amount part in the diary: **see below**                                                                                                       |

##### Account & Amount
| Name  | Description                      | 
|-------|----------------------------------|
| width | Cell width in the diary          |
| color | Text color in the cell           |

## Contributing

Please let us know how can we help. Do check out [issues](https://github.com/ruthel/accounting-diary/issues) for bug reports or suggestions first.

To become a contributor, please follow our [contributing guide](/CONTRIBUTING.md).

<a href="https://github.com/ruthel/accounting-diary/graphs/contributors">
  <img src="/CONTRIBUTORS.svg" alt="Contributors" width="740" />
</a>