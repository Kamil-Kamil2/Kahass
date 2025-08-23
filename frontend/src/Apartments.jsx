import "./css/Apartments.css"
import iMg from './6.png'
import {Link} from "react-router-dom"


function Apartments(){

    function handleClick(){
        window.open('https://maps.app.goo.gl/WkhmzJVA6pcdqV7u6', '_blank');
    }
    return(
        <>
            <div className="ApIntro">
                <h1 className="ApTitle">Apartments</h1>
                <h4>Here is a list of all the available apartments:</h4>
            </div>
            <div className="apartments">
                <div className="apartment">
                    <div className="Aimg">
                        <img src={iMg} alt="Kahass" class="ApImage"/>
                    </div>
                    <div className="ApContent">
                        <h3 class="ApConTitle">Kahass Main Apartment</h3>
                        <h4 class="ApLoc">Addis Ababa Kolfe Keranio Woreda 3</h4>
                        <div className="deepInfo">
                            <p class="info">Small: 1-2 Beds Twin : $76,000 Birr <br />Medium : 3-5 Beds Twin/Queen: $82,500 Birr <br />Large: 6+ Beds Queen : $96,780 Birr</p>
                        </div>
                        
                    </div>
                    <div className="ApButtons">
                        <button className="locationBtn" onClick={handleClick}><ion-icon name="location"></ion-icon></button> <br />
                        <Link to="/apply"><button className="applyBtn">Apply</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Apartments