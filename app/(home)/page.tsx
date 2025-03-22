import { HeroSection } from "@/components/Hero";
import { CopyInstall } from "@/components/copy-install";
import { Highlights } from "@/components/highlights";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="h-min-screen flex flex-col py-2">
        <HeroSection />

        <Highlights />

        <Separator />

        <section className="from-background to-secondary/50 flex w-full flex-col items-center justify-center gap-y-4 border-x border-b bg-gradient-to-b px-4 py-8 sm:gap-y-8 sm:px-0 md:py-12 lg:py-16">
          <h2 className="text-pretty text-center text-2xl font-extrabold dark:drop-shadow-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Start creating your docs now.
          </h2>
          <div className="flex flex-row gap-x-2">
            <Link href="/docs">
              <Button
                size={"lg"}
                className="rounded-full font-bold py-[1.52rem]"
              >
                Read the docs
              </Button>
            </Link>

            <CopyInstall className="hidden sm:flex" />
          </div>
        </section>
      </main>
    </>
  );
}
