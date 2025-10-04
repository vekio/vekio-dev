import GolangIcon from "@/icons/tech/Golang.astro"
import HTMXIcon from "@/icons/tech/HTMX.astro"
import TemplIcon from "@/icons/tech/Templ.astro"
import TailwindIcon from "@/icons/tech/Tailwind.astro"

export interface TagDefinition {
  id: string;
  label: string;
  class: string;
  icon?: any;
}

const PROJECT_TAGS = {
  GO: {
    id: "GO",
    label: "Golang",
    class: "bg-[#045D75] text-white",
    icon: GolangIcon,
  },
  HTMX: {
    id: "HTMX",
    label: "htmx",
    class: "bg-white text-black",
    icon: HTMXIcon,
  },
  TEMPL: {
    id: "TEMPL",
    label: "templ",
    class: "bg-[#242526] text-[#66D0DD]",
    icon: TemplIcon,
  },
  TAILWINDCSS: {
    id: "TAILWINDCSS",
    label: "Tailwind CSS",
    class: "bg-[#0F172A] text-[#38BDF8]",
    icon: TailwindIcon,
  },
} satisfies Record<string, TagDefinition>;

export type ProjectTagKey = keyof typeof PROJECT_TAGS;
export type ProjectTag = (typeof PROJECT_TAGS)[ProjectTagKey];

export const TAGS = PROJECT_TAGS;
