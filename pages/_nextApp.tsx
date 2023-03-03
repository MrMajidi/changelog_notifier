import { useChangelogs } from "@/hooks/api";
import { ReactElement, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { checkCookiesForNewUpdates } from "@/utils/cookieChecker";

export default function NextApp({ children }: { children: ReactElement }) {
  const { data, isLoading, isError } = useChangelogs();
  const [unSeenCount, setUnSeenCount] = useState<number>(0);
  const [unSeens, setUnSeens] = useState<string[]>([]);
  useEffect(() => {
    if (data) {
      const parsedChangelog = data.data.json;
      const unseen = checkCookiesForNewUpdates(parsedChangelog);
      setUnSeenCount(unseen.count);
      setUnSeens(unseen.unSeens);
    }
  }, [data]);
  return (
    <>
      <Navbar
        unSeenCount={unSeenCount}
        setUnSeenCount={setUnSeenCount}
        unSeens={unSeens}
      />
      {children}
    </>
  );
}
