import React from "react";
import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { img } from "@/data/images";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

export default function Logo({ tone = "dark", className }) {
  return (
    <Link
      to="/"
      aria-label={`${site.name} — home`}
      className={cn("group inline-flex shrink-0 items-center", className)}
    >
      <Image
        src={img.logo}
        alt={`${site.name} — dealer-grade auto repair workshop in Al Quoz Industrial 4, Dubai`}
        fittingType="fit"
        originWidth={318}
        originHeight={152}
        className={cn(
          "h-10 w-[84px] transition-opacity duration-300 group-hover:opacity-80 lg:h-12 lg:w-[100px]",
          tone === "dark" && "brightness-0 invert"
        )}
      />
    </Link>
  );
}