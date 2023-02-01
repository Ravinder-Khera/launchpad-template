import Link from "next/link";
import LayoutFront from "../components/layout/LayoutFront";

const ProjectDetails = () => {

    return (
        <>
           <LayoutFront
                pageClass={"front"}
                headTitle={"Metan Evolution"}
                pageTitle={"Metan Evolution"}
                pageTitleSub={"Welcome to Metan Evolution Page"}
                parent={"Home"}
                child={"Metan Evolution"}
            >
                <div className="explore-details section-padding">
                    <div className="container">
                        <div className="row justify-content-between">

                            <div className="col-xl-4">
                                <div className="explore-details-head">
                                    <h2>Metan Evolution</h2>
                                    <h6>BUSD/METAN</h6>

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
                                            <h5>1 BUSD = 6.666 METAN</h5>
                                            <h6>1 METAN = 0.150015 BUSD</h6>

                                            <div className="complete-progress">
                                                <div className="d-flex justify-content-between">
                                                    <span>Finished 11 months, 9 days ago</span>
                                                    <span>100%</span>
                                                </div>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "100%" }}
                                                        aria-valuenow={100}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span>50,004.95 BUSD</span>
                                                    <span>333,333 / 333,333 METAN</span>
                                                </div>
                                            </div>


                                            <ul>
                                                <li>IDO and distribution on BNB Chain</li>
                                                {/* <li><span>Register</span> Sale 17 Apr, 11:00 – 17 Apr, 23:00 UTC</li> */}
                                                <li> <span>Sale</span> 26 Feb, 14:00 – 26 Feb, 19:00 UTC</li>
                                                <li><span>FCFS</span> 26 Feb, 18:45 UTC</li>

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
                                        <img src="/launchpad-template/images/items/cc4.jpg" className="img-fluid w-100 card-img-top" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <div className="explore-details-about">
                                        <p>Metan Evolution is a game application platform on the Blockchain network. The game has NFT items with different and unique characteristics, features and rarity. Rewards in-game are organized according to GameFi architecture, allowing players to collect more NFT items and increase their values over time.</p>
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
                                                <li><span>Hard Cap : </span> 	$50,004</li>
                                                <li><span>Swap Rate : </span> 	1 METAN = $0.150015</li>
                                                <li><span>Start/end : </span> 	26 Feb, 14:00 pm –19:00 pm UTC</li>
                                                {/* <li><span>Registration : </span> 	Apr 11, 11:00 UTC –Apr 13, 08:00 UTC</li> */}
                                                <li><span>FCFS Opens : </span> 	26 Feb, 18:45 pm UTC</li>
                                                <li><span>Base Allocation : </span> 1x = $24.93</li>
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
                                                    2,600,000 METAN, market cap $390,039
                                                </li>
                                                <li>
                                                    <span>Total Supply:</span>
                                                    100,000,000 METAN
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
                                                    20% on TGE
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
                                                <li><span>Vesting : </span> 20% at TGE, then release 20% on monthly basis</li>
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