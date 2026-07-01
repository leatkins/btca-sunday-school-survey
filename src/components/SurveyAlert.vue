<script setup lang="ts">
import { AlertCircleIcon} from '@lucide/vue'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'

const props = defineProps({
    message: {
        type: String,
        required: false
    }
})
</script>

<template>
  <div class="flex  mx-auto w-full max-w-xl items-center gap-4">
    <Alert variant="destructive" class="mx-auto w-full min-w-xl flex">
      <AlertCircleIcon />
      <AlertTitle>Unable to submit survey: </AlertTitle>
      <AlertDescription>
        <p>{{ message || 'Please try again.' }}</p>
      </AlertDescription>
    </Alert>
  </div>
</template>
