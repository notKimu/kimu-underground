<script lang="ts">
  import Git from "$lib/assets/images/git.png";
  import Bash from "$lib/assets/images/bash.png";
  import Rust from "$lib/assets/images/rust.png";
  import TypeScript from "$lib/assets/images/typescript.png";
  import JavaScript from "$lib/assets/images/javascript.png";
  import C from "$lib/assets/images/C.png";
  import Python from "$lib/assets/images/python.png";
  import Java from "$lib/assets/images/java.png";
  import Go from "$lib/assets/images/golang.png";
  import MySql from "$lib/assets/images/mysql.png";
  import Postgres from "$lib/assets/images/postgres.png";
  import MondongoDB from "$lib/assets/images/mondongodb.png";
  import Redis from "$lib/assets/images/redis.png";
  import Docker from "$lib/assets/images/docker.png";
</script>

<div class="tools-container">
  <div class="tool-entry">
    <img src={Rust} alt="" />
  </div>

  <div class="tool-entry">
    <img src={C} alt="" />
  </div>

  <div class="tool-entry">
    <img src={TypeScript} alt="" />
  </div>

  <div class="tool-entry">
    <img src={JavaScript} alt="" />
  </div>

  <div class="tool-entry">
    <img src={Python} alt="" />
  </div>

  <div class="tool-entry">
    <img src={Java} alt="" />
  </div>

  <div class="tool-entry">
    <img src={Go} alt="" />
  </div>

  <div class="tool-entry">
    <img src={MySql} alt="" />
  </div>

  <div class="tool-entry">
    <img src={Postgres} alt="" />
  </div>

  <div class="tool-entry">
    <img src={MondongoDB} alt="" />
  </div>

  <div class="tool-entry">
    <img src={Redis} alt="" />
  </div>

  <div class="tool-entry">
    <img src={Docker} alt="" />
  </div>

  <div class="tool-entry">
    <img src={Git} alt="" />
  </div>

  <div class="tool-entry">
    <img src={Bash} alt="" />
  </div>
</div>

<style>
  .tools-container {
    display: flex;
    flex-wrap: wrap;
    gap: var(--padding-m);
  }

  .tool-entry {
    height: 4rem;
    width: 4rem;
  }
  .tool-entry img {
    width: 100%;
  }
</style>
