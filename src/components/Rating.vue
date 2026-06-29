<script setup lang="ts">
import { Label } from '@/components/ui/label'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group'

const props = defineProps({
    questionId: { 
        type: Number, 
        required: true
    }
})
</script>

<template>
  <RadioGroup>
    <div class="flex items-center space-x-2">
      <RadioGroupItem :id="'r1_' + props.questionId" value="0" />
      <Label>Strongly Disagree</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem :id="'r2_' + props.questionId" value="1" />
      <Label :for="'r2_' + props.questionId">Disagree</Label>
    </div>
        <div class="flex items-center space-x-2">
      <RadioGroupItem :id="'r3_' + props.questionId" value="2" />
      <Label :for="'r3_' + props.questionId">Neutral</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem :id="'r4_' + props.questionId" value="3" />
      <Label :for="'r4_' + props.questionId">Agree</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem :id="'r5_' + props.questionId" value="4" />
      <Label :for="'r5_' + props.questionId">Strongly Agree</Label>
    </div>
  </RadioGroup>
</template>
