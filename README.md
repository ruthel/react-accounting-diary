# react-accounting-diary

[![npm version](https://badge.fury.io/js/react-accounting-diary.svg)](https://www.npmjs.com/package/react-accounting-diary)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

Lightweight React component to generate accounting diaries with export to PNG, JPEG, or PDF.

## Installation

```bash
npm install react-accounting-diary react react-dom
# or
yarn add react-accounting-diary react react-dom
```

**Requirements:**
- React 16.8+ or 17.x or 18.x
- Node.js 18.0.0 or higher

## Quick Start

```jsx
import AccountingDiary from 'react-accounting-diary';

function App() {
  const data = [
    {
      date: '2024-01-01',
      text: "Opening balance",
      isDebit: true,
      amount: 10000,
      account: 'Cash',
      currency: 'USD',
    },
  ];

  return (
    <AccountingDiary
      width={1200}
      data={data}
      title="My Company"
      titleBg="#b0d0a3"
      columnHeader={true}
    />
  );
}

export default App;
```

For more examples and advanced usage, see [USAGE.md](USAGE.md)

## Features

- ✅ Add transactions with interactive dialog
- ✅ Export to PNG, JPEG, PDF
- ✅ Undo/Redo functionality
- ✅ Multi-currency support
- ✅ Customizable styling
- ✅ Responsive design
- ✅ Zero external CSS

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

## Performance

- **Bundle size:** ~45KB (gzipped)
- **Zero external CSS:** Styles are scoped and included
- **Tree-shakeable:** ESM exports with `sideEffects: false`

## Contributing

Please check [issues](https://github.com/ruthel/react-accounting-diary/issues) for bug reports or suggestions.

To contribute, follow our [contributing guide](/CONTRIBUTING.md).

## License

MIT - see [LICENSE](LICENSE) file for details.
