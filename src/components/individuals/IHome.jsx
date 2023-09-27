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

const IHome = () => {
  return (
    <>
      <IHeroHome />
      <ISection title="Home" color="primary">
        <div className="flex items-center justify-center flex-col gap-10">
          {/* James */}
          <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row">
            <div className="md:w-1/2 flex items-center justify-center ">
              <img
                src={JamesBg}
                className="rounded-3xl w-[500px] object-contain  "
              />
            </div>
            <div className="md:w-1/2 max-w-[500px]">
              <div className="text-center mb-10">
                <p className="md:text-3xl text-2xl text-gray-400 font-bold">
                  Meet The Founder
                </p>
                <p className="font-bold text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl  ">
                  James Baker, CPA
                </p>
                <span className="border-b-8 border-black"></span>
              </div>
              <p className="text-left ">
                James is the head of different companies around the US, serving
                international Corporations and international entrepreneurs with
                different services and companies. ​ James allied with silent
                investors to create EB-3 Workforce solutions, a company that
                connects employers which are facing a chronic shortage of
                unskilled workers with immigrant employees willing to apply for
                a US Green Card through the EB-3 Visa program.
              </p>
              <button className="btn btn-outline btn-primary mt-4 animate-pulse">
                YES! TEACH ME HOW
              </button>
            </div>
          </div>

          {/* Divider committed workers */}
          <div className="flex items-center justify-center gap-6 md:gap-40 p-6 flex-col md:flex-row bg-gray-100 w-full ">
            <h1 className="text-4xl font-bold">Get Committed Workers!</h1>
            <div className="flex flex-col items-center justify-center gap-4 text-xl font-bold">
              <div className="bg-white p-3 rounded-full ">
                <BiPhoneCall className="text-4xl text-primary" />
              </div>
              <p>Call Us</p>
              <p>305 564-1311</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 font-bold text-xl">
              <div className="bg-white p-3 rounded-full">
                <AiOutlineMail className="text-primary text-4xl" />
              </div>
              <p>Email</p>
              <p>support@eb3wfs.com</p>
            </div>
          </div>

          {/* Want to know more */}
          <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row">
            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src={homeImg}
                className="rounded-3xl w-[500px] object-contain"
              />
            </div>

            <div className="md:w-1/2 max-w-[500px]  ">
              <div className="text-center mb-10">
                <p className="md:text-3xl text-2xl text-gray-400 font-bold">
                  Contact Us
                </p>
                <p className="font-bold text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl ">
                  Want to Know More?
                </p>
                <span className="border-b-8 border-black"></span>
              </div>
              <p className="text-left mb-4 ">
                If you find yourself in a situation where you are struggling to
                find a significant number of qualified, accessible, and highly
                motivated U.S. employees to fill various entry-level positions,
                or if you are facing challenges with relentless turnover and
                overwhelming HR responsibilities and charges, then we have the
                perfect solution for you.
              </p>
              <p className="text-left">
                Introducing the EB-3 Visa Program, a long-term staffing solution
                specifically designed for U.S. employers like yourself. This
                employment-based Green Card option is tailored to address your
                staffing needs and provide the qualified workforce you require.
              </p>
              <button className="btn btn-outline btn-primary mt-4">
                YES! TEACH ME HOW
              </button>
            </div>
          </div>

          {/* EB-3 VISA */}

          <div className="w-full flex flex-col items-center justify-center md:mt-20 mt-10">
            <p className="font-bold text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl">
              EB-3 Visa
            </p>
            <div className="flex items-center justify-center mt-10 flex-col md:flex-row ">
              <div className="flex flex-col justify-center items-center gap-4 max-w-[600px]">
                <p className="text-4xl font-bold">Process Length</p>
                <p className="text-xl font-bold">Around 18 months</p>
                <p className="">
                  The length of the processing times for the EB3 program varies
                  and depends on the location (Longstanding Successcountry of
                  origin) and status of the applicant (Consular Process vs.
                  Adjustment of Status) and can also depend on the type of
                  industry the applicant is sought for.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center  gap-4 max-w-[600px]">
                <p className="text-4xl font-bold">Investment</p>
                <p className="text-xl font-bold">$400-$1200</p>
                <p className="">
                  In order to proceed with the Labor Certificate, compliance
                  with regulations necessitates the advertisement of the
                  position to U.S. Workers. This process labor certification
                  process, independent of the quantity of employees required.
                </p>
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

          {/* EB-3 Worfkforce Solutions */}

          <div className="flex flex-col gap-12 items-center justify-center md:mt-20 mt-10 ">
            <p className="font-bold text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl">
              EB-3 Workfoce Solutions
            </p>
            <p className="max-w-[300px] md:max-w-[800px] font-bold">
              At EB3 Workforce Solutions, we understand the importance of
              finding reliable and dedicated employees. That's why we offer a
              unique solution to your staffing needs - EB3 visa workers. Our
              team is dedicated to finding and placing highly qualified
              personnel who are committed to making a positive impact on your
              business. With a rigorous screening process and a network of
              top-notch talent, we ensure that you receive the highest quality
              workforce available. Say goodbye to the struggles of finding
              committed workers and hello to a bright future with EB3 Workforce
              Solutions.
            </p>
          </div>

          <ITestimonials />
          {/* Struggling to Find Commited Workers? */}
          <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row">
            <div className="md:w-1/2 flex items-center justify-center ">
              <img
                src={contactImg}
                className="rounded-3xl w-[500px] object-contain"
              />
            </div>
            <div className="md:w-1/2 max-w-[500px]">
              <div className="flex items-center justify-center flex-col ">
                {/* <div className="bg-gray-200 rounded-full p-5">
                  <RxGear className="text-[40px]" />
                </div> */}
                <p className="font-bold text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl  ">
                  Struggling to Find Commited Workers?
                </p>
                <span className="border-b-8 border-black"></span>
              </div>
              <p className="text-left ">
                Discover the solution to your staffing needs with our company!
                Say goodbye to the hassle of unreliable workers and hello to a
                team of dedicated and committed professionals. Our EB3 visa
                workers are handpicked to ensure top-notch performance and
                complete commitment to your projects. Trust us to provide the
                workforce you deserve."
              </p>
              <button className="btn btn-outline btn-primary mt-4 animate-pulse">
                YES! TEACH ME HOW
              </button>
            </div>
          </div>
          <IFormContact />
          {/* Divider blue and red */}
          <div className="w-full flex flex-col md:flex-row text-white font-bold md:text-3xl text-xl mt-6 ">
            <div className="bg-secondary w-full py-8 flex items-center justify-center ">
              <p className="">GET IN TOUCH TODAY!</p>
            </div>
            <div className="bg-primary w-full py-8">
              <p className="">305564-1311</p>
              <p className="text-sm font-normal">AVAILABLE 24/7</p>
            </div>
          </div>
        </div>
      </ISection>
    </>
  );
};

export default IHome;
