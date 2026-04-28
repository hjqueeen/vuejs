<template>
  <BaseCard title="Vuex/Props/Emit 학습 패널">
    <div class="learning-panel">
      <p><strong>counter:</strong> {{ counter }}</p>
      <p><strong>doubled(getter):</strong> {{ doubledCounter }}</p>
      <p><strong>keyword(getter):</strong> {{ keyword }}</p>
      <p><strong>keywordLength(getter):</strong> {{ keywordLength }}</p>

      <div class="button-row">
        <button @click="decrement">-1 (action)</button>
        <button @click="increment">+1 (action)</button>
        <button @click="incrementAsync">+1 async action</button>
        <button @click="commitIncrement">+1 direct mutation</button>
      </div>

      <div class="button-row">
        <button @click="setCounter(counter + 10)">+10 (action -> mutation)</button>
        <button @click="setCounter(0)">reset (setter)</button>
      </div>

      <KeywordInput v-model="keywordProxy" label="props/emit(v-model) 데모" />
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
