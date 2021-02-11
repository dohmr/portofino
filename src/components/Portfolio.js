import React from 'react'
import gkLand from "../images/gk-land.png";
import gkSearch from "../images/gk-games.png";
import ogPortfolio from "../images/og-portfolio.png";
import up2u from "../images/up2u.png";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

  //KIWI POPUP
  const openPopKiwi = () => {
    const content = (
      <>
        <img className="portfolio-image-pop" src={gkLand} alt="Game Kiwi App..." />
        <p>Game Kiwi
  </p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Gerardo-S/bluetooth-coffee-cup")}>https://github.com/Gerardo-S/bluetooth-coffee-cup</a>
      </>
    )
    PopupboxManager.open({ content });
  }
  const popupKiwiConfig = {
    titleBar: {
      enable: true,
      text: "Finished project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  };
  //UP2U POPUP
  const openPopJob = () => {
    const content = (
      <>
        <img className="portfolio-image-pop" src={up2u} alt="Up2U Job Search App..." />
        <p>Up2U
  </p>
        <b>MVP:</b> <a className="hyper-link" onClick={() => window.open("https://dohmr.github.io/up2U/", "_blank")}>https://dohmr.github.io/up2U/</a><br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/dohmr/up2U")}>https://github.com/dohmr/up2U</a>
      </>
    )
    PopupboxManager.open({ content });
  }
  const popupJobConfig = {
    titleBar: {
      enable: true,
      text: "Finished project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  };
  //Portfolio POPUP
  const openPopOG = () => {
    const content = (
      <>
        <img className="portfolio-image-pop" src={ogPortfolio} alt="HTML/CSS portfolio..." />
        <p>HTML/CSS portfolio page
      </p>
        <b>MVP:</b> <a className="hyper-link" onClick={() => window.open("https://dohmr.github.io/Entry_Level/", "_blank")}>https://dohmr.github.io/Entry_Level/</a><br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/dohmr/Entry_Level")}>https://github.com/dohmr/Entry_Level</a>
      </>
    )
    PopupboxManager.open({ content });
  }
  const popupOGConfig = {
    titleBar: {
      enable: true,
      text: "Finished project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  };
  //Portfolio POPUP
  const openPopOG2 = () => {
    const content = (
      <>
        <img className="portfolio-image-pop" src={ogPortfolio} alt="HTML/CSS portfolio..." />
        <p>HTML/CSS portfolio page
          </p>
        <b>MVP:</b> <a className="hyper-link" onClick={() => window.open("https://dohmr.github.io/Entry_Level/", "_blank")}>https://dohmr.github.io/Entry_Level/</a><br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/dohmr/Entry_Level")}>https://github.com/dohmr/Entry_Level</a>
      </>
    )
    PopupboxManager.open({ content });
  }
  const popupTileConfig = {
    titleBar: {
      enable: true,
      text: "Finished project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  };





  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopKiwi}>
            <img className="portfolio-image" src={gkLand} alt="Game Kiwi App..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopOG}>
            <img className="portfolio-image" src={ogPortfolio} alt="Original Portfolio page..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopJob}>
            <img className="portfolio-image" src={up2u} alt="Remote WebDev Job search..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopKiwi}>
            <img className="portfolio-image" src={gkSearch} alt="Game Kiwi App..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopKiwi}>
            <img className="portfolio-image" src={gkLand} alt="Game Kiwi App..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopOG}>
            <img className="portfolio-image" src={ogPortfolio} alt="Original Portfolio page..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopJob}>
            <img className="portfolio-image" src={up2u} alt="Remote WebDev Job search..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopKiwi}>
            <img className="portfolio-image" src={gkSearch} alt="Game Kiwi App..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupKiwiConfig} />
      <PopupboxContainer {...popupJobConfig} />
      <PopupboxContainer {...popupOGConfig} />
      <PopupboxContainer {...popupKiwiConfig} />
    </div >
  )
}

export default Portfolio
