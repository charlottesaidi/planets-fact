<template>

      <component :is="layout">
          <router-view />
      </component>

</template>

<script>
const defaultLayout = 'default';
export default {
    name: "App",
    computed: {
        layout() {
            return (this.$route.meta.layout || defaultLayout)
        }
    }
}
</script>

<style>
  @import './assets/css/style.css';
</style>
