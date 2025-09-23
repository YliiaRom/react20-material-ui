import HomePage from "@/pages/HomePage";

export const frontRoutes = {
  pages: {
    HomePage: {
      path: "",
      navigationPath: "/",
      meta: {
        title: "Home",
        isInMenu: true,
      },
    },
    ErrorBoundariesPage: {
      path: "error-boundaries",
      navigationPath: "/error-boundaries",
      meta: {
        title: "Error Boundaries",
        isInMenu: true,
      },
    },
  },
};
