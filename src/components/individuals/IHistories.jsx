import ISection from "@/components/individuals/ISection";
import EmployerTimeline from "@/components/individuals/successHistories/EmployerTimeline";
import LifeTimeline from "@/components/individuals/successHistories/LifeTimeline";

const IHistories = () => {
  return (
    <ISection title="success histories" color="primary">
      <EmployerTimeline />
      <LifeTimeline />
    </ISection>
  );
};

export default IHistories;
