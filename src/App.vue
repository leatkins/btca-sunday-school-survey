<script setup lang="ts">
import questions from "./datasets/questions.json";
import DisplayQuestion from "./components/DisplayQuestion.vue";
import Footer from "./components/Footer.vue";
import { Button } from '@/components/ui/button'

const props = defineProps({
  questions: {
    type: Array,
    default: () => questions,
  },
});
</script>

<template>
  <div class="app-container mx-auto w-full">
    <div class="header-container py-4 pt-8 mb-4">
      <h1
        class="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance"
      >
        Bethesda Temple Church of Alton
      </h1>
      <p class="text-center text-sm mt-2">SUNDAY SCHOOL SURVEY</p>
      <p class="text-center text-lg">
        Please take a moment to complete the survey. <br />
        <span class="text-sm"
          >Your feedback is valuable to us and will help improve our Sunday
          School program.</span
        >
      </p>
    </div>

    <div class="py-8 mx-auto px-6 container bg-secondary">
      <DisplayQuestion
        v-for="question in props.questions"
        :key="question.id"
        :question="question"
        class="mb-4"
      />
      <div class="py-8 mx-auto text-center text-2xl w-full">
        <Button>Submit Survey</Button>
      </div>

    </div>
    <Footer />

  </div>
</template>

<style scoped>
.header-container {
  background-color: var(--color-white);
  color: var(--color-on-primary);
}
</style>
