<script lang="ts">
    // Images
    import RustImg from "$lib/assets/images/tools/rust.webp?enhanced";
    import CImg from "$lib/assets/images/tools/C.webp?enhanced";
    import TypeScriptImg from "$lib/assets/images/tools/typescript.webp?enhanced";
    import JavaScriptImg from "$lib/assets/images/tools/javascript.webp?enhanced";
    import PythonImg from "$lib/assets/images/tools/python.webp?enhanced";
    import KotlinImg from "$lib/assets/images/tools/kotlin.png?enhanced";
    import JavaImg from "$lib/assets/images/tools/java.webp?enhanced";
    import GoImg from "$lib/assets/images/tools/golang.webp?enhanced";
    import BashImg from "$lib/assets/images/tools/bash.webp?enhanced";
    import SvelteImg from "$lib/assets/images/tools/svelte.png?enhanced";
    import VueImg from "$lib/assets/images/tools/vue.png?enhanced";
    import AngularImg from "$lib/assets/images/tools/angular.png?enhanced";
    import NextJsImg from "$lib/assets/images/tools/nextjs.png?enhanced";
    import ReactImg from "$lib/assets/images/tools/react.png?enhanced";
    import BootstrapImg from "$lib/assets/images/tools/bootstrap.png?enhanced";
    import TailwindImg from "$lib/assets/images/tools/tailwind.png?enhanced";
    import RocketRsImg from "$lib/assets/images/tools/rocket.rs.png?enhanced";
    import MySqlImg from "$lib/assets/images/tools/mysql.webp?enhanced";
    import PostgresImg from "$lib/assets/images/tools/postgres.webp?enhanced";
    import MondongoDBImg from "$lib/assets/images/tools/mondongodb.webp?enhanced";
    import SqliteImg from "$lib/assets/images/tools/sqlite.png?enhanced";
    import RedisImg from "$lib/assets/images/tools/redis.webp?enhanced";
    import NginxImg from "$lib/assets/images/tools/nginx.png?enhanced";
    import ApacheImg from "$lib/assets/images/tools/apache.png?enhanced";
    import DockerImg from "$lib/assets/images/tools/docker.webp?enhanced";
    import ArduinoImg from "$lib/assets/images/tools/arduino.png?enhanced";
    import GitImg from "$lib/assets/images/tools/git.webp?enhanced";
</script>

<div class="tools-container">
    <fieldset class="tools-section">
        <legend>Langs</legend>

        <div title="Rust" class="tool-entry">
            <enhanced:img src={RustImg} alt="" loading="lazy" />
        </div>
    
        <div title="C" class="tool-entry">
            <enhanced:img src={CImg} alt="" loading="lazy" />
        </div>
    
        <div title="TypeScript" class="tool-entry">
            <enhanced:img src={TypeScriptImg} alt="" loading="lazy" />
        </div>
    
        <div title="JavaScript" class="tool-entry">
            <enhanced:img src={JavaScriptImg} alt="" loading="lazy" />
        </div>

        <div title="Kotlin" class="tool-entry">
            <enhanced:img src={KotlinImg} alt="" loading="lazy" />
        </div>
    
        <div title="Python" class="tool-entry">
            <enhanced:img src={PythonImg} alt="" loading="lazy" />
        </div>
    
        <div title="Java" class="tool-entry">
            <enhanced:img src={JavaImg} alt="" loading="lazy" />
        </div>
    
        <div title="Go" class="tool-entry">
            <enhanced:img src={GoImg} alt="" loading="lazy" />
        </div>

        <div title="Bash" class="tool-entry">
            <enhanced:img src={BashImg} alt="" loading="lazy" />
        </div>
    </fieldset>

    <fieldset class="tools-section">
        <legend>Libs / Frameworks</legend>

        <div title="Svelte" class="tool-entry">
            <enhanced:img src={SvelteImg} alt="" loading="lazy" />
        </div>

        <div title="Vue" class="tool-entry">
            <enhanced:img src={VueImg} alt="" loading="lazy" />
        </div>

        <div title="Angular" class="tool-entry">
            <enhanced:img src={AngularImg} alt="" loading="lazy" />
        </div>

        <div title="NextJS" class="tool-entry">
            <enhanced:img src={NextJsImg} alt="" loading="lazy" />
        </div>

        <div title="React" class="tool-entry">
            <enhanced:img src={ReactImg} alt="" loading="lazy" />
        </div>

        <div title="Bootstrap" class="tool-entry">
            <enhanced:img src={BootstrapImg} alt="" loading="lazy" />
        </div>

        <div title="Tailwind" class="tool-entry">
            <enhanced:img src={TailwindImg} alt="" loading="lazy" />
        </div>

        <div title="Rocket.rs" class="tool-entry">
            <enhanced:img src={RocketRsImg} alt="" loading="lazy" />
        </div>
    </fieldset>

    <fieldset class="tools-section">
        <legend>DBs</legend>

        <div title="MySQL" class="tool-entry">
            <enhanced:img src={MySqlImg} alt="" loading="lazy" />
        </div>
    
        <div title="Postgres" class="tool-entry">
            <enhanced:img src={PostgresImg} alt="" loading="lazy" />
        </div>
    
        <div title="MondongoDB" class="tool-entry">
            <enhanced:img src={MondongoDBImg} alt="" loading="lazy" />
        </div>
    
        <div title="Redis" class="tool-entry">
            <enhanced:img src={RedisImg} alt="" loading="lazy" />
        </div>

        <div title="SQLite" class="tool-entry">
            <enhanced:img src={SqliteImg} alt="" loading="lazy" />
        </div>
    </fieldset>

    <fieldset class="tools-section">
        <legend>Tools</legend>

        <div title="Nginx" class="tool-entry">
            <enhanced:img src={NginxImg} alt="" loading="lazy" />
        </div>

        <div title="Apache" class="tool-entry">
            <enhanced:img src={ApacheImg} alt="" loading="lazy" />
        </div>

        <div title="Docker" class="tool-entry">
            <enhanced:img src={DockerImg} alt="" loading="lazy" />
        </div>

        <div title="Arduino" class="tool-entry">
            <enhanced:img src={ArduinoImg} alt="" loading="lazy" />
        </div>
    
        <div title="Git" class="tool-entry">
            <enhanced:img src={GitImg} alt="" loading="lazy" />
        </div>
    </fieldset>
</div>

<style>
    .tools-container {
        display: flex;
        flex-direction: column;
        gap: var(--padding-m);
    }

    .tools-section {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: var(--padding-m);
        border: var(--color-border) solid var(--border-width);
        padding: var(--padding-m);
    }

    .tool-entry {
        height: 3rem;
    }
    .tool-entry img {
        height: 100%;
        width: auto;
    }
</style>
