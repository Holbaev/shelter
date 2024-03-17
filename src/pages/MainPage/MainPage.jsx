import React, { useRef, useState } from "react";
import "./MainPage.scss";
import mainDog from "../../shared/assets/img/main.png";
import aboutPng from "../../shared/assets/img/about-pets.png";
import donation_dog from "../../shared/assets/img/donation-dog.png";
import donation_dog_2 from "../../shared/assets/img/donation-dog (2).png";
import footer_dog from "../../shared/assets/img/footer-puppy.png";
import icon1 from "../../shared/assets/icons/icon-1.png";
import icon2 from "../../shared/assets/icons/icon-2.png";
import icon3 from "../../shared/assets/icons/icon-3.png";
import icon4 from "../../shared/assets/icons/icon-4.png";
import icon5 from "../../shared/assets/icons/icon-5.png";
import icon6 from "../../shared/assets/icons/icon-6.png";
import icon7 from "../../shared/assets/icons/icon-7.png";
import icon8 from "../../shared/assets/icons/icon-8.png";
import { NavLink, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useClickAway } from "use-click-away";
import { SliderCompnent } from "../../shared/Slider/SliderCompnent";
import PetList from "../../widgets/PetList/PetList";
import cards from "../../shared/data/data";
import Button from "../../shared/Button/Button";
import PetCard from "../../entites/PetCard/PetCard";

