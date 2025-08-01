const route = <T extends string>(path: T) => `${path}` as const;

const publicProfile = <T extends string>(path: T) =>
  route(`/public-profile${path}`);
const profiles = <T extends string>(path: T) =>
  publicProfile(`/profiles${path}`);
const projects = <T extends string>(path: T) =>
  publicProfile(`/projects${path}`);

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

const myAccount = <T extends string>(path: T) => route("/my-account" + path);
const account = <T extends string>(path: T) => myAccount("/account" + path);
const billing = <T extends string>(path: T) => myAccount("/billing" + path);
const security = <T extends string>(path: T) => myAccount("/security" + path);
const members = <T extends string>(path: T) => myAccount("/members" + path);

export const APP_ROUTES = {
  home: route(""),
  dashboard: {
    root: route("/dashboard"),
    v1: route("/dashboard/v1"),
    v2: route("/dashboard/v2"),
  },
  login: route("/login"),
  register: route("/register"),
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
    teams: {
      root: publicProfile("/teams"),
      tab: (tab: string) => publicProfile(`/teams?tab=${tab}`),
    },
    sales: {
      root: publicProfile("/sales"),
      tab: (tab: string) => publicProfile(`/sales?tab=${tab}`),
    },
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
  myAccount: {
    root: myAccount(""),
    account: {
      root: account(""),
      getStarted: account("/get-started"),
      userProfile: account("/user-profile"),
      companyProfile: account("/company-profile"),
      settingsSidebar: account("/settings-sidebar"),
      settingsEnterprise: account("/settings-enterprise"),
      settingsPlain: account("/settings-plain"),
      settingsModal: account("/settings-modal"),
    },
    billing: {
      root: billing(""),
      basic: billing("/basic"),
      enterprise: billing("/enterprise"),
      plans: billing("/plans"),
      billingHistory: billing("/billing-history"),
    },
    security: {
      root: security(""),
      getStarted: security("/get-started"),
      overview: security("/overview"),
      allowedIPAddresses: security("/allowed-ip-addresses"),
      privacySettings: security("/privacy-settings"),
      deviceManagement: security("/device-management"),
      backupAndRestore: security("/backup-and-restore"),
      currentSessions: security("/current-sessions"),
      securityLog: security("/security-log"),
    },
    members: {
      root: members(""),
      teamsStater: members("/teams-starter"),
      teams: members("/teams"),
      teamInfo: members("/team-info"),
      membersStarter: members("/members-starter"),
      teamMembers: members("/team-members"),
      importMembers: members("/import-members"),
      roles: members("/roles"),
      permissionsToggler: members("/permissions-toggler"),
      permissionsCheck: members("/permissions-check"),
    },
    integrations: myAccount("/integrations"),
    notifications: myAccount("/notifications"),
    apiKeys: myAccount("/api-keys"),
    appearance: myAccount("/appearance"),
    inviteAFriend: myAccount("/invite-a-friend"),
    activity: myAccount("/activity"),
  },
};
