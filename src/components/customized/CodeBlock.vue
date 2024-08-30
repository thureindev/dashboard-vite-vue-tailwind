<template>
    <div class="code-block my-4 p-4 rounded text-teal-400">
        <div class="flex items-center justify-between mb-4">
            <p class="text-yellow-500">
                <strong>
                    <slot name="filename"></slot>
                </strong>
            </p>
            <button @click="copyCode" class="copy-button bg-teal-600 text-white px-3 py-1 rounded">
                {{ buttonText }}
            </button>
        </div>

        <pre><code ref="codeElement" class="block whitespace-pre-wrap"><slot name="code"></slot></code></pre>
    </div>
</template>

<style scoped>
.code-block {
    /* Rain pattern from https://heropatterns.com/ */
    background-color: #2d2d2d;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%234d4756' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>

<script setup>
import { ref } from 'vue';

// Create a ref for the code element and button text
const codeElement = ref(null);
const buttonText = ref('Copy Code');

const copyCode = () => {
    if (codeElement.value) {
        const codeText = codeElement.value.innerText;
        navigator.clipboard.writeText(codeText)
            .then(() => {
                buttonText.value = 'Copied';
                setTimeout(() => {
                    buttonText.value = 'Copy Code';
                }, 3000);
            })
            .catch(err => {
                console.error('Failed to copy code:', err);
            });
    } else {
        console.error('Code element not found.');
    }
};
</script>