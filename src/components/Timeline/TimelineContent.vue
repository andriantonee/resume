<template>
  <div class="timeline-content">
    <div class="time time__wrapper">
      <p>
        <time class="time time__text">{{ from }}</time>
        &nbsp;-&nbsp;
        <time class="time time__text">{{ to }}</time>
      </p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TimelineContent",
  props: {
    from: {
      required: true,
      type: String
    },
    to: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.time {
  &__wrapper {
    @apply text-calypso;
    @apply w-full;
    @apply flex;
    @apply items-center;
  }
  &__text {
    @apply text-xl;
    @apply font-bold;
  }
}

.timeline-content {
  @apply relative;
  @apply w-full;
  @apply p-3;
  @apply ml-1;

  &::before {
    content: "";
    @apply w-5;
    @apply h-5;
    @apply rounded-full;
    @apply border-4;
    @apply border-calypso;
    @apply bg-porcelain;
    @apply absolute;
    @apply z-10;
    left: -0.75rem;
    top: 1.5rem;
  }
}

@screen md {
  .timeline-content {
    @apply ml-3;
    @apply p-5;

    &::before {
      @apply border-4;
      left: -1.25rem;
    }
  }
}
</style>