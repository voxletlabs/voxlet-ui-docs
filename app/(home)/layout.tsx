import { HomeLayout } from "fumadocs-ui/home-layout";
import { baseOptions } from "@/app/layout.config";
import type { ReactNode } from "react";
import Footer from "@/components/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <HomeLayout
        {...baseOptions}
        githubUrl="https://github.com/voxletlabs/"
      >
        {children}
        <Footer />
      </HomeLayout>
    </div>
  );
}
