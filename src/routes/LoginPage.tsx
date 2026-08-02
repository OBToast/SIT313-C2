import PrimaryButton from "../components/PrimaryButton";
import { signInAuthWithEmailAndPassword } from "../utils/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        email: '',
        password: ''
    })

    const { email, password } = contact;

    console.log(contact);

    const handleChange = (event) => {
        const { name, value } = event.target
        setContact((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = contact

        try {
            const response = await signInAuthWithEmailAndPassword(email, password);


            alert("Login success!");
            console.log(response)

            navigate("/home");
        }
        catch (error) {
            alert("Login failed, please try again or sign up for a free account.");

            console.log('Login error ', error);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="min-h-[65vh] flex items-center justify-center">
                <div className="w-lg flex flex-col gap-4 text-black text-2xl">
                    <button className="self-end bg-transparent hover:bg-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent hover:underline">
                        <a href="/signup">Sign up</a>
                    </button>
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