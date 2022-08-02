import { Swiper, SwiperSlide } from "swiper/react";
import RestoInfo from "../../components/restoCard/RestoInfo";
import restaurantList from "../../data/restaurantList";
import "./AdsSection.css";

export default function AdsSection() {
  const data = restaurantList.filter((item) => item.isAds === 1);
  return (
    <section className="AdsSection">
      <Swiper spaceBetween={20} slidesPerView={1.15} centeredSlides>
        {data.map((item) => (
          <SwiperSlide key={item.name}>
            <div className="ads__bgImg">
              <img alt={item.name} src={`/images/restaurant/${item.image}`} />
            </div>
            <div className="ads__restoInfo">
              <RestoInfo data={item} mode="ads" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
