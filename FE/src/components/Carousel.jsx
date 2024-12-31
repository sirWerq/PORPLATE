import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img_1 from '../../public/animelist.png';

export default function CarouselComponent() {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className='w-full h-[500px]'
        >
            <SwiperSlide>
                <img
                    src={img_1}
                    alt='Slide 1'
                    className='object-cover rounded-lg w-full h-full'
                />
            </SwiperSlide>
            <SwiperSlide>
                <iframe
                    src='https://www.youtube.com/embed/kFX4SditN_g?si=7N-KdsbRheYUNB1r'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowfullscreen
                    className='w-full h-full'
                ></iframe>
            </SwiperSlide>
        </Swiper>
    );
}
