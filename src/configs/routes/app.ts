const route = <T extends string>(path: T) => `${path}` as const;

const profile = <T extends string>(path: T) => route(`/profile${path}`);
const membersProfile = <T extends string>(path: T) =>
  profile(`/members-profile${path}`);

const auth = <T extends string>(path: T) => route("/auth" + path);
const login = <T extends string>(path: T) => auth("/login" + path);
const register = <T extends string>(path: T) => auth("/register" + path);
const forgotPassword = <T extends string>(path: T) =>
  auth("/forgot-password" + path);
const resetPassword = <T extends string>(path: T) =>
  auth("/reset-password" + path);
const twoFA = <T extends string>(path: T) => auth("/2fa" + path);
const verifyEmail = <T extends string>(path: T) => auth("/verify-email" + path);
const changePassword = <T extends string>(path: T) =>
  auth("/change-password" + path);

const wallet = <T extends string>(path: T) => route("/wallet" + path);

export const APP_ROUTES = {
  home: route("/"),
  dashboard: {
    root: route("/dashboard"),
    finance: route("/finance"),
    hrManager: route("/hr-manager"),
  },
  login: route("/login"),
  register: route("/register"),
  profile: {
    root: profile(""),
    myProfile: profile("/my-profile"),
    membersProfile: {
      root: membersProfile(""),
      teams: {
        root: membersProfile("/teams"),
        tab: (tab: string) => membersProfile(`/teams?tab=${tab}`),
      },
      sales: {
        root: membersProfile("/sales"),
        tab: (tab: string) => membersProfile(`/sales?tab=${tab}`),
      },
    },
  },
  allMembers: {
    root: route("/all-members"),
    tab: (tab: string) => route(`/all-members?tab=${tab}`),
  },
  genealogy: route("/genealogy"),
  referrals: {
    root: route("/referrals"),
    tab: (tab: string) => route(`/referrals?tab=${tab}`),
  },
  plans: route("/plans"),
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
      v3: forgotPassword("/v3"),
      v4: forgotPassword("/v4"),
    },
    resetPassword: {
      root: resetPassword(""),
      v1: resetPassword("/v1"),
      v2: resetPassword("/v2"),
    },
    changePassword: {
      root: changePassword(""),
      v1: changePassword("/v1"),
    },
    twoFA: {
      root: twoFA("/2fa"),
      v1: twoFA("/v1"),
      v2: twoFA("/v2"),
    },
  },
  faqs: route("/faqs"),
  wallet: {
    root: wallet(""),
    deposit: wallet("/deposit"),
    withdraw: wallet("/withdraw"),
    transfer: wallet("/transfer"),
  },
};
