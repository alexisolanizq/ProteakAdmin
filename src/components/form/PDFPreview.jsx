import { pdf } from "@react-pdf/renderer";
import { Document as PDFDoc, Page as PDFPage } from 'react-pdf'
import { useEffect, useState } from "react";
import JobOrderPDF from "src/views/admin/job-orders/JobOrderPDF";

const PDFPreview = ({formData}) => {
  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);

  useEffect(() => {
    const generatePdf = async () => {
      const blob = await pdf(<JobOrderPDF {...formData} />).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfBlobUrl(url);
    };

    generatePdf();

    // Cleanup blob URL on unmount
    return () => {
      if (pdfBlobUrl) URL.revokeObjectURL(pdfBlobUrl);
    };
  }, [formData]);
  return (
    <div>
      <p>Vista previa</p>
      {
        pdfBlobUrl ?  (
            <PDFDoc file={pdfBlobUrl}>
                <PDFPage pageNumber={1} width={600} />
            </PDFDoc>
        ) : (
            <p className="font-semibold text-3xl">Generando vista</p>
        )
      }
    </div>
  );
};

export default PDFPreview;
