import React from "react";
import { Logo } from "./components/Logo";
import { DocsThemeConfig } from "nextra-theme-docs";

const description = `Documentation for Namada, a Proof-of-Stake L1 for interchain asset-agnostic privacy.`;

const config: DocsThemeConfig = {
  primaryHue: 180,
  useNextSeoProps() {
    return {
      titleTemplate: "Namada Documentation - %s",
      description,
      defaultDescription: description,
      canonical: "https://docs.namada.net",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  ),
  logo: <Logo />,
  project: {
    link: "https://github.com/anoma/namada",
  },
  chat: {
    link: "https://discord.gg/namada",
  },
  docsRepositoryBase:
    "https://github.com/anoma/namada-docs/blob/master/packages/docs",
  footer: {
    text: "Namada",
  },
};

export default config;