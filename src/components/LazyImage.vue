<template>
  <img
    :ref="'root'"
    :src="srcImage"
    :srcset="srcsetImage"
    v-bind="{ ...attrs }"
    :class="[attrs.class, 'v-lazy-image', { 'v-lazy-image-loaded': loaded }]"
    @load="onLoad"
    @rror="onError"
  >
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, useAttrs } from 'vue';

const props = withDefaults(
  defineProps<{
    src: string;
    srcPlaceholder?: string;
    srcset?: string | null;
    intersectionOptions?: object;
  }>(),
  {
    srcset: null,
    srcPlaceholder:
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmlld0JveD0iMCAwIDMwMCAzMDAiCiAgIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIgogICB3aWR0aD0iMzAwIgogICBoZWlnaHQ9IjMwMCIKICAgc3R5bGU9InNoYXBlLXJlbmRlcmluZzogYXV0bzsgZGlzcGxheTogYmxvY2s7IGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTpkb2NuYW1lPSJsb2FkZXIuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMiAoMDkxZTIwZSwgMjAyMy0xMS0yNSkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXcyIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgICAgaW5rc2NhcGU6em9vbT0iMC43ODY2NjY2NyIKICAgICBpbmtzY2FwZTpjeD0iNzMuNzI4ODE0IgogICAgIGlua3NjYXBlOmN5PSIxNTQuNDQ5MTUiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNDQwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjkwMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iNzA5IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIgLz4KICA8ZwogICAgIGlkPSJnMiIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ni4wMDAzMTUsOTUuOTk5ODYyKSI+CiAgICA8Y2lyY2xlCiAgICAgICB4PSIxNzUiCiAgICAgICB5PSIxNzUiCiAgICAgICBzdHJva2UtZGFzaGFycmF5PSIxNjQuOTM0LCA1Ni45Nzc5IgogICAgICAgcj0iMzUiCiAgICAgICBzdHJva2Utd2lkdGg9IjgiCiAgICAgICBzdHJva2U9IiM1MmI0ODAiCiAgICAgICBmaWxsPSJub25lIgogICAgICAgY3k9IjUwIgogICAgICAgY3g9IjUwIgogICAgICAgaWQ9ImNpcmNsZTEiPgogICAgICA8YW5pbWF0ZVRyYW5zZm9ybQogICAgICAgICBrZXlUaW1lcz0iMDsxIgogICAgICAgICB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIgogICAgICAgICBkdXI9IjAuOHMiCiAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIgogICAgICAgICB0eXBlPSJyb3RhdGUiCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgLz4KICAgIDwvY2lyY2xlPgogICAgPGcKICAgICAgIGlkPSJnMSIgLz4KICA8L2c+Cjwvc3ZnPgo=',
    intersectionOptions: () => ({})
  }
);

const emit = defineEmits<{
  intersect: [];
  load: [image: HTMLImageElement];
  error: [image: HTMLImageElement];
}>();

const attrs = useAttrs();

const root = ref<HTMLImageElement>();
const observer = ref<IntersectionObserver | null>(null);
const intersected = ref(false);
const loaded = ref(false);

// Computed
const srcImage = computed((): string => (intersected.value && props.src ? props.src : props.srcPlaceholder));
const srcsetImage = computed((): string | undefined => (intersected.value && props.srcset ? props.srcset : undefined));

// Methods
const onLoad = (): void => {
  if (root.value && root.value instanceof HTMLImageElement && root.value.src !== props.srcPlaceholder) {
    loaded.value = true;
    emit('load', root.value);
  }
};
const onError = (): void => {
  if (root.value) {
    emit('error', root.value);
  }
};

// Hooks
onMounted(() => {
  if ('IntersectionObserver' in window) {
    observer.value = new IntersectionObserver((entries) => {
      const image = entries[0];
      if (image.isIntersecting) {
        intersected.value = true;
        observer.value?.disconnect();
        emit('intersect');
      }
    }, props.intersectionOptions);
    if (root.value) {
      observer.value.observe(root.value);
    }
  }
});

onBeforeUnmount(() => {
  if ('IntersectionObserver' in window && observer.value) {
    observer.value.disconnect();
  }
});
</script>
