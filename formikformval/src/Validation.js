import "./App.css";
import {useFormik } from "formik";

function App() {
  const {handleSubmit,handleChange,values} = useFormik({
    initialValues: {
      firstName: "Atakan",
      lastName: "AKMAN",
      email: "aatakanakman@gmail.com",
      gender: "male",
      hobies: [],
      country: "turkey",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="App">
      <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Namee</label>
            <input
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            ></input>
            <br></br>
            <br></br>
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            ></input>
            <br></br>
            <br></br>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            ></input>
            <br></br>
            <br></br>

            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            ></input>
            <span>Female</span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            ></input>
            <br></br>
            <br></br>
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Football"
                onChange={handleChange}
              />
              Football
            </div>
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Cinema"
                onChange={handleChange}
              />
              Cinema
            </div>
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Photography"
                onChange={handleChange}
              />
              Photography
            </div>

            <br></br>
            <br></br>

            <select
              name="country"
              onChange={handleChange}
              value={values.country}
            >
              <option value="turkey">Turkey</option>
              <option value="england">England</option>
              <option value="usa">USA</option>
            </select>

            <br></br>
            <br></br>

            <button type="submit">Submit</button>

            <br></br>
            <br></br>

            <code>{JSON.stringify(values)}</code>
          </form>
        
    </div>
  );
}

export default App;
