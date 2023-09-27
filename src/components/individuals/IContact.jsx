import ISection from "@/components/individuals/ISection";
import { useEffect } from "react";
import IHeroContact from "@/components/individuals/hero/IHeroContact";

const IContact = () => {
  useEffect(() => {
    // Coloca el código del script aquí
    var ifr = document.getElementById("JotFormIFrame-232636593677672");
    if (ifr) {
      var src = ifr.src;
      var iframeParams = [];
      if (window.location.href && window.location.href.indexOf("?") > -1) {
        iframeParams = iframeParams.concat(
          window.location.href
            .substr(window.location.href.indexOf("?") + 1)
            .split("&")
        );
      }
      if (src && src.indexOf("?") > -1) {
        iframeParams = iframeParams.concat(
          src.substr(src.indexOf("?") + 1).split("&")
        );
        src = src.substr(0, src.indexOf("?"));
      }
      iframeParams.push("isIframeEmbed=1");
      ifr.src = src + "?" + iframeParams.join("&");
    }

    window.handleIFrameMessage = function (e) {
      // El código del manejador del mensaje del iframe
      // ...
    };

    if (window.addEventListener) {
      window.addEventListener("message", handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", handleIFrameMessage);
    }
  }, []);

  return (
    <>
      <IHeroContact />
      <ISection title="Contact" color="primary">
        {/* History of EB-3 Solutions */}
        <div className="flex flex-col gap-12 mb-10   ">
          <p className="font-bold text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl ">
            Take action now and apply!
          </p>
          <p className="max-w-[300px] md:max-w-[800px] font-bold text-left">
            Are you keen on obtaining a U.S. Permanent Resident Card (Green
            Card) for yourself and your family? MCC USA collaborates with U.S.
            corporations that are willing to support your Green Card application
            in return for your commitment to work with them for at least one
            year.
          </p>
        </div>

        <iframe
          id="JotFormIFrame-232636593677672"
          title="Eligibility EB3WFS"
          onLoad={() => {
            window.parent.scrollTo(0, 0);
          }}
          allowtransparency="true"
          allowFullScreen="True"
          allow="geolocation; microphone; camera"
          src="https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs"
          frameBorder="0"
          style={{
            minWidth: "100%",
            maxWidth: "100%",
            height: "539px",
            border: "none",
          }}
          scrolling="no"
        ></iframe>
      </ISection>
    </>
  );
};

export default IContact;
