<script>
    import { enhance } from "$app/forms"
    let { enlistLinkModal = $bindable() } = $props()
    let loading = $state()
</script>

<dialog class="modal" bind:this={enlistLinkModal}>
	<div class="modal-box">
	  <form method="dialog">
		<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
	  </form>
	  
	  <form action="?/getlink" method="POST" use:enhance={() => {
		loading = true
		return async ({ update }) => {
				await update();
				enlistLinkModal.close()
				loading = false
			};
	  }}>
		<h3 class="text-2xl text-white font-bold mb-1">Hello!</h3>
		<p class="text-lg text-white mb-10">Enter your email to get your enlistment link</p>
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
				<input type="text" class="grow" placeholder="Email" name="email" required/>
		</label>
		<button class="btn btn-accent w-full mt-5">
			{#if loading}
                    <span class="loading loading-dots loading-lg"></span>

                {:else}
                    Get Link
                {/if}
		</button>
	  </form>
	 
	  
	</div>
</dialog>