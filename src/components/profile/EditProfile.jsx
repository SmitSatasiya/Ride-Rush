import React, { useState } from 'react'

function EditProfile() {
  const handleChange = (e) => {

  }
  const handleSubmit = async (e) => {

  }
  return (
    <div className="profile-right top-20 left-20">

      <div className="address-form">
        <div className="profile-title">

          <h2>
            {/* <div className="icon">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
        </svg>
      </div> */}
            Edit Profile
          </h2>
          {/* <span>
      <p>...</p>
    </span> */}
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" onChange={handleChange} placeholder="User Name" required />
          <input type="text" name="email" onChange={handleChange} placeholder="Email" required />
          <input type="text" name="phone" onChange={handleChange} placeholder="Phone Number" required />
          
          <div className="button">
            <button type='submit'>Update</button>
          </div>
        </form>
      </div>
      <div className="profile-middle-line"></div>
      <span className='spec-line'></span>
      <div className="address-form">
        <div className="profile-title">

          <h2>
            {/* <div className="icon">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
        </svg>
      </div> */}
            Update Password
          </h2>
          {/* <span>
      <p>...</p>
    </span> */}
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="password" onChange={handleChange} placeholder="Old Password" required />
          <input type="text" name="newpassword" onChange={handleChange} placeholder="New Password" required />
          <input type="text" name="confirmpassword" onChange={handleChange} placeholder="Confirm Password" required />

          <div className="button">
            <button type='submit'>Update Password</button>
          </div>
        </form>
      </div>
    </div>

  )
}
function UpdatePassword() {
  const handleChange = (e) => {

  }
  const handleSubmit = async (e) => {

  }
  return (
    <div className="profile-right top-20 left-20">

      <div className="address-form">
        <div className="profile-title">

          <h2>
            {/* <div className="icon">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
        </svg>
      </div> */}
            Update Password
          </h2>
          {/* <span>
      <p>...</p>
    </span> */}
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="password" onChange={handleChange} placeholder="Old Password" required />
          <input type="text" name="newpassword" onChange={handleChange} placeholder="New Password" required />
          <input type="text" name="confirmpassword" onChange={handleChange} placeholder="Confirm Password" required />

          <div className="button">
            <button type='submit'>Update Password</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export {
  EditProfile,
  UpdatePassword

}