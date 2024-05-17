<script lang="ts">
  import Main_app from "./pages/app/main_app.svelte";
  import Login from "./pages/login/login.svelte"
  import Cookies from "js-cookie";

  $: loggedin = loggedIn();

    function loggedIn(): boolean {
        return (Cookies.get("afterburn-token") != undefined)
    }

</script>

<main>
    {#if loggedin}
        <Main_app></Main_app>
    {:else}
        <Login bind:loggedin/>
    {/if}
</main>

<style>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }

    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }

    .logo.svelte:hover {
        filter: drop-shadow(0 0 2em #ff3e00aa);
    }

    .read-the-docs {
        color: #888;
    }
</style>
