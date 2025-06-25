import './App.css';
import React from "react";

const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("https://www.softwaresuggest.com/blog/wp-content/uploads/2021/03/How-To-Setup-A-Call-Center-A-Comprehensive-Guide.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100px",
    // padding: "20px"
  };

function MContact(){
    return(
        <div className="wel" style={backgroundStyle}>
            <div><h1><b><i>HELP</i></b></h1></div>
            <div className='wl'><div><p></p></div>
        </div>
        <div className='qu'><div><p><h2/>CONTACT<br/>7302842689</p><br/>
        <p>Email<br/>explorenow@gmail.com</p><br/>
        <p></p>
        </div></div>
        <div><h1><b><i>MAP</i></b></h1></div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15228.492313536779!2d78.4656824!3d17.4058801!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb975dd124c005%3A0x59439ffad6e0298e!2sBirla%20Mandir!5e0!3m2!1sen!2sin!4v1749623452735!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
    )
}
export default MContact;

// import React from "react";

// export default function Map() {
//   return (
//     <div className="w-full h-[400px] mt-8">
//       <iframe
//         title="Srikar Biotech Location"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.614345705961!2d78.56204577489746!3d17.42959660149219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9c6f431bc94f%3A0x3c059c7872be5b26!2sSrikar%20Biotech%20private%20limited!5e0!3m2!1sen!2sin!4v1717480801170!5m2!1sen!2sin"
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//       ></iframe>
//     </div>
//   );
// }

