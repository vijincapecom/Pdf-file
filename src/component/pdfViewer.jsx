import { useEffect, useRef } from "react";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current; 

    // eslint-disable-next-line no-unused-vars
    let PSPDFKit, instance;

    (async function () {
      PSPDFKit = await import("pspdfkit")

		PSPDFKit.unload(container) 

      instance = await PSPDFKit.load({
        
        container,
        // eslint-disable-next-line react/prop-types
        document: props.document,
        baseUrl: `${window.location.protocol}//${window.location.host}/${import.meta.env.BASE_URL}`
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container)
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />
}