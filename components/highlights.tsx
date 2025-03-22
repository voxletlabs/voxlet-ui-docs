import {
  Book,
  Search,
  Zap,
  Smartphone,
  Code,
  Settings,
  type LucideIcon,
} from "lucide-react";

import { Cross } from "@/icons/cross";

export function Highlights() {
  return (
    <>
      <div className="from-background to-secondary/50 flex w-full items-center justify-center border-x bg-gradient-to-b px-2 py-12 md:px-0 md:py-16 lg:py-20">
        <h2 className="text-pretty text-center text-2xl font-bold dark:opacity-90 dark:drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
          Why Choose Kaif UI Docs?
        </h2>
      </div>
      <div className="from-secondary/40 grid w-full grid-cols-1 border-b border-r bg-gradient-to-b to-transparent to-50% sm:grid-cols-2 md:grid-cols-3">
        <div className="relative">
          <Highlight title="Lightning-Fast Setup" icon={Zap}>
            Get started in minutes with a streamlined setup process designed to
            jumpstart your documentation.
          </Highlight>
          <Cross className="absolute -bottom-2 -right-[1px] hidden sm:block" />
        </div>
        <div className="relative">
          <Highlight title="Fully Customizable Design" icon={Settings}>
            Tailor every detail with ease—Kaif UI Docs adapts to your brand’s
            unique style and needs.
          </Highlight>
          <Cross className="absolute -bottom-2 -right-[1px] hidden md:block" />
        </div>
        <div className="relative">
          <Highlight title="Built with Next.js and TypeScript" icon={Code}>
            Leverage modern frameworks for a fast, scalable, and reliable
            documentation experience.
          </Highlight>
          <Cross className="absolute -bottom-2 -right-[1px] hidden sm:block md:hidden" />
        </div>

        <Highlight title="Responsive and Mobile-Friendly" icon={Smartphone}>
          Enjoy seamless usability across all devices, so your docs look great
          on any screen size.
        </Highlight>
        <Highlight title="Optimized for SEO" icon={Search}>
          Boost discoverability with SEO-ready pages to make your documentation
          easy to find and access.
        </Highlight>
        <Highlight title="Fuma Docs Integration" icon={Book}>
          Effortlessly organize and navigate content with Fuma Docs—built to
          make complex docs simple.
        </Highlight>
      </div>
    </>
  );
}

interface HighlightPros extends React.PropsWithChildren {
  title: string;
  icon: LucideIcon;
}

export function Highlight({ icon: IconComp, title, children }: HighlightPros) {
  return (
    <div className="h-full border-l border-t px-4 py-5 md:p-8">
      <div className="text-secondary-foreground mb-3 flex flex-row items-center gap-x-2 md:mb-4">
        <IconComp className="size-3 md:size-4" />
        <h2 className="text-xs font-normal md:text-sm md:font-medium">
          {title}
        </h2>
      </div>
      <p className="text-pretty text-sm md:text-base">{children}</p>
    </div>
  );
}
