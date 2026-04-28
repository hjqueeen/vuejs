<template>
  <BaseCard :title="$t('learning.panelTitle')">
    <div class="learning-panel">
      <p><strong>{{ $t("learning.counter") }}:</strong> {{ counter }}</p>
      <p><strong>{{ $t("learning.doubled") }}:</strong> {{ doubledCounter }}</p>
      <p><strong>{{ $t("learning.keyword") }}:</strong> {{ keyword }}</p>
      <p><strong>{{ $t("learning.keywordLength") }}:</strong> {{ keywordLength }}</p>

      <div class="button-row">
        <button @click="decrement">{{ $t("learning.actions.decrement") }}</button>
        <button @click="increment">{{ $t("learning.actions.increment") }}</button>
        <button @click="incrementAsync">{{ $t("learning.actions.incrementAsync") }}</button>
        <button @click="commitIncrement">{{ $t("learning.actions.commitIncrement") }}</button>
      </div>

      <div class="button-row">
        <button @click="setCounter(counter + 10)">{{ $t("learning.actions.plusTen") }}</button>
        <button @click="setCounter(0)">{{ $t("learning.actions.reset") }}</button>
      </div>

      <KeywordInput v-model="keywordProxy" :label="$t('learning.keywordLabel')" />
    </div>
  </BaseCard>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BaseCard from "@/components/common/BaseCard.vue";
import KeywordInput from "@/components/learning/KeywordInput.vue";

export default {
  name: "LearningPanel",
  components: { BaseCard, KeywordInput },
  computed: {
    ...mapGetters("learning", ["counter", "keyword", "doubledCounter", "keywordLength"]),
    // computed getter/setter 데모: 읽기(get) + 쓰기(set)
    keywordProxy: {
      get() {
        return this.keyword;
      },
      set(value) {
        this.setKeyword(value);
      },
    },
  },
  methods: {
    ...mapActions("learning", ["increment", "decrement", "incrementAsync", "setKeyword", "setCounter"]),
    commitIncrement() {
      this.$store.commit("learning/INCREMENT");
    },
  },
};
</script>
