import * as React from "react";
import Cta from "../commons/cta";
import Hours from "../commons/hours";
import woodtexture from "../../images/wood-texture.jpg";
import mapimage from "../../images/map.svg";
import Phonesvg from "../../images/phone.svg";
import Address from "../commons/Address";
import GetDirection from "../commons/GetDirection";
import { StaticData } from "../../../sites-global/staticData";
import Holidayhours from "./Holdayhours";
import Model from "./Model";
import CustomMap from "./CustomMap";
import OpenClose from "../commons/openClose";


const Contact = (props: any) => {
  const {
    id,
    address,
    timezone,
    phone,
    latitude,
    longitude,
    hours,
    c_specific_day,
    additionalHoursText,
    yextDisplayCoordinate,
    name,
    c_getDirectionsCTAText,
    c_loyalityPhoto,
    c_loyalityApp,
  } = props;
  const [timeStatus, setTimeStatus] = React.useState("");
const onOpenHide = () => {
  if (timeStatus == "") {
    setTimeStatus("active");
  } else {
    setTimeStatus("");
  }
};
  return (
    <>
      <div className="address-main-sec">
        <h4 className="box-title">{name ? name : "Store Details"}</h4>

        <div className="icon-row content-col">
          <div className="icon">
            {" "}
            <img
              className=" "
              src={mapimage}
              width="20"
              height="20"
              alt="mapimage"
            />
          </div>
          <div className="  address-text notHighlight">
            {address.line1}
            <div>{address.line2 && <div>{address.line2}</div>}</div>
            <div>{address.city}</div>
            <div>{address.postalCode}</div>
          </div>
        </div>
        {/* {hours?.openIntervals.map((item: any) => {
          console.log(item,"rewhfhjfhfvhjkfvhkjhujhgujrh")
              return (
                <>
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "white",
                    }}
                  >
                    {item?.end}
                  </div>
                </>
              );
            })} */}
        <div className="open-close ">
          <div className="hours-sec onhighLight">
            <div className="OpenCloseStatus ">
              <div className="hours-labels icon-row">
                <div className="flex">
                  <OpenClose
                    timezone={timezone}
                    hours={hours}
                    deliveryHours={hours}
                  ></OpenClose>
                  <button onClick={onOpenHide}>
                    <svg
                      className="mt-2 ml-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="8"
                      viewBox="0 0 9.585 4.793"
                    >
                      <path
                        id="hrd-drop"
                        d="M9,13.5l4.793,4.793L18.585,13.5Z"
                        transform="translate(-9 -13.5)"
                        fill="#00363f"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className={timeStatus + " daylist"}>
                  <Hours
                    key={id}
                    hours={hours}
                    additionalHoursText={additionalHoursText}
                    c_specific_day={undefined}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="">
          <li className="button-bx direction-button">
            <GetDirection
              buttonText={
                c_getDirectionsCTAText
                  ? c_getDirectionsCTAText
                  : StaticData.getDirection
              }
              address={address}
              latitude={latitude}
              longitude={longitude}
            />
          </li>
        </ul>

        <div className="c-get-directions ">
          <div className="c-get-directions-button-wrapper">
            <button className="bg-red DownloadButton">
              {c_loyalityApp.label}
            </button>
            <div className="playIconsImg flex">
              {c_loyalityPhoto.map((img: any) => {
                return (
                  <>
                    <img src={img?.url} alt="" />
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="map-sec">
          <CustomMap prop={yextDisplayCoordinate} />
        </div>
      </div>


    </>
  );
};

export default Contact;
