import React from 'react'

function Login() {
    return (
        <div className="row">
            <div className="container w-50">
                <h1 className="h1" >Sign in</h1>
                <form action="#" className="mt-5" id="sign-up">
                    <div>
                        <label htmlfor="email" className="form-label"
                        ><b>Email address</b><span className="star"> *</span></label
                        >
                        <input name="email" id="email" className="form-control mb-3" />
                    </div>
                    <small id="email-error" className="md-4"></small><br />

                    <label for="pass" className="form-label"
                    ><b> Password</b><span className="star"> *</span></label
                    >
                    <div className="input-group col-12">
                        <input
                            type="password"
                            className="form-control"

                            aria-describedby="button-addon2"
                            id="pass"
                        />

                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                        >
                            <img
                                src="../images/icons8-hide-48.png"
                                alt=""
                                className="hide"
                            />
                        </button>
                    </div>
                    <small id="pass-error" className="md-4"> </small><br />
                    <div className="mb-3">
                        <span>The Password should be between 6-18 characters.</span>
                    </div>
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
                            checked
                        />
                        <label className="form-check-label" htmlfor="news">
                            Recieve Coding Academy Newsletter
                        </label>
                    </div>
                    <div id="message"></div>
                    <div className="d-grid gap-2">
                        <input
                            className="btn btn-primary sign-up btn-lg"
                            id="signup"
                            type="submit"
                        />


                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login