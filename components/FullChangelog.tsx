import React from "react";
import ReactMarkdown from "react-markdown";

function FullChangelog({ changelog }: { changelog: string }) {
  return (
    <div>
      <ReactMarkdown>{changelog}</ReactMarkdown>
    </div>
  );
}
export default FullChangelog;
