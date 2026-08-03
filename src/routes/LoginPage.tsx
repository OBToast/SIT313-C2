// import my button
import PrimaryButton from "../components/PrimaryButton";

// import wrappers for firebase auth
import { signInAuthWithEmailAndPassword } from "../utils/firebase";

// import react's state hook
import { useState } from "react";

// import for navigation
import { useNavigate, Link } from "react-router-dom";

function LoginPage({ setCurrentUser }) {
    // create a nav function for after login
    const navigate = useNavigate();

    // store the form inputs in a state contact
    const [contact, setContact] = useState({
        email: '',
        password: ''
    })

    // destructure to get email and password
    const { email, password } = contact;

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
        // prevent page refresh
        event.preventDefault();

        //try to sign in
        try {
            const response = await signInAuthWithEmailAndPassword(email, password);

            console.log(response)

            // set the current user to the response's user's name
            setCurrentUser({
                displayName: response.user.email
            });

            //if success nav home
            navigate("/home");
        }
        catch (error) {
            // on error cancel out
            alert("Login failed, please try again or sign up for a free account.");

            console.log('Login error ', error);
        }
    }
    // jsx for the login form
    // attach the event handlers to update form state onchange events
    return (
        <form onSubmit={handleSubmit}>
            <div className="min-h-[65vh] flex items-center justify-center">
                <div className="w-lg flex flex-col gap-4 text-black text-2xl">
                    <Link to="/signup" className="self-end bg-transparent hover:bg-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent hover:underline">
                        Sign up
                    </Link>
                    <label>Your email</label>
                    <input type="email" name="email" className="border p-2" onChange={handleChange} value={email} />
                    <label>Your password</label>
                    <input type="password" name="password" className="border p-2" onChange={handleChange} value={password} />
                    <PrimaryButton text="Login" type="submit" />
                </div>
            </div>
        </form>
    );
}

export default LoginPage;