<script setup lang="ts">
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import Rating from '@/components/Rating.vue'


const props = defineProps({
  question: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  
  <Card class="py-4 flex flex-row">
    <div class="w-auto">
      <Badge class="mx-[-10px] text-xl">{{ props.question.id }}</Badge>
    </div>
    <div class="w-full">
    <CardHeader>
      <CardTitle class="py-4 text-xl">{{ props.question.text }}</CardTitle>
      
    </CardHeader>
    <CardContent>
      <Rating v-if="props.question.response_type === 'rating'"  :questionId="props.question.id"/>
   
      <div v-if="props.question.response_type === 'long_text'">
        <CardDescription>Type your comments here</CardDescription>
        <Textarea :name="'lt_' + props.question.id" />
      </div>
    </CardContent>
    </div>  
  </Card>
</template>
