import { useEffect } from 'react';
import '../styles/elements/burger.scss';
import '../styles/components/navigations.scss';

const Burger = () => {
  useEffect(() => {
    const hamb = document.querySelector('#hamb');
    const popup = document.querySelector('#popup');
    hamb.addEventListener('click', open);
    popup.addEventListener('click', open);
    return () => {
      hamb.removeEventListener('click', open);
      popup.removeEventListener('click', open);
    };
  });

  const open = (e) => {
    const popup = document.querySelector('#popup');
    const hamb = document.querySelector('#hamb');
    popup.classList.toggle('open');
    hamb.classList.toggle('open');
  };

  return (
    <>
      <div className="hamb">
        <div className="hamb__field" id="hamb">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className="popup" id="popup">
        <div className="menu__link">
          <div className="link-block">
            <a href="#sec-1" className="link">
              Home
            </a>
          </div>
          <div className="link-block">
            <a href="#sec-2" className="link">
              Aboute Us
            </a>
          </div>
          <div className="link-block">
            <a href="#sec-3" className="link">
              Our Menu
            </a>
          </div>
          <div className="link-block">
            <a href="#sec-4" className="link">
              Pages
            </a>
          </div>
          <div className="link-block">
            <a href="#sec-5" className="link">
              Blog
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Burger;
