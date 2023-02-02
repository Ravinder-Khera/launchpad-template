import Link from "next/link";
import LayoutFront from "../components/layout/LayoutFront";

const ProjectDetails = () => {

    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"CODYFIGHT"}
                pageTitle={"CODYFIGHT"}
                pageTitleSub={"Welcome to CODYFIGHT Page"}
                parent={"Home"}
                child={"CODYFIGHT"}
            >
                <div className="explore-details section-padding">
                    <div className="container">
                        <div className="row justify-content-between">

                            <div className="col-xl-4">
                                <div className="explore-details-head">
                                    <h2>CODYFIGHT</h2>
                                    <h6>CDF / BUDC</h6>

                                    <div className="badge-group">
                                        <span className="mb-3 badge"> Registered</span>
                                        <span className="mb-3 badge"> Levels</span>
                                        <span className="mb-3 badge"> KYC</span>

                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="explore-details-content">
                                            {/* <Link href="/">
                                                <a className="btn btn-primary">Connect</a>
                                            </Link> */}
                                            <h5>1 BUDC = 35.4991 CDF</h5>
                                            <h6>1 CDF = 0.23 BUDC</h6>

                                            <div className="complete-progress">
                                                <div className="d-flex justify-content-between">
                                                    <span>registration opens in 2 days, 3 hours</span>
                                                    <span>0%</span>
                                                </div>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "50%" }}
                                                        aria-valuenow={50}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span>0 BUDC</span>
                                                    <span>0 / {Math.random()} CDF</span>
                                                </div>
                                            </div>


                                            <ul>
                                                <li>IDO on BNB Chain, distribution on POLY</li>
                                                <li><span>Register</span> 	Apr 11, 11:00 – Apr 13, 08:00 UTC</li>
                                                <li> <span>Sale</span>  Apr 13, 11:00 – 16:00 UTC</li>
                                                <li><span>FCFS</span> 	Apr 13, 15:40 UTC</li>

                                            </ul>
                                            <Link href="#">
                                                <a className="btn btn-primary w-100">
                                                    Participate
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="card">
                                    <div className="explorer-details-slider">
                                        <img src="/launchpad-template/images/items/c3.png" className="img-fluid w-100 card-img-top" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <div className="explore-details-about">
                                            <p>CODYFIGHT is a game series written and illustrated by Tite Kubo. It follows the adventures of a teenager Ichigo Kurosaki, who inherits his parents' destiny after he obtains the powers of a Soul Reaper—a death personification similar to the Grim Reaper—from another Soul Reaper, Rukia Kuchiki. His new-found powers allow him to take on the duties of defending humans from evil spirits and guiding departed souls to the afterlife, and set him on journeys to various ghostly realms of existence.
                                            CODYFIGHT was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from August 2001 to August 2016, with its chapters collected in 74 tankōbon volumes. The series has spawned a media franchise that includes an anime television series adaptation that was produced by Tokyo-based studio Pierrot from 2004 to 2012, two original video animation (OVA) episodes, four animated feature films, ten stage musicals, and numerous video games, as well as many types of CODYFIGHT-related merchandise. A Japanese live-action film adaptation produced by Warner Bros. premiered in 2022.evelopers and players can build, own, and monetize their gaming experiences.</p>
                                            <div className="social-link">
                                                <Link href="#">
                                                    <a><i className="bi bi-facebook"></i></a>
                                                </Link>
                                                <Link href="#">
                                                    <a><i className="bi bi-twitter"></i></a>
                                                </Link>
                                                <Link href="#">
                                                    <a><i className="bi bi-telegram"></i></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="card-header px-0">
                                    <h4 className="card-title">Pool Details</h4>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="pool-details">
                                            <ul>
                                                <li><span>Access Type : </span> 	Levels</li>
                                                <li><span>Hard Cap : </span> 	${Math.floor(Math.random() * 10000)}</li>
                                                <li><span>Swap Rate : </span> 	1 CDF = $0.03 | {Math.random()} CDF per 1 BUDC</li>
                                                <li><span>Start/end : </span> 	13 Apr, 11:00 am –16:00 pm UTC</li>
                                                <li><span>Registration : </span> 	Apr 11, 11:00 UTC –Apr 13, 08:00 UTC</li>
                                                <li><span>FCFS Opens : </span> 	Apr 13, 15:40 UTC UTC (20m before the end)</li>
                                                <li><span>Base Allocation : </span> 	1x = ${Math.random()} (approx)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Price</h4>
                                        <h5>Listing:$0.03</h5>
                                    </div>
                                </div>




                                <div className="card-header px-0">
                                    <h4 className="card-title">Token Metrics</h4>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="token-metrics">
                                            <ul>
                                                <li>
                                                    <span>Blockchain Network:</span>
                                                    Polygon (MATIC) Network
                                                </li>
                                                <li>
                                                    <span>Initial Supply:</span>
                                                    {Math.floor(Math.random() * 100000000)} CDF
                                                </li>
                                                <li>
                                                    <span>Total Supply:</span>
                                                    {Math.floor(Math.random() * 1000000000)} CDF
                                                </li>
                                                <li>
                                                    <span>Initial Market Capitalization:</span>
                                                    USD$ {Math.floor(Math.random() * 10000000)}
                                                </li>
                                                <li>
                                                    <span>Total Raise (All Rounds):</span>
                                                    USD$ {Math.floor(Math.random() * 1000000)}
                                                </li>
                                                <li>
                                                    <span>Platform Allocation:</span>
                                                    BUDC {Math.floor(Math.random() * 1000000)}
                                                </li>
                                                <li>
                                                    <span>Vesting Details:</span>
                                                    25% on TGE, then 25% every 2 months
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-header px-0">
                                    <h4 className="card-title">Distribution</h4>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="distribution">
                                            <ul>
                                                <li><span>Distribution : </span> 	Claimed on TrustPad</li>
                                                <li><span>Vesting : </span> 	10% at TGE and linear unlock of 15% on every month. Total unlock for public sale buyers in on 6th month.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
};

export default ProjectDetails;