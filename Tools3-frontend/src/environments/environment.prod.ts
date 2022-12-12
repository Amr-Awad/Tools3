export const environment = {
  production: true,
  //@ts-ignore
  backendport: window["env"]["backendport"] || "default",
  //@ts-ignore
  debug: window["env"]["debug"] || true
};