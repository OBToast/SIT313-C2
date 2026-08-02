import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const {displayName, email, password, confirmPassword } = contact;

  console.log(contact);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setContact((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (password !== confirmPassword){
      alert("Passwords do not match!")
      return;
    }
    if (displayName.length <= 3) {
    alert("Please enter a name longer than 3 characters");
}

    try{
      const {user} = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocFromAuth (user, {displayName});
      navigate("/login");
    }
    catch (error) {
            console.log('Error in sign up', error);
        }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="min-h-[65vh] flex flex-col items-center justify-center text-black text-2xl gap-5  ">
          <div className="border border-blue-500 p-5 rounded-md">
            <div className="lg:w-3xl grid md:grid-cols-[230px_1fr] sm:grid-cols-1 gap-4">
              <div />
              <h1 className="p-2 text-center text-blue-700 ">Create a DEV@Deakin Account</h1>

              <label>Name*</label>
              <input type="text" name="displayName" className="border p-2 w-full" onChange={handleChange} value={contact.displayName} />
              <label>Email*</label>
              <input type="email" name="email" className="border p-2 w-full" onChange={handleChange} value={contact.email} />
              <label>Password*</label>
              <input type="password" name="password" className="border p-2 w-full" onChange={handleChange} value={contact.password} />
              <label>Confirm password*</label>
              <input type="password" name="confirmPassword" className="border p-2 w-full" onChange={handleChange} value={contact.confirmPassword} />
              <div />
              <PrimaryButton text="Sign up" type="submit" />
            </div>
          </div>
        </div>
      </form >
    </div>
  );
}

export default SignUpPage;