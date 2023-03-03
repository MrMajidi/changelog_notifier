import Pagination from "@mui/material/Pagination";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ChangelogItem from "./ChangelogItem";

function ChangelogPopup({ changelogItems }: { changelogItems: string[] }) {
  const [selectedPage, setSelectedPage] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setSelectedPage(changelogItems[value - 1]);
  };
  useEffect(() => {
    if (changelogItems) {
      setSelectedPage(changelogItems[0]);
    }
  }, [changelogItems]);
  return (
    <div className="w-[500px] h-fit p-5">
      {!!changelogItems.length && (
        <>
          {changelogItems.length > 1 && (
            <Pagination count={changelogItems.length} onChange={handleChange} />
          )}
          <ChangelogItem changelog={selectedPage} />
        </>
      )}

      <div className="p-2">
        <Link href="/changelog">Show the full changelog</Link>
      </div>
    </div>
  );
}
export default ChangelogPopup;
