import React from 'react'
import { useState, useEffect } from 'react';
function Address() {
  const [addresses, setAddresses] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    buildingNumber: "",
    society: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [editing, setEditing] = useState(false);
  const [originalName, setOriginalName] = useState("");

  useEffect(() => {
    const storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    setAddresses(storedAddresses);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editing) {
      const updatedAddresses = addresses.map(addr => addr.name === originalName ? formData : addr);
      setAddresses(updatedAddresses);
      localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
      setEditing(false);
      setOriginalName("");
    } else {
      if (addresses.some(addr => addr.name === formData.name)) {
        alert("Address with this name already exists!");
        return;
      }
      const newAddresses = [...addresses, formData];
      setAddresses(newAddresses);
      localStorage.setItem("addresses", JSON.stringify(newAddresses));
    }

    setFormData({ name: "", buildingNumber: "", society: "", area: "", city: "", state: "", pincode: "" });
  };

  const handleDelete = (name) => {
    const updatedAddresses = addresses.filter(addr => addr.name !== name);
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
  };

  const handleEdit = (name) => {
    const addressToEdit = addresses.find(addr => addr.name === name);
    if (addressToEdit) {
      setFormData(addressToEdit);
      setEditing(true);
      setOriginalName(name);
    }
  };
  return (
    <>

      <div className="profile-right main-address-contaier d-flex">

        <div className="address-container">

          <div className="title">
            {/* <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
          </svg> */}
            <h2 className="subtitle">Address List ({addresses.length})</h2>
          </div>
          <ul className="address-list">
            {addresses.map((addr, index) => (
              <div className="address-item">

                <li key={index} className="">

                  <div className="icon">
                    <span className='outer-span'>
                      <span className='inner-span'>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </span>

                  </div>
                  <div className="name">
                    <h5>{addr.name}</h5>
                    <p>{addr.buildingNumber}, {addr.society}, {addr.area}, {addr.city}, {addr.state}, {addr.pincode}</p>
                  </div>
                  <div className="address-icon">

                    <div className="delete-icon" onClick={() => handleDelete(addr.name)}>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd" />
                      </svg>

                    </div>
                    <div className="edit-icon" onClick={() => handleEdit(addr.name)}>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </li>
                <span className=' bottom-line' ></span>
              </div>
            ))}
          </ul>
        </div>
        {/* <div className="address-middle-line profile-middle-line"></div>
        <span className='spec-line'></span> */}

        <div className="address-form">
          <div className="profile-title">

            <h2>
              {/* <div className="icon">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
              </svg>
            </div> */}
              Add New Address
            </h2>
            {/* <span>
            <p>...</p>
          </span> */}
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Address Name" required />
            <input type="text" name="buildingNumber" value={formData.buildingNumber} onChange={handleChange} placeholder="Building Number" required />
            <input type="text" name="society" value={formData.society} onChange={handleChange} placeholder="Society Name" required />
            <input type="text" name="area" value={formData.area} onChange={handleChange} placeholder="Area" required />
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
            <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" required />
            <div className="button">
              <button type='submit'>Add Address</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Address