<template>
  <div class="spinner">
    <div class="spinner__border" role="status">
      <span class="spinner__text">Loading...</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__border {
    width: 34px;
    height: 34px;
    border: 6px solid #eeeeee;
    border-top: 6px solid #282828;
    border-radius: 50%;
    animation: spinner__spin 1s linear infinite;
  }

  &__text {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }

  @keyframes spinner__spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
