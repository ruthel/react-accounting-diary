/**
 * Native export utilities — no external dependencies.
 * PNG/JPEG: uses SVG foreignObject + Canvas
 * PDF: uses window.print() with print CSS
 */

export const nodeToDataUrl = (node: HTMLElement, format: 'png' | 'jpeg' = 'png', scale = 3): Promise<string> => {
  return new Promise((resolve, reject) => {
    const width = node.offsetWidth;
    const height = node.offsetHeight;

    // Clone the node and inline all computed styles
    const clone = node.cloneNode(true) as HTMLElement;
    inlineStyles(node, clone);

    const serializer = new XMLSerializer();
    const htmlStr = serializer.serializeToString(clone);

    const svgStr = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">${htmlStr}</div>
        </foreignObject>
      </svg>`;

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width * scale;
      canvas.height = height * scale;
      const ctx = canvas.getContext('2d')!;
      ctx.scale(scale, scale);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);

      const mimeType = format === 'jpeg' ? 'image/jpeg' : 'image/png';
      resolve(canvas.toDataURL(mimeType, 1.0));
    };
    img.onerror = reject;
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgStr);
  });
};

export const exportNodeAsImage = async (node: HTMLElement, format: 'png' | 'jpeg' = 'png') => {
  const dataUrl = await nodeToDataUrl(node, format);
  const link = document.createElement('a');
  link.download = `export.${format}`;
  link.href = dataUrl;
  link.click();
};

export const exportNodeAsPdf = () => {
  window.print();
};

function inlineStyles(source: Element, target: Element) {
  const sourceStyles = window.getComputedStyle(source);
  const targetEl = target as HTMLElement;

  // Copy key styles
  const props = [
    'font-family', 'font-size', 'font-weight', 'font-style',
    'color', 'background-color', 'background',
    'border', 'border-radius', 'border-color', 'border-width', 'border-style',
    'padding', 'margin', 'display', 'flex-direction', 'align-items', 'justify-content',
    'gap', 'flex', 'flex-wrap', 'flex-shrink', 'flex-grow',
    'width', 'min-width', 'max-width', 'height', 'min-height',
    'text-align', 'text-transform', 'text-decoration', 'letter-spacing', 'line-height',
    'overflow', 'white-space', 'text-overflow',
    'box-sizing', 'position', 'top', 'left', 'right', 'bottom',
    'opacity', 'visibility',
    'border-collapse', 'table-layout',
    'vertical-align',
  ];

  for (const prop of props) {
    targetEl.style.setProperty(prop, sourceStyles.getPropertyValue(prop));
  }

  // Recurse children
  const sourceChildren = source.children;
  const targetChildren = target.children;
  for (let i = 0; i < sourceChildren.length; i++) {
    if (targetChildren[i]) {
      inlineStyles(sourceChildren[i], targetChildren[i]);
    }
  }
}
