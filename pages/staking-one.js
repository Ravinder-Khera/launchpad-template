import Link from "next/link";
import { useState } from "react";
import LayoutFront from "../components/layout/LayoutFront";
const Staking2 = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    const data = [
        {
            id: 1,
            title: "Jungle Road",
            img: "cc1.jpg",
            description: "Here at Jungle Road, players can explore wild landscapes with their very own unique, strong, and diverse animal gods. Each character comes from a different origin and is on a quest to reach Nirvana. In these maps, you will come across rivers and lands of all sorts, filled with wild animal attacks and many obstacles to overcome. This journey will not be easy nor safe. This blockchain game will take you back to the good old days of when you were a kid and would escape your daily life chores and just have fun. But now with NFTs, we are able to do this and also earn as we play.",
            start: "19 Mar,11:00 UTC",
            price: "1 JGRD = 0.9 BUSD",
            currency: "BUSD/JGRD",
            link: "/explore-details1-comp",
            rewards: +Math.floor(Math.random() *10)+".16"
        },
        {
            id: 2,
            title: "Nomad Exiles",
            img: "cc2.jpg",
            description: "Nomad Exiles is an addictive crypto RPG with integrated NFT and free to play mechanics! The project is based on an existing mobile game, Exile Survival, which has millions of installations worldwide and 200,000 monthly active players with a rating of 4.7. The game is being developed by a team whose members have been working on such projects as Age of Magic, Mighty Party, Dragon Age: Inquisition, Star Wars: The Old Republic, and Dragons World.",
            start: "28 Mar,11:00 UTC",
            price: "1 PRIDE = 0.1 BUSD",
            currency: "BUSD/PIDE",
            link: "/explore-details2-comp",
        },
        {
            id: 3,
            title: "Samurai Legends",
            img: "cc3.png",
            description: "Samurai Legends is a GameFi metaverse set in feudal Japan. Rule digital patches of land, build, battle and earn riches in your quest to become shogun of the metaverse! A combination of NFTs, play-to-earn mechanics and samurai aesthetics make Samurai Legends one of the most standout gaming experiences on Binance Smart Chain.",
            start: "26 May,11:00 UTC",
            price: "1 SMG = 0.060002 BUSD",
            currency: "BUSD/SMG",
            link: "/explore-details3-comp",
            rewards: "2."+Math.floor(Math.random() *100)
        },
        {
            id: 4,
            title: "Metan Evolution",
            img: "cc4.jpg",
            description: "Metan Evolution is a game application platform on the Blockchain network. The game has NFT items with different and unique characteristics, features and rarity. Rewards in-game are organized according to GameFi architecture, allowing players to collect more NFT items and increase their values over time.",
            currency: "BUSD/METAN",
            start: "26 Feb,18:45 UTC",
            price: "1 METAN = 0.150015 BUSD",
            link: "/explore-details4-comp",
            rewards: "1."+Math.floor(Math.random() *100)
        },
    ];
    
    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Staking"}
                pageTitle={"Staking"}
                pageTitleSub={"Welcome Staking Page"}
                parent={"Home"}
                child={"Staking"}>
                <div className="Staking section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="section-title text-start">
                                    <h2>Staking</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                {data.map((item, i) => (
                                    <div className="card" key={i}>
                                        <div className="Staking-content card-body">
                                            <div className="Staking-toggle" onClick={() => handleOnClick(item.id)}>
                                                <i className={activeIndex === item.id ? "bi bi-chevron-down" : "bi bi-chevron-right"}></i>
                                            </div>
                                            <div className="Staking-img">
                                                <img src={`/launchpad-template/images/items/${item.img}`} alt="" width={150} className="me-4" />
                                                <div className="Staking-desc">
                                                    <h4>{item.title} LP Staking</h4>
                                                    <span>GAME-{item.currency}</span>
                                                    <p>Stake GAME LP tokens to participate in IDOs. Details on <Link href="#">
                                                        <a>GAME Levels page</a>
                                                    </Link></p>

                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="stack-info">
                                                                <h5>0 LP</h5>
                                                                <p>Staked</p>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="stack-info">
                                                                <h5 className="mb-0">0.00 GAME</h5>
                                                                <p>Earned</p>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="stack-info">
                                                                <h5>{Math.floor(Math.random() *100)}%</h5>
                                                                <p>APR</p>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="stack-info">
                                                                <h5>${Math.floor(50 + Math.random() *(300 - 50 + 1))},{Math.floor(Math.random() *1000)}.{Math.floor(Math.random() *100)}</h5>
                                                                <p>LP Price</p>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="stack-info">
                                                                <h5>${Math.floor(50 + Math.random() *(300 - 50 + 1))},{Math.floor(Math.random() *1000)}.{Math.floor(Math.random() *100)}</h5>
                                                                <p>Total Value Locked</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className={activeIndex === item.id ? "d-block" : "d-none"} >
                                                <hr />
                                                <div className="row" >
                                                    <div className="col-md-4">
                                                        <form>
                                                            <label className="form-label">
                                                                Deposit
                                                            </label>
                                                            <input type="text" className="form-control mb-4 border-white" />
                                                            <button className="btn w-100">Approve</button>
                                                        </form>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <form>
                                                            <label className="form-label">
                                                                Withdraw
                                                            </label>
                                                            <input type="text" className="form-control mb-4 border-white" />
                                                            <button className="btn w-100">Withdraw</button>
                                                        </form>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <form>
                                                            <label className="form-label">
                                                                Pending rewards
                                                            </label>
                                                            <h5 className="mb-0">{item.rewards ? item.rewards : "0.00"} GAME</h5>
                                                            {item.rewards ? <small>Rewards available</small> :<small>Rewards are depleted, ask admins to fund it.</small>}
                                                            <button className="btn w-100 claim-btn">Claim</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
};

export default Staking2;