const MainPage = () => {
  // states
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

  //funtions
  useClickAway(ref, () => setIsOpen(false));
  const scrollToAnchor = (anchorId) => {
    const element = document.getElementById(anchorId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="header_main">
            <div className="header-top">
              <div className="header-logo">
                <h1 className="header-logo-title_main">Cozy House</h1>
                <p className="header-logo-text_main">
                  Shelter for pets in Boston
                </p>
              </div>
              <div className="header-menu" ref={ref}>
                <nav>
                  <ul className={`menu-list ${isOpen ? "active" : ''}`}>
                    <NavLink className="menu-item_main" to="/">
                      <p
                        data-go=".about-page"
                        className="menu-link_main"
                      >
                        About the shelter
                      </p>
                    </NavLink>
                    <NavLink className="menu-item_main" to="/pets/">
                      <p className="menu-link_main">
                        Our pets
                      </p>
                    </NavLink>
                    <li className="menu-item_main">
                      <p
                        data-go=".donation-page"
                        className="menu-link_main"
                        onClick={() => scrollToAnchor('help')}

                      >
                        Help the shelter
                      </p>
                    </li>
                    <li className="menu-item_main">
                      <p
                        data-go=".contacts-page"
                        className="menu-link_main"
                        onClick={() => scrollToAnchor('contact_t')}
                      >
                        Contact
                      </p>
                    </li>
                  </ul>
                </nav>
                <div className="menu-button">
                  <Hamburger
                    toggled={isOpen}
                    size={30}
                    toggle={setIsOpen}
                    color="#f1cdb3"
                    padding={0}
                  />
                </div>
              </div>
            </div>
            <div className="header-conteiner">
              <div className="header-content">
                <h1 className="header-content-title">
                  Not only people <br /> need a house
                </h1>
                <p className="header-content-text">
                  We offer to give a chance to a little and nice puppy with an
                  extremely <br /> wide and open heart. He or she will love you
                  more than anybody else <br /> in the world, you will see!
                </p>
                <button className="header-content-button">Make a friend</button>
              </div>
              <div className="header-img">
                <img className="header-img-image" src={mainDog} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="wrapper">
          <div className="about about-page">
            <div className="about-img">
              <img src={aboutPng} alt="" className="about-img-image" />
            </div>
            <div className="about-content">
              <h1 className="about-content-title">
                About the shelter “Cozy House”
              </h1>
              <p className="about-content-text">
                Currently we have 121 dogs and 342 cats on our hands and
                statistics show that only 20% of them will find a family. The
                others will continue to live with us and will be waiting for a
                lucky chance to become dearly loved.
              </p>
              <p className="about-content-text">
                We feed our wards with the best food and make sure that they do
                not get sick, feel comfortable (including psychologically) and
                well. We are supported by 87 volunteers and 28 employees of
                various skill levels. About 12% of the animals are taken by the
                shelter staff. Taking care of the animals, they become attached
                to the pets and would hardly ever leave them alone.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <div className="pets">
            <h1 className="pets-title">
              Our friends who <br />
              are looking for a house
            </h1>
            <div className="slider">
            <SliderCompnent>
            {cards?.map((card) =>(
            <PetCard pet={card} key={card?.id}/>
            ))}
            </SliderCompnent>
            </div>
            <div className="pets-button" onClick={() => navigate(`/pets/`)}>
              <p className="pets-button-btn">
                Get to know the rest
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="help">
        <div className="wrapper">
          <div className="donation donation-page">
            <h1 className="donation-title">
              How you can help <br />
              our shelter
            </h1>
            <div className="donation-grid">
              <div className="donation-card">
                <img className="donation-card-img" src={icon8} alt="" />
                <p className="donation-card-text">Pet food</p>
              </div>
              <div className="donation-card">
                <img className="donation-card-img" src={icon5} alt="" />
                <p className="donation-card-text">Transportation</p>
              </div>{" "}
              <div className="donation-card">
                <img className="donation-card-img" src={icon4} alt="" />
                <p className="donation-card-text">Toys</p>
              </div>
              <div className="donation-card">
                <img className="donation-card-img" src={icon4} alt="" />
                <p className="donation-card-text">Bowls and cups</p>
              </div>
              <div className="donation-card">
                <img className="donation-card-img" src={icon3} alt="" />
                <p className="donation-card-text">Shampoos</p>
              </div>
              <div className="donation-card">
                <img className="donation-card-img" src={icon6} alt="" />
                <p className="donation-card-text">Vitamins</p>
              </div>
              <div className="donation-card">
                <img className="donation-card-img" src={icon2} alt="" />
                <p className="donation-card-text">Medicines</p>
              </div>
              <div className="donation-card">
                <img className="donation-card-img" src={icon7} alt="" />
                <p className="donation-card-text">Sleeping areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact_t">
        <div className="wrapper">
          <div className="contacts contacts-page">
            <div className="contacts-flex">
              <div className="contacts-img">
                <picture>
                  <source media="(max-width: 6000px)" srcSet={donation_dog_2} />
                  <img
                    className="contacts-img-image"
                    src={donation_dog}
                    alt=""
                  />
                </picture>
              </div>
              <div className="contacts-content">
                <h2 className="contacts-content-title">
                  You can also <br /> make a donation
                </h2>
                <p className="contacts-content-anounce">
                  Name of the bank / Type of bank account
                </p>
                <p className="contacts-content-link-wrapper">
                  <a href="#" className="contacts-content-link">
                    8380 2880 8028 8791 7435
                  </a>
                </p>
                <p className="contacts-content-text">
                  Legal information and lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Maecenas a ipsum at libero sagittis dignissim
                  sed ac diam. Praesent ultrices maximus tortor et vulputate.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="moadal-windows">
          <div className="modal-window">
            <div className="modal-window__body">
              <div className="modal-window__card"></div>
              <button className="close-modal">
                <img src="../icons/close-modal.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="wrapper">
          <div className="footer">
            <div className="footer-flex">
              <div className="footer-contacts">
                <h3 className="footer-contacts-title">
                  For questions and suggestions
                </h3>
                <p>
                  <a
                    href="#"
                    className="footer-contacts-link footer-contacts-link-1"
                  >
                    email@shelter.com
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="footer-contacts-link footer-contacts-link-2"
                  >
                    +13 674 567 75 54
                  </a>
                </p>
              </div>
              <div className="footer-location">
                <h3 className="footer-location-title">
                  We are waiting for your visit
                </h3>
                <p>
                  <a
                    href="#"
                    className="footer-location-link footer-location-link-1"
                  >
                    1 Central Street, Boston <br /> (entrance from the store)
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="footer-location-link footer-location-link-2"
                  >
                    18 South Park, London{" "}
                  </a>
                </p>
              </div>
              <div className="footer-img">
                <img src={footer_dog} alt="" className="footer-img-image" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainPage;
