<script>
    import QuantityCounter from './QuantityCounter.svelte';
    let { dialogRel = $bindable(), email, name, quantity, category, decrementQuantity, incrementQuantity } = $props()


    let price = 300
    
  
    let totalAmount = $derived(quantity * price);
  </script>
  
  

  <dialog id="my_modal_1" class="modal" bind:this={dialogRel}>
    <div class="modal-box">
        <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        <h4 class="text-2xl font-bold">Sponsor Summary</h4>
        <div class="">
            <div class="my-7">
              <p class="text-indigo-200 text-xl flex justify-between">Email: <span class="text-white">{email}</span></p>
              <p class="text-indigo-200 text-xl flex justify-between">Name: <span class="text-white">{name}</span></p>
              <p class="text-indigo-200 text-xl flex justify-between flex-wrap">Category: <span class="text-white">{category}</span></p>
              <p class="text-indigo-200 text-xl flex justify-between">Amount: <span class="text-white">${price}</span></p>
            </div>
            <QuantityCounter {quantity} {decrementQuantity} {incrementQuantity}/>
        </div>
        <h5 class="text-xl flex justify-between mt-3">Total Amount: <span class="text-white font-extrabold">${totalAmount}</span></h5>
        {#if category == "Teevo"}
            <a href="https://donate.stripe.com/test_bIYcP3gDa5wc9kQbIJ?locale=fil"><button class="btn btn-accent w-full mt-5">Pay</button></a>
        {:else}
        <a href="https://donate.stripe.com/test_8wMcP30Ec7EkaoU000?locale=fil"><button class="btn btn-accent w-full mt-5">Pay</button></a>
        {/if}
          
      <div class="modal-action">
      </div>
    </div>
  </dialog>

