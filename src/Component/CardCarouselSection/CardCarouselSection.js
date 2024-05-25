import { Swiper, SwiperSlide } from 'swiper/react';
import rightbtn from "../../assets/rightbtn.svg"
import leftbtn from "../../assets/leftbtn.svg"
import Card from '../Card/Card';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './CardCarouselSection.module.css';

import { Pagination, Navigation } from 'swiper/modules';

const CardCarouselSection = ({ name, songsData }) => {
  return (
    <div className={styles.swiper}>
      <Swiper
        slidesPerView={10}
        spaceBetween={10}
        navigation={{
          nextEl: `#${name.split(' ').join('')}-right`,
          prevEl: `#${name.split(' ').join('')}-left`,
        }}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {songsData.map((song) => (
          <SwiperSlide key={song.id}>
            <Card
              className={styles.cardcontainer}
              image={song.image}
              text={
                song.follows !== undefined
                  ? `${song.follows} Follows`
                  : `${song.likes} Likes`
              }
              title={song.title}
              tooltipText={song.songs?.length}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
         className={`${styles.leftbtn} ${styles.sliderbtn}`}
        id={`${name.split(' ').join('')}-left`}
      >
        <img src={leftbtn} alt="Left Button" />
      </button>
      <button
       className={`${styles.rightbtn} ${styles.sliderbtn}`}
        id={`${name.split(' ').join('')}-right`}
      >
        <img src={rightbtn} alt="Right Button" />
      </button>
    </div>
  );
};

export default CardCarouselSection;