import { useChangelogs } from "@/hooks/api";
import FullChangelog from "@/components/FullChangelog";
import NextApp from "./_nextApp";

export default function Changelog() {
  const { data, isLoading, isError } = useChangelogs();
  if (!isLoading && !isError && data)
    return (
      <NextApp>
        <FullChangelog changelog={data.data.markdown} />
      </NextApp>
    );
}
