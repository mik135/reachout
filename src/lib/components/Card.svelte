<script>
    const { img, title, content, btnMsg } = $props()

    let lineClamp = $state(false)

    function addLineClamp() {
        lineClamp = true
    }
    function removeLineClamp() {
        lineClamp = false
    }
</script>

<div class="flex flex-col gap-5 cursor-pointer container">
    <img loading="lazy" src={"./" + img} alt={title} class={img.includes("ROWDAY") ? "hidden md:block rounded-xl shadow-2xl md:min-h-52 md:max-h-52" : "rounded-xl shadow-2xl md:min-h-52 md:max-h-52"}>
    <h3 class="uppercase">{title}</h3>
    <p class="md:flex-1 md:overflow-hidden md:line-clamp-3 md:hover:line-clamp-none hover:transition-all">{content}</p>
    {#if btnMsg == "Give" || btnMsg.includes("bigay")}
    <div class="grid grid-cols-2 gap-5">
        <button class="btn btn-outline">Signup</button>
        <button class="btn btn-success text-white font-extrabold">{btnMsg}</button>
    </div>
    {:else if btnMsg == "Learn More" || btnMsg.includes("Matuto")}
    <div class="grid grid-cols-2">
        <button class="btn btn-secondary text-white font-extrabold">{btnMsg}</button>
    </div>
    {:else if btnMsg.includes("PRAY") || btnMsg.includes("MANALANGIN")}
    <div class="grid grid-cols-2">
        <a href="https://1billionminutes.mystreamspace.org"><button class="btn text-white font-extrabold">{btnMsg}</button></a>
    </div>
    {:else if btnMsg.includes("Website")}
    <div class="grid grid-cols-2">
        <button class="btn btn-outline btn-secondary font-extrabold">{btnMsg}</button>
    </div>
    {:else}
    <div class="grid grid-cols-2">
        <button class="btn text-white font-extrabold">{btnMsg}</button>
    </div>
    {/if}
</div>

<style lang="postcss">
    h3 {
		@apply text-2xl font-bold text-[#344767] min-[600px]:text-4xl md:text-xl;
	}
    p:hover {
        animation: revealing 300ms ease-out;
    }
    @keyframes revealing {
        from{
            @apply line-clamp-6;
            opacity: 0.8;
        }
        to {
            @apply line-clamp-none;
            opacity: 1;
        }
    }
</style>