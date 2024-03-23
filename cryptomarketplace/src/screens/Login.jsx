import React from "react";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Login() {
    return (
        <div>
            <Navbar />
            <LoginForm />
            <Footer />
        </div>
    );
}

export default Login;