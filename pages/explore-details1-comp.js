import Link from "next/link";
import LayoutFront from "../components/layout/LayoutFront";

const ProjectDetails = () => {

    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Jungle Road"}
                pageTitle={"Jungle Road"}
                pageTitleSub={"Welcome to Jungle Road Page"}
                parent={"Home"}
                child={"Jungle Road"}
            >
                <div className="explore-details section-padding">
                    <div className="container">
                        <div className="row justify-content-between">

                            <div className="col-xl-4">
                                <div className="explore-details-head">
                                    <h2>Jungle Road</h2>
                                    <h6>BUSD/JGRD</h6>

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
                                            <h5>1 BUSD = 21.739 JGRD</h5>
                                            <h6>1 JGRD = 0.046 BUSD</h6>

                                            <div className="complete-progress">
                                                <div className="d-flex justify-content-between">
                                                    <span>Finished 9 months, 19 days ago</span>
                                                    <span>83.14%</span>
                                                </div>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "83%" }}
                                                        aria-valuenow={83}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span>39,493.26 BUSD</span>
                                                    <span>858,544.00 / 1,032,609 JGRD</span>
                                                </div>
                                            </div>


                                            <ul>
                                                <li>IDO and distribution on BNB Chain</li>
                                                {/* <li><span>Register</span> Sale 17 Apr, 11:00 – 17 Apr, 23:00 UTC</li> */}
                                                <li> <span>Sale</span> 17 Apr, 11:00 – 17 Apr, 23:00 UTC</li>
                                                <li><span>FCFS</span> 17 Apr, 15:40 UTC</li>

                                            </ul>
                                            {/* <Link href="#">
                                                <a className="btn btn-primary w-100">
                                                    Participate
                                                </a>
                                            </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="card">
                                    <div className="explorer-details-slider">
                                        <img src="/launchpad-template/images/items/card1.png" className="img-fluid w-100 card-img-top" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <div className="explore-details-about">
                                        <p>Here at Jungle Road, players can explore wild landscapes with their very own unique, strong, and diverse animal gods. Each character comes from a different origin and is on a quest to reach Nirvana. In these maps, you will come across rivers and lands of all sorts, filled with wild animal attacks and many obstacles to overcome. This journey will not be easy nor safe. This blockchain game will take you back to the good old days of when you were a kid and would escape your daily life chores and just have fun. But now with NFTs, we are able to do this and also earn as we play.</p>
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
                                                <li><span>Hard Cap : </span> 	$47,500</li>
                                                <li><span>Swap Rate : </span> 	1 JGRD = $0.046</li>
                                                <li><span>Start/end : </span> 	17 Apr, 11:00 am –23:00 pm UTC</li>
                                                {/* <li><span>Registration : </span> 	Apr 11, 11:00 UTC –Apr 13, 08:00 UTC</li> */}
                                                <li><span>FCFS Opens : </span> 	17 Apr, 15:40 pm UTC</li>
                                                <li><span>Base Allocation : </span> 1x = $393.80</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Price</h4>
                                        <h5>Listing:$0.03</h5>
                                    </div>
                                </div> */}




                                <div className="card-header px-0">
                                    <h4 className="card-title">Token Metrics</h4>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="token-metrics">
                                            <ul>
                                                {/* <li>
                                                    <span>Blockchain Network:</span>
                                                    Polygon (MATIC) Network
                                                </li> */}
                                                <li>
                                                    <span>Initial Supply:</span>
                                                    7,140,000 JGRD, market cap $328,441
                                                </li>
                                                <li>
                                                    <span>Total Supply:</span>
                                                    1 000 000 000 JGRD  
                                                </li>
                                                {/* <li>
                                                    <span>Initial Market Capitalization:</span>
                                                    USD$ {Math.floor(Math.random() * 10000000)}
                                                </li> */}
                                                {/* <li>
                                                    <span>Total Raise (All Rounds):</span>
                                                    USD$ {Math.floor(Math.random() * 1000000)}
                                                </li>
                                                <li>
                                                    <span>Platform Allocation:</span>
                                                    BUSD {Math.floor(Math.random() * 1000000)}
                                                </li> */}
                                                <li>
                                                    <span>Vesting Details:</span>
                                                    25% unlock at TGE, then 25% per month for 3 months
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
                                                <li><span>Distribution : </span> 	Claimed on NFTPad</li>
                                                <li><span>Vesting : </span> 	25% unlock at TGE, then 25% per month for 3 months</li>
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