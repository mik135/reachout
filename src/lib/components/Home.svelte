<script>
	import { enhance } from "$app/forms"
	import banner from "$lib/images/ROWDAY_BANNER_COMPRESSED.webp"
	import noLeft from "$lib/images/No-one-Left-Behind-vc.jpg"
	import rowd from "$lib/images/rowd_compressed.jpg"
	import { cardInfoFilipino } from "$lib/data.js"
	import { cardInfo } from "$lib/data.js"
	import Card from "$lib/components/Card.svelte"

	let enlistLinkModal

	let { language } = $props()
	let cardInfoCurrent = $derived.by(() => {
        let card
        if(language == "filipino") {
            card = cardInfoFilipino
        } else {
            card = cardInfo
        }
        return card 
    })

	let loading = $state(false)
	
    

	let firstGrid = $derived(cardInfoCurrent.slice(0, 3))
	let secondGrid = $derived(cardInfoCurrent.slice(3, 6))
	let thirdGrid = $derived(cardInfoCurrent.slice(6, 9))
	let fourthGrid = $derived(cardInfoCurrent.slice(9, 11))

</script>


<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
</svelte:head>


<main>
	<div class="px-3 py-5">
		<section class="mb-10 min-[500px]:mb-24">
			<div class="h-[17rem] min-[500px]:h-auto bg-blue-800 flex items-center rounded-2xl lg:h-96 lg:py-5 lg:flex lg:justify-center lg:w-[70vw] lg:mx-auto">
				<img src={banner} alt="banner" class="lg:h-full lg:rounded-lg">
			</div>
			<div class="mt-5">
				<div class="grid grid-cols-2 gap-3 lg:flex lg:justify-center">
					<button class="btn bg-gradient-watch text-white border-none font-bold shadow-md lg:w-96">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="h-6 w-6" fill="#fff"><path d="M64 64l0 288 512 0 0-288L64 64zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zM128 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
						{language == "filipino" ? "PANOORIN" : "WATCH NOW"}</button>
					<a href="/sponsor/me"><button class="btn bg-gradient-to-r w-full from-green-700 to-green-900 text-white border-none font-bold shadow-md lg:w-96"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-6 h-6" fill="#fff"><path d="M312 24l0 10.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3s0 0 0 0c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8l0 10.6c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-11.4c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2L264 24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z"/></svg>
						SPONSOR</button></a>
						<a href="" class="col-span-2"><button class="btn bg-gradient-to-r w-full from-violet-600 to-violet-900 text-white border-none font-bold shadow-md lg:w-96" onclick={() => enlistLinkModal.showModal()}>
							GET ENLISTMENT LINK</button></a>
				</div>
			</div>
		</section>
		<section class="grid gap-7 md:grid-cols-2 xl:grid-cols-3 lg:px-32 md:my-10">
			{#each firstGrid as data}
				<Card img={data.img} title={data.title} content={data.content} btnMsg={data.btnMsg} category={data.category}/>
			{/each}
		
		</section>
	</div>
	<div class="my-5">
		<img src={noLeft} alt="no one left banner">
	</div>

	<div class="px-3 py-5 grid gap-10 md:grid-cols-2 xl:grid-cols-3 lg:px-32 md:my-10">
		{#each secondGrid as data}
				<Card img={data.img} title={data.title} content={data.content} btnMsg={data.btnMsg} category={data.category}/>
		{/each}
	</div>

	<div class="my-5 md:hidden">
		<img src={rowd} alt="rhapsody banner">
	</div>

	<div class="px-3 py-5 grid gap-10 md:grid-cols-2 xl:grid-cols-3 lg:px-32 md:my-16">
		{#each thirdGrid as data}
				<Card img={data.img} title={data.title} content={data.content} btnMsg={data.btnMsg} category={data.category}/>
		{/each}
	</div>
	<div class="px-3 py-5 grid gap-10 md:grid-cols-2 lg:px-32 md:my-10">
		{#each fourthGrid as data}
				<Card img={data.img} title={data.title} content={data.content} btnMsg={data.btnMsg}/>
		{/each}
	</div>
</main>

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

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}

	.bg-gradient-watch {
		background-image: linear-gradient(310deg, #141727 0%, #3A416F 100%)
	}

	:global(p) {
		@apply font-["Inter"] text-lg text-[#344767]
	}
</style>

