import React from "react";
import ReactMarkdown from "react-markdown";

function ChangelogItem({ changelog }: { changelog: string }) {
  return (
    <div className="border-b-2">
      <ReactMarkdown>{changelog}</ReactMarkdown>
    </div>
  );
}
export default ChangelogItem;
