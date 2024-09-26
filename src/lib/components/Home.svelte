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
			<div class="h-[17rem] min-[500px]:h-auto bg-blue-800 flex items-center rounded-2xl lg:h-96 lg:py-1 lg:flex lg:justify-center lg:mx-auto">
				<img src={banner} alt="banner" class="lg:h-full lg:rounded-lg">
			</div>
			<div class="mt-5">
				<div class="grid grid-cols-1 gap-3 lg:flex lg:justify-center">
					
					
					<a href="/sponsor/me"><button class="btn bg-gradient-to-r w-full from-green-700 to-green-900 text-white border-none font-bold shadow-md lg:w-96"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-6 h-6" fill="#fff"><path d="M312 24l0 10.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3s0 0 0 0c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8l0 10.6c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-11.4c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2L264 24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z"/></svg>
						SPONSOR</button></a>
						<button class="btn bg-gradient-to-r w-full from-violet-600 to-violet-900 text-white border-none font-bold shadow-md lg:w-96" onclick={() => enlistLinkModal.showModal()}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-6 h-6" fill="#fff"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
							GET ENLISTMENT LINK</button>

							<div class="dropdown static">
								<div tabindex="0" role="button" class="btn bg-gradient-watch text-white border-none font-bold shadow-md w-full lg:w-96 uppercase col-span-2">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6" fill="#fff"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
									{language == "filipino" ? "PANOORIN" : "Download Rhapsody App"}</div>
								<ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-65 text-lg p-4 mt-2 shadow-2xl  ">
									<li><a href="https://web.lwappstore.com/share/appId-32181354074e5cf63319371178894acd">
										<button class="flex gap-3 items-center ">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="orange" class="w-7 h-7"><path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM144 221.3c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z"/></svg>LoveWorld Store
										</button>
									</a></li>
								  <li><a href="https://play.google.com/store/apps/details?id=com.rhapsodyreader&pli=1"><button class="flex gap-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="green" class="w-7 h-7"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>Google Playstore</button></a></li>
								  <li><a href="https://apps.apple.com/us/app/rhapsody-of-realities/id463739646"><button class="flex gap-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-7 h-7" fill="blue"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"/></svg>Apple App Store
								  </button></a></li>
								</ul>
							  </div>
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
	<div class="px-3 py-5 grid gap-10 md:grid-cols-3 lg:px-32 md:my-10">
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
		<h3 class="text-2xl font-bold mb-1">Hello!</h3>
		<p class="text-lg mb-10">Enter your email to get your enlistment link</p>
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

