import { type Metadata } from "next";

const appName = "Open Wave";

export const ROOT_METADATA: Metadata = {
  title: {
    default: appName,
    template: `%s - ${appName}`,
  },
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "32x32",
      url: "/brand/favicon.ico",
    },
  ],
};
