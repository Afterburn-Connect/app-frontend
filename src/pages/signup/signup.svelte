<script lang="ts">
    import Loader from "../../components/Loader.svelte";
    import {PageState} from "../../lib/internal_types";
    import PasswordValidator from "password-validator";
    import {signup} from "../../lib/signup";

    let username = "";
    let email = "";
    let password = "";
    $: error_message = "";
    $: loading = false;
    export let State: PageState;

    const handleSubmit = () => {
        console.log("Signup")
        // Implement signup logic here (e.g., sending data to server)
        const schema = new PasswordValidator();
        schema
            .is().min(8)
            .has().digits(2)
            .has().symbols();

        if (!schema.validate(password)) {
            error_message = "Password must be at least 8 characters long, have 2 numbers and a special character";
            return;
        }

        loading = true;

        signup(email, password, username)
            .then((response) => {
                if (response === 200) {
                    State = PageState.LOGIN;
                } else if (response === 405) {
                    error_message = "Email already exists";
                } else {
                    error_message = "An error occurred";
                }
                loading = false;
            })
            .catch((error) => {
                    console.error(error);
                    loading = false;
                }
            );
    };
</script>


<section class="signup-container">
	<img alt="Afterburn Logo" class="logo" src="svg/afterburn-logo.svg"/>
	<form class="signup-form" on:submit|preventDefault={handleSubmit}>

		<label for="username">Username</label>
		<input
				bind:value={username}
				id="username"
				placeholder="Enter your username"
				type="text">

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
		{#if error_message !== ""}
			<p>{error_message}</p>
		{/if}
		<button class="signup-button" type="submit">
			{#if !loading}
				Signup
			{:else}
				<Loader/>
			{/if}
		</button>
	</form>
</section>

<style lang="scss">
  @use 'sass:color';
  @import "../../styles";

  p {
    font-size: small;
  }

  .signup-container {
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

  .signup-form {
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

  input {
    padding: 1rem;
    border: none;
    width: 80%;
    @include afterburn-shadow-purple;
    outline: none;
    border-radius: 5px;
  }

  .signup-button {
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
