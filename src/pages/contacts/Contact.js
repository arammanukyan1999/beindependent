import React from 'react'
import './contact.css'
import '../Volunter/volunteer.css'


const Contacts = () => {
  return (
    <>
     <div className='topline'></div>
      <div className="container width-container">
          <div  class="page-nav">
            <ul class="breadcrumbs">
              <li><a href="/">Home <span class="divider">&gt;</span></a></li>
            </ul>
          </div>
          <div id="headline">
            <h2 class="headline">Contact</h2>
          </div>
        
      </div>
      <div className="formwrapp container">
      <label>Contacts us</label>
          <textarea></textarea>
          <label for="anser6">
            <input id="anser6" type="checkbox" name="anser6" />
            <span>  Don't publish this on the website</span>
          </label>
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
             
            </div>
          </div>
        </div>
        <div className="rowfluid" >
          <label>Address (Street, City, State, Postal code)</label>
          <input type="text" className='inptext' />
        </div>
        <div>
          <button className="submitbutton"> Send message</button>
        </div>
        </div>
    </>

  )
}

export default Contacts