<template>
    <p class="text-lg text-gray-700">
        <strong>{{ label }}:</strong>&nbsp;
        <a :href="url" class="font-bold text-emerald-600 hover:underline">{{ address }}</a>
    </p>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});
</script>