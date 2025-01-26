import useForm from "../Hooks/useForm.js";
const FormLoginWithHook = ({ titleForm }) => {
  const { formData, handleChange } = useForm({
    username: "",
    email: "",
  });
  const handleSubmit = (event) => {
    // Simulate login
    event.preventDefault();
    // console.log("Login submitted");
    console.log("datos del formulario", formData);
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

export default FormLoginWithHook;
