<script lang="ts">
  import type { Message } from "../../../types";
  import Loader from "../../../components/Loader.svelte";
  import Messagebar from "./messagebar.svelte";
  import * as config from "../../../config.json";
  import axios from "axios";
  import Cookies from "js-cookie";

  $: messages_loading = true;
  $: messages = [] as Message[];

  async function getMessages() {
    let token = Cookies.get("user_token");
    let since = Cookies.get("last_message_id") || 0;
    let response = await axios.get(
      `${config.api_host}/messages_since/${token}/${since}`,
    );
    messages = response.data;
    messages_loading = false;
  }

  getMessages();
</script>

<main>
  <h1>Chat</h1>
  <div class="chat_container">
    <div class="chat_messages">
      {#if messages_loading}
        <Loader />
      {:else}
        {#each messages as message}
          <div class="message">
            <p>{message.content}</p>
            <p>{message.author}</p>
          </div>
        {/each}
      {/if}
    </div>
    <div class="messagebar">
      <Messagebar />
    </div>
  </div>
</main>

<style>
</style>

