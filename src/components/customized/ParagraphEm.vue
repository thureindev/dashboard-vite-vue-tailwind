<script setup>
import Paragraph from './Paragraph.vue';
</script>

<template>
    <Paragraph class="mb-16">
        <em class="italic">
            <slot></slot>
        </em>
    </Paragraph>
</template>