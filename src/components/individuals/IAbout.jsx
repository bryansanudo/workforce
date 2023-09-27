import ISection from "@/components/individuals/ISection";
import contactImg from "@/assets/contact.jpg";
import IHeroAbout from "@/components/individuals/hero/IHeroAbout";
import { GiWorld } from "react-icons/gi";
import { BsFillPersonVcardFill } from "react-icons/bs";

const IAbout = () => {
  return (
    <>
      <IHeroAbout />
      <ISection title="About Us" color="#94171A">
        <div className="flex items-center justify-center flex-col gap-10">
          {/* Our Speciality */}
          <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row">
            <div className="md:w-1/2 flex items-center justify-center ">
              <img
                src={contactImg}
                className="rounded-3xl w-[500px] object-contain"
              />
            </div>
            <div className="md:w-1/2 max-w-[500px]">
              <div className="text-center mb-10">
                <p className="font-bold text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl mb-6  ">
                  Our Specialty
                </p>
                <p className="text-left">
                  Our objective is the same as that of our clients: obtaining
                  their U.S. Green Card via the EB-3 Unskilled Visa program.
                </p>
              </div>
              <div className="text-center mb-10">
                <p className="font-bold text-4xl mb-10 ">
                  Successful EB-3 Cases with EB-3 Workforce Solutions
                </p>
                <p className="text-left">
                  Our recruitment and client engagement specialists have
                  extensive experience in the entire EB-3 process. We have
                  partnered with immigration attorneys who have over 25 years of
                  experience in the field of immigration law and have
                  successfully obtained permanent residency status for hundreds
                  of EB-3 applicants.
                </p>
              </div>

              <button className="btn btn-outline btn-primary mt-4 animate-pulse">
                YES! TEACH ME HOW
              </button>
            </div>
          </div>

          {/* 2 Columns contend */}
          <div className="flex flex-col items-center justify-center mt-20">
            <h2 className="font-bold text-3xl">
              We have built strong relationships with current and former
              Government officials.
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center  pt-10 gap-20">
              <div className="shadow-primary shadow-lg rounded-3xl md:w-[400px] md:h-[300px] w-[250px] h-[200px] flex flex-col items-center justify-center gap-6 p-3">
                <GiWorld className="text-7xl" />
                <p className="font-bold">
                  50 +Countries represented throughout the globe{" "}
                </p>
              </div>
              <div className="shadow-primary shadow-lg rounded-3xl md:w-[400px] md:h-[300px] w-[250px] h-[200px] flex flex-col items-center justify-center gap-6 p-3">
                <BsFillPersonVcardFill className="text-7xl" />
                <p className="font-bold">
                  A large number of client green card approvals were granted in
                  the year 2022, excluding dependents.
                </p>
              </div>
            </div>
          </div>

          {/* History of EB-3 Solutions */}
          <div className="flex flex-col gap-12  md:mt-20 mt-10 ">
            <p className="font-bold text-3xl text-left text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl ">
              History of EB-3 Solutions
            </p>
            <p className="max-w-[300px] md:max-w-[800px] font-bold text-left">
              History of EB-3 Solutions The corporation EB-3 Workforce Solutions
              has had a substantial effect on the American labor market. By
              concentrating on offering U.S. companies alternatives for hiring
              entry-level workers, EB-3 Workforce Solutions strives to become a
              top supplier of unskilled labor solutions to American firms.
            </p>
            <p className="max-w-[300px] md:max-w-[800px] font-bold text-left">
              To help non-immigrant visa holders change their visa status, and
              assist immigrants in achieving a EB-3 permanent residence Green
              Card, EB-3 Workforce Solutions collaborates with some of the
              leading immigration law firms in the nation. By offering these
              services, EB-3 Workforce Solutions is essential in assisting
              foreign nationals and those with non-immigrant visas to become
              lawful permanent residents of the United States.
            </p>
            <p className="max-w-[300px] md:max-w-[800px] font-bold text-left">
              EB-3 Workforce Solutions assists American companies in hiring the
              qualified personnel they require to expand and prosper. EB-3
              Workforce Solutions has assisted in addressing the persistent lack
              of unskilled employees in the American labor market by acting as a
              link between American firms and overseas workers. We have
              established a solid reputation as a reliable source of talent
              acquisition due to our commitment to quality and our desire to see
              U.S. businesses prosper.
            </p>
          </div>
        </div>
        {/* Divider blue and red */}
        <div className="w-full flex flex-col md:flex-row text-white font-bold md:text-3xl text-xl mt-12 ">
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
  );
};

export default IAbout;
