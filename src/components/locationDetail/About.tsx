import { Link } from "@yext/pages/components";
import * as React from "react";
import abbanner from "../../images/ab-banner.jpg";
import dt12 from "../../images/dtl2.jpg";
import PhotoSlider from "./PhotoSlider";
import RtfConverter from "@yext/rtf-converter";

export default function About(props: any) {
  console.log("props", props);
  function convertToRtf(rtf: any) {
    rtf = rtf.replace(/\\par[d]?/g, "");
    rtf = rtf.replace(
      /\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g,
      ""
    );
    rtf = rtf.replace("/", "");
    rtf = rtf.replace(";", "");
    rtf = rtf.replace("-", "");
    return rtf.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
  }
  return (
    <>
      <div className="about-sec ">
        <div className="container-custom">
          <div className="about-inner-sec">
            {/* <div className="w-full lg:w-2/5 xl:w-[47%] relative  left-0">
              <div className="lg:h-full">
              {props.photoGallery ?
                    props.photoGallery.map((element:any) => (   

                        <img height={518} width={658} src={element.url} alt="photo" />
                  
                      ))
                    : ''}
              </div>
          </div> */}
            {props.c_serviceStation?.map((datas: any) => {
              // console.log(datas, "jio");
              return (
                <>
                  <div className="about-content">
                    <div className="mb-4">
                      <h2>{datas.heading}</h2>
                      <div className="">
                        <div
                          className="about-content-inner"
                          dangerouslySetInnerHTML={{
                            __html: convertToRtf(datas.description),
                          }}
                        />
                      </div>

                      <div className="content-center w-full ">
                        <Link
                          href={props.c_viewMore.link}
                          className="button-red"
                          data-ya-track={`about-button`}
                          eventName={`about-button`}
                          rel="noopener noreferrer"
                        >
                          {datas.cta.label}
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
