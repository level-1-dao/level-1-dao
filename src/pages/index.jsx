import { useRouter } from "next/router";
import { Meta } from "../layout/Meta";
import MarketingPage from "../templates/MarketingPage";

const Index = () => {
  const router = useRouter();

  return (
    <MarketingPage
      meta={
        <Meta
          title="Level1"
          description="A fun and friendly space for DAO onboarding"
        />
      }
    ></MarketingPage>
  );
};

export default Index;
