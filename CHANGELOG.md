# Changelog

All notable changes to this project will be documented in this file.

## [2.4.0] - 2025-07-31

### 🚀 New Features
- **Transaction Templates**: Reusable presets (Rent, Salary, Sales, Utilities, etc.) accessible via toolbar button. Clicking a template pre-fills the add dialog with the template data
- **Drag & Drop Import**: Drop CSV or JSON files directly onto the component to import transactions. Visual drop zone with overlay feedback
- **Filter Dropdown**: Filter transactions by account or category via dropdown menus (in addition to existing text search). Active filters are visually highlighted

### ✨ Enhancements
- New icons: `Filter`, `Template`, `ChevronDown`
- New label keys: `templates`, `filterByAccount`, `filterByCategory`, `allAccounts`, `allCategories`, `dropFileHere`
- New state fields: `filterAccount`, `filterCategory`, `templateItem`
- New exported components: `FilterDropdown`, `DropZone`
- Filter dropdown shows only accounts/categories present in current data
- Template menu closes on outside click

## [2.3.1] - 2025-07-30

### ✨ Enhancements
- Added live demo link in README ([react-accounting-diary-demo.vercel.app](https://react-accounting-diary-demo.vercel.app))
- Removed unnecessary `react react-dom` from install commands (already peer deps)
- Updated bundle size in README to reflect actual build (~21KB gzipped)

### 🐛 Bug Fixes
- Fixed `theme` prop not being passed to ThemeProvider (dark mode now works via prop)
- Fixed `print.scss` never imported — print styles are now active
- Fixed Rollup mixed exports warning (`output.exports: 'named'`)
- Fixed default locale from `de-DE` to `en-US` in currency formatter
- Fixed default currency from `XAF` to `USD`
- Fixed date formatter from `fr-FR` to `en-US`
- Fixed number formatter from `en-IN` to `en-US`
- Renamed French variable `devise` to `currency` in source code
- Fixed sample data: consistent `USD` currency and `en-US` locale, corrected rent amount from 80000 to 2000

### 📦 Build & Tooling
- Added `"type": "module"` to package.json
- Added `@eslint/js` to devDependencies (lint was broken)
- Added browser globals to ESLint config (false `no-undef` errors)
- Added `prepublishOnly` script for safer publishes
- Fixed CI workflow: use pnpm, removed non-existent `test` step
- Cleaned `.npmignore` to exclude config files and stale `.tgz`
- Moved `dev-to-article.md` out of npm package (into demo project)

### 📝 Documentation
- Fixed incorrect default values in README props table (`height`, `saveColor`, `account`, `amount`)
- Added missing props to README: `saveIcon`, `onExport`

## [2.3.0] - 2025-07-15

### 🚀 New Features
- **Headless Hook** (`useAccountingDiary`): Build your own UI with full data layer control — add, edit, delete, undo/redo, totals, account summary, JSON import/export
- **Imperative Ref API** (`AccountingDiaryHandle`): Control the component programmatically via `ref` — export (PNG/JPEG/PDF/CSV/Excel/JSON), add transactions, undo/redo, get data/totals/account summary
- **Validation Callbacks** (`onBeforeAdd`, `onBeforeEdit`, `onBeforeDelete`): Intercept and validate mutations before they happen. Supports sync and async validation
- **Ledger View**: Toggle between diary view (grouped by date) and ledger view (grouped by account with running balance)
- **Category & Tags**: New `category` (string) and `tags` (string[]) fields on `IDataItem` for transaction classification. Both are searchable
- **JSON Import/Export**: Import from JSON files via toolbar button or ref API. Export data as JSON file
- **`showLedgerToggle` prop**: Toggle the diary/ledger view switch button

### ✨ Enhancements
- Search filter now searches `category` and `tags` in addition to `text` and `account`
- Dialog now includes category and tags input fields
- New label keys: `category`, `tags`, `ledgerView`, `diaryView`, `runningBalance`, `importJSON`
- Exported utility functions: `exportToCSV`, `exportToExcel`, `exportToJSON`, `importFromCSV`, `importFromJSON`
- New exported types: `ViewMode`, `AccountingDiaryHandle`, `UseAccountingDiaryOptions`, `UseAccountingDiaryReturn`

## [2.2.0] - 2025-07-14

### 🚀 New Features
- **Callback Props**: `onChange`, `onAdd`, `onDelete`, `onEdit` for full integration with external state (Redux, Zustand, etc.)
- **Controlled Mode**: Use `data` + `onChange` to manage transactions from parent component
- **i18n / Localisation**: `labels` prop with 30+ customizable keys for all UI text
- **Grand Total**: Displays total debit/credit with automatic balance validation
- **Balance Check**: Visual badge — green "✓ Balanced" or red "⚠ Unbalanced" with difference amount
- **Sortable Columns**: Click column headers (date, account, amount) to sort asc/desc
- **Pagination**: `pageSize` prop with page navigation, totals computed on full dataset
- **Delete Transaction**: Row action menu with Edit and Delete options
- **Empty State**: Icon + message + CTA button when no transactions exist
- **Keyboard Navigation**: Tab through rows, Enter/Space to open menu, Escape to close

### ✨ Enhancements
- **Icons**: Added built-in SVG icon components (MoreVertical, and others)
- **Type Safety**: Added type declarations for SCSS/CSS modules, exported `ILabels`, `SortField`, `SortOrder` types
- **Accessibility**: `tabIndex`, `role="row"`, `role="cell"`, `role="menu"`, `role="menuitem"`, `aria-haspopup`, `aria-expanded` on all interactive elements
- **Print CSS**: Updated to hide row actions menu and pagination

### 📦 Project Cleanup
- Removed dev server and test code from lib (moved to separate demo project)
- Externalized `react/jsx-runtime` to prevent duplicate React instances
- Removed unused dependencies (prettier, terser, vitest, eslint-plugin-prettier, eslint-config-prettier)
- Modernized TypeScript config (Bundler module resolution, esModuleInterop)

## [2.1.0] - 2025-07-14

### 🚀 Major Features Added
- **Edit Transactions**: Click edit button on any transaction to modify it
- **Search & Filter**: Real-time search and date range filtering
- **Dark Mode**: Full dark/light theme support with toggle
- **CSV/Excel Export**: Export data to CSV or Excel formats
- **CSV Import**: Import transactions from CSV files
- **Print Support**: Optimized CSS for direct printing

### ✨ Enhancements
- **Accessibility**: Added ARIA labels and keyboard navigation
- **Performance**: Lazy loading for PDF exports
- **UX**: Improved button states and hover effects
- **TypeScript**: Enhanced type definitions

### 🐛 Bug Fixes
- Fixed export button positioning on mobile
- Resolved currency formatting edge cases
- Fixed undo/redo state management

### 📦 Bundle Size
- Reduced bundle size by 15% through dynamic imports
- Tree-shaking optimizations

## [1.2.0] - 2023-12-01

### Added
- Multi-currency support
- Undo/Redo functionality
- Sample data loading

### Fixed
- PDF export quality improvements
- Mobile responsiveness issues

## [1.1.0] - 2023-11-15

### Added
- PNG/JPEG export functionality
- Custom styling props
- Column header configuration

## [1.0.0] - 2023-11-01

### Added
- Initial release
- Basic accounting diary functionality
- PDF export capability
- React 18 support
