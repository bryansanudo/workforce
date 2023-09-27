import React from "react";
import ISection from "@/components/individuals/ISection";
import JamesBg from "@/assets/James-bg.jpg";
import homeImg from "@/assets/home1.jpg";
import IHeroHome from "@/components/individuals/hero/IHeroHome";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import ITestimonials from "@/components/individuals/ITestimonials";
import { RxGear } from "react-icons/rx";
import IFormContact from "@/components/individuals/IFormContact";
import contactImg from "@/assets/contact2.jpg";
import IServicesCard from "@/components/individuals/IServicesCard";
import proccessImg from "@/assets/proccess.jpg";
import IHeroServices from "@/components/individuals/hero/IHeroServices";
import jobImg from "@/assets/job.jpg";
import writingImg from "@/assets/writing.jpg";
import { GoDotFill } from "react-icons/go";

const IServices = () => {
  return (
    <>
      <>
        <IHeroServices />
        <ISection title="Home" color="primary">
          <div className="flex items-center justify-center flex-col gap-10">
            <IServicesCard />

            {/* Process */}

            <div className="flex items-center flex-col justify-center gap-10">
              <h2 className="font-bold text-3xl p-4 text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl ">
                Timeline of the proccess
              </h2>
              <img src={proccessImg} alt="" />
            </div>
            <IFormContact />
            {/* Longstanding Success */}
            <div className="flex flex-col gap-12 items-center justify-center  mt-10 ">
              <p className="font-bold p-2 text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl">
                Longstanding Success
              </p>
              <p className="max-w-[300px] md:max-w-[800px] font-bold text-left">
                The EB-3 'Other Workers' Visa, created by the US Government,
                provides an opportunity for foreign nationals to work in
                positions experiencing chronic labor shortages. With a yearly
                allocation of 40,000 visas, the EB-3 program is a valuable
                solution for many. However, the most challenging aspect of the
                process is finding an employer who is willing and able to
                sponsor. This is where EB-3 Workforce Solutions comes in. We
                partner with qualified employers, ensuring a smooth and
                successful sponsorship process for all parties involved.
              </p>
              <p className="max-w-[300px] md:max-w-[800px] font-bold text-left">
                The EB-3 "Other Workers" Visa is a great way to become a
                permanent resident of the United States. You can get this visa
                by changing your status or by going through consular processing
                in your home country. If you qualify, so do your spouse and any
                unmarried children under 21.
              </p>
            </div>
            {/* Who is eligible for EB3? */}
            <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row">
              <div className="md:w-1/2 flex items-center justify-center ">
                <img
                  src={jobImg}
                  className="rounded-3xl w-[500px] object-contain mask mask-parallelogram"
                />
              </div>
              <div className="md:w-1/2 max-w-[500px]">
                <div className="flex items-center justify-center flex-col ">
                  <p className="font-bold text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl  ">
                    Who is eligible for EB3?
                  </p>
                </div>

                <div className="flex items-center justify-start gap-2 mt-5">
                  <div>
                    <GoDotFill />
                  </div>
                  <p>No degree requirements needed</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <div>
                    <GoDotFill />
                  </div>
                  <p>No prior work experience needed</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <div>
                    <GoDotFill />
                  </div>
                  <p>Can’t be overqualified</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <div>
                    <GoDotFill />
                  </div>
                  <p>Need an employer sponsor</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <div>
                    <GoDotFill />
                  </div>
                  <p>You can adjust your visa status within the U.S.</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <div>
                    <GoDotFill />
                  </div>
                  <p>You can apply from your home country</p>
                </div>
              </div>
            </div>
            {/* What does the process entail? */}
            <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row">
              <div className="md:w-1/2 max-w-[500px]">
                <div className="flex items-center justify-center flex-col ">
                  <p className="font-bold text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl  ">
                    What does the process entail?
                  </p>
                </div>

                <div className="flex items-center justify-start gap-4 mt-5">
                  <div>
                    <GoDotFill />
                  </div>
                  <p className="text-left">
                    EB-3:(A) Professionals - This category is for foreign
                    workers who have a bachelor's degree or higher, or
                    equivalent education and experience in a specific field.
                  </p>
                </div>
                <div className="flex items-center justify-start gap-4 mt-5">
                  <div>
                    <GoDotFill />
                  </div>
                  <p className="text-left">
                    EB-3(B): Skilled Workers - This category is for foreign
                    workers who have at least two years of job experience or
                    training in a skilled occupation that requires a minimum of
                    two years of training or experience.
                  </p>
                </div>
                <div className="flex items-center justify-start gap-4 mt-5">
                  <div>
                    <GoDotFill />
                  </div>
                  <p className="text-left">
                    EB-3(C): Unskilled Workers - This category is for foreign
                    workers who are performing unskilled labor that requires
                    less than two years of training or experience
                  </p>
                </div>
                <p className="font-bold mt-8 text-xl">
                  The EB-3 visa process involves the following steps:
                </p>
                <div className="flex items-center justify-start gap-4 mt-5">
                  <div>
                    <GoDotFill />
                  </div>
                  <p className="text-left">
                    A U.S. employer must first obtain a labor certification from
                    the U.S. Department of Labor, indicating that there are no
                    qualified U.S. workers available to fill the position.
                  </p>
                </div>
                <div className="flex items-center justify-start gap-4 mt-5">
                  <div>
                    <GoDotFill />
                  </div>
                  <p className="text-left">
                    Once the labor certification is approved, a Form I-140 must
                    be filed with the U.S. Citizenship and Immigration Services,
                    Petition for Alien Worker, on behalf of the foreign worker.
                  </p>
                </div>
                <div className="flex items-center justify-start gap-4 mt-5">
                  <div>
                    <GoDotFill />
                  </div>
                  <p className="text-left">
                    After the Form I-140 is approved, the foreign worker can
                    apply for an immigrant visa at a U.S. consulate or embassy
                    in their home country, or if the foreign worker is already
                    in the U.S., they may apply for an adjustment of status to
                    become a permanent resident.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4 mt-5">
                  <div>
                    <GoDotFill />
                  </div>
                  <p className="text-left">
                    The final step is for the foreign worker to attend an
                    interview with a U.S. consular officer or USCIS officer and
                    provide any additional documents or information as
                    requested. If approved, the foreign worker can enter the
                    U.S. or adjust their status to become a permanent resident.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex items-center justify-center ">
                <img
                  src={writingImg}
                  className="rounded-3xl w-[500px] object-contain mask mask-parallelogram"
                />
              </div>
            </div>
          </div>
          {/* Divider blue and red */}
          <div className="w-full flex flex-col md:flex-row text-white font-bold md:text-3xl text-xl ">
            <div className="bg-secondary w-full py-8 flex items-center justify-center ">
              <p className="">GET IN TOUCH TODAY!</p>
            </div>
            <div className="bg-primary w-full py-8">
              <p className="">305564-1311</p>
              <p className="text-sm font-normal">AVAILABLE 24/7</p>
            </div>
          </div>
        </ISection>
      </>
    </>
  );
};

export default IServices;
