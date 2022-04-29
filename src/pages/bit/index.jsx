import Link from "next/link";
import { GET_ALL_LEARNING_BITS } from "../../lib/graphql";
import { useQuery } from "@apollo/client";
import LearningBitCard from "../../templates/discover/LearningBitCard";
import NavBar from "../../components/NavBar";

const DiscoverLearningBitsLandingPage = () => {
  const { data, loading, error } = useQuery(GET_ALL_LEARNING_BITS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return (
    <div>
      <NavBar />
      <div className="container p-4 py-12 mx-auto">
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {data.learningBits.map((bit) => (
            <Link
              href={
                bit.learningJourney?.id
                  ? `/journey/${bit.learningJourney.id}/?bit=${bit.id}`
                  : `/bit/${bit.id}`
              }
              key={bit.id}
            >
              <a>
                <LearningBitCard learningBit={bit} />
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DiscoverLearningBitsLandingPage;
