import React, { useState } from "react";
import axios from 'axios'
import "./volunteer.css";

const Volunter = () => {

  const [eventHost, setEventHost] = useState(false)
  const [socialMedia, setSocialMedia] = useState(false)
  const [myNetwork, setMyNetwork] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [mobilePhone, setMobilePhone] = useState("")
  const [sendEmailUpdates, setSendEmailUpdates] = useState(false)
  const [sendMessages, setSendMessages] = useState(false)
  const [phone, setPhone] = useState("")
  const [callTime, setCallTime] = useState("")
  const [address, setAddress] = useState("")
  const [availableTime, setAvailableTime] = useState("")
  const [comments, setComments] = useState("")
  const [publish, setPublish] = useState(false)

  const [emailerror, setemailerror] = useState("")
  const [firstNameerror, setfirstNameerror] = useState("")
  const [lastNameerror, setlastNameerror] = useState("")
  const [mobilephoneerror, setmobilephoneerror] = useState(false)

  const postdata = () => {
    axios.post(`${process.env.REACT_APP_URL}/volunteer`, {
      eventHost,
      socialMedia,
      myNetwork,
      firstName,
      lastName,
      email,
      mobilePhone,
      sendEmailUpdates,
      sendMessages,
      phone,
      callTime,
      address,
      availableTime,
      comments,
      publish
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((json) => (
      setemailerror(json.data.email?.message || ''),
      setfirstNameerror(json.data.firstName?.message || ''),
      setlastNameerror(json.data.lastName?.message || ''),
      setmobilephoneerror(json.data.mobilePhone?.message || '')
    ))
  }
  return (
    <>


      <div className="topline"></div>
      <div className="container width-container">
        
        <div className="page-nav">
          <ul className="breadcrumbs">
            <li>
              <a href="/">
                Home <span className="divider">&gt;</span>
              </a>
            </li>
          </ul>
        </div>
        <div id="headline">
          <h2 className="headline">Become a volunteer</h2>
        </div>
      </div>
      <div className="container slider-card-wrap">
        <div
          className="container slider-card-wrap"
          style={{ background: "white" }}
        >
          <h4>Who's volunteering</h4>
          <div className="slider-card" data-id="/12">
            <div className="slider-card-profile clearfix">
              <img
                src="https://d3n8a8pro7vhmx.cloudfront.net/assets/notifier/profile-avatar.png"
                width="48"
                height="48"
                alt=""
              ></img>
              <span className="slider-name">
                <span className="linked-signup-name">alexandra baginski</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="formwrapp container">
      {emailerror || firstNameerror || lastNameerror || mobilephoneerror ? 
          <div className="validationerror">
            {emailerror ? <p>{emailerror}</p> : null}
            {firstNameerror ? <p>{firstNameerror}</p> : null}
            {lastNameerror ? <p>{lastNameerror}</p> : null}
            {mobilephoneerror ? <p>{mobilephoneerror}</p> : null}
          </div>:null}
        <h4 style={{ color: "white" }}>Will you volunteer?</h4>
        <div className="willvolunter">
          <label htmlFor="anser1">
            <input id="anser1" type="checkbox" name="anser1" onChange={(e) => setEventHost(e.target.checked)} />
            <span> I will host an event</span>
          </label>
          <label htmlFor="anser2">
            <input id="anser2" type="checkbox" name="anser2" onChange={(e) => setSocialMedia(e.target.checked)} />
            <span> I will be a social media ambassador</span>
          </label>
          <label htmlFor="anser3">
            <input id="anser3" type="checkbox" name="anser3" onChange={(e) => setMyNetwork(e.target.checked)} />
            <span> I will help reach out to my network</span>
          </label>
        </div>
        <div className="rowinput ">
          <div className="row">
            <div className="col-12 col-md-6 firstcoll">
              <label>First Name </label>
              <input type="text" className="inptext" onChange={(e) => setFirstName(e.target.value)} />
              <label>Email</label>
              <input type="email" className="inptext" onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="anser4">
                <input type="checkbox" name="anser4" onChange={(e) => setSendEmailUpdates(e.target.checked)} />
                <span> Send me email updates</span>
              </label>
              <label>Phone</label>
              <input type="text" className="inptext" onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="col-12 col-md-6">
              <label>Last Name </label>
              <input type="text" className="inptext" onChange={(e) => setLastName(e.target.value)} />
              <label>Mobile Phone (optional)</label>
              <input type="text" className="inptext" onChange={(e) => setMobilePhone(e.target.value)} />
              <label htmlFor="anser5">
                <input type="checkbox" name="anser5" onChange={(e) => setSendMessages(e.target.checked)} />
                <span> Send me text messages</span>
              </label>
              <label>When is a good time to call?</label>
              <input type="text" className="inptext" onChange={(e) => setCallTime(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="rowfluid">
          <label>Address (Street, City, State, Postal code) </label>
          <input type="text" className="inptext" onChange={(e) => setAddress(e.target.value)} />
          <label>When are you available? (optional) </label>
          <input type="text" className="inptext" onChange={(e) => setAvailableTime(e.target.value)} />
          <label>Comments, other ideas, etc. (optional)</label>
          <textarea onChange={(e) => setComments(e.target.value)}></textarea>
          <label htmlFor="anser6">
            <input onChange={(e) => setPublish(e.target.checked)} id="anser6" type="checkbox" name="anser6" />
            <span>Don't publish this on the website</span>
          </label>
        </div>
        <div>
          <button onClick={postdata} className="submitbutton"> Save volunter info</button>

         






        </div>
      </div>
    </>
  );
};

export default Volunter;
