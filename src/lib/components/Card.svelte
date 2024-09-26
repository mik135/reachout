<script>
    import SponsorModal from "./SponsorModal.svelte"
    import GetLink from "./GetLink.svelte"
    const { img, title, content, btnMsg, category } = $props()

    let modal
    let enlistModal

    let lineClamp = $state(false)

    function addLineClamp() {
        lineClamp = true
    }
    function removeLineClamp() {
        lineClamp = false
    }
</script>

<div class="flex flex-col gap-5 cursor-pointer container">
    <div class="w-full md:min-h-52 md:max-h-52"><img loading="lazy" src={"./" + img} alt={title} class={img.includes("ROWDAY") ? "hidden md:block rounded-xl shadow-2xl" : "rounded-xl shadow-2xl w-full h-full"}></div>
    <h3 class="uppercase">{title}</h3>
    <p class="md:flex-1 md:overflow-hidden md:line-clamp-3 md:hover:line-clamp-none hover:transition-all">{content}</p>
    {#if btnMsg == "Give" || btnMsg.includes("bigay")}
    <div class="grid grid-cols-2 gap-5">
        <button class="btn btn-success text-white font-extrabold"  onclick={() => modal.showModal()}>{btnMsg}</button>
    </div>
    {:else if btnMsg == "Learn More" || btnMsg.includes("Matuto")}
    <div class="grid grid-cols-2">
         <a href="https://give.rhapsodyofrealities.org"><button class="btn btn-secondary text-white font-extrabold w-full">{btnMsg}</button></a>
    </div>
    {:else if btnMsg.includes("PRAY") || btnMsg.includes("MANALANGIN")}
    <div class="grid grid-cols-2">
        <a href="https://1billionminutes.mystreamspace.org"><button class="btn hover:bg-slate-800 bg-black text-white font-extrabold w-full">{btnMsg}</button></a>
    </div>
    {:else if btnMsg.includes("Website")}
    <div class="grid grid-cols-2">
        <a href="https://rhapsodyofrealities.org"><button class="btn btn-outline btn-secondary font-extrabold w-full">{btnMsg}</button></a>
    </div>
    {:else if btnMsg.includes("SPONSOR")}
    <div class="grid grid-cols-2">
        <button class="btn bg-black hover:bg-slate-800 text-white font-extrabold" onclick={() => modal.showModal()}>{btnMsg}</button>
    </div>
    {:else if btnMsg.includes("Refer") || btnMsg.includes("Mag-refer")}
    <div class="grid grid-cols-2">
        <button class="btn bg-black hover:bg-slate-800 text-white font-extrabold" onclick={() => enlistModal.showModal()}>{btnMsg}</button>
    </div>
    {:else}
    <div class="grid grid-cols-2">
        <button class="btn bg-black hover:bg-slate-800 text-white font-extrabold">{btnMsg}</button>
    </div>
    {/if}
</div>


<SponsorModal bind:dialogRef={modal} {category}/>
<GetLink bind:enlistLinkModal={enlistModal} />


<style lang="postcss">
    h3 {
		@apply text-2xl font-bold text-[#344767] min-[600px]:text-4xl md:text-xl;
	}
    p:hover {
        animation: revealing  500ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    @keyframes revealing {
        from{
            opacity: 0.8;
        }
        to {
            @apply line-clamp-none;
            opacity: 1;
        }
    }
</style>