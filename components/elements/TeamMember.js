import React from 'react';
import Link from 'next/link';

const TeamMember = () => {

    const data = [
        {
            id: 1,
            title: "FOUNDER & CEO",
            img: "ralph.jpeg",
            name:"Ralph Kalsi",
        },
        {
            id: 2,
            name: "M Sexton",
            img: "mike.jpeg",
            title: "CTO | CHIEF TECHNICAL OFFICER"
        },
        {
            id: 2,
            name: "H Zappino",
            img: "harly.jpeg",
            title:"DIRECTOR & CLO"
        },
        {
            id: 2,
            name: "Davvy",
            img: "davvy.jpeg",
            title: "MANAGING DIRECTOR"
        },
    ];

    return (
        <>
            {data.map((item, i) => (

                <div className="col-lg-3 col-md-6" key={i}>
                    <div className="team-content">
                        <img src={`/launchpad-template/images/avatar/${item.img}`} alt={item.name} width={100} />
                        <h3>{item.name}</h3>
                        <p>{item.title}</p>
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