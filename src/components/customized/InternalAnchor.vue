<template>
    <RouterLink :to="path" class="text-emerald-600 hover:underline">
        <slot></slot>
    </RouterLink>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    path: {
        type: String,
        default: '#',
    },
});
</script>