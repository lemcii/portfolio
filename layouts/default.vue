<template>
    <div class="min-h-screen font-mono bg-gray-900 sm:px-10 md:px-24 lg:px-32 xl:pl-20 xl:pr-sm sm:py-8">
        <div class="h-full flex items-center justify-center">
            <div class="h-full w-full max-w-6xl max-h-7xl relative">
                <div class="min-h-full bg-paper shadow-2xl sm:-rotate-p1">
                    <div class="min-h-full flex flex-col justify-between h-full p-6 sm:px-10 sm:py-12">
                        <div class="flex flex-col sm:flex-grow">
                            <navigation class="mb-6" />
                            <splash class="mb-8" />
                            <nuxt class="lg:min-h-48 mb-8" />
                        </div>
                        <div class="mt-auto">
                            <social class="mb-6" />
                            <credit />
                        </div>
                    </div>
                    <div class="flex justify-center sm:justify-end xl:hidden px-6 pb-6 sm:px-10 sm:pb-12">
                        <!-- todo: make (optionally responsive) polaroid component -->
                        <div class="bg-gray-100 p-3 pb-20 shadow-md max-w-sm rotate-1">
                            <div class="filter-custom hover:filter-none shadow-inner">
                                <img width="816" height="612" src="//placekitten.com/816/612" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute hidden xl:block right-8 top-48 -mb-6 -mr-sm max-w-sm rotate-1">
                    <!-- todo: make (optionally responsive) polaroid component -->
                    <div class="bg-gray-100 p-3 pb-20 shadow-md">
                        <div class="filter-custom hover:filter-none shadow-inner">
                            <img width="816" height="612" src="//placekitten.com/816/612" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import Splash from "~/components/Splash.vue";
import Social from "~/components/Social.vue";
import Credit from "~/components/Credit.vue";

export default {
    components: {
        Navigation,
        Splash,
        Social,
        Credit,
    },
};
</script>
