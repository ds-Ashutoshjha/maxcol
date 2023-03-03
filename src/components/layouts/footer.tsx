import * as React from "react";
import "../../index.css";
import logofooter from "../../images/logo-footer.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
import printest from "../../images/printest.svg";
import { cookieText, cookiesUrl } from "../../../sites-global/global";
import CookieConsent from "react-cookie-consent";
import { StaticData } from "../../../sites-global/staticData";
import { useEffect, useState } from "react";
import Link from "../commons/Link";

const Footer = (props: any) => {
  const { footer } = props;
  // console.log("footer", footer);
  // const [isNavVisible, setNavVisibility] =  useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // console.log("premsaini");
  // console.log(footer);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="store-locator Footer1">
            <div className="company-logo mr-4">
              <img src={footer.c_footerLogo.url} alt="logo" />
            </div>
          </div>
          <div className="store-locator Footer2">
            <div className="footer-block">
              <h2>{footer?.c_contacts?.title}</h2>
              <div className="contact-us mr-4">
                <p>{footer?.c_contacts.address}</p>
                <p>{footer?.c_contacts?.phonenumber}</p>
              </div>
            </div>
          </div>
          <div className="store-locator Footer3">
            <div className="footer-block">
              <h2 className="chatter">{footer?.c_socialTitle}</h2>
              <div className="footer-block">
                <ul className="footer_social">
                  {footer.c_socialicons.map((icon: any) => {
                    // console.log('icon', icon)
                    return (
                      <>
                        <li className="">
                          {" "}
                          <a href="#" target="_blank">
                            <img
                              src={icon?.icon?.url}
                              height="20"
                              alt="social"
                              width="21"
                              className="inline-block w-5 h-auto"
                            />{" "}
                          </a>
                          <h3>{icon.title}</h3>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="Footer-bottom">
            <div className="footer-block">
              <div className="navigate">
                {footer?.c_naviogateToWebsite?.label}
              </div>
            </div>
            <div className="footer-block">
              <div className="Maxolgroup">
                {footer?.c_privacy?.copyrightTitle}
              </div>
            </div>
            <div className="footer-block">
              <div className="privacy">
                {footer?.c_privacy?.cookiePolicy?.label}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <CookieConsent
        buttonText={"Accept"}
        buttonStyle={{
          marginLeft: "100px",
        }}
      >
        <p>
          {cookieText}
          <a className="text-cookies-link" href={cookiesUrl}>
            {StaticData.cookie}
          </a>
          .
        </p>
      </CookieConsent>
    </>
  );
};

export default Footer;
function handleMediaQueryChange(mediaQuery: MediaQueryList) {
  throw new Error("Function not implemented.");
}
