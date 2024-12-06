import { defineAsyncComponent } from "vue";
export async function getCategoryView() {
    const [appModule] = await Promise.all([import("./CategoryView.vue")]);
    return appModule.default;
}
export const CategoryView = defineAsyncComponent(getCategoryView);
