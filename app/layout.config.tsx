import { type DocsLayoutProps } from "fumadocs-ui/layout";
import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import { pageTree } from "@/app/source";
import { BookIcon, Heart, LayoutTemplateIcon } from "lucide-react";
import Image from "next/image";

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          className="size-6 [header_&]:size-5 hidden dark:block rounded"
          src={"https://voxlet-ui.vercel.app/logo/logo-dark-theme.svg"}
          alt="logo"
          height={100}
          width={100}
        />
        <Image
          className="size-6 [header_&]:size-5 dark:hidden rounded"
          src={"https://voxlet-ui.vercel.app/logo/logo-light-theme.svg"}
          alt="logo"
          height={100}
          width={100}
        />
        <span className="font-medium text-lg [.uwu_&]:hidden max-md:[header_&]:hidden">
          Voxlet UI Docs
        </span>
      </>
    ),
  },
  links: [
    {
      icon: <BookIcon />,
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "Get Template",
      url: "https://voxlet-ui.vercel.app/templates/voxlet-ui-docs",
      icon: <LayoutTemplateIcon />,
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
