
# react-accounting-diary
<hr/>

✂️ Component making to generate an accounting diary and export image file with different format or in PDF document.
This project was created and is compatible with React library.

## Install
<hr/>

```shell
npm i --save react-accounting-diary
```

or

```shell
yarn add react-accounting-diary
```

## What's new in version

### v0.2.2

* Bugs fixed and support improved

### v0.2.1

* Adding of the contributors.md file


### v0.2.0

* Graphically choose the Currency between various type
* Is debit filed don't anymore need to be checked before save
* Amount field now allow step of with decimal value
* Clean the entire data
* Load a set of sample data
* Pdf exportation
* Undo/Redo button added for data timeline

### v0.1.4

* MIT License review

### v0.1.3

* UI Improvement when adding transaction

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

After installing firstly the version of the dependency, install a compatible version of node-sass, especially version
4.14+

### Step 2

From next step, your will have to install a compatible version of sass in global mode in your computer

Just by the insertion of the component your will be able to work and create your model of accounting diary.
But if you want to personalise it your can go with the following example code:

Just by the insertion of the component your will be able to work and create your model of accounting diary.
But if you want to personalise it your can go with the following example code:

### Example:

 ```jsx
import './App.css';
import AccountingDiary from "./lib/AccountingDiary";

function App() {
  const data = [
    {
      date: '2021-01-01',
      text: "Received Capital worth",
      isDebit: true,
      amount: 90000,
      account: 'Cash',
      currency: 'USD',
      local: 'en-US'
    },
    {
      date: '2021-01-01',
      text: "Paid $2,000 for the first month’s rent.",
      isDebit: true,
      amount: 80000,
      account: 'Rent',
      currency: 'JPY'
    },
    {
      date: '2021-01-01',
      text: "Paid $2,000 for the first month’s rent.",
      amount: 80000,
      account: 'Cash',
      currency: 'JPY',
      local: 'en-US'
    },
  ]
  return (
    <div>
      <AccountingDiary
        height={650}
        width={1200}
        data={data}
        title='Entreprise SANOGO'
        titleBg='#b0d0a3'
        titleBorder={true}
        titleAllCaps={true}
        titleCorner={4}
        titleColor={'#202020'}
        account={{
          width: 120,
          color: '#f50545'
        }}
        columnHeader={true}
        columnHeaderColor='#ffffff'
        saveColor='#fff44b'
        columnHeaderBgColor='#00b050'
        footer={{
          color: '#000',
          background: '#fcf7fc',
          fontWeight: '500x'
        }}
        amount={{
          width: 120
        }}/>
    </div>
  );
}

export default App;
 ```

### Properties

| Name                | Description                                                                                                                                                                             | 
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| saveColor           | Hex color, `default: #ffffff` use to set the color of the button that generate the export image of the the diary                                                                        |
| saveIcon            | Hex color default: <Download size={16}/> use to set the icon of the button that generate the export image of the the diary <br/> The libraries use to set the svg icon is react-feather |
| title               | Title of the the accounting-diary                                                                                                                                                       |
| titleColor          | color text of the title                                                                                                                                                                 |
| titleBg             | Background title of the the accounting-diary                                                                                                                                            |
| titleBorder         | Boolean to indicate either you want title to have a border or not                                                                                                                       |
| titleAllCaps        | Transform title text to capital letter                                                                                                                                                  |
| titleCorner         | Corner radius of title box to capital letter                                                                                                                                            |
| columnHeader        | Boolean use to show or hide the column values                                                                                                                                           |
| columnHeaderColor   | Hex color use to set column color value                                                                                                                                                 |
| columnHeaderBgColor | Hex color use to set column background color value                                                                                                                                      |
| footer              | Object element use to set behaviour of the footer part in the diary: **see below**                                                                                                      |                                                                                                              
| account             | Object element use to set behaviour of the account number part in the diary: **see below**                                                                                              |
| amount              | Object element use to set behaviour of the amount part in the diary: **see below**                                                                                                      |

##### Account & Amount & Footer

| Name            | Description                             | 
|-----------------|-----------------------------------------|
| width           | Cell width in the diary                 |
| backgroundColor | background color in the cell            |
| fontWeight      | font weight of text in cell in the cell |
| color           | Text color in the cell                  |

## Contributing

Please let us know how can we help. Do check out [issues](https://github.com/ruthel/accounting-diary/issues) for bug
reports or suggestions first.

To become a contributor, please follow our [contributing guide](/CONTRIBUTING.md).

[//]: # (<a href="https://github.com/ruthel/accounting-diary/graphs/contributors">)
[//]: # (  <img src="/CONTRIBUTORS.svg" alt="Contributors" width="740" />)
[//]: # (</a>)