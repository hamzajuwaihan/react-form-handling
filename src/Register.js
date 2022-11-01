import React from 'react'
import { useState } from 'react';

function Register() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setphoneError] = useState("");

    const handleSubmit = (event) => {
        // event.preventDefault();

        if (email === "" || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setEmailError("Email problem");

            event.preventDefault();
        }
        if (phone === "" || !phone.match(/^\d+$/) || phone.length < 6 || phone.length > 18) {
            setphoneError("Phone problem");

            event.preventDefault();
        }
        if (password === "" || password.length < 7 || password.length > 18) {
            setPasswordError("Password problem");

            event.preventDefault();
        }



    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setEmailError("");
        }else{
            setEmailError("please enter a valid email");
        }

    }


    const handlePhone = (e) => {
        setPhone(e.target.value);
        if (phone.match(/^\d+$/)) {
            setphoneError("");

        } else if (!phone.match(/^\d+$/)) {
            setphoneError("phone must be only numbers");

        }
        if (phone.length < 6) {
            setphoneError("phone must be more than 6 numbers");
        } else if (phone.length > 18) {
            setphoneError("phone must be less than 18 numbers");
        } else {
            setphoneError("");
        }


    }


    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (password.length < 6) {
            setPasswordError("Password must be more than 6 characters");
        } else if (password.length > 12) {
            setPasswordError("Password must be less than 12 characters");
        } else {
            setPasswordError("");
        }
    }

    return (
        <div>
            <div className="row">
                <div className="container w-50">
                    <h1 className="h1">Create an account</h1>
                    <form action="" method="post" className="mt-5" id="sign-up" onSubmit={handleSubmit}>
                        <div>
                            <label htmlfor="email" className="form-label"
                            ><b>Email address</b><span className="star"> *</span></label
                            >
                            <input name="email" id="email" className="form-control mb-3"
                                value={email}
                                onChange={handleEmail}
                            />
                        </div>
                        {emailError !== "" ? <small id="email-error" className="md-4 text-danger">{emailError}.</small> : null}
                        <br />
                        <label htmlfor="phone" className="form-label"
                        ><b>Phone</b><span className="star"> *</span></label
                        >
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            className="form-control mb-3"
                            value={phone}
                            onChange={handlePhone}
                        />
                        {
                            phoneError !== "" ? <small id="phone-error" className="md-4 text-danger">{phoneError}.</small> : null
                        }
                        <br />
                        <label htmlfor="pass" className="form-label"
                        ><b>Create Password</b><span className="star"> *</span></label
                        >
                        <div className="input-group col-12">
                            <input
                                type="password"
                                className="form-control"
                                aria-describedby="button-addon2"
                                id="pass"
                                name='password'
                                value={password}
                                onChange={handlePassword}
                            />

                            <button
                                className="btn btn-outline-secondary btn-sm"
                                type="button"
                                id="button-addon2"
                            >
                                <img
                                    src={"images/icons8-hide-48.png"}
                                    alt=""
                                    className="hide"
                                />
                            </button>
                        </div>
                        {
                            passwordError !== "" ? <small id="pass-error" className="md-4 text-danger">{passwordError}.</small> : null
                        }<br />

                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value="agree"
                                id="agree"
                            />
                            <label className="form-check-label" htmlfor="agree">
                                I agree to the terms & conditions Orange.
                            </label>
                        </div>
                        <div className="form-check mb-5">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value="news"
                                id="news"

                            />
                            <label className="form-check-label" htmlfor="news">
                                Recieve Coding Academy Newsletter
                            </label>
                        </div>
                        <div className="d-grid gap-2">
                            <input
                                className="btn btn-primary sign-up btn-lg"
                                id="signup"
                                type="submit"
                            />

                            <a href="./sign-in.html">
                                <input
                                    className="btn btn-outline-secondary btn-lg container-fluid g-0"
                                    type="button"
                                    value="Already have an account?login"
                                />
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register