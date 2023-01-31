import Link from "next/link";
import SignupForm from "../components/form/SignupForm";

function SignUp() {
    return (
        <>
            <div className="authincation section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="mini-logo text-center my-4">
                                <Link href="/">
                                    <a>
                                        <img src="./launchpad-template/images/logo.png" alt="" />
                                    </a>
                                </Link>
                                <h4 className="card-title mt-5">
                                    Sign up to Neftify
                                </h4>
                            </div>
                            <div className="auth-form card">
                                <div className="card-body">
                                    <SignupForm />
                                    <div className="text-center">
                                        <p className="mt-3 mb-0">
                                            <Link href="/signin">
                                                <a className="text-white me-1 fw-bold">
                                                    Sign in
                                                </a>
                                            </Link>
                                            to your account
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="privacy-link">
                                <Link href="#">
                                    <a>
                                        Have an issue with 2-factor
                                        authentication?
                                    </a>
                                </Link>
                                <br />
                                <Link href="#">
                                    <a>Privacy Policy</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SignUp;
