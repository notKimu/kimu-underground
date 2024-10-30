import { register, getLocaleFromNavigator, init } from "svelte-i18n";

register("en-US", () => import("../translations/en.json"));
register("es", () => import("../translations/es.json"));

init({
  fallbackLocale: "en-US",
  initialLocale: getLocaleFromNavigator(),
});
