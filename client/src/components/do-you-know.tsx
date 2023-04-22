import { useQuery } from "react-query";

import { Person } from "../types";
import { fetchSuggestedFriends } from "../utils/client";

export function DoYouKnow() {
  const { data } = useQuery("do-you-know", async () => {
    const response = await fetchSuggestedFriends({ content: "do-you-know" });

    return response.data[0] as Person;
  });

  return (
    <p className="py-4 italic text-sm text-pink-800 font-bold">
      Do you know {data?.firstName} from {data?.location?.city},{" "}
      {data?.location?.country} ?
    </p>
  );
}
