import React from 'react'
import './Form.css'

export default function Form() {
  return (
<div className="form-container">
      <h2>Website Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstname">Firstname</label>
          <input type="text" id="firstname" placeholder="Enter your firstname" required />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input type="text" id="lastname" placeholder="Enter your lastname" required />
        </div>

        <div className="form-group">
          <label htmlFor="category">Categories</label>
          <select id="category" required>
            <option value="">Select category</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="relatives">Relatives</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder="Enter your phone number" required />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  )
}
