import Link from "next/link";
import LayoutFront from "../components/layout/LayoutFront";

const ProjectDetails = () => {

    return (
        <>
        
            <LayoutFront
                pageClass={"front"}
                headTitle={"Record of Ragnarok"}
                pageTitle={"Record of Ragnarok"}
                pageTitleSub={"Welcome toRecord of Ragnarok Page"}
                parent={"Home"}
                child={"Explore Details"}
            >
                <div className="explore-details section-padding">
                    <div className="container">
                        <div className="row justify-content-between">

                            <div className="col-xl-4">
                                <div className="explore-details-head">
                                    <h2>Record of Ragnarok</h2>
                                    <h6>RETH / SSDC</h6>

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
                                            <h5>1 SSDC = 21.9335 RETH</h5>
                                            <h6>1 RETH = 0.10 SSDC</h6>

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
                                                    <span>0 SSDC</span>
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
                                        <img src="/launchpad-template/images/items/c2.png" className="img-fluid w-100 card-img-top" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <div className="explore-details-about">
                                        <p>The Gods' Council assembles once every millennium to decide the fate of humanity, deciding that mankind’s 7 million years of irredeemable history gives justification for their extinction. But the valkyrie Brunhilde proposes giving humanity one last chance to prove their worth and the gods agree to hold the tournament of Ragnarok, where humanity will be spared if they can best the gods in seven out of thirteen matches. Humanity’s representatives are the Einherjar, notable humans across history who are each granted a valkyrie who becomes a powerful weapon tailored for their user's combat style called "Volund", at the risk of losing her life if the user is killed.</p>
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
                                                <li><span>Swap Rate : </span> 	1 RETH = $0.03 | {Math.random()} RETH per 1 SSDC</li>
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
                                                    SSDC {Math.floor(Math.random() * 1000000)}
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