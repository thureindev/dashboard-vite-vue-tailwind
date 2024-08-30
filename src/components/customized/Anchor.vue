<template>
    <a :href="url" class="text-cyan-600 hover:underline" :target="newtab ? '_blank' : '_self'"
        :rel="newtab ? 'noopener noreferrer' : undefined">
        <slot></slot>
    </a>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    url: {
        type: String,
        required: true,
    },
    newtab: {
        type: Boolean,
        default: false,
    },
});
</script>