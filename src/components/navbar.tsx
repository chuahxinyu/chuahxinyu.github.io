import { Mail, Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { FaGithub } from "react-icons/fa";
import { NavItem, SocialLink } from "@/types";

const NAV_ITEMS: NavItem[] = [
  {
    title: "Projects",
    href: "/projects",
  },
];

const getIconStyles = () => {
  return "h-6 w-6"
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: <FaGithub className={getIconStyles()} />,
    alt: "Find cindyc-dev on Github",
    href: "",
  },
  {
    icon: <Mail/>,
    alt: "Email cindyc-dev",
    href: ""
  }
];

const Navbar = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 justify-between w-full">
        <Logo />
        <div className="flex gap-6">
          {NAV_ITEMS.map((navItem) => (
            <Link
              href={navItem.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
              key={`${navItem.title}-${navItem.href}`}
            >
              {navItem.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((socialLink) => (
            <Link href={socialLink.href} key={socialLink.href}>
              {socialLink.icon}
              <span className="sr-only">{socialLink.alt}</span>
            </Link>
          ))}
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-6">
              <SheetTrigger asChild>
                <Logo />
              </SheetTrigger>
              {NAV_ITEMS.map((navItem) => (
                <SheetTrigger key={`${navItem.title}-${navItem.href}`} asChild>
                  <Link
                    href={navItem.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {navItem.title}
                  </Link>
                </SheetTrigger>
              ))}
            </div>
            <div className="flex flex-row gap-6">
              {SOCIAL_LINKS.map((socialLink) => (
                <Link href={socialLink.href} key={socialLink.href}>
                  {socialLink.icon}
                  <span className="sr-only">{socialLink.alt}</span>
                </Link>
              ))}
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
