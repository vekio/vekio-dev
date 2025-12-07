
import GolangIcon from "@/icons/tech/Golang.astro";
import HTMXIcon from "@/icons/tech/HTMX.astro";
import TailwindIcon from "@/icons/tech/Tailwind.astro";
import TemplIcon from "@/icons/tech/Templ.astro";
import NixIcon from "@/icons/tech/Nix.astro";
import TerraformIcon from "@/icons/tech/Terraform.astro";
import DockerIcon from "@/icons/tech/Docker.astro";
import AnsibleIcon from "@/icons/tech/Ansible.astro";
import TraefikIcon from "@/icons/tech/Traefik.astro";
import CloudflareIcon from "@/icons/tech/Cloudflare.astro";

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
    chipClass: "bg-[#1C2A44] text-white",
    icon: TailwindIcon,
    iconClass: "size-4 text-[#38BDF8]",
  },
  NIX: {
    id: "NIX",
    label: "Nix",
    chipClass: "bg-[#001628] text-white",
    icon: NixIcon,
    iconClass: "size-4 text-[#67E8F9]",
  },
  TERRAFORM: {
    id: "TERRAFORM",
    label: "Terraform",
    chipClass: "bg-[#1D1435] text-[#C084FC]",
    icon: TerraformIcon,
    iconClass: "size-4 text-[#C084FC]",
  },
  DOCKER: {
    id: "DOCKER",
    label: "Docker",
    chipClass: "bg-[#0A192F] text-white",
    icon: DockerIcon,
    iconClass: "size-4 text-[#3B82F6]",
  },
  ANSIBLE: {
    id: "ANSIBLE",
    label: "Ansible",
    chipClass: "bg-[#1B1B1B] text-[#FBBF24]",
    icon: AnsibleIcon,
    iconClass: "size-4 text-[#FBBF24]",
  },
  TRAEFIK: {
    id: "TRAEFIK",
    label: "Traefik",
    chipClass: "bg-[#1B242E] text-white",
    icon: TraefikIcon,
    iconClass: "size-4 text-[#24A1C1]",
  },
  CLOUDFLARE: {
    id: "CLOUDFLARE",
    label: "Cloudflare",
    chipClass: "bg-[#2F1D10] text-white",
    icon: CloudflareIcon,
    iconClass: "size-4 text-[#F97316]",
  },
} satisfies Record<string, TagDefinition>;

export type ProjectTagKey = keyof typeof TAGS;
export type ProjectTag = (typeof TAGS)[ProjectTagKey];
