<script>
    import Dialog from "./Dialog.svelte";
    

	  let { language, changeLang } = $props();
 
    let dialogActive = $state(false)
    let loginOption = $state("email")

    function openModal() {
        dialogActive = true
    }
    

</script>

<nav class="w-full py-3 px-2 flex gap-5 lg:justify-between lg:items-center">
    <select class="select select-primary w-full lg:w-fit bg-white" bind:value={language} onchange={changeLang}>
        <option disabled selected>Choose a language</option>
        <option value="filipino">Filipino</option>
        <option value="english">English</option>
    </select>
    <div class="hidden lg:flex lg:gap-5 lg:text-lg">
        <a href="" class="text-blue-600 font-bold">{language == "filipino" ? "Tahanan" : "Home"}</a>
        <a href="">ReachOut World Campaigns</a>
        <a href="">{language == "filipino" ? "Tagapagtaguyod" : "Sponsor"}</a>
        <a href="">Signup</a>
    </div>
    <button class="btn btn-primary text-white lg:w-32" onclick={() => my_modal_1.showModal()}>Login</button>
</nav>

<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 class="text-2xl font-bold">Get Started</h3>
    <h5 class="text-xl">Choose Login Option</h5>
    <div class="flex justify-between my-5 gap-5">
        <label for="email" class="text-lg flex items-center gap-3">
            <input type="radio" name="radio-1" class="radio" checked="checked"/>
            Use Email
        </label>
        <label for="email" class="text-lg flex items-center gap-3">
            <input type="radio" name="radio-1" class="radio" />
            Use Phone Number
        </label>
    </div>
    <form class="flex flex-col gap-5">
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
            <input type="text" class="grow" placeholder="Email" />
          </label>
          <button class="btn btn-accent w-full">Submit Email</button>
    </form>
  </div>
</dialog>


