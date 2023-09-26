import React from "react";

const IFormContact = () => {
  return (
    <div className="flex flex-col md:gap-10 gap-4 p-10 rounded-3xl shadow-primary shadow-lg mt-20 mx-10   ">
      <p className="md:text-4xl text-2xl font-bold">GET IN TOUCH TODAY!</p>
      <p className="md:text-2xl text-lg text-gray-400">
        Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <div className="flex items-center justify-center gap-4">
        <input
          type="text"
          placeholder="First name"
          className="input input-bordered input-primary w-full "
        />
        <input
          type="text"
          placeholder="Last name"
          className="input input-bordered input-primary w-full "
        />
      </div>
      <div className="flex gap-4 items-center  justify-center  ">
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered input-primary w-full "
        />
        <input
          type="text"
          placeholder="Phone"
          className="input input-bordered input-primary w-full "
        />
      </div>
      <textarea
        className="textarea textarea-primary w-auto"
        placeholder="Your questions"
      />
      <button className="btn btn-outline btn-primary">SUBMIT NOW</button>
    </div>
  );
};

export default IFormContact;
