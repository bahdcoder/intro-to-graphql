import { useQuery } from "react-query";
import { Outlet, Link } from "@tanstack/router";

import { DoYouKnow } from "./components/do-you-know";

import { DataContext, DataContextInterface } from "./utils/data";
import { graphqlFetchSuggestedFriends } from "./utils/client";

export function Root() {
  const { data = { peopleYouMayKnow: [], peopleYouMayKnowSidebar: [] } } =
    useQuery("suggested-friends", async () => {
      const response = await graphqlFetchSuggestedFriends(`
    {
      doYouKnow: suggestedFriends(count: 1) {
        id
        avatar
        lastName
        firstName
        location {
          city
          country
        }
      }
    
      peopleYouMayKnowSidebar: suggestedFriends(count: 5) {
        id
        avatar
        lastName
        firstName
        location {
          city
          country
        }
      }
    
      peopleYouMayKnow: suggestedFriends(count: 25) {
        id
        bio
        avatar
        lastName
        firstName
        location {
          city
          country
        }
        socials {
          followersCount
          postsCount
          followingCount
        }
      }
    }
    
    `);

      const data = response.data.data;

      return {
        doYouKnow: data.doYouKnow?.[0],
        peopleYouMayKnow: data.peopleYouMayKnow,
        peopleYouMayKnowSidebar: data.peopleYouMayKnowSidebar,
      } as DataContextInterface;
    });

  return (
    <DataContext.Provider value={data}>
      <div className="w-full h-screen flex flex-col">
        <div className="w-full flex items-center h-16 bg-white shadow-sm border-b">
          <div className="w-1/5">
            <div className="flex h-16 items-center pl-6">
              <span className="font-bold text-lg">GraphQL</span>
            </div>
          </div>
          <div className="w-4/5">
            <div className="flex items-center space-x-4 h-16">
              <Link
                className="text-gray-700 hover:text-pink-700 transition ease-linear font-semibold"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-gray-700 hover:text-pink-700 transition ease-linear font-semibold"
                to="/suggested-friends"
              >
                Suggested friends
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-grow">
          <div className="w-full md:w-1/5 bg-white h-full border-r px-6 pb-6">
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-tr p-1 from-yellow-600 to-pink-600 rounded-full">
                <img
                  alt="my profile avatar"
                  src="https://i.pravatar.cc/300"
                  className="rounded-full h-full w-full border-4 border-white"
                />
              </div>
            </div>

            <h1 className="text-center mt-6 text-2xl text-gray-900 font-semibold">
              Frantz Kati
            </h1>

            <div className="grid grid-cols-3 gap-4 mx-4 mt-6">
              <div className="flex flex-col items-center">
                <h3 className="font-semibold text-sm text-gray-900">Posts</h3>
                <span>39</span>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-semibold text-sm text-gray-900">
                  Followers
                </h3>
                <span>43.6k</span>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-semibold text-sm text-gray-900">
                  Following
                </h3>
                <span>2,138</span>
              </div>
            </div>

            <div className="w-full mt-6">
              <div className=" w-full h-4 bg-gray-200 rounded-sm dark:bg-gray-700 mb-2"></div>
              <div className=" w-2/3 h-2.5 bg-gray-200 rounded-sm dark:bg-gray-700 mb-2"></div>
              <div className=" w-3/4 h-2.5 bg-gray-200 rounded-sm dark:bg-gray-700 mb-2"></div>
              <div className=" w-2/4 h-2.5 bg-gray-200 rounded-sm dark:bg-gray-700 mb-2"></div>
              <div className=" w-3/4 h-2.5 bg-gray-200 rounded-sm dark:bg-gray-700 mb-2"></div>
              <div className=" w-3/4 h-2.5 bg-gray-200 rounded-sm dark:bg-gray-700 mb-2"></div>
              <div className=" w-3/4 h-2.5 bg-gray-200 rounded-sm dark:bg-gray-700 mb-2"></div>
            </div>

            <DoYouKnow />
          </div>

          <div className="w-full md:w-4/5 px-6 md:p-0">
            <Outlet />
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}
