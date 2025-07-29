const route = <T extends string>(path: T) => `${path}` as const;

const publicProfile = <T extends string>(path: T) =>
  route("/public-profile" + path);
const profiles = <T extends string>(path: T) =>
  publicProfile("/profiles" + path);
const projects = <T extends string>(path: T) =>
  publicProfile("/projects" + path);

const auth = <T extends string>(path: T) => route("/auth" + path);
const login = <T extends string>(path: T) => auth("/login" + path);
const register = <T extends string>(path: T) => auth("/register" + path);
const forgotPassword = <T extends string>(path: T) =>
  auth("/forgot-password" + path);
const resetPassword = <T extends string>(path: T) =>
  auth("/reset-password" + path);
const twoFA = <T extends string>(path: T) => auth("/2fa" + path);
const verifyEmail = <T extends string>(path: T) => auth("/verify-email" + path);

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
  auth: {
    root: route("/auth"),
    login: {
      root: login(""),
      v1: login("/v1"),
      v2: login("/v2"),
      v3: login("/v3"),
      v4: login("/v4"),
    },
    register: {
      root: register(""),
      v1: register("/v1"),
      v2: register("/v2"),
      v3: register("/v3"),
      v4: register("/v4"),
    },
    verifyEmail: {
      root: verifyEmail(""),
      v1: verifyEmail("/v1"),
      v2: verifyEmail("/v2"),
    },
    forgotPassword: {
      root: forgotPassword(""),
      v1: forgotPassword("/v1"),
      v2: forgotPassword("/v2"),
    },
    resetPassword: {
      root: resetPassword(""),
      v1: resetPassword("/v1"),
      v2: resetPassword("/v2"),
    },
    twoFA: {
      root: twoFA("/2fa"),
      v1: twoFA("/v1"),
      v2: twoFA("/v2"),
    },
  },
};
