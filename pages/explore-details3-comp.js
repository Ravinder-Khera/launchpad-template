import Link from "next/link";
import LayoutFront from "../components/layout/LayoutFront";

const ProjectDetails = () => {

    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Samurai Legends"}
                pageTitle={"Samurai Legends"}
                pageTitleSub={"Welcome to Samurai Legends Page"}
                parent={"Home"}
                child={"Samurai Legends"}
            >
                <div className="explore-details section-padding">
                    <div className="container">
                        <div className="row justify-content-between">

                            <div className="col-xl-4">
                                <div className="explore-details-head">
                                    <h2>Samurai Legends</h2>
                                    <h6>SMG / BUSD</h6>

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
                                            <h5>1 BUSD = 16.666 SMG</h5>
                                            <h6>1 SMG = 0.060002 BUSD</h6>

                                            <div className="complete-progress">
                                                <div className="d-flex justify-content-between">
                                                    <span>Finished 10 months, 8 days ago</span>
                                                    <span>45.79%</span>
                                                </div>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "47%" }}
                                                        aria-valuenow={47}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span>43,505.6 BUSD</span>
                                                    <span>725,065.06 / 1,583,333 SMG</span>
                                                </div>
                                            </div>


                                            <ul>
                                                <li>IDO and distribution on BNB Chain</li>
                                                {/* <li><span>Register</span> 	Apr 11, 11:00 – Apr 13, 08:00 UTC</li> */}
                                                <li> <span>Sale</span> 26 Mar, 11:00 – 29 Mar, 16:00 UTC</li>
                                                <li><span>FCFS</span> 26 Mar, 11:00 UTC</li>

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
                                        <img src="/launchpad-template/images/items/cc3.png" className="img-fluid w-100 card-img-top" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <div className="explore-details-about">
                                        <p>Samurai Legends is a GameFi metaverse set in feudal Japan. Rule digital patches of land, build, battle and earn riches in your quest to become shogun of the metaverse! A combination of NFTs, play-to-earn mechanics and samurai aesthetics make Samurai Legends one of the most standout gaming experiences on Binance Smart Chain.</p>
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
                                                <li><span>Hard Cap : </span> 	$95,003</li>
                                                <li><span>Swap Rate : </span> 	1 SMG = $0.060002</li>
                                                <li><span>Start/end : </span> 	26 Mar, 11:00 am –29 Mar, 16:00 pm UTC</li>
                                                {/* <li><span>Registration : </span> 	Apr 11, 11:00 UTC –Apr 13, 08:00 UTC</li> */}
                                                <li><span>FCFS Opens : </span> 26 Mar, 11:00 am UTC</li>
                                                <li><span>Base Allocation : </span> 1x = $180.00</li>
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
                                                    8,266,667 SMG, market cap $496,019
                                                </li>
                                                <li>
                                                    <span>Total Supply:</span>
                                                    600,000,000 SMG
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
                                                <li><span>Distribution : </span> 	Claimed on TrustPad</li>
                                                <li><span>Vesting : </span> 	20% at TGE, then 2 months linear vesting</li>
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