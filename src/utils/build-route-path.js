export function buildRoutePath(path) {
  const routeParameterRegex = /:([a-zA-Z]+)/g;

  console.log(path.matchAll(routeParameterRegex));
}
