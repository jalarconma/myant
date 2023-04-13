import { RouteObject } from 'react-router-dom';

export type RouteObjectExt = RouteObject & {
  linkName: string;
}