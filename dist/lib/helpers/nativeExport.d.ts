/**
 * Native export utilities — no external dependencies.
 * PNG/JPEG: uses SVG foreignObject + Canvas
 * PDF: uses window.print() with print CSS
 */
export declare const nodeToDataUrl: (node: HTMLElement, format?: "png" | "jpeg", scale?: number) => Promise<string>;
export declare const exportNodeAsImage: (node: HTMLElement, format?: "png" | "jpeg") => Promise<void>;
export declare const exportNodeAsPdf: () => void;
