import React from 'react';
import Link from 'next/link';

const CompleteList = () => {

    const data = [
        {
            id: 1,
            title: "Jungle Road",
            img: "cc1.jpg",
            description: "Here at Jungle Road, players can explore wild landscapes with their very own unique, strong, and diverse animal gods. Each character comes from a different origin and is on a quest to reach Nirvana. In these maps, you will come across rivers and lands of all sorts, filled with wild animal attacks and many obstacles to overcome. This journey will not be easy nor safe. This blockchain game will take you back to the good old days of when you were a kid and would escape your daily life chores and just have fun. But now with NFTs, we are able to do this and also earn as we play.",
            currency: "BUSD/JGRD",
            tokenPrice: "0.046",
            raise: "47,500",
            link: "/explore-details1-comp"
        },
        {
            id: 2,
            title: "Jungle Road",
            img: "cc1.jpg",
            description: "Here at Jungle Road, players can explore wild landscapes with their very own unique, strong, and diverse animal gods. Each character comes from a different origin and is on a quest to reach Nirvana. In these maps, you will come across rivers and lands of all sorts, filled with wild animal attacks and many obstacles to overcome. This journey will not be easy nor safe. This blockchain game will take you back to the good old days of when you were a kid and would escape your daily life chores and just have fun. But now with NFTs, we are able to do this and also earn as we play.",
            currency: "BUSD/JGRD",
            tokenPrice: "0.046",
            raise: "47,500",
            link: "/explore-details1-comp"
        },
        {
            id: 2,
            title: "Jungle Road",
            img: "cc1.jpg",
            description: "Here at Jungle Road, players can explore wild landscapes with their very own unique, strong, and diverse animal gods. Each character comes from a different origin and is on a quest to reach Nirvana. In these maps, you will come across rivers and lands of all sorts, filled with wild animal attacks and many obstacles to overcome. This journey will not be easy nor safe. This blockchain game will take you back to the good old days of when you were a kid and would escape your daily life chores and just have fun. But now with NFTs, we are able to do this and also earn as we play.",
            currency: "BUSD/JGRD",
            tokenPrice: "0.046",
            raise: "47,500",
            link: "/explore-details1-comp"
        },
        {
            id: 2,
            title: "Jungle Road",
            img: "cc1.jpg",
            description: "Here at Jungle Road, players can explore wild landscapes with their very own unique, strong, and diverse animal gods. Each character comes from a different origin and is on a quest to reach Nirvana. In these maps, you will come across rivers and lands of all sorts, filled with wild animal attacks and many obstacles to overcome. This journey will not be easy nor safe. This blockchain game will take you back to the good old days of when you were a kid and would escape your daily life chores and just have fun. But now with NFTs, we are able to do this and also earn as we play.",
            currency: "BUSD/JGRD",
            tokenPrice: "0.046",
            raise: "47,500",
            link: "/explore-details1-comp"
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
                                    <span>Targeted raise</span>
                                    <h5> BUSD</h5>
                                </div>
                                <div>
                                    <h5> {item.raise} </h5>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-end">
                                <div>
                                    <span>Token price</span>
                                    <h5> BUSD</h5>
                                </div>
                                <div>
                                    <h5> {item.tokenPrice} </h5>
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