<template>
  <div class="keyword-input">
    <label>{{ label }}</label>
    <input :value="value" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: "KeywordInput",
  props: {
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "검색어",
    },
  },
};
</script>
