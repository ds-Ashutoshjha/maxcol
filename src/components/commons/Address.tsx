import * as React from "react";
import { regionNames } from "../../../sites-global/global";

const Address = (props: any) => {
    const { address,phone } = props;
    var gmaps = "https://www.google.com/maps/dir/?api=1&destination=";
    var gmapsAddress = gmaps.concat(phone, ' ', address.line1, ' ', address.city, ' ', address.region, ' ', address.postalCode);
    var gmapsLink = gmapsAddress.concat('"');

  return (
    <>
      <div className="address notHighlight ">
        {/* <a href={gmapsLink} target="_blank" className="hover:underline"> */}
          <p>{phone}</p>
            <div >{address.line1}</div>
            {address.line2 && (<div><span className="notHighlight">{address.line2}</span></div>)}
            <div ><span className="notHighlight">{address.city}, {address.region}</span> </div>
            {<div ><span className="notHighlight">{address.postalCode}, {regionNames.of(address.countryCode)}</span></div>}
        {/* </a> */}
      </div>
    </>
  );
};

export default Address;
