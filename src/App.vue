<template>
  <router-view />
</template>

<style lang="scss">
@use "@/styles/_variables.scss" as *;

#app {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-top: $spacing-large;
  padding-bottom: $spacing-large;
}

@media (max-width: 1200px) {
  #app {
    padding: $spacing-medium;
  }
}
</style>