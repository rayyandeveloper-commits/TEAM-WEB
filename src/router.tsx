import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import IndexPage from "./routes/index";
import ErrorBoundary from "./components/ErrorBoundary";

// Root layout route with hydration boundaries
export const rootRoute = createRootRoute({
  component: () => (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  ),
});

// Main landing route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
});

// Assembly route tree
export const routeTree = rootRoute.addChildren([indexRoute]);

// Initialize TanStack router statically
export const router = createRouter({
  routeTree,
  basepath: "/",
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
