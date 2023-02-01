import Link from "next/link";
import LayoutFront from "../components/layout/LayoutFront";

const ProjectDetails = () => {

    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Nomad Exiles"}
                pageTitle={"Nomad Exiles"}
                pageTitleSub={"Welcome to Nomad Exiles Page"}
                parent={"Home"}
                child={"Nomad Exiles"}
            >
                <div className="explore-details section-padding">
                    <div className="container">
                        <div className="row justify-content-between">

                            <div className="col-xl-4">
                                <div className="explore-details-head">
                                    <h2>Nomad Exiles</h2>
                                    <h6>BUSD/PRIDE</h6>

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
                                            <h5>1 BUSD = 10 PRIDE</h5>
                                            <h6>1 PRIDE = 0.1 BUSD</h6>

                                            <div className="complete-progress">
                                                <div className="d-flex justify-content-between">
                                                    <span>Finished 10 months, 9 days ago</span>
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
                                                    <span>47,500 BUSD</span>
                                                    <span>475,000 / 47,000 PRIDE</span>
                                                </div>
                                            </div>


                                            <ul>
                                                <li>IDO and distribution on BNB Chain</li>
                                                {/* <li><span>Register</span> Sale 17 Apr, 11:00 – 17 Apr, 23:00 UTC</li> */}
                                                <li> <span>Sale</span> 27 Mar, 11:00 – 28 Mar, 11:00 UTC</li>
                                                <li><span>FCFS</span> 27 Mar, 16:00 UTC</li>

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
                                        <img src="/launchpad-template/images/items/cc2.jpg" className="img-fluid w-100 card-img-top" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <div className="explore-details-about">
                                        <p>Nomad Exiles is an addictive crypto RPG with integrated NFT and free to play mechanics! The project is based on an existing mobile game, Exile Survival, which has millions of installations worldwide and 200,000 monthly active players with a rating of 4.7.
                                        The game is being developed by a team whose members have been working on such projects as Age of Magic, Mighty Party, Dragon Age: Inquisition, Star Wars: The Old Republic, and Dragons World.Nomad Exiles is an RPG with a variety of multiplayer mechanics. The project is based on the play-to-earn monetization model, which allows players to earn money in the game. The genre of the game is science fiction with elements of a medieval setting (Dune, Star Wars, etc.).</p>
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
                                                <li><span>Swap Rate : </span> 	1 PRIDE = $0.1</li>
                                                <li><span>Start/end : </span> 	27 Mar, 11:00 am –28 Mar, 11:00 am UTC</li>
                                                {/* <li><span>Registration : </span> 	Apr 11, 11:00 UTC –Apr 13, 08:00 UTC</li> */}
                                                <li><span>FCFS Opens : </span> 	27 Mar, 16:00 pm UTC</li>
                                                <li><span>Base Allocation : </span> 1x = $330</li>
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
                                                    3,697,200 PRIDE, market cap $369,720
                                                </li>
                                                <li>
                                                    <span>Total Supply:</span>
                                                    250,000,000 PRIDE 
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
                                                    10% on TGE
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
                                                <li><span>Vesting : </span> 10% on TGE and after 10% monthly from the second month</li>
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