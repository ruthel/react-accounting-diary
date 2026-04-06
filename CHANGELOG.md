# Changelog

All notable changes to this project will be documented in this file.

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
