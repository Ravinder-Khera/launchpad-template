import Link from "next/link";
import React from 'react';

const Bottom = () => {
    return (
        <>
            <div className="bottom section-padding triangle-top-dark triangle-bottom-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-7 col-sm-8">
                            <div className="bottom-logo">
                                <img
                                    className="pb-3 img-fluid"
                                    src="/launchpad-template/images/logo.png"
                                    alt=""
                                />

                                <p>
                                    Moon Ride is a unique and beautiful
                                    collection of UI elements that are all
                                    flexible and modular. A complete and
                                    customizable solution to building the
                                    website of your dreams.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4 col-6">
                            <div className="bottom-widget">
                                <h4 className="widget-title">About us</h4>
                                <ul>
                                    <li>
                                        <Link href="/explore-grid"><a>Explore</a></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><a>Item</a></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><a>Collection</a></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><a>Connect</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
                            <div className="bottom-widget">
                                <h4 className="widget-title">Settings</h4>
                                <ul>
                                    <li>
                                        <Link href="#"><a>Settings</a></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><a>Application</a></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><a>Security</a></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><a>Activity</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-8 col-sm-8">
                            <div className="bottom-widget">
                                <h4 className="widget-title">Profile</h4>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <ul>
                                            <li>
                                                <Link href="#"><a>Profile</a></Link>
                                            </li>
                                            <li>
                                                <Link href="#"><a>Created</a></Link>
                                            </li>
                                            <li>
                                                <Link href="/#"><a>Collected</a></Link>
                                            </li>
                                            <li>
                                                <Link href="#"><a>Activity</a></Link>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <ul>
                                            <li>
                                                <Link href="#"><a>On Sale</a></Link>
                                            </li>
                                            <li>
                                                <Link href="#"><a>Liked</a></Link>
                                            </li>
                                            <li>
                                                <Link href="#"><a>Following</a></Link>
                                            </li>
                                            <li>
                                                <Link href="#"><a>Followers</a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bottom;