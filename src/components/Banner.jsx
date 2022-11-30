// Import
import Baner from '../../assets/images/banner.png';

// Scss
import '../styles/components/banner.scss';
import '../styles/components/navigations.scss';
import '../styles/elements/button.scss';

// Banner
const Banner = () => {
  return (
    <section className="banner" id="sec-1">
      <div className="container">
        <div className="banner__block">
          <h1 className="banner__title">Welcome to Restaurant</h1>
          <p className="banner__text">
            The people, food and the prime locations make the perfect place good
            friends & family to come together and have great time.
          </p>
          <div className="banner__button">
            <button type="button" className="button button__gold">
              <span>View Menu</span>
            </button>
          </div>
        </div>
        <div className="banner__block">
          <div className="banner__img">
            <img className="banner__image" src={Baner} alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
