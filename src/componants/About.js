import React, { useState } from 'react';

export default function About(props) {
    //const [myStyle, setMyStyle] = useState({
      //  color: 'black',
        //backgroundColor: 'white'
   // });
   {/*const [btnText, setBtnText] = useState("Enable Dark Mode");

const toggleStyle = () => {
    if (myStyle.color === 'white') {
        setMyStyle({
            color: 'black',
            backgroundColor: 'white' 
        });
        setBtnText("Enable Dark Mode");
    } else {
        setMyStyle({
            color: 'white',
            backgroundColor: 'black'
        });
        setBtnText("Enable light Mode");
    }
};
*/}
let myStyle = {
    color: props.mode === 'dark' ? 'black' : 'black',
    backgroundColor: props.mode === 'dark' ? '#ced4da' : 'white',
    border: props.mode === 'dark' ? '1px solid black' : '1px solid black', // Border color is always black
    borderRadius: '5px' // Adding border radius for a rounded border appearance
};



    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'black' : 'black',}}>
    <h1 className="my-3">About TextUtils</h1>
    <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" style={myStyle}>
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <i className="bi bi-info-circle"></i> What is TextUtils?
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextUtils is a utility for analyzing and manipulating text.</strong> It provides various features such as word count, character count, converting text to uppercase, lowercase, and more. This is the first item's accordion body.
                </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" style={myStyle}>
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <i className="bi bi-check-circle-fill"></i> Free to Use
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextUtils is completely free to use.</strong> You can utilize all its features without any restrictions. This is the second item's accordion body.
                </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <i className="bi bi-info-circle"></i> Why Choose TextUtils?
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextUtils is a powerful tool for text manipulation and analysis.</strong> It offers a wide range of features to help users analyze text, including word count, character count, and various text transformations. This is the third item's accordion body.
                </div>
            </div>
        </div>
    </div>
</div>
  {/*<button className="my-3 btn btn-outline-dark" style={myStyle} onClick={toggleStyle}>{btnText}</button>*/}
        </>
    );
}
