<script lang="ts">
    import GitImg from "$lib/assets/images/tools/git.webp?enhanced";
    import BashImg from "$lib/assets/images/tools/bash.webp?enhanced";
    import RustImg from "$lib/assets/images/tools/rust.webp?enhanced";
    import TypeScriptImg from "$lib/assets/images/tools/typescript.webp?enhanced";
    import JavaScriptImg from "$lib/assets/images/tools/javascript.webp?enhanced";
    import CImg from "$lib/assets/images/tools/C.webp?enhanced";
    import PythonImg from "$lib/assets/images/tools/python.webp?enhanced";
    import JavaImg from "$lib/assets/images/tools/java.webp?enhanced";
    import GoImg from "$lib/assets/images/tools/golang.webp?enhanced";
    import MySqlImg from "$lib/assets/images/tools/mysql.webp?enhanced";
    import PostgresImg from "$lib/assets/images/tools/postgres.webp?enhanced";
    import MondongoDBImg from "$lib/assets/images/tools/mondongodb.webp?enhanced";
    import RedisImg from "$lib/assets/images/tools/redis.webp?enhanced";
    import DockerImg from "$lib/assets/images/tools/docker.webp?enhanced";
</script>

<div class="tools-container">
    <div class="tool-entry">
        <enhanced:img src={RustImg} alt="" loading="lazy" />
    </div>

    <div class="tool-entry">
        <enhanced:img src={CImg} alt="" loading="lazy" />
    </div>

    <div class="tool-entry">
        <enhanced:img src={TypeScriptImg} alt="" loading="lazy" />
    </div>

    <div class="tool-entry">
        <enhanced:img src={JavaScriptImg} alt="" loading="lazy" />
    </div>

    <div class="tool-entry">
        <enhanced:img src={PythonImg} alt="" loading="lazy" />
    </div>

    <div class="tool-entry">
        <enhanced:img src={JavaImg} alt="" loading="lazy" />
    </div>

    <div class="tool-entry">
        <enhanced:img src={GoImg} alt="" loading="lazy" />
    </div>

    <div class="tool-entry">
        <enhanced:img src={MySqlImg} alt="" loading="lazy" />
    </div>

    <div class="tool-entry">
        <enhanced:img src={PostgresImg} alt="" loading="lazy" />
    </div>

    <div class="tool-entry">
        <enhanced:img src={MondongoDBImg} alt="" loading="lazy" />
    </div>

    <div class="tool-entry">
        <enhanced:img src={RedisImg} alt="" loading="lazy" />
    </div>

    <div class="tool-entry">
        <enhanced:img src={DockerImg} alt="" loading="lazy" />
    </div>

    <div class="tool-entry">
        <enhanced:img src={GitImg} alt="" loading="lazy" />
    </div>

    <div class="tool-entry">
        <enhanced:img src={BashImg} alt="" loading="lazy" />
    </div>
</div>

<style>
    .tools-container {
        display: flex;
        flex-wrap: wrap;
        gap: var(--padding-m);
    }

    .tool-entry {
        height: 3rem;
        width: 3rem;
    }
    .tool-entry img {
        height: 100%;
        width: 100%;
    }
</style>
