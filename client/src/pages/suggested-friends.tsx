import { useQuery } from "react-query";
import { fetchSuggestedFriends } from "../utils/client";
import { Person } from "../types";

export function SuggestedFriends() {
  const { data: people = [] } = useQuery("suggested-friends", async () => {
    const response = await fetchSuggestedFriends({ content: "suggestions" });

    return response.data as Person[];
  });

  return (
    <div className="w-full md:max-w-6xl md:mx-auto pt-6 md:pt-12 pb-12">
      <div className="col-span-2">
        <h5 className="text-xl font-semibold text-gray-900">
          People you may know
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {people.map((person) => (
            <div key={person.id} className="bg-white rounded-lg px-4 py-6">
              <div className="flex flex-col items-center">
                <img
                  src={person.avatar}
                  className="h-16 w-16 rounded-full"
                  alt={`${person.firstName}'s profile picture`}
                />

                <h4 className="mt-4 font-semibold">
                  {person.firstName} {person.lastName}
                </h4>

                <div className="grid grid-cols-3 gap-4 items-center mt-6">
                  <div className="flex flex-col items-center">
                    <h3 className="font-semibold text-xs text-gray-900">
                      Posts
                    </h3>
                    <span>{person.socials.postsCount}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="font-semibold text-xs text-gray-900">
                      Followers
                    </h3>
                    <span>{person.socials.followersCount}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="font-semibold text-xs text-gray-900">
                      Following
                    </h3>
                    <span>{person.socials.followingCount}</span>
                  </div>
                </div>

                <div className="my-4">
                  <span className="text-sm">
                    {person.location.city}, {person.location.country}
                  </span>
                </div>

                <p className="text-xs w-3/4 mx-auto text-center mb-6">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
