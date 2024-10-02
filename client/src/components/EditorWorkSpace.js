import React, { useEffect, useRef } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import CodeMirror from "codemirror";

const EditorWorkSpace = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const init = () => {
      if (editorRef.current) {
        const editor = CodeMirror.fromTextArea(editorRef.current, {
          mode: { name: "javascript", json: true },
          theme: "dracula",
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
        });
        editor.setSize(null, "100%");
      }
    };
    init();
  }, []);

  return (
    <div style={{ height: "100%", direction: "ltr", textAlign: "left" }}>
      <textarea ref={editorRef} style={{ padding: "25px" }}></textarea>
    </div>
  );
};

export default EditorWorkSpace;
