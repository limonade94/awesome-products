import React, { useContext } from "react";
import { DataContext } from "../context/context";
import Overlay from "../components/overlay/Overlay";

import {
  AboutContainer,
  LeftImage
} from "../components/about_components/About_Styles";

import {
  AboutHero,
  AboutFilter
} from "../components/home_components/HeroComponentStyles";

import TitleComponent from "../components/about_components/AboutComponents";

export default function About_Pages() {
  const [, , menuToggles] = useContext(DataContext);
  const bg_url =
    "url(../../resources/page-images/images/aboutBcg.jpeg) center/cover no-repeat;";

  const openOverlay = _ => {
    menuToggles.overlay.set(true);
  };

  return (
    <div className="about">
      <AboutHero bg={bg_url}>
        <AboutFilter />
      </AboutHero>
      <AboutContainer>
        <div className="about-left">
          <LeftImage bg={bg_url} />
        </div>
        <div className="about-right">
          <TitleComponent title="The Store" />
          <div className="about-text">
            <p>
              Lorem ipsum ed cautela nimia in peiores haeserat plagas, ut
              narrabimus postea, aemulis consarcinantibus insidias graves apud
            </p>
            <p>
              Lorem ipsum ed cautela nimia in peiores haeserat plagas, ut
              narrabimus postea.
            </p>
          </div>
          <div className="about-button">
            <div className="primary-button-container">
              <a
                href="#"
                className="primary-button more-info"
                onClick={openOverlay}
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      </AboutContainer>
      <Overlay />
    </div>
  );
}
