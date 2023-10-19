import { GoBackVisible, HeaderVisible, MenuVisible } from "@/constants/headerOptions";

export const isVisibleGoBack = (path: string) => {
  return GoBackVisible.includes(path);
};
export const isVisibleMenu = (path: string) => {
  return MenuVisible.includes(path);
};
export const isVisibleHeader = (path: string) => {
  return HeaderVisible.includes(path);
};
