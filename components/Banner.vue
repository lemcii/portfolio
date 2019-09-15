<template>
    <div>
        <div class="flex flex-col md:flex-row md:items-center mb-10">
            <div class="flex items-center">
                <globe class="min-w-6 w-8 md:w-10 lg:w-12" />
                <div class="ml-4 font-semibold">elliotmcintyre.com</div>
            </div>
            <div class="mt-4 md:ml-4 md:mt-0">
                <a href="https://nuxtjs.org" target="_blank" class="md:ml-4"
                    >LinkedIn</a
                ><a
                    href="https://github.com/nuxt/nuxt.js"
                    target="_blank"
                    class="ml-4"
                    >GitHub</a
                ><a
                    href="https://github.com/nuxt/nuxt.js"
                    target="_blank"
                    class="ml-4"
                    >Twitter</a
                >
            </div>
        </div>
        <div class="relative">
            <splash />
            <signature class="absolute w-4/12 md:w-3/12 bottom-3/4 right-0" />
        </div>
        <p class="font-light mt-6">
            Hi, blog and portfolio bits <em>will</em> be here at
            <mark class="redacted">some</mark
            ><mark class="redacted">point</mark>
        </p>
    </div>
</template>

<script>
import Globe from "~/assets/svg/globe.svg?inline";
import Signature from "~/assets/svg/signature.svg?inline";
import Splash from "~/assets/svg/splash.svg?inline";

export default {
    components: { Globe, Signature, Splash },
};
</script>
