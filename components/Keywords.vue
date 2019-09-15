<template>
    <div class="text-justify text-sm font-thin">
        <template v-for="keyword in keywords">
            <mark v-if="keyword.redacted" :key="keyword.text" class="redacted">
                {{ keyword.text }}
            </mark>
            <span v-else :key="keyword.text">
                {{ keyword.text }}
            </span>
        </template>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            keywords: [
                { text: "API" },
                { text: "C#", redacted: true },
                { text: "C++", redacted: true },
                { text: "Code" },
                { text: "CSS" },
                { text: "Cypress" },
                { text: "Data" },
                { text: "Design" },
                { text: "Development" },
                { text: "Enzyme" },
                { text: "ES6" },
                { text: "ES7" },
                { text: "ES8" },
                { text: "ES9" },
                { text: "Express" },
                { text: "Figma" },
                { text: "FTP" },
                { text: "Git" },
                { text: "Graphics", redacted: true },
                { text: "Hooks" },
                { text: "JavaScript" },
                { text: "Jest" },
                { text: "jQuery" },
                { text: "JSON" },
                { text: "Lean", redacted: true },
                { text: "Linux" },
                { text: "macOS" },
                { text: "MobX" },
                { text: "Mocha" },
                { text: "MySQL" },
                { text: "Node" },
                { text: "NoSQL" },
                { text: "Object-Oriented" },
                { text: "PHP" },
                { text: "Programming" },
                { text: "React" },
                { text: "Rest" },
                { text: "Scrum" },
                { text: "SFTP" },
                { text: "Sketch" },
                { text: "SQL" },
                { text: "SSH" },
                { text: "Storybook" },
                { text: "Swift", redacted: true },
                { text: "TypeORM" },
                { text: "TypeScript" },
                { text: "UI" },
                { text: "Unity" },
                { text: "UX" },
                { text: "Vue", redacted: true },
                { text: "Windows" },
            ],
        };
    },
};
</script>
