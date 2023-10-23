import React from "react"


export default function Info() {
  return (
    <main className="info">
      <img className="user-img" src={`./images/User.jpeg`}></img>

      <h1 className="Info-name"> Laura Smith</h1>
      <h5 className="Info-work"> Product Designer</h5>
      <h6 className="Info-Portfolio">laurasmith.website </h6>

      <div class="button-container">
        <button class="btn-email">
          <img src={`./images/envelope-fill.svg`} className="social-img"/> <span> Email </span></button>
        <button class="btn-linkedIn">
         <img src={`./images/linkedin.svg`} className="social-img"/> <span> LinkedIn </span> 
         </button>
      </div>

    </main>
  )
}