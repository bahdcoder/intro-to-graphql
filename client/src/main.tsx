import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { RouterProvider, Router, Route, RootRoute } from "@tanstack/router";

import { Root } from "./root.tsx";

import "./index.css";

import { Index } from "./pages/index.tsx";
import { SuggestedFriends } from "./pages/suggested-friends.tsx";
import { queryClient } from "./utils/client.ts";

export const rootRoute = new RootRoute({
  component: Root,
});

export const suggestedFriendsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/suggested-friends",
  component: SuggestedFriends,
});

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const routeTree = rootRoute.addChildren([indexRoute, suggestedFriendsRoute]);

const router = new Router({ routeTree });

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
