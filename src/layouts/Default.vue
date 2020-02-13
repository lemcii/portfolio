<template>
    <div
        class="min-h-screen sm:px-10 md:px-24 lg:px-32 xl:pl-12 xl:pr-sm sm:py-8 flex flex-col items-center justify-center"
    >
        <div class="w-full max-w-6xl font-mono text-gray-900 flex flex-grow flex-col relative">
            <div class="bg-paper shadow-2xl flex flex-col flex-grow sm:-rotate-p1">
                <div class="flex flex-col flex-grow justify-between p-6 sm:px-10 sm:py-12">
                    <div class="flex flex-col sm:flex-grow">
                        <navigation class="mb-6" />
                        <header>
                            <splash class="mb-8" />
                        </header>
                        <slot />
                    </div>
                    <footer class="mt-auto pt-16">
                        <social class="mb-6" />
                        <credit />
                    </footer>
                </div>
                <div class="flex justify-center sm:justify-end xl:hidden px-6 pb-6 sm:px-10 sm:pb-12">
                    <polaroid
                        class="max-w-sm rotate-1"
                        width="816"
                        height="612"
                        src="//placekitten.com/816/612"
                        alt="A picture of a cat"
                    />
                </div>
            </div>
            <aside class="absolute hidden xl:block right-8 top-48 -mb-6 -mr-sm">
                <polaroid
                    class="max-w-sm rotate-1"
                    width="816"
                    height="612"
                    src="//placekitten.com/816/612"
                    alt="A picture of a cat"
                />
            </aside>
        </div>
    </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import Splash from "~/components/Splash.vue";
import Polaroid from "~/components/Polaroid.vue";
import Social from "~/components/Social.vue";
import Credit from "~/components/Credit.vue";

export default {
    components: {
        Navigation,
        Splash,
        Polaroid,
        Social,
        Credit,
    },
};
</script>
