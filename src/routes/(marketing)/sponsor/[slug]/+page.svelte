<script>
	let { data } = $props();
	import Copies from '$lib/components/Copies.svelte';
	import { currency } from '$lib/currency.js';

	let noOfCopiesState = $state(100);
	let otherCopies = $state();
	let currencyState = $state('PHP');
	let nextActive = $state(false);
    let category = $state("Sponsor Adult Rhapsody")
    let name = $state("")
    let email = $state("")
    let price = 21
    let phoneNumber  = $state()
    let loading = $state(false)

	function updateCopiesState(e) {
		noOfCopiesState = e.target.value;
	}

	function handleNext(e) {
		e.preventDefault();
		nextActive = true;
	}

    let completeInfo = $derived([{
      category: category,
      email: email,
      price: price,
      currency: currencyState,
      name: name,
      quantity: noOfCopiesState
    }])

    

    async function checkout() {
    if(email && name) {
        loading = true
      const data = await fetch("/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          info: completeInfo,
        }),
      }).then((data) => data.json())
      window.location.replace(data.url)
    }
    }
</script>

<main class="w-screen bg-white min-h-screen text-black px-5 py-10 flex justify-center font-mono">
	{#if nextActive}
		{@render NextForm()}
	{:else}
		{@render Form()}
	{/if}
</main>

{#snippet Form()}
	<div class="bg-white max-w-[600px] py-5 px-6 md:py-10 md:px-7 rounded-2xl shadow-2xl">
		<h1 class="text-2xl md:text-3xl text-blue-800 font-extrabold">
			Join <span class="text-black">{data.userName}</span> To Sponsor Rhapsody of Realities Daily Devotional
		</h1>

		<form action="">
			<p class="text-xl font-medium mt-6 mb-1">
				Choose Number of Copies <span class="text-red-600 font-extrabold">*</span>
			</p>
			<div class="flex justify-around flex-wrap">
				<Copies noOfCopies={100} checked={'checked'} {updateCopiesState} />
				<Copies noOfCopies={250} {updateCopiesState} />
				<Copies noOfCopies={500} {updateCopiesState} />
				<Copies noOfCopies={1000} {updateCopiesState} />
				<Copies noOfCopies={10000} {updateCopiesState} />
			</div>

			<p class="text-xl font-medium mt-6 mb-1">
				Amount <span class="text-red-600 font-extrabold">*</span>
			</p>
			<h2 class="text-3xl font-bold">{'₱' + noOfCopiesState * 21}</h2>

			<p class="text-xl font-medium mt-6 mb-1">Other Copies You Want to Sponsor</p>
			<input
				type="number"
				placeholder="1000"
				class="input input-bordered bg-white w-full"
				value={otherCopies}
				onchange={(e) => (noOfCopiesState = e.target.value)}
			/>

			<p class="text-xl font-medium mt-6 mb-1">
				Select Currency <span class="text-red-600 font-extrabold">*</span>
			</p>
			<select
				class="select select-secondary w-full bg-transparent"
				bind:value={currencyState}
			>
				<option disabled selected value="PHP">PHP</option>
				{#each currency as curr}
					<option value={curr.value}>{curr.text}</option>
				{/each}
			</select>

			<button class="btn btn-secondary w-full mt-10" onclick={handleNext}>Next</button>
		</form>
	</div>
{/snippet}

{#snippet NextForm()}
	<div class="bg-white max-w-[600px] py-5 px-6 md:py-10 md:px-7 rounded-2xl shadow-2xl">
        <h1 class="text-2xl md:text-3xl text-blue-800 font-extrabold">
			Join <span class="text-black">{data.userName}</span> To Sponsor Rhapsody of Realities Daily Devotional
		</h1>
		<form action="" class="flex flex-col gap-4 mt-8">
			<label class="input input-bordered bg-transparent flex items-center gap-2">
				<span class="font-extrabold">Name</span>
				<input type="text" class="grow" placeholder="John Doe" required bind:value={name} />
			</label>
			<label class="input input-bordered bg-transparent flex items-center gap-2">
				<span class="font-extrabold">Email</span>
				<input type="text" class="grow" placeholder="johndoe@site.com" required bind:value={email}/>
			</label>

			<label class="input input-bordered bg-transparent flex items-center gap-2">
				<input type="tel" class="grow" placeholder="Phone Number" bind:value={phoneNumber}/>
				<span class="badge badge-info">Optional</span>
			</label>

            <label for="category" class="form-control w-full">
                <span class="font-extrabold">Categories <span class="text-red-600 font-extrabold">*</span></span>
                <select class="select select-bordered w-full bg-transparent" required bind:value={category}>
                    <option disabled selected>- Select Rhapsody Category -</option>
                    <option value="Sponsor Outreaches & Missions">Sponsor Outreaches & Missions</option>
                    <option value="Sponsor Adult Rhapsody">Sponsor Adult Rhapsody</option>
                    <option value="Sponsor Rhapsody Translations">Sponsor Rhapsody Translations</option>
                    <option value="Sponsor Rhapsody for Teens">Sponsor Rhapsody for Teens</option>
                    <option value="Sponsor Rhapsody for Kids">Sponsor Rhapsody for Kids</option>
                    <option value="Sponsor Rhapsody in Braille">Sponsor Rhapsody in Braille</option>
                    <option value="Sponsor the Digital Rhapsody">Sponsor the Digital Rhapsody</option>
                </select>
            </label>

            <button class="btn mt-7" onclick={checkout}>
                {#if loading}
                    <span class="loading loading-dots loading-lg"></span>

                {:else}
                    Pay
                {/if}
                </button>
		</form>
            <button class="btn btn-ghost w-full mt-auto" onclick={() => nextActive = false}>Back</button>
	</div>
{/snippet}

<style>
	main {
		background-image: url('$lib/images/reachref-2.jpg');
		background-repeat: no-repeat;
		background-size: contain;
	}
</style>
