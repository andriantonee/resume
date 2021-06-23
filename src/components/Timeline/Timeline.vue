<template>
  <div class="timeline">
    <slot></slot>
  </div>  
</template>

<script>
export default {
  name : 'Timeline',
}
</script>

<style lang="scss" scoped>
  .timeline {
    @apply relative;
    @apply w-full;
    @apply m-1;
    @apply p-1;

    &::before {
      content: '';
      @apply absolute;
      @apply bg-calypso;
      @apply w-1;
      @apply bottom-0;
      @apply top-0;
      @apply z-0;
    }
  }

  @screen md {
    .timeline {
      @apply m-3;
      @apply p-2;
    }
  }
</style>

