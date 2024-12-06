import { onMounted, computed, watch } from "vue";
import { useCategoryStore } from "../stores/category";
import { useRoute } from "vue-router";
import LazyImage from "../components/LazyImage.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const store = useCategoryStore();
const products = computed(() => {
    return store.products;
});
const isLoading = computed(() => {
    return store.loading;
});
const isError = computed(() => {
    return store.error;
});
onMounted(() => {
    fetchProducts();
});
watch(() => String(route.params.id), (categoryId) => {
    store.fetchProducts(String(categoryId));
}, { immediate: true });
const fetchProducts = () => {
    store.fetchProducts(String(route.params.id));
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    (__VLS_ctx.$route.params.id);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("bg-yellow text-black") }, });
    if (__VLS_ctx.isLoading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    else if (__VLS_ctx.isError) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (__VLS_ctx.fetchProducts) }, });
    }
    else {
        for (const [product] of __VLS_getVForSourceType((__VLS_ctx.products))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((product.id)), });
            (product.id);
            (product.name);
            (product.subtitle);
            // @ts-ignore
            [LazyImage, LazyImage,];
            // @ts-ignore
            const __VLS_0 = __VLS_asFunctionalComponent(LazyImage, new LazyImage({ width: ("800"), height: ("1133"), ...{ class: ("h-[300px] w-auto") }, alt: ((product.name)), srcset: ((`
        /images/products/${product.image} 400w,
        /images/products/${product.image} 800w
        /images/products/${product.image} 1600w`)), sizes: (('(max-width: 150px) 200px, 400px, 800p')), src: ((`/images/products/${product.image}`)), fetchpriority: ("high"), }));
            const __VLS_1 = __VLS_0({ width: ("800"), height: ("1133"), ...{ class: ("h-[300px] w-auto") }, alt: ((product.name)), srcset: ((`
        /images/products/${product.image} 400w,
        /images/products/${product.image} 800w
        /images/products/${product.image} 1600w`)), sizes: (('(max-width: 150px) 200px, 400px, 800p')), src: ((`/images/products/${product.image}`)), fetchpriority: ("high"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        }
    }
    __VLS_styleScopedClasses['bg-yellow'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['h-[300px]'];
    __VLS_styleScopedClasses['w-auto'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            LazyImage: LazyImage,
            products: products,
            isLoading: isLoading,
            isError: isError,
            fetchProducts: fetchProducts,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
