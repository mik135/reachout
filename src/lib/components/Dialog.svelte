<script>
    const { dialogActive } = $props()

    let dialog

    const run = () => {
        if(dialogActive) {
            dialog.showModal()
        }
    }
    run()
</script>


<dialog id="my_modal_1" class="modal" bind:this={dialog}>
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>