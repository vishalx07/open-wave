const route = <T extends string>(path: T) => `${path}` as const;

const publicProfile = <T extends string>(path: T) =>
  route("/public-profile" + path);
const profiles = <T extends string>(path: T) =>
  publicProfile("/profiles" + path);
const projects = <T extends string>(path: T) =>
  publicProfile("/projects" + path);

const myAccount = <T extends string>(path: T) => route("/my-account" + path);
const account = <T extends string>(path: T) => myAccount("/account" + path);
const billing = <T extends string>(path: T) => myAccount("/billing" + path);
const security = <T extends string>(path: T) => myAccount("/security" + path);
const members = <T extends string>(path: T) => myAccount("/members" + path);

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
