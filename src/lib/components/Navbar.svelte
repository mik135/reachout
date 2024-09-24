<script>
    import Dialog from "./Dialog.svelte";
	import LoginModal from "./LoginModal.svelte";
    

	  let { language, changeLang } = $props();
 
    let dialogRef
    let loginOption = $state("email")

    function openModal() {
        dialogRef.showModal()
    }

    function closeModal() {
      dialogRef.close()
    }
    

</script>

<nav class="w-full py-3 px-2 flex gap-5 lg:justify-between lg:items-center sticky top-0 bg-white h-fit shadow-xl">
    <select class="select select-primary w-full lg:w-fit bg-white" bind:value={language} onchange={changeLang}>
        <option disabled selected>Choose a language</option>
        <option value="filipino">Filipino</option>
        <option value="english">English</option>
    </select>
    <div class="hidden lg:flex lg:gap-5 lg:text-lg">
        <a href="" class="text-blue-600 font-bold">{language == "filipino" ? "Tahanan" : "Home"}</a>
        <a href="https://reachoutworld.org/reachout-world/campaigns">ReachOut World Campaigns</a>
        <a href="/sponsor/me">{language == "filipino" ? "Tagapagtaguyod" : "Sponsor"}</a>
        <a href="">Signup</a>
    </div>
    <button class="btn btn-primary text-white lg:w-32" onclick={openModal}>Login</button>
</nav>


<LoginModal bind:dialog={dialogRef}/>

