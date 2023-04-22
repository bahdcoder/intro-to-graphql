import { createContext, useContext } from "react";

import { Person } from "../types";

export interface DataContextInterface {
  peopleYouMayKnow: Person[];
  doYouKnow?: Person;
  peopleYouMayKnowSidebar: Person[];
}

export const DataContext = createContext<DataContextInterface>({
  peopleYouMayKnow: [],
  peopleYouMayKnowSidebar: [],
});

export function useData() {
  return useContext(DataContext);
}
