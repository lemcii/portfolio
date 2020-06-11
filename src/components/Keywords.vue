<template>
  <div class="text-justify font-thin">
    <template v-for="keyword in keywords">
      <span :key="keyword.text">
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
        { text: "API" },
        { text: "Bugs" },
        { text: "Cats" },
        { text: "Code" },
        { text: "CSS" },
        { text: "Cypress" },
        { text: "Design" },
        { text: "Enzyme" },
        { text: "ES6" },
        { text: "ES7" },
        { text: "ES8" },
        { text: "Figma" },
        { text: "Gaming" },
        { text: "Git" },
        { text: "Hooks" },
        { text: "JavaScript" },
        { text: "Jest" },
        { text: "Linux" },
        { text: "macOS" },
        { text: "MobX" },
        { text: "Mocha" },
        { text: "MySQL" },
        { text: "Node" },
        { text: "NoSQL" },
        { text: "PHP" },
        { text: "Prisma" },
        { text: "React" },
        { text: "Rest" },
        { text: "Scrum" },
        { text: "Sketch" },
        { text: "SOLID" },
        { text: "SQL" },
        { text: "Storybook" },
        { text: "Technology" },
        { text: "TypeORM" },
        { text: "TypeScript" },
        { text: "UI" },
        { text: "UX" },
        { text: "Windows" },
      ],
    };
  },
};
</script>
