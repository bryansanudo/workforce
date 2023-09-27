import React from "react";

const IHeroContact = () => {
  return (
    <>
      <div
        className="hero min-h-[50vh] "
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/11062b_5f2e403e4cfa46e29ca37202af7f6f12~mv2.jpg/v1/fill/w_1903,h_549,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_5f2e403e4cfa46e29ca37202af7f6f12~mv2.jpg)",
        }}
      >
        <div className="hero-content text-center text-white">
          <div className="max-w-5xl">
            <h1 className="mb-5 md:text-7xl text-4xl  font-bold">
              Feel free to apply without the need for any previous experience!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default IHeroContact;
