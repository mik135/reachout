<script>
    import { enhance } from '$app/forms'
    let { dialog = $bindable(), email} = $props()
    let count = $state(0)
    let address = $state("")
    let firstName = $state("")
    let confirmationDialog

    let loading = $state(false)
    
</script>

<dialog id="my_modal_17" class="modal" bind:this={dialog}>
    <div class="modal-box">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onclick={() => dialog.close()}>✕</button>
      <h3 class="font-bold pt-3 pb-2 text-3xl">COMPLETE YOUR REGISTRATION</h3>
      <p class="text-white pb-7 text-sm">Please take a moment to share your information with us. We promise to keep it safe and secure, and to use it only to enhance your Reachout World Experience</p>
      <div class="flex flex-col gap-5">
        <form action="?/create" method="POST" class="flex flex-col gap-5" use:enhance={() => {
          loading = true
          return async ({ update }) => {
			      await update();
            dialog.close()
			      loading = false;
		      };
        }}>
            <label class="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" class="grow" placeholder="First Name" name="firstName" bind:value={firstName} required/>
            </label>
            <label class="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="email" class="grow" placeholder="Email" name="email" bind:value={email} required/>
            </label>
            <label class="input input-bordered flex items-center gap-2">
                Address
                <input type="text" class="grow" placeholder="10, Love Avenue" name="address" bind:value={address}/>
              </label>
              <label for="range" class="flex flex-col gap-3 text-xl">
                How many people will be participating with you? ({count})
              <input type="range" min="0" max="10" class="range" step="1" name="referralCount" bind:value={count}/>
                <div class="flex w-full justify-between px-2 text-xs">
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                </div>
            </label>
        
            {#if loading}
            <button class="btn btn-accent w-full" disabled="disabled">
              <span class="loading loading-spinner text-primary"></span>
            </button>
            {:else}
            <button class="btn btn-accent w-full" type="submit">
              Proceed
            </button>
            {/if}
        </form>
      </div>
    </div>
</dialog>




