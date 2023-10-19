import { GoBackVisible, MenuVisible } from "@/constants/headerOptions";

export const GoBack = (path: string) => {
  return GoBackVisible.includes(path);
};
export const Menu = (path: string) => {
  return MenuVisible.includes(path);
};
