<template>
    <div class="flex-grow md:order-first">
        <div class="flex lg:h-full max-h-sm">
            <div class="bg-gradiant-noise md:w-4 lg:w-12 mr-8 hidden md:block" />
            <div class="flex flex-col sm:justify-between w-full">
                <!-- todo: jobs/experience comp? -->
                <div>
                    <!-- todo: loop this mess -->
                    <div class="flex flex-col sm:flex-row mb-4 sm:mb-0 sm:items-center mb-1">
                        <div>
                            <span class="font-bold">UI Engineer</span>
                            @ Intelliflo <em class="italic">i4C Cashflow</em>
                        </div>
                        <hr class="hidden sm:block flex-grow mx-8" />
                        <div><span class="font-thin">2019+</span></div>
                    </div>
                    <div class="flex flex-col sm:flex-row mb-4 sm:mb-0 sm:items-center mb-1">
                        <div><span class="font-bold">UI Engineer</span> @ i4C Technology</div>
                        <hr class="hidden sm:block flex-grow mx-8" />
                        <div><span class="font-thin">2018&ndash;2019</span></div>
                    </div>
                    <div class="flex flex-col sm:flex-row mb-4 sm:mb-0 sm:items-center mb-1">
                        <div>
                            <span class="font-bold">
                                Software Engineer
                            </span>
                            @ Callcredit <span class="hidden 2xl:inline">Information Group</span>
                        </div>
                        <hr class="hidden sm:block flex-grow mx-8" />
                        <div><span class="font-thin">2017&ndash;2018</span></div>
                    </div>
                    <div class="flex flex-col sm:flex-row mb-4 sm:mb-0 sm:items-center mb-1">
                        <div><span class="font-bold">Software Engineer</span> @ Recipero</div>
                        <hr class="hidden sm:block flex-grow mx-8" />
                        <div><span class="font-thin">2015&ndash;2017</span></div>
                    </div>
                    <div class="flex flex-col sm:flex-row mb-4 sm:mb-0 sm:items-center">
                        <div><span class="font-bold">Junior Engineer</span> @ Recipero</div>
                        <hr class="hidden sm:block flex-grow mx-8" />
                        <div><span class="font-thin">2014&ndash;2015</span></div>
                    </div>
                </div>
                <keywords class="hidden mt-8 lg:block" />
            </div>
        </div>
    </div>
</template>

<script>
import Keywords from "~/components/Keywords.vue";

export default {
    components: {
        Keywords,
    },
};
</script>
