<template>
    <ol class="customized-o-list list-decimal list-inside text-lg font-medium text-gray-700 mb-8">
        <slot></slot>
    </ol>
</template>

<style>
.customized-o-list>li {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;

    border-bottom: 2px dotted gray;
}

.customized-o-list>li::marker {
    font-weight: bold;
}
</style>