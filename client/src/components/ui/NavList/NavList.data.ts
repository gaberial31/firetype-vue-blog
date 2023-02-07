import { navItem } from "./NavList.interface";

const navItems: navItem[] = [
  {
    label: "Home",
    url: "/",
    requireAuth: false,
  },

  {
    label: "Blogs",
    url: "/blogs",
    requireAuth: false,
  },

  {
    label: "Create post",
    url: "/create-post",
    requireAuth: false,
  },

  {
    label: "Login/Register",
    url: "/authorization/signin",
    requireAuth: true,
  },
];

export default navItems;
