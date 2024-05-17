<script lang="ts">
    import {log_in} from "../../lib/login";
    import Loader from "../../components/Loader.svelte";

    let email = "";
    let password = "";
    $: loading = false;
    export let loggedin: boolean;

    const handleSubmit = () => {
        // Implement login logic here (e.g., sending data to server)
        log_in(email, password).then((valid_login) => {
            if (valid_login) {
                loggedin = true;
            } else {
                alert("Login failed");
            }
        });
    };
</script>

<style lang="scss">
  @use 'sass:color';
  @import "../../styles";

  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: $afterburn-bg;
  }

  .logo {
    width: 100px;
    height: 100px;
    margin-bottom: 2rem;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 300px;
    padding: 2rem;
    border-radius: 5px;
    background-color: $afterburn-form-bg;
    @include afterburn-shadow-purple
  }

  label {
    font-weight: bold;
  }

  input[type="email"],
  input[type="password"] {
    padding: 1rem;
    border: none;
    width: 80%;
    @include afterburn-shadow-purple;
    outline: none;
    border-radius: 5px;
  }

  .login-button {
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 3px;
    margin-top: 8px;
    cursor: pointer;
    width: 40%;
    transition: all 0.3s;
    background-color: $afterburn-form-field-bg;

    &:hover {
      background-color: color.adjust($afterburn-form-field-bg, $lightness: 3%);
    }
  }
</style>

<section class="login-container">
	<img alt="Afterburn Logo" class="logo" src="svg/afterburn-logo.svg"/>
	<form class="login-form" on:submit|preventDefault={handleSubmit}>
		<label for="email">Email</label>
		<input
				bind:value={email}
				id="email"
				placeholder="Enter your email"
				type="email"
		/>
		<label for="password">Password</label>
		<input
				bind:value={password}
				id="password"
				placeholder="Enter your password"
				type="password"
		/>
		<button class="login-button" type="submit">
			{#if !loading}
				Login
			{:else}
				<Loader/>
			{/if}
		</button>
	</form>
</section>

