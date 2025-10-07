
import GolangIcon from "@/icons/tech/Golang.astro";
import HTMXIcon from "@/icons/tech/HTMX.astro";
import TailwindIcon from "@/icons/tech/Tailwind.astro";
import TemplIcon from "@/icons/tech/Templ.astro";

export interface TagDefinition {
  id: string;
  label: string;
  chipClass: string;
  icon: any;
  iconClass: string;
  labelClass?: string;
}

export const TAGS = {
  GO: {
    id: "GO",
    label: "Go",
    chipClass: "bg-[#045D75] text-white",
    icon: GolangIcon,
    iconClass: "size-4 text-white",
  },
  HTMX: {
    id: "HTMX",
    label: "htmx",
    chipClass: "bg-white text-[#1E293B]",
    icon: HTMXIcon,
    iconClass: "size-4 text-[#1E293B]",
  },
  TEMPL: {
    id: "TEMPL",
    label: "templ",
    chipClass: "bg-[#1C1F15] text-[#66D0DD]",
    icon: TemplIcon,
    iconClass: "size-4 text-[#DBBD30]",
  },
  TAILWINDCSS: {
    id: "TAILWINDCSS",
    label: "Tailwind CSS",
    chipClass: "bg-[#0F172A] text-[#38BDF8]",
    icon: TailwindIcon,
    iconClass: "size-4 text-[#38BDF8]",
  },
} satisfies Record<string, TagDefinition>;

export type ProjectTagKey = keyof typeof TAGS;
export type ProjectTag = (typeof TAGS)[ProjectTagKey];
