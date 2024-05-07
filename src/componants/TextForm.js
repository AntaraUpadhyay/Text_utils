import React, { useState, useRef } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const textAreaRef = useRef(null);

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted To UpperCase", "success");
    }

    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted To LowerCase", "success");
    }

    const handleClearClick = () => {
        let newtext = "";
        setText(newtext);
        props.showAlert("Text is Cleared", "success");
    }

    const handleCapitalClick = () => {
        let newtext = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newtext);
        props.showAlert("Converted to Capital Format", "success");
    }

    const handleReverseClick = () => {
        let newtext = text.split('').reverse().join('');
        setText(newtext);
        props.showAlert("Reversed The String", "success");
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleCopyClick = () => {
        textAreaRef.current.select();
        document.execCommand('copy');
        textAreaRef.current.selectionEnd = 0; // Set selection end to 0 to deselect
        props.showAlert("Text Copied", "success");

    }


    return (
        <>
            <div className={`container ${props.darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>

                <h2>{props.heading}</h2>
                <div className={`mb-4 ${props.darkMode ? 'bg-secondary text-light' : ''}`}>
                    <textarea
                        ref={textAreaRef}
                        className={`form-control ${props.darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                        style={{ backgroundColor: `${props.darkMode ? '#ced4da' : 'white'}`, border: `1px solid ${props.darkMode ? 'black' : 'black'}`, borderRadius: '5px' }}
                        value={text}
                        onChange={handleChange}
                        id="mybox"
                        rows="5"
                    ></textarea>
                </div>

                <div className={`d-flex justify-content-center`} style={{
                    color: props.darkMode ? 'white' : 'black',
                    backgroundColor: props.darkMode ? '#ced4da' : 'white',
                    
                    borderRadius: '5px'
                }}>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length === 0}>Convert To Upper Case</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} disabled={text.length === 0}>Convert To Lower Case</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} disabled={text.length === 0}>Clear Text</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalClick} disabled={text.length === 0}>Capitalize text</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleReverseClick} disabled={text.length === 0}>Reverse Text</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} disabled={text.length === 0}>Copy Text</button>

                </div>
            </div>
            <div className={`container my-3 ${props.darkMode ? 'text-light' : 'text-dark'}`}>
                <h1>Your Text Summary</h1>
                <p>
                    {text.split(/\s+/).filter(element => element.length !== 0).length} words , {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").filter(element => element.length !== 0).length} Minutes to read</p>
                <h2> Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
