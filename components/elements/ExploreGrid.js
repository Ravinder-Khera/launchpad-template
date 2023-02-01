import React from 'react';
import  Link  from 'next/link';

const ExploreGrid = () => {

    const data = [
        {
            id: 1,
            title: "War Of Fury",
            img: "card1.png",
            avatar: "a1.png",
            description: "War of Fury is a battle arena game built on Unity with rich 3D visuals and numerous addictive single & multiplayer gameplay modes. It has a 1-token deflationary in-game economy where FURY is at the centre of the game with lots of utility & ever increasing demand.",
            link: "/explore-details1",
            price: "1 RETH = 0.01 BUSD",
            date: "April 7, 11:00 UTC",
            raise: "25,000"
        },
        {
            id: 2,
            title: "Record of Ragnarok",
            img: "card2.png",
            avatar: "a2.png",
            description: "Every 1000 years, the Gods' Council assemble to decide the fate of humanity. After 7 million years of human history, the gods come to the decision that humans are irredeemable and must be extinct.",
            link: "/explore-details2",
            price: "1 BNB = 0.2 SSDC",
            date: "Feb 21, 07:00 UTC",
            raise: "49,000"
        },
        {
            id: 2,
            title: "CODYFIGHT",
            img: "c3.png",
            avatar: "a3.png",
            description: "CODYFIGHT is a series written and illustrated by Tite Kubo. It follows the adventures of a teenager Ichigo Kurosaki, who inherits his parents' destiny after he obtains the powers of a Soul Reaper—a death personification similar to the Grim Reaper—from another Soul Reaper, Rukia Kuchiki. His new-found powers allow him to take on the duties of defending humans from evil spirits and guiding departed souls to the afterlife, and set him on journeys to various ghostly realms of existence.",
            link: "/explore-details3",
            price: "1 RETH = 0.03 BUDC",
            date: "June 8, 09:00 UTC",
            raise: "36,000"
        },
        {
            id: 2,
            title: "MoBox",
            img: "c4.png",
            avatar: "a4.webp",
            description: "The story follows Asta and Yuno as they crawl their way up the ladder of the Clover Kingdom's Order of the Magic Knights, in the midst of scrutiny by the nobles, to become the Wizard King. However, the title is only preserved for a single mage.",
            link: "/explore-details4",
            price: "1 USTD = 0.01 BUSD",
            date: "May 10, 10:00 UTC",
            raise: "52,000"
        },
    ];

    return (
        <>
            {data.map((item, i) => (

                <div className="col-xl-6" key={i}>
                    <div className="explore-grid">
                        <div className="igo-status">
                            TBA
                        </div>
                        <div className="explore-grid-content">
                            <img src={`/launchpad-template/images/items/${item.img}`} alt="" className="me-4" />
                            <div className="game-desc">
                                <h4>{item.title}</h4>
                                <p>{item.description.substring(0,100)} ...</p>
                                <div className="game-social">

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
                        <div className="row">
                            <div className="col-md-4">
                                <div className='game-info'>Total raise:<span>{Math.floor(Math.random() * 100)}k</span></div>
                            </div>
                            <div className="col-md-4">
                                <div className='game-info'>Market Cap:<span>{Math.floor(Math.random() * 100)}k</span></div>
                            </div>
                            <div className="col-md-4">
                                <div className='game-info'>Token Supply:<span>{Math.floor(Math.random() * 1000)}M</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ExploreGrid;