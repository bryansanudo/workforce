import ISection from "@/components/individuals/ISection";
import contactImg from "@/assets/contact.jpg";

const IAbout = () => {
  return (
    <ISection title="About Us" color="#94171A">
      {/* <div className="flex items-center justify-center gap-10 flex-col">
        <div>
          Our Specialty Our objective is the same as that of our clients:
          obtaining their U.S. Green Card via the EB-3 Unskilled Visa program.
          Successful EB-3 Cases with EB-3 Workforce Solutions Our recruitment
          and client engagement specialists have extensive experience in the
          entire EB-3 process. We have partnered with immigration attorneys who
          have over 25 years of experience in the field of immigration law and
          have successfully obtained permanent residency status for hundreds of
          EB-3 applicants.
        </div>
        <div>
          <h2>History of EB-3 Solutions</h2>
          <p>
            The corporation EB-3 Workforce Solutions has had a substantial
            effect on the American labor market. By concentrating on offering
            U.S. companies alternatives for hiring entry-level workers, EB-3
            Workforce Solutions strives to become a top supplier of unskilled
            labor solutions to American firms. To help non-immigrant visa
            holders change their visa status, and assist immigrants in achieving
            a EB-3 permanent residence Green Card, EB-3 Workforce Solutions
            collaborates with some of the leading immigration law firms in the
            nation. By offering these services, EB-3 Workforce Solutions is
            essential in assisting foreign nationals and those with
            non-immigrant visas to become lawful permanent residents of the
            United States. EB-3 Workforce Solutions assists American companies
            in hiring the qualified personnel they require to expand and
            prosper. EB-3 Workforce Solutions has assisted in addressing the
            persistent lack of unskilled employees in the American labor market
            by acting as a link between American firms and overseas workers. We
            have established a solid reputation as a reliable source of talent
            acquisition due to our commitment to quality and our desire to see
            U.S. businesses prosper.
          </p>
        </div>
      </div> */}

      <div className="flex items-center justify-center flex-col gap-10">
        <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row">
          <div className="md:w-1/2 flex flex-col gap-4 max-w-[500px]">
            <h2 className="text-3xl font-bold">Our speciality</h2>
            <p className="text-left mb-6">
              Our objective is the same as that of our clients: obtaining their
              U.S. Green Card via the EB-3 Unskilled Visa program
            </p>
            <h2 className="text-3xl font-bold">
              Successful EB-3 Cases with EB-3 Workforce Solutions
            </h2>
            <p className="text-left">
              Our recruitment and client engagement specialists have extensive
              experience in the entire EB-3 process. We have partnered with
              immigration attorneys who have over 25 years of experience in the
              field of immigration law and have successfully obtained permanent
              residency status for hundreds of EB-3 applicants.
            </p>
          </div>

          <div className="md:w-1/2">
            <img className="rounded-2xl" src={contactImg} alt="" />
          </div>
        </div>
        <div className="max-w-[1000px] flex flex-col gap-6">
          <h2 className="text-3xl font-bold">History of EB-3 Solutions</h2>
          <p>
            The corporation EB-3 Workforce Solutions has had a substantial
            effect on the American labor market. By concentrating on offering
            U.S. companies alternatives for hiring entry-level workers, EB-3
            Workforce Solutions strives to become a top supplier of unskilled
            labor solutions to American firms.
          </p>
          <p>
            To help non-immigrant visa holders change their visa status, and
            assist immigrants in achieving a EB-3 permanent residence Green
            Card, EB-3 Workforce Solutions collaborates with some of the leading
            immigration law firms in the nation. By offering these services,
            EB-3 Workforce Solutions is essential in assisting foreign nationals
            and those with non-immigrant visas to become lawful permanent
            residents of the United States.
          </p>
          <p>
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
    </ISection>
  );
};

export default IAbout;
