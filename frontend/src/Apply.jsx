import "./css/Apply.css"
import React, { useState } from 'react';
import Img from "./6.png"

function Apply(){

    function handleClick(){
        window.open("https://forms.gle/9nqgnokaePNPAdfE7", "_blank")
    }

    function handleClick2(){
        window.open('https://maps.app.goo.gl/WkhmzJVA6pcdqV7u6', '_blank');
    }
    
    return(
        <>
            <div className="AlIntro">
                <h4>Please select the branch you are most intrested in:</h4>
                <p class="small">IMPORTANT: The Application form is to schedule an in-person meeting.</p>
            </div>
            <div className="flexGrid">
                <div className="applyCard">
                <img src={Img} alt="Kahass Apartment" class="applyImg"/>
                <div className="AlDisc">
                    <h5>Kahass Main Apartment</h5>
                    <h6 onClick={handleClick2} class="point">Addis Ababa <br />Kolfe Keranio Woreda 3</h6>
                    <button className="FBtn" onClick={handleClick}>Apply</button>
                </div>
                
                </div>
            </div>
        </>
    )
}

export default Apply