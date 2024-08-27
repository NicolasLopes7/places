export const SITE_TITLE = "Places";
export const SITE_DESCRIPTION = "places I've been.";

export interface MenuItem {
  label: string;
  url: string;
}

export const menuItems: MenuItem[] = [
  {
    label: "now",
    url: "/",
  },
  {
    label: "places",
    url: "/places",
  },
  {
    label: "go back home",
    url: "https://nicolaslopes.space/",
  },
];
