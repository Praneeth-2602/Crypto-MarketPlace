import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar.jsx";
import SignUpForm from "../components/SignUpForm.jsx";

function SignUp() {
    return (
        <div>
            <Navbar />
            <SignUpForm />
            <Footer />
        </div>
    );
}

export default SignUp;