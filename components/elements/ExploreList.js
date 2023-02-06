import Link from 'next/link';

const ExploreList = () => {

    const data = [
        {
            id: 1,
            title: "War Of Fury",
            img: "card1.png",
            avatar: "a1.png",
            description: "War of Fury is a battle arena game built on Unity with rich 3D visuals and numerous addictive single & multiplayer gameplay modes. It has a 1-token deflationary in-game economy where FURY is at the centre of the game with lots of utility & ever increasing demand.",
            link: "/explore-details1",
            price: "1 MNFT = 0.01 BUSD",
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
            id: 3,
            title: "CODYFIGHT",
            img: "c3.png",
            avatar: "a3.png",
            description: "CODYFIGHT is a series written and illustrated by Tite Kubo. It follows the adventures of a teenager Ichigo Kurosaki, who inherits his parents' destiny after he obtains the powers of a Soul Reaper—a death personification similar to the Grim Reaper—from another Soul Reaper, Rukia Kuchiki. His new-found powers allow him to take on the duties of defending humans from evil spirits and guiding departed souls to the afterlife, and set him on journeys to various ghostly realms of existence.",
            link: "/explore-details3",
            price: "1 CDF = 0.03 BUDC",
            date: "June 8, 09:00 UTC",
            raise: "36,000"
        },
        {
            id: 4,
            title: "MoBox",
            img: "c4.png",
            avatar: "a4.jpg",
            description: "The story follows Asta and Yuno as they crawl their way up the ladder of the Cloverer Kingdom's Order of the Magic Knights, in the midst of scrutiny by the nobles, to become the Wizard King. However, the title is only preserved for a single mage.",
            link: "/explore-details4",
            price: "1 USTD = 0.01 BUSD",
            date: "May 10, 10:00 UTC",
            raise: "52,000"
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
                                <span>$BUSD</span>
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
                                {item.description.length > 90 ? item.description.substring(0,90)+'...' :item.description }
                            </p>
                            <div className="d-flex justify-content-between align-items-center">

                                <span>Total raise</span>
                                <h5> {item.raise} </h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <span>Starts</span>
                                <h5>{item.date}</h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <span>Price</span>
                                <h5> {item.price}</h5>
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