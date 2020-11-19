import React from "react";

const Volunter = () => {
  return (
    <div className="formwrapp">
      <div className="willvolunter">
        <input type="checkbox" name="anser1" />
        <label for="anser1"> I will host an event</label>
        <input type="checkbox" name="anser2" />
        <label for="anser2"> I will be a social media ambassador</label>
        <input type="checkbox" name="anser3" />
        <label for="anser3">I will help reach out to my network</label>
      </div>
      <div className="rowwinput">
        <label>First Name </label>
        <input type="text" />
        <label>Last Name </label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Mobile Phone (optional) </label>
        <input type="checkbox" name="anser4" />
        <label for="anser4"> Send me email updates</label>
        <input type="checkbox" name="anser5" />
        <label for="anser5"> Send me text messages</label>
        <input type="number" />
      </div>
      <div>
        <label>Address (Street, City, State, Postal code) </label>
        <input type="text" />
        <label>When are you available? (optional) </label>
        <input type="text" />
        <label>Comments, other ideas, etc. (optional)</label>
        <textarea></textarea>
        <label for="anser6"> Don't publish this on the website</label>
        <input type="checkbox" name="anser6" />
      </div>
      <div>
        <button>Save volunter info</button>
      </div>
    </div>
  );
};

export default Volunter;
