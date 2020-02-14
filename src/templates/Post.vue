<template>
    <layout>
        <div class="post-title">
            <h1 class="font-semibold text-lg mb-5">
                {{ $page.post.title }}
            </h1>
            <!-- <PostMeta :post="$page.post" /> -->
        </div>
        <div class="post">
            <!-- <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" /> -->
            <div v-html="$page.post.content" />
            <!-- <div class="mt-5">
                <post-tags :post="$page.post" />
            </div> -->
        </div>
    </layout>
</template>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.post.title,
            meta: [
                {
                    name: "description",
                    content: this.$page.post.description,
                },
            ],
        };
    },
};
</script>

<page-query>
query Post ($id: ID!) {
    post: post (id: $id) {
        title
        path
        date (format: "D. MMMM YYYY")
        timeToRead
        tags {
            id
            title
            path
        }
        description
        content
        cover_image (width: 860, blur: 10)
    }
}
</page-query>

<style>
.post h1,
.post h2,
.post h3,
.post h4,
.post h5 {
    @apply font-semibold pt-3 pb-5;
}

.post p,
.post ul {
    @apply pb-5;
}

.post ul {
    @apply ml-5;
}

.post pre {
    @apply mb-5;
}

.post code {
    font-size: 0.85em;
}

.post code[class*="language-"],
.post pre[class*="language-"] {
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    hyphens: none;
}

@media print {
    .post code[class*="language-"],
    .post pre[class*="language-"] {
        text-shadow: none;
    }
}

.post pre[class*="language-"] {
    overflow: auto;
}

.post :not(pre) > code[class*="language-"] {
    border-radius: var(--radius);
    white-space: normal;
}

.post .token.comment,
.post .token.prolog,
.post .token.doctype,
.post .token.cdata {
    color: slategray;
}

.post .token.punctuation {
    color: #999;
}

.post .namespace {
    opacity: 0.7;
}

.post .token.property,
.post .token.tag,
.post .token.boolean,
.post .token.number,
.post .token.constant,
.post .token.symbol,
.post .token.deleted {
    color: #c71b7b;
}

.post .token.selector,
.post .token.attr-name,
.post .token.string,
.post .token.char,
.post .token.builtin,
.post .token.inserted {
    color: #690;
}

.post .token.operator,
.post .token.entity,
.post .token.url,
.post .language-css .token.string,
.post .style .token.string {
    color: #9a6e3a;
    background: hsla(0, 0%, 100%, 0.5);
}

.post .token.atrule,
.post .token.attr-value,
.post .token.keyword {
    color: #20a7e0;
}

.post .token.function,
.post .token.class-name {
    color: #dd4a68;
}

.post .token.regex,
.post .token.important,
.post .token.variable {
    color: #e90;
}

.post .token.important,
.post .token.bold {
    font-weight: bold;
}
.post .token.italic {
    font-style: italic;
}

.post .token.entity {
    cursor: help;
}
</style>
