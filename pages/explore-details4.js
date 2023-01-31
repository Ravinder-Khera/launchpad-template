import Link from "next/link";
import LayoutFront from "../components/layout/LayoutFront";

const ProjectDetails = () => {

    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"MoBox"}
                pageTitle={"MoBox"}
                pageTitleSub={"Welcome to MoBox Page"}
                parent={"Home"}
                child={"Explore Details"}
            >
                <div className="explore-details section-padding">
                    <div className="container">
                        <div className="row justify-content-between">

                            <div className="col-xl-4">
                                <div className="explore-details-head">
                                    <h2>MoBox</h2>
                                    <h6>RETH / BUSD</h6>

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
                                            <h5>1 BUSD = 35.4991 RETH</h5>
                                            <h6>1 RETH = 0.23 BUSD</h6>

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
                                                    <span>0 BUSD</span>
                                                    <span>0 / {Math.random()} RETH</span>
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
                                        <img src="/launchpad-template/images/items/c4.png" className="img-fluid w-100 card-img-top" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <div className="explore-details-about">
                                            <p>With years of experience in game development, team MOBOX will be releasing various in-house developed games for the MOBOX platform. To foster the MOBOX ecosystem and realizing the true potential of NFT interoperability, MOMO NFTs can be used across all the games with each NFT providing unique in-game uses depending on the game genre.Put your MOMO’s to the test in a casual turn-based idle game. Rob your friends and foes and collect as many tokens as possible. At the end of each season place a top the leaderboard and win MBOX token rewards.Dive into the MOMO world with this real-time casual idle thriller. Players can obtain talent points, equipment, and skill gems through various challenges and form powerful combat strategies through developing talent, equipment, and skills. Take your skills and defeat various bosses or fight against your friends to show who is the true MOBOXer.</p>
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
                                                <li><span>Swap Rate : </span> 	1 RETH = $0.03 | {Math.random()} RETH per 1 BUSD</li>
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
                                                    {Math.floor(Math.random() * 100000000)} RETH
                                                </li>
                                                <li>
                                                    <span>Total Supply:</span>
                                                    {Math.floor(Math.random() * 1000000000)} RETH
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
                                                    BUSD {Math.floor(Math.random() * 1000000)}
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