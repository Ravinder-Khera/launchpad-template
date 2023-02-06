import React from 'react';
import Link from 'next/link';

const TeamMember = () => {

    const data = [
        {
            id: 1,
            title: "Avy",
            img: "person.png",
        },
        {
            id: 2,
            title: "Mark",
            img: "person.png",
        },
        {
            id: 2,
            title: "Mark",
            img: "person.png",
        },
        {
            id: 2,
            title: "Mark",
            img: "person.png",
        },
    ];

    return (
        <>
            {data.map((item, i) => (

                <div className="col-lg-3 col-md-6" key={i}>
                    <div className="team-content">
                        <img src={`/launchpad-template/images/avatar/${item.img}`} alt="" width={100} />
                        <h3>John Abraham</h3>
                        <p>Cheif Executive Officer</p>
                        <div className="team-social">
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

            ))}
        </>
    );
};

export default TeamMember;