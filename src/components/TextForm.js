import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handelToDownload = () => {
    const fileName = "downloaded_text.txt";
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    props.showAlert("Text file downloaded!", "info");
  };

  const handelToClear = () => {
    setText("");
    props.showAlert("Text cleared!", "warning");
  };

  const handelCopyText = () => {
  const textArea = document.getElementById("myForm");

  if (navigator.clipboard && window.isSecureContext) {
    // Secure context (localhost or HTTPS)
    navigator.clipboard.writeText(textArea.value)
      .then(() => props.showAlert("Text copied to clipboard!", "info"))
      .catch(err => {
        console.error("Clipboard error", err);
        props.showAlert("Failed to copy!", "danger");
      });
  } else {
    // Fallback for insecure origins
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      props.showAlert(successful ? "Text copied!" : "Copy failed!", successful ? "info" : "danger");
    } catch (err) {
      console.error("Fallback copy failed", err);
      props.showAlert("Clipboard not supported!", "danger");
    }
  }
};


  const handelExtraSpace = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleOnChanged = (event) => {
    setText(event.target.value);
  };

  // Word count fix: remove empty strings caused by extra spaces
  const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChanged}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743'
            }}
            id="myForm"
            rows="8"
          ></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-0" onClick={handelToClear}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handelToDownload}>Download Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-0" onClick={handelCopyText}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handelExtraSpace}>Remove Extra Space</button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>Your text Summary</h1>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{0.008 * wordCount} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
