# react-accounting-diary

[![npm version](https://badge.fury.io/js/%40ruthel%2Freact-accounting-diary.svg)](https://badge.fury.io/js/%40ruthel%2Freact-accounting-diary)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

React component to generate an accounting diary and export it as an image or PDF document.

## Installation

```bash
npm install react-accounting-diary
# or
yarn add react-accounting-diary
```

## Usage

```jsx
import React from "react";
import AccountingDiary from 'react-accounting-diary';

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
  ];

  return (
    <div style={{ margin: 32 }}>
      <AccountingDiary
        width={1200}
        data={data}
        title="Entreprise SANOGO"
        titleBg="#b0d0a3"
        titleBorder={true}
        titleAllCaps={true}
        titleCorner={4}
        titleColor={'#202020'}
        account={{
          width: 120,
          color: '#f50545',
        }}
        columnHeader={true}
        columnHeaderColor="#ffffff"
        saveColor="#fff44b"
        columnHeaderBgColor="#00b050"
        footer={{
          color: '#000',
          background: '#fcf7fc',
          fontWeight: '500x',
        }}
        amount={{
          width: 120,
        }}
      />
    </div>
  );
}

export default App;
```

## Props

| Name                | Type                  | Default      | Description                                                                                                                                                                             |
|---------------------|-----------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `height`            | `number`              | `300`        | Height of the accounting diary component.                                                                                                                                               |
| `width`             | `number`              | `undefined`  | Width of the accounting diary component.                                                                                                                                                |
| `data`              | `IDataItem[]`         | `undefined`  | Array of accounting entries to display.                                                                                                                                                 |
| `title`             | `string`              | `"Test Model"` | Title of the accounting diary.                                                                                                                                                          |
| `titleColor`        | `string`              | `"#000"`     | Text color of the title.                                                                                                                                                                |
| `titleBg`           | `string`              | `undefined`  | Background color of the title.                                                                                                                                                          |
| `titleBorder`       | `boolean`             | `false`      | Whether the title should have a border.                                                                                                                                                 |
| `titleAllCaps`      | `boolean`             | `false`      | Transform title text to capital letters.                                                                                                                                                |
| `titleCorner`       | `number`              | `undefined`  | Corner radius of the title box.                                                                                                                                                         |
| `columnHeader`      | `boolean`             | `false`      | Whether to show or hide column headers.                                                                                                                                                 |
| `columnHeaderColor` | `string`              | `undefined`  | Color of the column header text.                                                                                                                                                        |
| `columnHeaderBgColor`| `string`             | `undefined`  | Background color of the column headers.                                                                                                                                                 |
| `saveColor`         | `string`              | `"#ffffff"`  | Hex color for the save button.                                                                                                                                                          |
| `saveIcon`          | `React.ReactNode`     | `<Download />` | Icon for the save button (uses `react-feather`).                                                                                                                                        |
| `account`           | `IStyleConfig`        | `{ width: 128, color: '#646464' }` | Object to configure account column styles.                                                                                                                                              |
| `amount`            | `IStyleConfig`        | `{ width: 128, color: '#646464' }` | Object to configure amount column styles.                                                                                                                                               |
| `footer`            | `IStyleConfig`        | `undefined`  | Object to configure footer styles.                                                                                                                                                      |

## Contributing

Please let us know how can we help. Do check out [issues](https://github.com/ruthel/react-accounting-diary/issues) for bug reports or suggestions first.

To become a contributor, please follow our [contributing guide](/CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.