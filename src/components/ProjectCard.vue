<template>
  <div class="project-card">
    <div class="project-card__title-wrapper">
      <h3 class="project-card__title">{{ title }} ({{ type }})</h3>
      <a class="project-card__link" :href="link">
        <font-awesome-icon
          :icon="['fas', 'link']"
          class="project-card__link-icon"
        />
      </a>
    </div>
    <p class="project-card__description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: String,
    type: String,
    description: String,
    link: {
      type: String,
      default: "",
    },
    images: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.project-card {
  @apply shadow;
  @apply rounded;
  @apply inline-block;
  @apply w-full;
  @apply p-2;
  @apply m-2;

  &__title-wrapper {
    @apply flex;
    @apply justify-between;
  }

  &__link {
    @apply cursor-pointer;

    &:hover {
      @apply text-gray-800;
    }
  }

  &__link-icon {
    @apply text-lg;
  }

  &__description {
    @apply text-xs;
  }
}
</style>
