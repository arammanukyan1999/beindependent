import React from 'react'
import './volunter.css'


const Volunter = () => {
  return (
    <div className="formwrapp container">
      <h4 style={{color:"white"}}>Will you volunteer?</h4>
      <div className="willvolunter">
        <label for="anser1">
          <input id='anser1' type="checkbox" name="anser1" />
          <span> I will host an event</span>
        </label>
        <label for="anser2">
          <input id='anser2' type="checkbox" name="anser2" />
          <span> I will be a social media ambassador</span>
        </label>
        <label for="anser3">
          <input id='anser3' type="checkbox" name="anser3" />
          <span> I will help reach out to my network</span>
        </label>
      </div>
      <div className="rowinput " >
        <div className='row'>
          <div className='col-12 col-md-6 firstcoll'>
            <label>First Name </label>
            <input type="text" className='inptext' />

            <label>Email</label>
            <input type="email" className='inptext' />
            <label for="anser4">
              <input type="checkbox" name="anser4" />
              <span>  Send me email updates</span>
            </label>
            <label>Phone</label>
            <input type='text' className='inptext' />
          </div>
          <div className='col-12 col-md-6'>
            <label>Last Name  </label>
            <input type="text" className='inptext' />

            <label>Mobile Phone (optional)</label>
            <input type="text" className='inptext' />

            <label for="anser5">
              <input type="checkbox" name="anser5" />
              <span> Send me text messages</span>
            </label>
            <label>When is a good time to call?</label>
            <input type="text" className='inptext' />
          </div>
        </div>
      </div>
      <div className="rowfluid" >
        <label>Address (Street, City, State, Postal code) </label>
        <input type="text" />
        <label>When are you available? (optional) </label>
        <input type="text" />
        <label>Comments, other ideas, etc. (optional)</label>
        <textarea></textarea>
        <label for="anser6">
          <input  id="anser6" type="checkbox" name="anser6" />
          <span>Don't publish this on the website</span>
        </label>
      </div>
      <div>
        <button className="submitbutton"> Save volunter info</button>
      </div>
    </div>
  );
}

export default Volunter;