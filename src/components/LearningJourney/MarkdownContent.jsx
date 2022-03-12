import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownContent = ({ content }) => {
  const escapedContent = content.replace(/\\n/g, "\n");

  return (
    <div className="space-y-12 lg:gap-8">
      <div className="lg:col-span-2">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="markdown-body"
          linkTarget="_blank"
        >
          {escapedContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownContent;
