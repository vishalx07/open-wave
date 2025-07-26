const route = <T extends string>(path: T) => `${path}` as const;

const publicProfile = <T extends string>(path: T) =>
  route("/public-profile" + path);
const profiles = <T extends string>(path: T) =>
  publicProfile("/profiles" + path);
const projects = <T extends string>(path: T) =>
  publicProfile("/projects" + path);

export const APP_ROUTES = {
  home: route(""),
  dashboard: route("/dashboard"),
  publicProfile: {
    root: publicProfile(""),
    profiles: {
      root: profiles(""),
      default: profiles("/default"),
      creator: profiles("/creator"),
      company: profiles("/company"),
      nft: profiles("/nft"),
      blogger: profiles("/blogger"),
      crm: profiles("/crm"),
      gamer: profiles("/gamer"),
      feeds: profiles("/feeds"),
      plain: profiles("/plain"),
      modal: profiles("/modal"),
    },
    projects: {
      root: projects(""),
      "3Columns": projects("/3-columns"),
      "2Columns": projects("/2-columns"),
    },
    works: publicProfile("/works"),
    teams: publicProfile("/teams"),
    network: publicProfile("/network"),
    activity: publicProfile("/activity"),
    campaigns: {
      root: publicProfile("/campaigns"),
      card: publicProfile("/campaigns/card"),
      list: publicProfile("/campaigns/list"),
    },
    empty: publicProfile("/empty"),
  },
};
