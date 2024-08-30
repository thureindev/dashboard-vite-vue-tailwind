<script setup>
import { RouterLink } from 'vue-router';
import HeadBanner from './customized/HeadBanner.vue';
import Head1 from './customized/Head1.vue';
import Head2 from './customized/Head2.vue';
import Anchor from './customized/Anchor.vue';
import InternalAnchor from './customized/InternalAnchor.vue';
import Paragraph from './customized/Paragraph.vue';
import OrderedList from './customized/OrderedList.vue';
import DivCentered from './customized/DivCentered.vue';
import CodeBlock from './customized/CodeBlock.vue';
import CodeInText from './customized/CodeInText.vue';

const configFilename = 'vite.config.js';
const configCode = `export default defineConfig({
    base: '/yourrepo/', // Update this to your repo name
    plugins: [vue()],
})`;

</script>

<template>
    <HeadBanner>
        <Anchor url="https://github.com/thureindev/dashboard-vite-vue-tailwind/" newtab>
            Dashboard Vite Vue Tailwind
        </Anchor>
    </HeadBanner>

    <DivCentered>
        <Head1>How to Use This Template</Head1>
        <Paragraph>
            Welcome to the template! This guide will help you get started quickly and make the most out of this setup.
            <InternalAnchor path="/about">Go to About page</InternalAnchor> for more details about this template.
        </Paragraph>

        <Head2>Prerequisites</Head2>
        <Paragraph>
            Before you begin, you should have a basic understanding of Vue.js. This template is built with Vue.
        </Paragraph>

        <Head2>Setup Instructions</Head2>
        <OrderedList>
            <li>Clone this repository to your local machine.</li>
            <li>Update the list <CodeInText>navRoutes</CodeInText> in the <CodeInText>router.js</CodeInText> file. Add or remove routes and
                components from the JavaScript list as needed.</li>
            <li>Modify the components in the <CodeInText>src/components</CodeInText> directory to suit your project requirements.
            </li>
            <li id="update-vite-config">Ensure the <CodeInText>base</CodeInText> URL in <CodeInText>vite.config.js</CodeInText> is updated to
                match your repository
                name:
            </li>
        </OrderedList>

        <CodeBlock>
            <template #filename>
                {{ configFilename }}
            </template>
            <template #code>
                {{ configCode }}
            </template>
        </CodeBlock>

        <Paragraph>
            For more details, refer to the
            <Anchor url="https://vitejs.dev/guide/static-deploy#github-pages" newtab>
                <strong>
                    Vite static deploy guide.
                </strong>
            </Anchor>
        </Paragraph>
    </DivCentered>
</template>