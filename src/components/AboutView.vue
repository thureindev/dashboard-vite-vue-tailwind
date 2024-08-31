<script setup>
import HeadBanner from './customized/HeadBanner.vue';
import Head1 from './customized/Head1.vue';
import Head2 from './customized/Head2.vue';
import Anchor from './customized/Anchor.vue';
import InternalAnchor from './customized/InternalAnchor.vue';
import Paragraph from './customized/Paragraph.vue';
import DivCentered from './customized/DivCentered.vue';
import ContactItemList from './contact/ContactItemList.vue';
</script>

<template>
    <HeadBanner>
        <Anchor url="https://thureindev.github.io/" newtab>
            thureindev
        </Anchor>
    </HeadBanner>

    <DivCentered>
        <Head1>About Dev</Head1>
        <Paragraph>
            Hi, I'm ThuRein, you can call me Tom. I'm passionate about creating apps and solving frontend logic, but I
            often find myself bogged down by design decisions. That's why I created this template—to minimize the time
            spent worrying about design so I can focus on what I love: building functional, efficient web applications.
            I hope this template helps you do the same!
        </Paragraph>

        <Paragraph>
            Check out my 
            <Anchor url="https://thureindev.github.io/ready-css" newtab>
                Ready CSS Components
            </Anchor>
            for ready-to-use CSS.
        </Paragraph>

        <Head2>About This Template</Head2>
        <Paragraph>
            This template serves as a design boilerplate for quickly bringing new ideas to life. It comes pre-configured
            with Vite, Vue, and Tailwind CSS, allowing you to focus on frontend logic rather than design.
            I used Tailwind for its rapid prototyping capabilities. Although, Tailwind can make HTML code messy, it
            works well with Vue's Single File Components if you know how to keep it clean.
        </Paragraph>
        <Paragraph>
            GitHub workflow setup is already included in this template, providing instant deployment right out of the
            box. You only need to
            <InternalAnchor path="/#deploying-on-github">change base url in vite config file</InternalAnchor>. Whether
            you're starting a new project or iterating on an existing one, this template is designed to help you move
            fast and efficiently.
        </Paragraph>

        <Head2>Get in touch!</Head2>
        <Paragraph>
            Have questions, suggestions, or need custom components? Feel free to reach out! I'm always open to feedback
            and collaboration.
        </Paragraph>

        <ContactItemList />
    </DivCentered>
</template>