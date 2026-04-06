import React from 'react';

interface IconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}

const defaultProps: IconProps = { size: 16, strokeWidth: 2 };

const svg = (props: IconProps, children: React.ReactNode) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    style={props.style}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const Undo = (p: IconProps = {}) => {
  const props = { ...defaultProps, ...p };
  return svg(props, <><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></>);
};

export const Redo = (p: IconProps = {}) => {
  const props = { ...defaultProps, ...p };
  return svg(props, <><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></>);
};

export const Download = (p: IconProps = {}) => {
  const props = { ...defaultProps, ...p };
  return svg(props, <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></>);
};

export const Upload = (p: IconProps = {}) => {
  const props = { ...defaultProps, ...p };
  return svg(props, <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></>);
};

export const Plus = (p: IconProps = {}) => {
  const props = { ...defaultProps, ...p };
  return svg(props, <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>);
};

export const X = (p: IconProps = {}) => {
  const props = { ...defaultProps, ...p };
  return svg(props, <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>);
};

export const Edit2 = (p: IconProps = {}) => {
  const props = { ...defaultProps, ...p };
  return svg(props, <><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></>);
};

export const Search = (p: IconProps = {}) => {
  const props = { ...defaultProps, ...p };
  return svg(props, <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>);
};

export const Calendar = (p: IconProps = {}) => {
  const props = { ...defaultProps, ...p };
  return svg(props, <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>);
};

export const FileImage = (p: IconProps = {}) => {
  const props = { ...defaultProps, ...p };
  return svg(props, <><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><circle cx="10" cy="13" r="2" /><path d="m20 17-1.1-1.1a2 2 0 0 0-2.81 0L10 22" /></>);
};

export const FileText = (p: IconProps = {}) => {
  const props = { ...defaultProps, ...p };
  return svg(props, <><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></>);
};

export const FileSpreadsheet = (p: IconProps = {}) => {
  const props = { ...defaultProps, ...p };
  return svg(props, <><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M8 13h2" /><path d="M8 17h2" /><path d="M14 13h2" /><path d="M14 17h2" /></>);
};

export const Image = (p: IconProps = {}) => {
  const props = { ...defaultProps, ...p };
  return svg(props, <><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></>);
};

export const Trash2 = (p: IconProps = {}) => {
  const props = { ...defaultProps, ...p };
  return svg(props, <><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></>);
};

export const Database = (p: IconProps = {}) => {
  const props = { ...defaultProps, ...p };
  return svg(props, <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></>);
};

export const MoreVertical = (p: IconProps = {}) => {
  const props = { ...defaultProps, ...p };
  return svg(props, <><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></>);
};
