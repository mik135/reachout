<script>
    import Clipboard from "$lib/components/Clipboard.svelte"
    let { form } = $props()
    
</script>

{#if form?.error}
<dialog id="my_modal_12" class="modal " open>
  <div class="modal-box">
    <h1 class="text-3xl text-red-700 font-bold">Oops! Something Went Wrong.</h1>
    <h3 class="text-xl text-white mt-3">{form.error}</h3>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
{/if}

{#if form?.success || form?.message}
<dialog id="my_modal_13" class="modal" open>
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="text-3xl font-bold mb-5">Hello {form.name}, Welcome Back!</h3>
      <h1 class="text-xl text-white">This is your enlisting link</h1>
      <p class="text-white text-lg">Share it to your friends and families. Spread the word!</p>
      <Clipboard linkToCopy={"https://reachout-sliv.vercel.app/sponsor/" + form.refID}/>
      <div class="modal-action">
      </div>
    </div>
  </dialog>
{/if}
{#if form?.eRefID && form?.eFirstName}
<dialog id="my_modal_13" class="modal" open>
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="text-3xl font-bold mb-5 text-white">Hello {form.eFirstName}, Welcome Back!</h3>
      <h1 class="text-xl text-white">This is your personal enlisting link</h1>
      <p class="text-white text-lg">Share it to your friends and families. Spread the word!</p>
      <Clipboard linkToCopy={"https://reachout-sliv.vercel.app/sponsor/" + form.eRefID}/>
      <div class="modal-action">
        
      </div>
    </div>
  </dialog>
{/if}



{#if form?.done}
<h1>{form.done}</h1>
{/if}


<style>
    dialog::backdrop {
        background-color: black;
        opacity: 0.1;
    }
</style>