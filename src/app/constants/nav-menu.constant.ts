import { privateRoutes, publicRoutes } from "../AppRoutes";
import { RouteObjectExt } from "../models/RouteObjectExt";

export const PRIVATE_MENU: RouteObjectExt[] = [
  privateRoutes[1],
];

export const PUBLIC_MENU: RouteObjectExt[] = [
  publicRoutes[1],
];