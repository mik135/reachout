<script>
    let { form } = $props()
</script>

{#if form?.error}

<dialog id="my_modal_12" class="modal " open>
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <h1>{form.error}</h1>
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
      <h3 class="text-3xl font-bold mb-5">Hello {form.name}, Welcome!</h3>
      <h1 class="text-xl text-white">This is your enlisting link</h1>
      <p class="text-white text-lg">Share it to your friends and families. Spread the word!</p>
      <h3>https://reachout-sliv.vercel.app/{form.refID}</h3>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
{/if}


<style>
    dialog::backdrop {
        background-color: black;
        opacity: 0.1;
    }
</style>