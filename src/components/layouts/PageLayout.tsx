import * as React from "react";
import Footer from "./footer";
import Header from "./header";

import Nav from "./Nav";


type Props = {
    title?: string;
    _site?: any;
    global:any;
    children?: React.ReactNode;
    c_logo?:any
};
  
  const PageLayout = ({
    title,
    _site,
    global,
    children,
    c_logo,
  }: Props) => {
    
    return (
        <>
		
        <Header  c_logo={global?.c_logo} c_headerMenu={global.c_headerMenu} c_topBarMenu={global?.c_topBarMenu} c_socialicons={global.c_socialicons}/>
      
                {children}

                <Footer footer= {global}/>
      
        </>
    );
  };

export default PageLayout;
  