// import { useState } from "react";

// function SettingsForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Settings saved");
//   };

//   return (
//     <div>
//       <h2>Settings</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <input
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <input
//           name="password"
//           placeholder="Password"
//           type="password"
//           value={formData.password}
//           onChange={handleChange}
//         />

//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// }

// export default SettingsForm;
import { useState } from "react";

function SettingsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    setErrors({});
    setSuccess("Settings saved successfully!");
  };

  return (
    <div>
      <h2>Settings</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <p>{errors.name}</p>

        <label>Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <p>{errors.password}</p>

        <button type="submit">Save</button>

        <p>{success}</p>
      </form>
    </div>
  );
}

export default SettingsForm;