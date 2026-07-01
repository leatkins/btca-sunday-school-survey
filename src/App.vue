<script setup lang="ts">
import questions from "./datasets/questions.json";
import DisplayQuestion from "./components/DisplayQuestion.vue";
import SurveyAlert from "./components/SurveyAlert.vue";
import Footer from "./components/Footer.vue";
import { Button } from '@/components/ui/button'
import { ref } from 'vue'; 

const props = withDefaults(
  defineProps<{
    questions?: typeof questions;
  }>(),
  {
    questions: () => questions,
  }
);

const surveyError = ref(false); 
const surveyMessage = ref('');
 
async function sendSurvey(event: Event) {
  event.preventDefault();
  
  const formData = new FormData((event.target as HTMLFormElement));

  let response = await fetch('http://localhost:8080/collect_results', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Object.fromEntries(formData.entries()))
  });
  
  let results = await response.json();
 
  if (results.error) {
    surveyError.value = true;
    surveyMessage.value = results.message || '';
  } else { 
    surveyError.value = false;
    alert('Survey submitted successfully!');
  }
}


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
  
    </div>

        <p class="text-center text-lg font-bold">
        Please take a moment to complete the survey. <br />
        <span class="text-sm"
          >Your feedback is valuable to us and will help improve our Sunday
          School program.</span
        >
      </p>

    <form @submit="sendSurvey">
          <div class="py-8 mx-auto px-6 container bg-secondary">
      <DisplayQuestion
        v-for="question in props.questions"
        :key="question.id"
        :question="question"
        class="mb-4"
      />
      <div class="py-8 mx-auto text-center text-2xl w-full">
        <Button type="submit">Submit Survey</Button>
      </div>
      <SurveyAlert v-if="surveyError"  :message="surveyMessage" />
        </div>
    </form>  
    <Footer />

  </div>
</template>

<style scoped>
.header-container {
  background-color: var(--color-primary);
  color: white;
  
}
</style>
