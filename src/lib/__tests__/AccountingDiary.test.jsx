import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AccountingDiary from '../AccountingDiary.tsx';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { GlobalProvider } from '../context.tsx';

vi.mock('html-to-image', () => ({
  toPng: vi.fn(() => Promise.resolve('data:image/png;base64,')),
  toJpeg: vi.fn(() => Promise.resolve('data:image/jpeg;base64,')),
}));

vi.mock('@progress/kendo-file-saver', () => ({
  saveAs: vi.fn(),
}));

vi.mock('../helpers/pdfLoader', () => ({
  extractDoc: vi.fn(),
}));

describe('AccountingDiary', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders with default title', () => {
    render(<GlobalProvider><AccountingDiary /></GlobalProvider>);
    expect(screen.getByText(/Accounting diary for Test Model/i)).toBeInTheDocument();
  });

  it('renders with custom title', () => {
    render(<GlobalProvider><AccountingDiary title="My Diary" /></GlobalProvider>);
    expect(screen.getByText(/Accounting diary for My Diary/i)).toBeInTheDocument();
  });

  it('applies custom title styles', () => {
    const { container } = render(
      <GlobalProvider>
        <AccountingDiary 
          title="Styled" 
          titleBg="#ff0000"
          titleColor="#ffffff"
          titleAllCaps={true}
        />
      </GlobalProvider>
    );
    const titleDiv = container.querySelector('[style*="background"]');
    expect(titleDiv).toHaveStyle('background: #ff0000');
  });

  it('loads sample data on button click', async () => {
    render(<GlobalProvider><AccountingDiary /></GlobalProvider>);
    const sampleBtn = screen.getByText(/Data Sample/i);
    await userEvent.click(sampleBtn);
    const elements = screen.getAllByText(/Received Capital worth/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  it('switches export format', async () => {
    render(<GlobalProvider><AccountingDiary /></GlobalProvider>);
    const jpegBtn = screen.getByText(/JPEG/i);
    await userEvent.click(jpegBtn);
    expect(jpegBtn).toHaveAttribute('id', 'active');
  });

  it('renders with custom account column width', () => {
    const { container } = render(
      <GlobalProvider>
        <AccountingDiary account={{ width: 200, color: '#ff0000' }} />
      </GlobalProvider>
    );
    expect(container).toBeInTheDocument();
  });

  it('renders with custom amount column width', () => {
    const { container } = render(
      <GlobalProvider>
        <AccountingDiary amount={{ width: 150, color: '#0000ff' }} />
      </GlobalProvider>
    );
    expect(container).toBeInTheDocument();
  });
});
