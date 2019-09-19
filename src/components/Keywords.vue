<template>
    <div class="text-justify font-thin">
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

<script>
export default {
    data() {
        return {
            keywords: [
                { text: "Advanced" },
                { text: "API" },
                { text: "Art Deco" },
                { text: "Bugs" },
                { text: "C#", redacted: true },
                { text: "C++", redacted: true },
                { text: "Cats" },
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
                { text: "Exploits" },
                { text: "Express" },
                { text: "Figma" },
                { text: "FTP" },
                { text: "Gaming" },
                { text: "Git" },
                { text: "GitHub" },
                { text: "Graphics", redacted: true },
                { text: "Helping" },
                { text: "Hooks" },
                { text: "iOS", redacted: true },
                { text: "iPhone", redacted: true },
                { text: "JavaScript" },
                { text: "Jest" },
                { text: "jQuery", redacted: true },
                { text: "JSON" },
                { text: "Lean", redacted: true },
                { text: "Learning" },
                { text: "Linux" },
                { text: "macOS" },
                { text: "MobX" },
                { text: "Mocha" },
                { text: "Modding" },
                { text: "MySQL" },
                { text: "Nier Automata", redacted: true },
                { text: "Node" },
                { text: "NoSQL" },
                { text: "Object-Oriented" },
                { text: "PC" },
                { text: "PHP" },
                { text: "PlayStation", redacted: true },
                { text: "Programming" },
                { text: "React" },
                { text: "Rest" },
                { text: "Scrum" },
                { text: "Security" },
                { text: "SFTP" },
                { text: "Sketch" },
                { text: "SQL" },
                { text: "SSH" },
                { text: "SSL" },
                { text: "Storybook" },
                { text: "Swift" },
                { text: "Technology" },
                { text: "TypeORM" },
                { text: "TypeScript" },
                { text: "UI" },
                { text: "Unity", redacted: true },
                { text: "UX" },
                { text: "Video", redacted: true },
                { text: "Vue", redacted: true },
                { text: "Windows" },
            ],
        };
    },
};
</script>
