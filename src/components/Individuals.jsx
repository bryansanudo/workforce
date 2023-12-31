import { Routes, Route, useNavigate } from "react-router-dom";
import INavbar from "@/components/individuals/INavbar";
import IHome from "@/components/individuals/IHome";
import IAbout from "@/components/individuals/IAbout";
import IServices from "@/components/individuals/IServices";
import IHistories from "@/components/individuals/IHistories";
import IResources from "@/components/individuals/IResources";
import IContact from "@/components/individuals/IContact";
import IFooter from "@/components/individuals/IFooter";
import { useEffect } from "react";

const Individuals = ({ content, setContent }) => {
  const navigate = useNavigate();
  const btnIndividuals = () => {
    setContent(1);
  };

  const btnCompanies = () => {
    setContent(2);
  };

  useEffect(() => {
    navigate("/individuals/home");
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center  gap-4 mx-20 my-2">
        <button
          className="btn btn-outline  btn-primary"
          onClick={btnIndividuals}
        >
          If you are Individual
        </button>
        <button
          className="btn btn-outline  btn-secondary"
          onClick={btnCompanies}
        >
          If you are Companie
        </button>
      </div>
      <INavbar />
      <Routes>
        <Route path="/" element={<IHome />} />

        <Route path="/individuals/home" element={<IHome />} />
        <Route path="/individuals/about" element={<IAbout />} />
        <Route path="/individuals/services" element={<IServices />} />
        <Route path="/individuals/histories" element={<IHistories />} />
        <Route path="/individuals/resources" element={<IResources />} />
        <Route path="/individuals/contact" element={<IContact />} />
      </Routes>
      <IFooter />
    </>
  );
};

export default Individuals;
