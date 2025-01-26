import { useState } from "react";
const FormLogin = ({ titleForm }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const handleSubmit = (event) => {
    // Simulate login
    event.preventDefault();
    // console.log("Login submitted");
    console.log("datos del formulario", formData);
  };

  const handleChange = (event) => {
    // setTitleForm(event.target.value);
    // console.log("handleChange", event);
    // debugger;
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>{titleForm}</h3>
        <div>
          <label>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={formData.username}
            onChange={handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default FormLogin;
