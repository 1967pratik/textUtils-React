import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLoClick=()=>{
        console.log("Lowercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handelToDownload = () => {
        const content = "Your text goes here. This is the content to download.";
        const fileName = "downloaded_text.txt";
    
        // Create a blob with the content
        const blob = new Blob([content], { type: "text/plain" });
    
        // Create a temporary download link
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.style.display = "none";  // Hide the link
    
        // Append the link to the document body and trigger the download
        document.body.appendChild(link);
        link.click();
    
        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    
        console.log("Texts Downloaded");
    };
    
    const handelToClear=()=>{
        console.log("Clear");
        let newText="";
        setText(newText);
    }

    const handelCopyText=()=>{
        var textArea = document.getElementById("myForm");   
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
        console.log("Text Copied");}

        const handelExtraSpace=()=>{
            let newText=text.split(/[ ]+/);
            setText(newText.join(" "));
            console.log("Extra space removed");
        }

    const handleOnChanged=(event) =>{
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText]=useState("")
  return (
    <>
    <div className="container my-3" style = {{color : props.mode === 'dark'? 'white' : '#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myForm" className="form-label"></label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChanged}
          style = {{backgroundColor : props.mode === 'dark'? 'grey' : 'white', color : props.mode === 'dark'? 'white' : '#042743'}}
          id="myForm"
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-0" onClick={handelToClear}>
       Text Clear
      </button>
      <button className="btn btn-primary mx-3" onClick={handelToDownload}>
       Download Text
      </button>
      <button className="btn btn-primary mx-0" onClick={handelCopyText}>
       Copy Text
      </button>
      <button className="btn btn-primary mx-3" onClick={handelExtraSpace}>
       Remove Extra Space
      </button>

    </div>

    <div className="container my-3" style = {{color : props.mode === 'dark'? 'white' : '#042743'}} >
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} Word and {text.length} Character</p>
        <p>{0.008 * text.split(" ").length} Minuts to read that </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
