type __VLS_Props = {
    src: string;
    srcPlaceholder?: string;
    srcset?: string;
    intersectionOptions?: Object;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: (image: HTMLImageElement) => any;
    intersect: () => any;
    load: (image: HTMLImageElement) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onError?: ((image: HTMLImageElement) => any) | undefined;
    onIntersect?: (() => any) | undefined;
    onLoad?: ((image: HTMLImageElement) => any) | undefined;
}>, {
    srcPlaceholder: string;
    intersectionOptions: Object;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, HTMLImageElement>;
export default _default;
