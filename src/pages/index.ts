import loadable from "@loadable/component";

export const Root = loadable(() => import("./Root"));
export const NotFound = loadable(() => import("./NotFound"));
export const Auth = {
  Login: loadable(() => import("./auth/Login")),
  Register: loadable(() => import("./auth/Register"))
};
