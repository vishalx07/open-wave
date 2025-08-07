import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(
      (rule: { test: { test: (arg0: string) => any } }) =>
        rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              prettier: false,
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: { removeViewBox: false },
                    },
                  },
                ],
              },
              titleProp: true,
            },
          },
        ],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
