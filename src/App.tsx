import React from "react";
import {
  BubblesIcon,
  DoorOpenIcon,
  LeafIcon,
  WifiIcon,
  XIcon,
} from "lucide-react";
import MyRangeCalendar from "./components/MyRangeCalendar/MyRangeCalendar";
import { Button, Dialog, DialogTrigger, Modal } from "react-aria-components";
import MyImagesDialog from "./components/MyImagesDialog/MyImagesDialog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const images = [
  { src: "barcelonaedition_oab_00003.jpg", alt: "Image 1" },
  { src: "barcelonaedition_oab_00005.jpg", alt: "Image 2" },
  { src: "barcelonaedition_oab_00006.jpg", alt: "Image 3" },
  { src: "barcelonaedition_oab_00007.jpg", alt: "Image 4" },
  { src: "barcelonaedition_oab_00002.jpg", alt: "Image 5" },
];

function App() {
  const [isOpen, setOpen] = React.useState(false);
  const [initialSlide, setInitialSlide] = React.useState(0);

  const handleImageClick = (index: number) => {
    setInitialSlide(index);
    setOpen(true);
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar__brand">
          <LeafIcon />
          <h1 className="navbar__title">Copenhagen Calm</h1>
        </div>
        <div className="navbar__buttons">
          <Button className="navbar__btn navbar__btn--login">Log in</Button>
          <Button className="navbar__btn navbar__btn--signup">Sign up</Button>
        </div>
      </div>
      <h1>Contemporary Comfort</h1>

      {/* Gallery */}
      <div className="gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery__item"
            onClick={() => handleImageClick(index)}
          >
            <img className="gallery__img" src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      <div className="gallery-mobile">
        <div onClick={() => handleImageClick(0)} className="gallery__item">
          <img src="barcelonaedition_oab_00003.jpg" alt="Image 1" />
        </div>
        <div className="gallery-mobile__pagination">1/4</div>
      </div>

      {/* Details */}
      <div className="details">
        <h2 className="details__title">
          Modern & Elegant Home in the Heart of Copenhagen
        </h2>

        <ol className="details__list">
          <li>4 guests</li>
          <li>2 bedrooms</li>
          <li>2 beds</li>
          <li>1 bath</li>
        </ol>
      </div>

      <hr />

      {/* Amenities */}
      <div className="amenities">
        <div className="amenities__item">
          <div className="amenities__icon">
            <DoorOpenIcon />
          </div>
          <div className="amenities__content">
            <h3 className="amenities__title">Self check-in</h3>
            <div className="amenities__description">
              Check yourself in with the smartlock.
            </div>
          </div>
        </div>

        <div className="amenities__item">
          <div className="amenities__icon">
            <BubblesIcon />
          </div>
          <div className="amenities__content">
            <h3 className="amenities__title">Unwind in the Hot Tub</h3>
            <div className="amenities__description">
              Relax in the private hot tub, a rare find in the area.
            </div>
          </div>
        </div>

        <div className="amenities__item">
          <div className="amenities__icon">
            <WifiIcon />
          </div>
          <div className="amenities__content">
            <h3 className="amenities__title">Free Wi-Fi</h3>
            <div className="amenities__description">
              Stay connected with high-speed internet during your stay.
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* Description */}
      <div className="description">
        <p>
          Experience modern elegance in this stylish home, perfect for a relaxed
          getaway. Located in a tranquil area, this spacious 2-bedroom,
          1-bathroom apartment offers a seamless blend of comfort and luxury.
        </p>
        <p>
          Enjoy the convenience of self check-in with the smart lock, unwind in
          your own private hot tub, and stay connected with high-speed Wi-Fi
          throughout your stay. Whether you're here for a few days or longer,
          this home provides the perfect space to explore Copenhagen’s vibrant
          culture while enjoying a peaceful retreat.
        </p>
      </div>

      <hr />

      {/* Dates */}
      <div className="dates">
        <MyRangeCalendar
          aria-label="Trip dates"
          visibleDuration={{ months: 2 }}
        />
      </div>

      {/* Reserve */}
      <div className="reserve">
        <div>
          <div className="reserve__price">
            <strong>€190</strong> per night
          </div>
          <div className="reserve__dates">Feb 01, 2020 - Feb 13, 2020</div>
        </div>
        <button className="btn primary-btn">Reserve</button>
      </div>

      <DialogTrigger>
        <Modal isOpen={isOpen} onOpenChange={setOpen}>
          <Dialog className="gallery-dialog">
            <Button
              className="gallery-dialog__close-btn"
              onPress={() => setOpen(false)}
            >
              <XIcon />
            </Button>
            <div className="gallery-dialog__swipper-wrapper">
              <Swiper
                pagination={{
                  type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                initialSlide={initialSlide}
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={img.src} alt={img.alt} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Dialog>
        </Modal>
      </DialogTrigger>
    </div>
  );
}

export default App;
