import Axios from "axios";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient();

export const client = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export function fetchSuggestedFriends(params?: any) {
  return client.get(`/suggested-friends`, {
    params,
  });
}

export function graphqlFetchSuggestedFriends(query: string) {
  return client.post(`/graphql`, {
    query,
  });
}
