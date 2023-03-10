import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const IntroSlider = () => {

    const data = [
        {
            img: "hb.png",
            avatar: "2.png",
            title: "The Sandbox",
            author: "Sound Box"
        },
        {
            img: "imageban1.png",
            avatar: "2.png",
            title: "The Sandbox",
            author: "Sound Box"
        },
        {
            img: "imageban2.png",
            avatar: "3.png",
            title: "The Sandbox",
            author: "Sound Box"
        },
    ];


    return (
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                // navigation={{
                //     prevEl: ".intro_prev",
                //     nextEl: ".intro_next",
                // }}
                className="custom-class"
            >
                {data.map((item, i) => (
                    <SwiperSlide>
                        <div className="slider-item" key={i}>
                            <img
                                src={`/launchpad-template/images/items/${item.img}`}
                                alt=""
                                className="img-fluid"
                            />
                            {/* <div className="slider-item-avatar">
                                <img
                                    src={`/launchpad-template/images/avatar/${item.avatar}`}
                                    alt=""
                                />
                                <div>
                                    <h5>{item.title}</h5>
                                    <p>{item.author}</p>
                                </div>
                            </div> */}
                        </div>
                    </SwiperSlide>
                ))}

                {/* <div className="arrows">
                    <span className="intro_prev">
                        <i className="bi bi-arrow-left"></i>
                    </span>
                    <span className="intro_next">
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </div> */}
            </Swiper>

    );
};

export default IntroSlider;

