import "./css/Aboutus.css"

function Aboutus(){
    return(
        <>
            <div className="AhomeCont">
            <div className="AfirstDesc"><p>       <b>Kahass Real-Estate</b> is
            a recently launched family owned Bussiness Located in Addis Ababa,Ethiopia. We currently have five apartments in Addis Ababa and are constructing 2 more.</p>
        </div>
        <div className="Avalues"><h1 className="valuesT">Values</h1><p className="valuesP"> We believe we should use this bussiness in a way that we
        Always:<br />
      <ul>
        <li>Listen to our clients</li>
        <li>Meet deadlines and promises</li>
        <li>stay honest</li>
        <li>build trust</li>
        <li>have fair prices</li>
      </ul></p>
      </div>
      <div className="Apricing">
        <h1 className="ApricingT">Pricing</h1>
        <p className="ApricingP">Kahass highly values affordability of its apartments.<br /> We are renouned for our cheap housing and great customer service.<br /> Our apartment prices range from<br /> $76,000 Birr/$550 USD to <br />$97,000 Birr/$700 USD.</p>
      </div>
      <div className="Alocations">
        <h1 className="locationsT">Available Locations</h1>
        <p className="locationsP">Currently, Kahass has one location that is open<br /> Kahass Main Apartment Kolfe Keranio woreda 3:<br /></p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1398.0416074858117!2d38.68117114035229!3d8.981673992231551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1752646537171!5m2!1sen!2sus"
            width="600" 
            height="450" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Kahass Apartment"></iframe>
      </div> 
      <div className="Contactss">
      <div className="Abox">
        <h3 className="AcontactT">Contact</h3>

      <p className="contactP"><ion-icon name="call-sharp"></ion-icon>Phone Number: +251-091-642753</p>    
      <p className="contactP"><ion-icon name="mail-sharp"></ion-icon>Email: Kahassrealest@gmail.com</p>
      <p className="contactP"> <ion-icon name="location-sharp"></ion-icon>Location: Addis Ababa, Kara Kore</p>
    </div>
    <div className="box">
      <h3>Social Media</h3>
      <p className="contactP"><ion-icon name="logo-facebook"></ion-icon>Facebook: @Kahassrealest</p>     
      <p className="contactP"><ion-icon name="logo-youtube"></ion-icon>Youtube: Kahassrealest</p>    
      <p className="contactP"><ion-icon name="logo-linkedin"></ion-icon>Linkedin: Kahassrealest</p>
    </div>
      </div>
      </div>
        </>
    )
}

export default Aboutus