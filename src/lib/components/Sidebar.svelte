<script lang="ts">
  import { _ } from "svelte-i18n";
  let isOpen = false;
</script>

<div class={`sidebar-container ${isOpen ? "article-open" : ""}`} id="sidebar">
  <article>
    <div class="sidebar-title">
      <h3>Filesystem</h3>
    </div>

    <a class="sidebar-link" href="/about">
      <svg
        class="sidebar-link-icon"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M16 15a1 1 0 0 1-2 0V8A6 6 0 1 0 2 8v7a1 1 0 0 1-2 0V8a8 8 0 1 1 16 0v7zm-4-3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-4 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-4 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm2-6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          fill-rule="evenodd"
        /></svg
      >
      <p>{$_("page.sidebar.about")}</p>
    </a>
    <a class="sidebar-link" href="/music">
      <svg
        class="sidebar-link-icon"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M4 10.171V0h12v6H6v7c0 1.657-1.347 3-3 3-1.657 0-3-1.347-3-3a3.002 3.002 0 0 1 4-2.829zM4 12H2v2h2v-2zM6 2v2h8V2H6zm8 6.171V6h2v5c0 1.657-1.347 3-3 3-1.657 0-3-1.347-3-3a3.002 3.002 0 0 1 4-2.829zM14 10h-2v2h2v-2z"
          fill-rule="evenodd"
        /></svg
      >
      <p>{$_("page.sidebar.music")}</p>
    </a>
    <a class="sidebar-link" href="/games">
      <svg
        class="sidebar-link-icon"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0h16v12h-2v4H2v-4H0V0zm2 2v8h2v4h1v-2h2v2h2v-2h2v2h1v-4h2V2H2zm6 6l1.414 1.414-.707.707L8 9.414l-.707.707-.707-.707L8 8zm2-3h2v2h-2V5zM4 5h2v2H4V5z"
          fill-rule="evenodd"
        />
      </svg>
      <p>{$_("page.sidebar.games")}</p>
    </a>
    <a class="sidebar-link" href="/projects">
      <svg
        class="sidebar-link-icon"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M8 8v5h4V8h-2V6H8v2zm-8 8h16V0H0v16zm2-2V2h12v12H2zM8 4h2V2H8v2zm2 2h2V4h-2v2zm-1 6v-2h2v2H9z"
          fill-rule="evenodd"
        /></svg
      >
      <p>{$_("page.sidebar.proyects")}</p>
    </a>
  </article>

  <button
    class={`switch ${isOpen ? "switch-open" : ""}`}
    on:click={() => (isOpen = !isOpen)}
  >
    <svg class="switch-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M6.001 7.128L6 10.438l19.998-.005L26 7.124zM6.001 21.566L6 24.876l19.998-.006.002-3.308zM6.001 14.341L6 17.65l19.998-.004.002-3.309z"/></svg>
  </button>
</div>

<style>
  .sidebar-container {
    position: fixed;
    top: calc(var(--padding-x) + var(--header-height));
    left: calc(0rem - var(--sidebar-width));
    display: flex;
    flex-direction: row;
    pointer-events: none;
    z-index: 100;
  }

  .sidebar-container * {
    pointer-events: all;
  }

  .sidebar-title {
    padding-bottom: var(--padding-s);
  }

  .sidebar-link {
    display: flex;
    align-items: center;
    gap: var(--padding-s);
  }

  .sidebar-link-icon {
    fill: var(--color-fg);
    height: 1em;
    /* width: 0%; */
  }
  .sidebar-link:hover .sidebar-link-icon {
    fill: var(--color-accent);
  }

  article {
    width: var(--sidebar-width);
    display: flex;
    flex-direction: column;
    gap: var(--padding-s);
    background-color: var(--color-bg);
    border: var(--border-width) solid var(--color-border);
    padding: var(--padding-m);
  }
  .article-open {
    left: var(--padding-m) !important;
  }

  .switch {
    height: 3.5rem;
    border: var(--border-width) solid var(--color-border);
    border-left: 0;
    background: var(--color-bg);
    padding: var(--padding-s);
  }
  .switch-open p {
    transform: rotate(180deg);
  }
  .switch-open .switch-icon {
    transform: rotate(90deg);
  }

  .switch-icon {
    width: 1.5rem;
    fill: var(--color-fg);
  }
</style>
