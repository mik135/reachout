<script>
    const { img, title, content, btnMsg } = $props()
</script>

<div class="flex flex-col gap-5">
    <img src={img} alt="" class={img.includes("ROWDAY") ? "hidden" : "rounded-xl shadow-2xl"}>
    <h3 class="">{title}</h3>
    <p>{content}</p>
    {#if btnMsg == "Give"}
    <div class="grid grid-cols-2 gap-5">
        <button class="btn btn-outline">Signup</button>
        <button class="btn btn-success text-white font-extrabold">{btnMsg}</button>
    </div>
    {:else if btnMsg == "Learn More"}
    <div class="grid grid-cols-2">
        <button class="btn btn-secondary text-white font-extrabold">{btnMsg}</button>
    </div>
    {:else if btnMsg.includes("Visit")}
    <div class="grid grid-cols-2">
        <button class="btn btn-outline btn-secondary font-extrabold">{btnMsg}</button>
    </div>
    {:else}
    <div class="grid grid-cols-2">
        <button class="btn text-white font-extrabold">{btnMsg}</button>
    </div>
    {/if}
</div>

<style>
    h3 {
		@apply text-2xl font-bold text-[#344767]
	}
</style>