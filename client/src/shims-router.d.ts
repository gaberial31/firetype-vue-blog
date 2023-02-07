export {};

declare module "vue-router" {
  interface RouteMeta {
    title: string;
    header: boolean;
    footer: boolean;
    requiresAuth: boolean;
    requiresAdmin: boolean;
  }
}
