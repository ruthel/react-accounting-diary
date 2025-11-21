let pdfMakeInstance: any = null;

export const getPdfMake = async () => {
  if (!pdfMakeInstance) {
    const pdfMake = await import('pdfmake');
    pdfMakeInstance = pdfMake.default;
  }
  return pdfMakeInstance;
};

export const extractDoc = async (blob: string) => {
  const pdfMake = await getPdfMake();
  pdfMake
    .createPdf({
      pageMargins: 0,
      content: [
        {
          image: blob,
          width: 595,
        },
      ],
    })
    .download();
};
