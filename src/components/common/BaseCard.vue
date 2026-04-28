<template>
  <section class="base-card">
    <header v-if="title" class="base-card__header">
      <h3>{{ title }}</h3>
      <slot name="actions" />
    </header>
    <div class="base-card__content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
