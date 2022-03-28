import React, { useState } from "react";

export default function TextForm(props) {


    const handleClearClick = () => {
        setText("");
    }
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase", "success");
    };
    const handleLowClick = () => {
        setText(text.toLowerCase());
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'rgb(40,40,40)' : 'white' }} id="myBox" rows="8"></textarea>
                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-3" onClick={handleUpClick}>Convert To Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-3" onClick={handleLowClick}>Convert To LowerCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-3" onClick={handleClearClick}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleCopy}>Copy Text</button>
                </div>
            </div>
            <div className="container my-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter(element => { return element.length !== 0 }).length} words, {text.length} characters</p>
            </div>
        </>
    );
}
