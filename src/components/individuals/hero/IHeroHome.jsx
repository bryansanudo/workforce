import React from "react";

const IHeroHome = () => {
  return (
    <>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/863055_797b59f1342445a19f07a0cee65d9812~mv2.jpg/v1/fill/w_1652,h_671,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/863055_797b59f1342445a19f07a0cee65d9812~mv2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">
              The Better FREE Way To Connect With The Right Manpower For Your
              Business
            </h1>
            <p className="mb-5 text-xl">No Cost, No Hassle, No Brainer</p>
            <button className="btn btn-outline btn-primary">
              YES !TEACH ME HOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IHeroHome;
