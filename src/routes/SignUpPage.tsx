// import my button
import PrimaryButton from "../components/PrimaryButton";

// import react's state hook
import { useState } from "react";

// import the firebase wrapper functions
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../utils/firebase";

// import for navigation
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  // create a nav function for after sign up
  const navigate = useNavigate();

  // store the form inputs in a state contact
  const [contact, setContact] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // destructure to have access to all the form variables
  const { displayName, email, password, confirmPassword } = contact;

  console.log(contact);

  // update form value upon any change
  const handleChange = (event) => {
    const { name, value } = event.target;

    setContact((prevValue) => ({
      // keep the previous values
      ...prevValue,
      // update the field that caused the change
      [name]: value
    }));
  };

  // handle form submit
  const handleSubmit = async (event) => {
    // stop auto refresh
    event.preventDefault();
    let alertMessage = ""
    // ensure passwords match
    if (password !== confirmPassword) {
      alertMessage += "Passwords do not match! "
    }
    // ensure name > min length
    if (displayName.length <= 3) {
      alertMessage +="Please enter a name longer than 3 characters. "
    }
    if (email == "") {
      alertMessage += "Please enter an email "
    }
    if (alertMessage != "")
    {
      alert(alertMessage);
      return;
    }

    try {
      // create the firebase user auth
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      // create the firestore doc
      await createUserDocFromAuth(user, { displayName });
      // navigate to the login page
      navigate("/login");
    }
    catch (error) {
      console.log('Error in sign up', error);
      alert("Failed to sign up, email is most likely already in use");
    }
  }

  // jsx for the sign up form
  // attach the event handlers to update form state onchange events
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