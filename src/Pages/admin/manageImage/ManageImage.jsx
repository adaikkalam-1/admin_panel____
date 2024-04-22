import React, { useState } from "react";
import "./image.css";

const ManageImage = () => {
  const [finalData, setFinalData] = useState([]);
  const [data, setData] = useState({
    name: "",
    description: "",
    file: null 
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData({
      ...data,
      [name]: name === "file" ? files[0] : value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setFinalData([...finalData, data]); 
  };

  return (
    <div>
      <div className="container-fluid-img">
        <div className="container">
          <div className="form-box">
            <h2>Image Upload</h2>
            <form className="formContainer" onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  className="input"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                  className="input"
                  placeholder="Description"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>

    <div className="data">
        {finalData.map((item, i) => (
          <div className="card-container" key={i}>
            <div className="card">
              <img src={URL.createObjectURL(item.file)}  /> 
              <div className="card-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a href="#" className="btn1">Read more</a> 
              </div>
            </div>
          </div>
        ))}
        </div>
    
    </div>
  );
};

export default ManageImage;
