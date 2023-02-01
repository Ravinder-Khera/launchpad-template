import React from 'react';
import Link from 'next/link';

const CompleteList = () => {

    const data = [
        {
            id: 1,
            title: "Jungle Road",
            img: "cc1.jpg",
            description: "Here at Jungle Road, players can explore wild landscapes with their very own unique, strong, and diverse animal gods. Each character comes from a different origin and is on a quest to reach Nirvana. In these maps, you will come across rivers and lands of all sorts, filled with wild animal attacks and many obstacles to overcome. This journey will not be easy nor safe. This blockchain game will take you back to the good old days of when you were a kid and would escape your daily life chores and just have fun. But now with NFTs, we are able to do this and also earn as we play.",
            start: "28 Mar,11:00 UTC",
            price: "1 PRIDE = 0.1 BUSD",
            currency: "BUSD/JGRD",
            link: "/explore-details1-comp"
        },
        {
            id: 2,
            title: "Nomad Exiles",
            img: "cc2.jpg",
            description: "Nomad Exiles is an addictive crypto RPG with integrated NFT and free to play mechanics! The project is based on an existing mobile game, Exile Survival, which has millions of installations worldwide and 200,000 monthly active players with a rating of 4.7. The game is being developed by a team whose members have been working on such projects as Age of Magic, Mighty Party, Dragon Age: Inquisition, Star Wars: The Old Republic, and Dragons World.",
            start: "28 Mar,11:00 UTC",
            price: "1 PRIDE = 0.1 BUSD",
            currency: "BUSD/PIDE",
            link: "/explore-details2-comp"
        },
        {
            id: 3,
            title: "Samurai Legends",
            img: "cc3.png",
            description: "Samurai Legends is a GameFi metaverse set in feudal Japan. Rule digital patches of land, build, battle and earn riches in your quest to become shogun of the metaverse! A combination of NFTs, play-to-earn mechanics and samurai aesthetics make Samurai Legends one of the most standout gaming experiences on Binance Smart Chain.",
            start: "26 Mar,11:00 UTC",
            price: "1 SMG = 0.060002 BUSD",
            currency: "BUSD/SMG",
            link: "/explore-details3-comp"
        },
        {
            id: 4,
            title: "Metan Evolution",
            img: "cc4.jpg",
            description: "Metan Evolution is a game application platform on the Blockchain network. The game has NFT items with different and unique characteristics, features and rarity. Rewards in-game are organized according to GameFi architecture, allowing players to collect more NFT items and increase their values over time.",
            currency: "BUSD/METAN",
            start: "26 Feb,18:45 UTC",
            price: "1 METAN = 0.150015 BUSD",
            link: "/explore-details4-comp"
        },
    ];

    return (
        <>
            {data.map((item, i) => (

                <div className="col-xl-3 col-md-6">
                    <div className="card explore-list ">
                        <img
                            src={`/launchpad-template/images/items/${item.img}`}
                            alt=""
                            width={150}
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h4 className="card-title">
                                {item.title}
                            </h4>
                            <p>
                                {item.description.substring(0,100)} ...
                            </p>

                            <div className="complete-progress">
                                <h5 className='mb-2'>{item.currency}</h5>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "50%" }}
                                        aria-valuenow={50}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-end">
                                <div>
                                    <span>Start</span>
                                    <h5> {item.start}</h5>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-end">
                                <div>
                                    <span> Price</span>
                                    <h5> {item.price}</h5>
                                </div>
                            </div>
                            <Link href={item.link}>
                                <a className="btn btn-primary w-100">
                                    Learn More
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CompleteList;