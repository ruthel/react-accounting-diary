import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AccountingDiary from '../AccountingDiary.tsx';
import { vi } from 'vitest';
import { GlobalProvider } from '../context.tsx';

// Mock dependencies
vi.mock('html-to-image', () => ({
  toPng: vi.fn(),
  toJpeg: vi.fn(),
}));

vi.mock('@progress/kendo-file-saver', () => ({
  saveAs: vi.fn(),
}));

vi.mock('../helpers/func', async () => {
  const actual = await vi.importActual('../helpers/func.ts');
  return {
    ...actual,
    default: {
      ...actual.default,
      extractDoc: vi.fn(),
      currency: (value) => value,
    },
  };
});

describe('AccountingDiary', () => {
  it('renders the component with the default title', () => {
    render(<GlobalProvider><AccountingDiary /></GlobalProvider>);
    expect(
      screen.getByText(/Accounting diary for Test Model/i)
    ).toBeInTheDocument();
  });

  it('renders the component with a custom title', () => {
    render(<GlobalProvider><AccountingDiary title="My Custom Diary" /></GlobalProvider>);
    expect(
      screen.getByText(/Accounting diary for My Custom Diary/i)
    ).toBeInTheDocument();
  });

  it('loads sample data when the "Data Sample" button is clicked', async () => {
    render(<GlobalProvider><AccountingDiary /></GlobalProvider>);

    const sampleButton = screen.getByText(/Data Sample/i);
    await userEvent.click(sampleButton);

    expect(
      screen.getAllByText(/Received Capital worth/i).length
    ).toBeGreaterThan(0);
  });
});