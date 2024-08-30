<template>
    <div class="space-y-2">
        <ContactItem v-for="item in contactList" :label="item.label" :url="item.url" :address="item.address" />
    </div>
</template>

<script setup>
import ContactItem from './ContactItem.vue';

const contactList = [
    {
        label: 'Email',
        url: 'mailto:thureindev@outlook.com',
        address: 'thureindev@outlook.com',
    },
    {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/thureindev/',
        address: 'thureindev',
    },
    {
        label: 'GitHub',
        url: 'https://github.com/thureindev/',
        address: 'thureindev',
    },
];
</script>