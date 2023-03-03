import * as React from "react";

type data = {
  headerLogo: any;
  label: any;
  _site: any;
  c_logo: any;
  c_headerMenu: any;
  c_topBarMenu: any;
  c_socialicons:any;
};

const Header = (props: data) => {
  const { c_logo, label, c_headerMenu, c_topBarMenu,c_socialicons } = props;
  // console.log("headerLogo", label);

  return (
    <>
      <header className="headerbg">
        <div className="Header-container">
          <nav className="Header-menuMain">
          <div className="Header-top u-mobile-header-hide">
            <div className="Header-logoWrapper">
            <img
              src={c_logo.url}
              style={{
                width: "9.8125rem",
                height: "4.6875rem",
                borderRadius: "10px",
                marginLeft: "10px",
              }}
            />
            </div>
            <div className="Header-topMenu">
              <div className="Header-topMenu">

            <ul className="Header-topMenuLinks">
              {c_topBarMenu?.map((links: any,index: Number) => {
                return (
                  <li className={index ==2 ? "Header-menuItem linkyello":"Header-menuItem"}>
                      <a className="Link SocialLinks-link header_link" href="#">{links.label}</a>
                  </li>
                );
              })}

            <ul className="social-media-bx">
							{c_socialicons.map((item: any) => {
								return (

									<>
                 
										<li> <a href="#" target="_blank"><img src={item.icon.url} height="20" alt="social" width="21" className="inline-block w-5 h-auto" /> </a> </li>
									</>
								)
							})}
						</ul>
            </ul>


            </div>
            </div>
       
          </div>

          {/* <div>{c_headerMenu}</div> */}

<div className="Header-main">
  <div className="Header-content">
    <div className="Header-menu">
          <div className="Header-desktopMenu u-mobile-header-hide">
            <ul className="Header-desktopMenuLinks">
            {c_headerMenu?.map((links: any) => {
              return (
                <li className="Header-menuItem">
                  <a href="#" className="Header-link"> {links.label}</a>
                </li>
                
              );
            })}
</ul>
          </div>
          </div>
</div>
</div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
