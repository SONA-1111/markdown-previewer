import './App.css';
import React, { useState} from 'react';
import { marked } from 'marked'
import Docs from './components/Docks';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [code, setCode] = useLocalStorage('markdown', '## Hello')
  const [compiled, setCompiled] = useState()
  const [hide, hidePreview] = useState(true)
  const [show, showDocs] = useState(true)

  const openMD = () => {
    console.log(0)
    hidePreview(true)
  }

  const openPreview = () => {
    console.log(0)
    hidePreview(false)
    showDocs(false)
    setCompiled(marked(code));
  }

  const openDocs = () => {
    console.log(0)
    showDocs(true)
    hidePreview(false)
  }
  const handleChange = (e) => {
    setCode(e.target.value)
    setCompiled(marked.parse(e.target.value))
  }

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">MarkDown</button>
          <button className="btn" onClick={openPreview}>Preview</button>
          <button className="btn" onClick={openDocs}>Docs</button>

        </div>

        {
          hide ?
            <div>
              <textarea onChange={handleChange} value={code} />
            </div> : show ? <Docs /> : <div className='prev'>
              <div dangerouslySetInnerHTML={{ __html: compiled }} />
            </div>

        }

      </div>
    </>
  );
}
export default App;
