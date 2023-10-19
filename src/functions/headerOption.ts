import { GoBackVisible, HeaderVisible, MenuVisible } from "@/constants/headerOptions";

export const GoBack = (path: string) => {
  return GoBackVisible.includes(path);
};
export const Menu = (path: string) => {
  return MenuVisible.includes(path);
};
export const Header = (path: string) => {
  return HeaderVisible.includes(path);
};
