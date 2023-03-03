import { ChangelogResponse, ApiError } from "@/interfaces";

import { clientApi } from "../utils/apiHandler";
import { useQuery } from "react-query";

const fetchChangelogs = () => {
  return clientApi.get("/api/changelog");
}

export function useChangelogs() {
  return useQuery<{ data: ChangelogResponse }>('domainList', fetchChangelogs, {
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })
}
