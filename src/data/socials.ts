import GithubIcon from "@/icons/Github.astro";
import LinkedInIcon from "@/icons/LinkedIn.astro";
import MailIcon from "@/icons/Mail.astro";

export interface SocialLink {
  href: string;
  label: string;
  icon: any;
}

export const primaryEmail = "alberto@vekio.dev";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/vekio/",
    label: "GitHub",
    icon: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/alberto-castaneiras/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: `mailto:${primaryEmail}`,
    label: primaryEmail,
    icon: MailIcon,
  },
];
