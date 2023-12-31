import React, {useState} from 'react';

function TechnicianForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    employee_id: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault();

    const technicianUrl = 'http://localhost:8080/api/technicians/'

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(technicianUrl, fetchConfig);
    if (response.ok) {
      setFormData({
        first_name: '',
        last_name: '',
        employee_id: '',
      });
    }
  }

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setFormData({
      //Previous form data is spread (i.e. copied) into our new state object
      ...formData,

      //On top of the that data, we add the currently engaged input key and value
      [inputName]: value
    });
  }


  return (
    <div className="row form-outer">
      <div className="offset-3 col-6 form-inner">
        <div className='form-image technician-form'>

        </div>
        <div className="shadow p-4 mt-4 myform">
          <h1>Add a Technician</h1>
          <form onSubmit={handleSubmit} id="create-shoe-form myform">
            <div className="mb-3">
              <input onChange={handleFormChange} value={formData.first_name} placeholder="FirstName" required type="text" name="first_name" id="first_name" className="form-control" />
            </div>
            <div className="mb-3">
              <input onChange={handleFormChange} value={formData.last_name} placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" />
            </div>
            <div className="mb-3">
              <input onChange={handleFormChange} value={formData.employee_id} placeholder="Employee ID" required type="text" name="employee_id" id="employee_id" className="form-control" />
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TechnicianForm;
