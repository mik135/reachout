<script>
	import InnerMenu from './InnerMenu.svelte';

	let revealed = $state(false);
    let dropdown

	function toggleMenu(e) {
        e.stopPropagation()
		revealed = !revealed;
	}

    function closeMenu(e) {
        if(e.target !== dropdown) {
            revealed = false
        }
    }
</script>

<svelte:body onclick={closeMenu}/>

<section>
	<div class="navbar bg-base-100 bg-white relative">
		<div class="navbar-start">
			<button class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</button>
		</div>
		<div class="navbar-end">
			<div class="dropdown" bind:this={dropdown}>
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle" onclick={toggleMenu}>
					{#if revealed}
                    <button class="btn btn-circle btn-outline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    {:else}
                    <svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/>
					</svg>
                    
                    {/if}
				</div>
			</div>
		</div>
	</div>
	{#if revealed}
		<InnerMenu />
	{/if}
</section>
