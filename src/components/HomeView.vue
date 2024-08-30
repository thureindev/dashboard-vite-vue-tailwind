<script setup>
import { RouterLink } from 'vue-router';
import HeadBanner from './customized/HeadBanner.vue';
import Head1 from './customized/Head1.vue';
import Head2 from './customized/Head2.vue';
import Anchor from './customized/Anchor.vue';
import InternalAnchor from './customized/InternalAnchor.vue';
import Paragraph from './customized/Paragraph.vue';
import ParagraphEm from './customized/ParagraphEm.vue';
import OrderedList from './customized/OrderedList.vue';
import DivCentered from './customized/DivCentered.vue';
import CodeBlock from './customized/CodeBlock.vue';
import CodeInText from './customized/CodeInText.vue';

const gitFilename = 'bash';
const gitCode = `git remote remove origin
git remote add origin <yourRemoteUrl>
git push -u origin main`
const configFilename = 'vite.config.js';
const configCode = `export default defineConfig({
    base: '/yourrepo/', // Update this to your github repo name
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
        <Head1>Getting Started!</Head1>
        <Paragraph>
            Welcome! This guide will help you get started quickly and make the most out of this setup.
            <InternalAnchor path="/about">Go to About page</InternalAnchor> for more details about this template.
        </Paragraph>

        <Head2>Prerequisites</Head2>
        <Paragraph>
            Before you begin, you should have a basic understanding of Vue.js. This template is built with Vue.
        </Paragraph>

        <Head2>Setup Instructions</Head2>
        <OrderedList>
            <li>Clone this repository to your local machine.</li>

            <li>Change git remote to our own repo.
                <CodeBlock>
                    <template #filename>
                        {{ gitFilename }}
                    </template>
                    <template #code>
                        {{ gitCode }}
                    </template>
                </CodeBlock>
            </li>

            <li>In the <CodeInText>router.js</CodeInText> file, update the list <CodeInText>navRoutes</CodeInText>. Add
                or remove routes and components from the JavaScript list as needed.
            </li>

            <li>Modify the components in the <CodeInText>src/components</CodeInText> directory to suit your project
                requirements.
            </li>
        </OrderedList>

        <ParagraphEm>
            At this point, your setup is complete, and you can start using the template as you wish.
            Continue reading if you want to follow instruction to deploy your project.
        </ParagraphEm>
        <Paragraph></Paragraph>

        <Head2 id="deploying-on-github">Deploying on GitHub Pages</Head2>
        <OrderedList>
            <li>
                Update the <CodeInText>base</CodeInText> URL in <CodeInText>vite.config.js</CodeInText>
                to match your github repository name.

                <CodeBlock>
                    <template #filename>
                        {{ configFilename }}
                    </template>
                    <template #code>
                        {{ configCode }}
                    </template>
                </CodeBlock>
            </li>
            <li>
                Go to your GitHub Pages configuration in the repository settings page and choose the source of
                deployment as "GitHub Actions".
            </li>
        </OrderedList>

        <ParagraphEm>
            Now your project should be deployed. Check your GitHub Action to see the deployment workflow.
        </ParagraphEm>

        <Paragraph>
            For more details, refer to
            <Anchor url="https://vitejs.dev/guide/static-deploy#github-pages" newtab>
                <strong>
                    Vite guide on GitHub Pages.
                </strong>
            </Anchor>
        </Paragraph>

        <Paragraph>
            For other deployment sites, check out Vite’s guide on deployment for:
            <OrderedList>
                <li>
                    <Anchor url="https://vitejs.dev/guide/static-deploy#gitlab-pages-and-gitlab-ci" newtab>
                        <strong>
                            GitLab Pages and GitLab CI
                        </strong>
                    </Anchor>
                </li>
                <li>
                    <Anchor url="https://vitejs.dev/guide/static-deploy#netlify" newtab>
                        <strong>
                            Netlify
                        </strong>
                    </Anchor>
                </li>
                <li>
                    <Anchor url="https://vitejs.dev/guide/static-deploy#vercel" newtab>
                        <strong>
                            Vercel
                        </strong>
                    </Anchor>
                </li>
                <li>
                    <Anchor url="https://vitejs.dev/guide/static-deploy#render" newtab>
                        <strong>
                            Render
                        </strong>
                    </Anchor>
                </li>
            </OrderedList>
        </Paragraph>
    </DivCentered>
</template>