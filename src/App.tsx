import { useState } from "react";
import {
  BubblesIcon,
  DoorOpenIcon,
  LeafIcon,
  UserIcon,
  WifiIcon,
} from "lucide-react";
import MyRangeCalendar from "./components/MyRangeCalendar/MyRangeCalendar";
import { Button } from "react-aria-components";

function App() {
  const [count, setCount] = useState(0);

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

      {/* Image Grid */}
      <div className="images-grid">
        <img src="barcelonaedition_oab_00003.jpg" alt="Image 1" />
        <img src="barcelonaedition_oab_00006.jpg" alt="Image 2" />
        <img src="barcelonaedition_oab_00007.jpg" alt="Image 3" />
        {/* <img src="barcelonaedition_oab_00002.jpg" alt="Image 4" /> */}
      </div>

      <div className="details">
        <h2 className="details__title">
          Modern & Elegant Home in the Heart of Copenhagen
        </h2>

        {/* Listing Details */}
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

      <div className="dates">
        <MyRangeCalendar
          aria-label="Trip dates"
          visibleDuration={{ months: 2 }}
        />
      </div>

      {/* Price and Reserve Button */}
      <div className="reserve">
        <div>
          <div className="reserve__price">
            <strong>€190</strong> per night
          </div>
          <div className="reserve__dates">Feb 01, 2020 - Feb 13, 2020</div>
        </div>
        <button className="btn primary-btn">Reserve</button>
      </div>
    </div>
  );
}

export default App;
