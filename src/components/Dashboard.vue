<template>
    <div class="min-h-full flex flex-col">
        <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="h-8 w-8" src="../assets/vue.svg" alt="Your Company" />
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">

                                <RouterLink v-for="item in navigation" :key="item.name" :to="item.href">
                                    <span
                                        :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                                        :aria-current="item.current ? 'page' : undefined">

                                        {{ item.name }}
                                    </span>
                                </RouterLink>

                            </div>
                        </div>
                    </div>
                    <div class="-mr-2 flex md:hidden">
                        <!-- Mobile menu button -->
                        <DisclosureButton
                            class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span class="absolute -inset-0.5" />
                            <span class="sr-only">Open main menu</span>
                            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel class="md:hidden">
                <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">

                    <RouterLink v-for="item in navigation" :key="item.name" :to="item.href">
                        <DisclosureButton as="span"
                            :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
                            :aria-current="item.current ? 'page' : undefined">
                            {{ item.name }}
                        </DisclosureButton>
                    </RouterLink>

                </div>
            </DisclosurePanel>
        </Disclosure>

        <div class="content-view min-h-full w-full flex-grow">

            <RouterView />

        </div>

        <FootBar></FootBar>
    </div>
</template>

<script setup>
import FootBar from './customized/FootBar.vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { navRoutes } from '../router';

const navigation = ref(navRoutes);

/** Router related
// ========= ========== =============== ===========  **/
// Get the current route
const route = useRoute();
// Update the navigation state based on the current route path
const updateNavigation = () => {
    navigation.value = navigation.value.map(item => ({
        ...item,
        current: route.path === item.href,
    }));
}
// Watch for route changes and update navigation
watch(() => route.path, updateNavigation, { immediate: true })
// Initial call to set correct state on mount
updateNavigation();
/** ========= ========== =============== ===========  **/
</script>

<style scoped>
.content-view {
    /* Diagonal Lines pattern from https://heropatterns.com/ */
    background-color: #DFDBE5;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");

}
</style>