import Link from 'next/link';

const ExploreList = () => {

    const data = [
        {
            id: 1,
            title: "War Of Fury",
            img: "card1.png",
            avatar: "a1.png",
            description: "War of Fury is a battle arena game built on Unity with rich 3D visuals and numerous addictive single & multiplayer gameplay modes. It has a 1-token deflationary in-game economy where FURY is at the centre of the game with lots of utility & ever increasing demand.",
            link: "/explore-details1"
        },
        {
            id: 2,
            title: "Record of Ragnarok",
            img: "card2.png",
            avatar: "a2.png",
            description: "Every 1000 years, the Gods' Council assemble to decide the fate of humanity. After 7 million years of human history, the gods come to the decision that humans are irredeemable and must be extinct.",
            link: "/explore-details2"
        },
        {
            id: 2,
            title: "Mark",
            img: "3.jpg",
            avatar: "3.jpg",
            description: "War of Fury is a battle arena game built on Unity with rich 3D visuals and numerous addictive single & multiplayer gameplay modes. It has a 1-token deflationary in-game economy where FURY is at the centre of the game with lots of utility & ever increasing demand.",
            link: "/explore-details3"
        },
        {
            id: 2,
            title: "Mark",
            img: "3.jpg",
            avatar: "3.jpg",
            description: "War of Fury is a battle arena game built on Unity with rich 3D visuals and numerous addictive single & multiplayer gameplay modes. It has a 1-token deflationary in-game economy where FURY is at the centre of the game with lots of utility & ever increasing demand.",
            link: "/explore-details4"
        },
    ];

    return (
        <>
            {data.map((item, i) => (

                <div className="col-xl-3 col-md-6" key={i}>
                    <div className="card explore-list">
                        <div className="explore-list-banner">
                            <img
                                src={`/launchpad-template/images/items/${item.img}`}
                                alt=""
                                width={150}
                                className="card-img-top"
                            />
                        </div>


                        <div className="card-body">

                            <div className="explore-list-profile">
                                <img src={`/launchpad-template/images/avatar/${item.avatar}`} alt="" />
                                <h4 className="card-title">
                                    {item.title}
                                </h4>
                                <span>$RETH</span>
                                <div className="game-social">

                                    <Link href="#">
                                        <a><i className="bi bi-facebook"></i></a>
                                    </Link>
                                    <Link href="#">
                                        <a><i className="bi bi-twwitter"></i></a>
                                    </Link>
                                    <Link href="#">
                                        <a><i className="bi bi-telegram"></i></a>
                                    </Link>
                                </div>
                            </div>


                            <p>
                                {item.description.substring(0,100)} ...
                            </p>
                            <div className="d-flex justify-content-between align-items-center">

                                <span>Total raise</span>
                                <h5> 300,000 </h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <span>Starts</span>
                                <h5> April 7, 11:00 UTC</h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <span>Price</span>
                                <h5> 1 RETH = 0.01 BUSD</h5>
                            </div>

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
                                    <span>0 / 568742648.35 RETH</span>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <div>
                                    <span>1x(approx)=</span>
                                    <h6>$33.17</h6>
                                </div>
                                <div className='text-end'>
                                    <span>Listing Time</span>
                                    <h6>April 15, 2022 11:00 UTC</h6>
                                </div>
                            </div>
                            <hr />
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

export default ExploreList;