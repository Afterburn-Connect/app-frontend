<script lang="ts">
    import Main_app from "./pages/app/main_app.svelte";
    import Login from "./pages/login/login.svelte"
    import Signup from "./pages/signup/signup.svelte"
    import Cookies from "js-cookie";
    import {PageState} from "./lib/internal_types";

    $: State = loggedIn() ? PageState.APP : PageState.LOGIN;

    function loggedIn(): boolean {
        return (Cookies.get("user_token") != undefined)
    }

</script>

<main>
	{#if State === PageState.APP}
		<Main_app></Main_app>
	{:else if State === PageState.LOGIN}
		<Login bind:State/>
	{:else if State === PageState.SIGNUP}
		<Signup bind:State/>
	{/if}
</main>

<style>
</style>
