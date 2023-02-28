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
      <div className=" bg-[#006cb3]">
        <div className="container-lg header_sec">
          <div className="logo_area">
            <div className="header_logo">
            <img
              src={c_logo.url}
              style={{
                width: "100px",
                height: "80px",
                borderRadius: "10px",
                marginLeft: "10px",
              }}
            />
            </div>

            <div className="flex gap-3 iteams-center menu-custom header_menus">
              {c_topBarMenu?.map((links: any) => {
                return (
                  <div
                    className="flex gap-3 text-sm font-semibold text-body "
                    style={{
                      color: "black",
                      fontSize: "20px",
                      textTransform: "uppercase",
                    }}
                  >
                    <a href="#"> {links.label}</a>
                  </div>
                );
              })}

            <ul className="social-media-bx">
							{c_socialicons.map((item: any) => {
								return (

									<>
										<li className=""> <a href="#" target="_blank"><img src={item.icon.url} height="20" alt="social" width="21" className="inline-block w-5 h-auto" /> </a> </li>
									</>
								)
							})}
						</ul>
            </div>
       
          </div>

          {/* <div>{c_headerMenu}</div> */}
          <div className="flex gap-x-4 items-center menus_custom">
            {c_headerMenu?.map((links: any) => {
              return (
                <div
                  className="flex gap-3 text-sm font-semibold text-body "
                  style={{
                    color: "black",
                    fontSize: "20px",
                    textTransform: "uppercase",
                  }}
                >
                  <a href="#"> {links.label}</a>
                </div>
                
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
