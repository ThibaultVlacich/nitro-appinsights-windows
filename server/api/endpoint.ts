import { create$fetchInterceptors } from "nitro-applicationinsights/runtime";

export default defineEventHandler((event) => {
  return $fetch("/api/dependency", {
    ...create$fetchInterceptors(event),
  });
});
