<script lang="ts">
    const {
        name,
        description,
        img,
        tags,
    }: { name: string; description: string; img: any; tags: string[] } =
        $props();
</script>

<div class="project-container">
    <enhanced:img src={img} class="project-icon" alt="" />

    <div class="project-info">
        <h3>{name}</h3>
        <p>{description}</p>
    </div>

    <div class="project-tags">
        {#each tags as tag}
            <dir class={`project-tag tag-${tag.toLowerCase()}`}>
                <p>{tag}</p>
            </dir>
        {/each}
    </div>
</div>

<style>
    :root {
        --tag-docker-bg: #2b5f75be;
        --tag-docker-border: #2c6cbe;
        --tag-java-bg: #75492bbe;
        --tag-java-border: #76562c;
        --tag-mongodb-bg: #2f752bbe;
        --tag-mongodb-border: #40762c;
        --tag-kotlin-bg: #612b75be;
        --tag-kotlin-border: #6c2cbe;
        --tag-react-bg: #362b75be;
        --tag-react-border: #3c2cbe;
        --tag-redis-bg: #752b2bbe;
        --tag-redis-border: #762c2c;
        --tag-rust-bg: #75412bbe;
        --tag-rust-border: #76462c;
        --tag-sqlite-bg: #752b5cbe;
        --tag-sqlite-border: #6f2cbe;
        --tag-svelte-bg: #75552bbe;
        --tag-svelte-border: #76542c;
        --tag-typescript-bg: #2b4275be;
        --tag-typescript-border: #2c42be;
    }

    .project-container {
        position: relative;

        display: grid;
        grid-template-columns: 5rem 1fr;
        grid-template-rows: 1fr min-content; 
        gap: var(--padding-s);

        background-color: var(--color-dark);
        overflow: hidden;
        padding: var(--padding-s);
    }

    .project-container:hover::before {
        content: "";
        position: absolute;
        top: 0%;
        left: -70%;
        height: 100%;
        width: 5rem;

        animation: shine 2s;
        background-color: var(--color-fg);
        opacity: 0.1;
        transform: skewX(-25deg);
    }

    .project-icon {
        width: 100%;
        height: auto;
        grid-area: 1 / 1 / 2 / 2;
    }

    .project-info {
        grid-area: 1 / 2 / 2 / 3;
    }

    .project-tags {
        grid-area: 2 / 1 / 3 / 3;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--padding-s);
    }

    .project-tag {
        height: fit-content;
        padding: 0.1rem 0.5rem;
        background-color: var(--tag-bg);
        border-radius: 0.75rem;
        border: solid var(--border-width) var(--tag-border);
    }

    /* TAG COLORS :3 */
    .tag-docker {
        background-color: var(--tag-docker-bg);
        border-color: var(--tag-docker-border);
    }
    .tag-java {
        background-color: var(--tag-java-bg);
        border-color: var(--tag-java-border);
    }
    .tag-mongodb {
        background-color: var(--tag-mongodb-bg);
        border-color: var(--tag-mongodb-border);
    }
    .tag-kotlin {
        background-color: var(--tag-kotlin-bg);
        border-color: var(--tag-kotlin-border);
    }
    .tag-react {
        background-color: var(--tag-react-bg);
        border-color: var(--tag-react-border);
    }
    .tag-redis {
        background-color: var(--tag-redis-bg);
        border-color: var(--tag-redis-border);
    }
    .tag-rust {
        background-color: var(--tag-rust-bg);
        border-color: var(--tag-rust-border);
    }
    .tag-sqlite {
        background-color: var(--tag-sqlite-bg);
        border-color: var(--tag-sqlite-border);
    }
    .tag-svelte {
        background-color: var(--tag-svelte-bg);
        border-color: var(--tag-svelte-border);
    }
    .tag-typescript {
        background-color: var(--tag-typescript-bg);
        border-color: var(--tag-typescript-border);
    }

    /* ANIMATIONS */
    @keyframes shine {
        0% {
            left: -20%;
            filter: blur(10px);
        }
        50% {
            filter: blur(0px);
        }
        100% {
            left: 110%;
            filter: blur(10px);
        }
    }

    /* RESPONSIVE */
    @media screen and (max-width: 728px) {
        .project-info p {
            font-size: small;
        }

        .project-tags {
            align-content: center;
        }
        .project-tag p {
            font-size: 0.7rem;
        }
    }

    /* LIGHT MODE */
    @media (prefers-color-scheme: light) {
        :root {
            --tag-docker-bg: #57acd1be;
            --tag-docker-border: #4596a2;
            --tag-java-bg: #d9844bbe;
            --tag-java-border: #8f652f;
            --tag-mongodb-bg: #39bc32be;
            --tag-mongodb-border: #478630;
            --tag-kotlin-bg: #9c2ac6be;
            --tag-kotlin-border: #7026d0;
            --tag-react-bg: #856fffbe;
            --tag-react-border: #3220c1;
            --tag-redis-bg: #e55757be;
            --tag-redis-border: #ad3737;
            --tag-rust-bg: #df6632be;
            --tag-rust-border: #9c4d22;
            --tag-sqlite-bg: #d35eacbe;
            --tag-sqlite-border: #aa36b7;
            --tag-svelte-bg: #ff621fbe;
            --tag-svelte-border: #d04c18;
            --tag-typescript-bg: #3c6dd6be;
            --tag-typescript-border: #4d65f0;
        }
    }
</style>
