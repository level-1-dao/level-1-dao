import NavBar from "../../components/NavBar";
import Catalogue from "./Catalogue";
import { Meta } from "../../layout/Meta";

const index = () => {
  return (
    <div>
      <Meta title="Level1" description="Community-Led Onboarding" />
      <NavBar />
      <Catalogue />
    </div>
  );
};

export default index;
