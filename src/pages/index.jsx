import { useRouter } from "next/router";
import { Meta } from "../layout/Meta";
import MarketingPage from "../templates/MarketingPage";

const Index = () => {
  const router = useRouter();

  return (
    <MarketingPage
      meta={<Meta title="Level1" description="Community-Led Onboarding" />}
    ></MarketingPage>
  );
};

export default Index;
