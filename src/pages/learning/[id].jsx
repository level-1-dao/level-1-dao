import { Meta } from "../../layout/Meta.tsx";
import AppPageTwoColumn from "../../layout/AppPageTwoColumn";
import { NFT } from "../../components/NFT";
import Curriculum from "../../components/Curriculum";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import GitcoinCurriculumData from "../../mockData/GitcoinCurriculumData";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GET_USERS } from "../../lib/graphql";
import { useQuery } from "@apollo/client";
import LearningJourneySplashHeader from "../../templates/LearningJourneySplashHeader";

const learningJourneyData = {
  id: "5cbc223b-57d2-439e-8744-f8b97bc455cd",
  title: "GitcoinDAO Onboarding",
  description: "Learn how to use GitcoinDAO",
  guide: "UUID",
  tokensOnCompletion: 100,
  updated_at: "2020-04-01T00:00:00.000Z",
  created_at: "2020-04-01T00:00:00.000Z",
  numberCompleted: 734,
};

const LearningLandingPage = ({ id }) => {
  const { loading, error, data } = useQuery(GET_USERS);
  const user = data?.users[0];

  return (
    <div className="h-full">
      <AppPageTwoColumn
        meta={
          <Meta
            title="GitcoinDAO Level1"
            description="Your first steps to contributing to the GitcoinDAO"
          />
        }
        leftColumn={
          loading ? (
            <Loading />
          ) : (
            <div>
              <LearningJourneySplashHeader
                user={user}
                learningJourneyData={learningJourneyData}
              />
            </div>
          )
        }
        rightColumn={
          <div className="flex flex-col space-y-4 items-center w-full px-4">
            {/* <AccessInfo /> */}
            <div
              className="flex items-center w-full bg-cover card bg-base-200"
              style={{
                backgroundImage:
                  "url(https://s.gitcoin.co/static/v2/card/thumb.0a0be2e5841a.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="card glass lg:card-side text-neutral-content">
                <div className="max-w-md card-body">
                  <p>
                    This learning module is available to GitcoinDAO members.
                  </p>
                  <div className="card-actions">
                    <button className="btn btn-sm glass rounded-full">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <NFT />
            <Curriculum curriculum={GitcoinCurriculumData} />
          </div>
        }
      />
    </div>
  );
};

export default withPageAuthRequired(LearningLandingPage, {
  onRedirecting: () => <Loading />,
  onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
});
