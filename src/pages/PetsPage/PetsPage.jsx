import React, { useRef, useState } from 'react'
import './PetsPage.scss'
import { NavLink } from 'react-router-dom'
import footer_dog from '../../shared/assets/img/footer-puppy.png'
import PetList from '../../widgets/PetList/PetList'
import Hamburger from "hamburger-react";
import { useClickAway } from "use-click-away";

const PetsPage = () => {
     // states
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  //funtions
  useClickAway(ref, () => setIsOpen(false));
  return (
    <>
     <header>
        <div className="wrapper">
            <div className="header">
                <div className="header-flex">
                    <div className="header-logo">
                        <h1 className="header-logo-title">Cozy House</h1>
                        <p className="header-logo-text">Shelter for pets in Boston</p>
                    </div>
                    <div className="header-menu" ref={ref}>
                        <nav>
                        <ul className={`menu-list ${isOpen ? "active" : ''}`}>
                                <NavLink className="menu-item" to="/"><a className="menu-link" href="#">About the shelter</a></NavLink>
                                <NavLink className="menu-item" to="/pets/"><a className="menu-link" href="#">Our pets</a></NavLink>
                            </ul>
                        </nav>
                        <div className="menu-button">
                        <Hamburger
                    toggled={isOpen}
                    size={30}
                    toggle={setIsOpen}
                    color="black"
                    padding={0}
                  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main>
        <div className="wrapper">
            <div className="shelter">
                <h1 className="shelter-title">
                    Our friends who <br/>
                    are looking for a house
                </h1>
                <PetList/>
                <div className="shelter-pagination">
                    <img className="shelter-pagination-img" src="../icons/shelter-right.png" alt=""/>
                    <img className="shelter-pagination-img" src="../icons/shelter-db-right.png" alt=""/>
                    <img className="shelter-pagination-img" src="../icons/first.png" alt=""/>
                    <img className="shelter-pagination-img" src="../icons/shelter-left.png" alt=""/>
                    <img className="shelter-pagination-img" src="../icons/shelter-db-left.png" alt=""/>
                </div>
            </div>
        </div>
    </main>
    <section>
        <div className="moadal-windows">
            <div className="modal-window">
                <div className="modal-window__body">
                    <div className="modal-window__card">
                    </div>
                    <button className="close-modal"><img src="../icons/close-modal.png" alt=""/></button>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div className="wrapper">
            <div className="footer">
                <div className="footer-flex">
                    <div className="footer-contacts">
                        <h3 className="footer-contacts-title">For questions and suggestions</h3>
                        <p><a href="#" className="footer-contacts-link footer-contacts-link-1">email@shelter.com</a></p>
                        <p><a href="#" className="footer-contacts-link footer-contacts-link-2">+13 674 567 75 54</a></p>
                    </div>
                    <div className="footer-location">
                        <h3 className="footer-location-title">We are waiting <br/> for your visit</h3>
                        <p><a href="#" className="footer-location-link footer-location-link-1">1 Central Street, Boston <br/> (entrance from the store)</a></p>
                        <p><a href="#" className="footer-location-link footer-location-link-2">18 South Park, London </a></p>
                    </div>
                    <div className="footer-img">
                        <img src={footer_dog} alt="" className="footer-img-image"/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default PetsPage