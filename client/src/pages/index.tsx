import cn from "classnames";

import { useData } from "../utils/data";

export function Index() {
  const { peopleYouMayKnowSidebar } = useData();

  return (
    <div className="w-full md:max-w-6xl md:mx-auto pt-6 md:pt-12 md:grid md:grid-cols-3 md:gap-6">
      <div className="col-span-2">
        <h5 className="text-xl font-semibold text-gray-900">Feed</h5>

        <div className="mt-4 bg-white shadow-sm h-96 rounded-lg p-4">
          <div className="w-full bg-gray-50 rounded-lg h-full"></div>
        </div>
      </div>

      <div className="w-full md:w-auto my-6 md:my-0">
        <h5 className="text-xl font-semibold text-gray-900">
          People you may know
        </h5>

        <div className="mt-4 bg-white shadow-sm rounded-lg p-4">
          <div className="flex flex-col">
            {peopleYouMayKnowSidebar.map((person, idx) => (
              <div
                key={person.id}
                className={cn("flex items-center justify-between py-2", {
                  "border-b": idx !== peopleYouMayKnowSidebar.length - 1,
                })}
              >
                <div className="flex">
                  <img
                    src={person.avatar}
                    alt="who to follow profile avatar"
                    className="h-12 w-12 rounded-full"
                  />

                  <div className="flex items-start flex-col ml-2">
                    <span className="font-semibold text-sm">
                      {person.firstName} {person.lastName}
                    </span>
                    <span className="text-sm text-gray-700">
                      {person.location.country}
                    </span>
                  </div>
                </div>

                <button className="font-medium border border-gray-400 text-gray-700 transition ease-linear hover:bg-gray-200 hover:border-gray-200 rounded-full px-4 py-2 text-sm">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
