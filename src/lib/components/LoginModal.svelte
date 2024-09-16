<script>
    import ModalBox from "./ModalBox.svelte"
    let { dialog = $bindable(), closeModal } = $props()

</script>


<dialog id="my_modal_14" class="modal" bind:this={dialog}>
    <ModalBox {closeModal} bind:dialogRel={dialog}/>
</dialog>



<style>
    
</style>
