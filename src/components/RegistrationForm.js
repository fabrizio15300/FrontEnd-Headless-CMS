import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";


const RegistrationForm = () => {

  const [firstName,setFirst_name] = useState("");
  const [lastName,setLast_name] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error,setError] = useState(null);
  const navigate = useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();
    setError(null);

    const response = await registerUser(firstName, lastName, username, email, password);

    if (response.success) {
      navigate("/LoginPage"); //dopo la registrazione riprende dalla homepage
    } else {
      setError(response.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="bg-white p-6 shadow-md rounded-md w-96">


        <h2 className="text-3xl italic text-amber-950 font-bold text-center mb-8">Registrazione</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirst_name(e.target.value)}
          className="p-2 border rounded-md mb-3"
        />
        <input
          type="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLast_name(e.target.value)}
          className="p-2 border rounded-md mb-3"
        />
          <input
            type="text"
            placeholder="Username *"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border rounded-md mb-3"
            required
          />
          <input
            type="email"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded-md mb-3"
            required
          />
          <input
             type="password"
             placeholder="Password *"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             className="p-2 border rounded-md mb-3"
             required
          />
          <button
            type="submit"
            className="bg-yellow-900 text-white p-2 rounded-md hover:bg-yellow-700 transition"
          >
            Registrati
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;