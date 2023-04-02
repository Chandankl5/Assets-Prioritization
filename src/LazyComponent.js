import React, { useEffect } from "react";
// import '../public/lazy.css';

function LazyComponent() {


  console.log('-----Executing Lazy Component---------')

  return (
    <>
      <button className="book-cta">Book Appointment</button>
      <p className="google-font-text">This is the text uses Google Web Font</p>
    </>
  );
}

export default LazyComponent;
