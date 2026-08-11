// import my button
import PrimaryButton from "../components/PrimaryButton";

// import react's state hook
import { useState } from "react";

// import for navigation
import { useNavigate, Link } from "react-router-dom";

function PostPage() {
    // create a nav function for after login
    const navigate = useNavigate();

    // store the form inputs in a state contact
    const [post, setPost] = useState({
        postType: '',
        title: '',
        desc: '',
        abstract: '',
        tags: '',
    })

    // destructure to get email and password
    const { postType, title, desc, abstract, tags } = post;

    console.log(post);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setPost((prevValue) => ({
            // keep the previous values
            ...prevValue,
            // update the field that caused the change
            [name]: value

        }));
        console.log(post);
    };

    const [error, setError] = useState("");

    // handle form submit
    const handleSubmit = async (event) => {
        // prevent page refresh
        event.preventDefault();
        //try to post
        var errorMessage = ""
        try {
            if (title.length < 3)
            {
                errorMessage += "Title too short. "
            }
            if (desc.length < 10){
                errorMessage += "Description too short. "
            }
            if (tags.length < 3){
                errorMessage += "Please enter at least one tag. "
            }
            if (postType == "article" && abstract.length < 3){
                errorMessage += "Please enter an abstract. "
            }
            if (errorMessage == "")
            {
            alert("Post Recieved")
            navigate("/home");
            }
            setError(errorMessage)
        }
        catch (error) {
        }
    }

    const tagsInput = (placeholder) => {
        return (
            <label className="flex gap-4">
                Tags
                <input
                    className="input"
                    type="text"
                    name="tags"
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            </label>
        );
    };

    var postForm;

    if (postType == "question")
        postForm = (
            <div className="flex flex-col gap-4">
                <h1 className="heading">What do you want to ask?</h1>

                <label className="flex gap-2">Title
                    <input className="input" type="text" name="title" placeholder="Start your question with how, what, why, etc."
                        onChange={handleChange} value={title}>
                    </input>
                </label>

                <label>Describe your problem</label>
                <textarea className="input min-h-[280px]" name="desc" onChange={handleChange} value={desc}/>

                {tagsInput("Please add up to 3 tags to describe what your question is about e.g., Java")}
                <PrimaryButton text="Post" type="submit" />
            </div>
        )
    else if (postType == "article")
        postForm = (
            <div className="flex flex-col gap-4">
                <h1 className="heading">What do you want to share?</h1>

                <label className="flex gap-2 ">Title
                    <input className="input" type="text" name="title" placeholder="Enter a descriptive title"
                        onChange={handleChange} value={title}>
                    </input>
                </label>

                <label>Abstract</label>
                <textarea className="input min-h-[100px]" name="abstract" placeholder="Enter a 1-paragraph abstract" onChange={handleChange} value={abstract}/>

                <label>Article Text</label>
                <textarea className="input min-h-[150px]" name="desc" placeholder="Enter a 1-paragraph description" onChange={handleChange} value={desc}/>

                {tagsInput("Please add up to 3 tags to describe what your article is about e.g., Java")}
                <PrimaryButton text="Post" type="submit" />
            </div>
        )

    return (
        <form onSubmit={handleSubmit}>
            <div className="min-h-[65vh] flex items-center justify-center">
                <div className="w-4xl flex flex-col gap-4 text-black text-2xl">
                    <h1 className="heading">New Post</h1>
                    <label className="flex gap-4">Select Post Type:
                        <input type="radio" name="postType" onChange={handleChange} value="question" /> Question
                        <input type="radio" name="postType" onChange={handleChange} value="article" /> Article
                    </label>
                    {postForm}
                    <p className="text-red-500">{error}</p>
                </div>
            </div>
        </form>
    );
}

export default PostPage;