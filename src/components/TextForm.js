import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState ('');
    const handleUpClick = () => {
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }
    const handleCopyClick = () => {
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value);
    } 
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            {/* text = "abcdef"; // wrong way to update or change the value of text */}
            {/* setText("lipsa"); // right way to change the value of text */}
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2> Your Text Summary</h2>
        <p> {text.split(" ").length} words, {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: 'Enter something in the textbox to preview'}</p>
       </div>
       </>
    )
}
