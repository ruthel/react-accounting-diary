declare module 'pdfmake' {
  interface TCreatedPdf {
    download(): void;
    // Add other methods if needed
  }

  interface TDocumentDefinitions {
    content: any;
    pageMargins?: number;
    // Add other properties if needed
  }

  interface TFontDictionary {
    // Define font properties if needed
  }

  interface TDocumentFonts {
    // Define document fonts if needed
  }

  interface TDocumentOptions {
    // Define document options if needed
  }

  interface PdfPrinter {
    new (fontDescriptors: TFontDictionary): PdfPrinter;
    createPdf(documentDefinitions: TDocumentDefinitions, tableLayouts?: any, fonts?: TDocumentFonts, vfs?: any): TCreatedPdf;
  }

  const pdfMake: {
    createPdf(documentDefinitions: TDocumentDefinitions, tableLayouts?: any, fonts?: TDocumentFonts, vfs?: any): TCreatedPdf;
    vfs: any;
    fonts: any;
    PdfPrinter: PdfPrinter;
  };

  export = pdfMake;
}
