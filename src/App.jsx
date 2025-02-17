
import './App.css'
import PdfViewerComponent from './component/pdfViewer'

function App() {

  return (
    <>
      <div className="App" style={{width:"100vw"}}>
			<div className="PDF-viewer">
			<PdfViewerComponent
				document={"doc.pdf"}
			/>
			</div>
		</div>
    </>
  )
}

export default App
