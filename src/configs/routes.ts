const route = <T extends string>(path: T) => `${path}` as const;

export const APP_ROUTES = {
  home: route(""),
  dashboard: route("/dashboard"),
};
