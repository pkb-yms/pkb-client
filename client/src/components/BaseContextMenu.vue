<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'BaseContextMenu',
  components: {},
  setup() {
    const contextMenu = ref<HTMLElement>();
    const isShow = ref(false);
    const open = () => (isShow.value = true);
    const close = () => (isShow.value = false);
    const toggle = () => (isShow.value ? close() : open());

    return { contextMenu, isShow, toggle, open, close };
  },
});
</script>

<template>
  <ul ref="contextMenu" class="context-menu" :class="{ show: isShow }">
    <slot></slot>
  </ul>
</template>

<style lang="scss" scoped>
ul.context-menu {
  display: none;

  width: 100%;
  min-width: 128px;

  padding: 0;
  margin: 0;
  margin-top: 6px;

  position: absolute;
  right: -10px;

  list-style: none;
  background: #ffffff;
  border: 1px solid #e9ecef;
  box-sizing: border-box;
  box-shadow: 0px 12px 24px rgba(141, 141, 141, 0.12);
  border-radius: 12px;

  &.show {
    display: flex;
    flex-direction: column;
  }

  &.user-menus {
    padding: 8px 0;
  }
}
</style>
