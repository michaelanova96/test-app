import { defineAsyncComponent } from "vue";

import type CategoryViewSync from "./CategoryView.vue";
export async function getCategoryView(): Promise<
  typeof CategoryViewSync
> {
  const [appModule] = await Promise.all([import("./CategoryView.vue")]);

  return appModule.default;
}
export const CategoryView = defineAsyncComponent(getCategoryView);
