import { useState } from "react";
import Link from "next/link";
import * as loom from "@loomhq/loom-embed";
import EmbedContainer from "react-oembed-container";
import Loading from "../Loading";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import ReactPlayer from "react-player";

const ContentContainer = ({ contentType, content }) => {
  const [loomIframe, setLoomIframe] = useState(null);

  // TODO: move to seperate Loom viewer component
  const getLoomLinkEmbed = async (loomLink) => {
    const loomData = await loom.oembed(loomLink);
    setLoomIframe(loomData.html);
    return;
  };

  const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || "";

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        {content && (
          <div className="link-to-content">
            {capitalize(contentType)} source:
            <Link href={content}>
              <a target="_blank"> {content}</a>
            </Link>
          </div>
        )}
      </div>
      <figure>
        {/* <ContentPlayer /> */}
        {contentType === "video" && (
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={content}
              width="100%"
              height="100%"
              controls
            />
          </div>
        )}
        {contentType === "loom" &&
          getLoomLinkEmbed(content) &&
          (!loomIframe ? (
            <Loading />
          ) : (
            <EmbedContainer markup={loomIframe}>
              <div
                dangerouslySetInnerHTML={{
                  __html: loomIframe,
                }}
              />
            </EmbedContainer>
          ))}
        {contentType === "image" && (
          <div className="relative w-full">
            <img src={content} alt="image content" className="w-full" />
          </div>
        )}
        {contentType === "link" && (
          <div className="relative p-4">
            <LinkPreview url={content} />
          </div>
        )}
      </figure>
    </div>
  );
};

export default ContentContainer;
