import React, { useState, useRef } from 'react';
import './App.css';
import ReactQuill, { Quill } from 'react-quill';

import {
  BoldBlot,
  ItalicBlot,
  LinkBlot,
  BlockquoteBlot,
  HeaderBlot
} from './utills/quill-customize';

Quill.register(BoldBlot);
Quill.register(ItalicBlot);
Quill.register(LinkBlot);
Quill.register(BlockquoteBlot);
Quill.register(HeaderBlot);

function App() {
  const [val, sVal] = useState('');
  const quillRef = useRef(null);

  const Toolbar = () => (
    <>
      <div id="tooltip-controls">
        <button
          id="bold-button"
          onClick={e =>
            quillRef.current &&
            quillRef.current.getEditor().format('bold', true)
          }
        >
          <i className="fa fa-bold"></i>
        </button>
        <button id="italic-button">
          <i className="fa fa-italic"></i>
        </button>
        <button
          id="link-button"
          onClick={e => {
            let value = prompt('Enter link URL');
            quillRef.current &&
              quillRef.current.getEditor().format('link', value);
          }}
        >
          <i className="fa fa-link"></i>
        </button>
        <button id="blockquote-button">
          <i className="fa fa-quote-right"></i>
        </button>
        <button
          id="header-1-button"
          onClick={e =>
            quillRef.current && quillRef.current.getEditor().format('header', 1)
          }
        >
          <i className="fa fa-header">
            <sub>1</sub>
          </i>
        </button>
        <button
          id="header-2-button"
          onClick={e =>
            quillRef.current && quillRef.current.getEditor().format('header', 2)
          }
        >
          <i className="fa fa-header">
            <sub>2</sub>
          </i>
        </button>
      </div>
      <div id="sidebar-controls">
        <button id="image-button">
          <i className="fa fa-camera"></i>
        </button>
        <button id="video-button">
          <i className="fa fa-play"></i>
        </button>
        <button id="tweet-button">
          <i className="fa fa-twitter"></i>
        </button>
        <button id="divider-button">
          <i className="fa fa-minus"></i>
        </button>
      </div>
    </>
  );

  const modules = {
    toolbar: false
  };

  return (
    <div className="App">
      <Toolbar />
      <ReactQuill
        ref={quillRef}
        modules={modules}
        value={val}
        onChange={val => sVal(val)}
      />
      <div dangerouslySetInnerHTML={{ __html: val }}></div>
    </div>
  );
}

export default App;
