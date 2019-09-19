<template>
    <layout>
        <div class="invisible" aria-hidden="false">
            <h1>Elliot McIntyre</h1>
            <h2>UI Engineer</h2>
        </div>
        <div class="flex-grow md:order-first mb-8">
            <div class="flex lg:h-full max-h-xs">
                <div class="bg-gradiant-noise md:w-4 lg:w-12 mr-8 hidden md:block" />
                <div class="flex flex-col sm:justify-between w-full">
                    <div>
                        <template v-for="(job, index) in jobs">
                            <div :key="index" class="flex flex-col sm:flex-row mb-4 sm:mb-0 sm:items-center mb-1">
                                <div>
                                    <span class="font-bold">{{ job.role }}</span>
                                    @ {{ job.location }}
                                    <span v-if="job.extended" class="hidden lg:inline">{{ job.extended }}</span>
                                    <em v-if="job.sector" class="italic">{{ job.sector }}</em>
                                </div>
                                <hr class="hidden sm:block flex-grow mx-8" />
                                <div>
                                    <span class="font-thin">{{ job.year }}</span>
                                </div>
                            </div>
                        </template>
                    </div>
                    <keywords class="hidden mt-8 lg:block" />
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
import Keywords from "~/components/Keywords.vue";

export default {
    components: {
        Keywords,
    },
    metaInfo: {
        title: "Hi",
    },
    data() {
        return {
            jobs: [
                {
                    role: "UI Engineer",
                    location: "Intelliflo",
                    sector: "i4C Cashflow",
                    year: "2019+",
                },
                {
                    role: "UI Engineer",
                    location: "i4C Technology",
                    year: "2018-2019",
                },
                {
                    role: "Software Engineer",
                    location: "Callcredit",
                    extended: "Information Group",
                    year: "2016-2018",
                },
                {
                    role: "Software Engineer",
                    location: "Recipero",
                    year: "2015-2016",
                },
                {
                    role: "Junior Engineer",
                    location: "Recipero",
                    year: "2014-2015",
                },
            ],
        };
    },
};
</script>
