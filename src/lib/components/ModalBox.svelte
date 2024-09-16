<script>
    import DetailsModal from "./DetailsModal.svelte";
   let { dialogRel = $bindable() } = $props()
    let checked = $state(false)
    let firstsubmitting = $state(false)
    let email = $state("")
    let dialogElm
    let emailError = $state("")


    function firstSubmit() {
      if(email.trim() == "") {
        return emailError = "Empty Field"
      }
      emailError = ""
      firstsubmitting = true 
      setTimeout(() => {
        firstsubmitting = false
        dialogRel.close()
        dialogElm.showModal()        
      }, 1000)
    }

    function handleEmailChange() {
      emailError = ""
    }

</script>


<div class="modal-box">
    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onclick={() => dialogRel.close()}>✕</button>
  <h3 class="text-3xl font-bold pb-5">Get Started</h3>
  <h5 class="text-xl">Choose Login Option</h5>
  <div class="pt-2 pb-5">
    <label class="flex cursor-pointer gap-2">
        <span class={!checked ? "label-text text-yellow-600 font-bold" : "label-text"}>Email</span>
        <input type="checkbox" value="" class="toggle" bind:checked={checked}/>
        <span class={checked ? "label-text text-yellow-600 font-bold" : "label-text"}>Phone Number</span>
    </label>
  </div>
  {#if emailError !== ""}
  <div role="alert" class="alert alert-error my-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>{emailError}</span>
  </div>
  {/if}
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
          <input type="email" class="grow" placeholder="Email" name="email" bind:value={email} required/>
        </label>
        {#if firstsubmitting}
        <button class="btn btn-accent w-full" onclick={firstSubmit} disabled="disabled">
          <span class="loading loading-spinner text-primary"></span>
        </button>
        {:else}
        <button class="btn btn-accent w-full" onclick={firstSubmit}>
          Submit Email
        </button>
        {/if}
  </form>
</div>

<DetailsModal bind:dialog={dialogElm} {email}/>



