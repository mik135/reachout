<script>
    import QuantityCounter from './QuantityCounter.svelte';
    let { dialogRel = $bindable(), email, name, quantity, category, decrementQuantity, incrementQuantity } = $props()


    let price = 300
    
  
    let totalAmount = $derived(quantity * price);

    let itemInfo = $derived([{
      category: category,
      quantity: quantity,
      email: email,
      price: price,
    }])

    async function checkout() {
      const data = await fetch("/give", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: itemInfo,
        }),
      }).then((data) => data.json())
      window.location.replace(data.url)
    }
  </script>
  
  

  <dialog id="my_modal_1" class="modal" bind:this={dialogRel}>
    <div class="modal-box">
        <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        <h4 class="text-2xl font-bold">Sponsor Summary</h4>
        <div class="">
            <div class="my-7">
              <p class="dark:text-indigo-500 text-xl flex justify-between">Email: <span class="dark:text-white text-black">{email}</span></p>
              <p class="dark:text-indigo-500 text-xl flex justify-between">Name: <span class="dark:text-white text-black">{name}</span></p>
              <p class="dark:text-indigo-500 text-xl flex justify-between flex-wrap">Category: <span class="dark:text-white text-black">{category}</span></p>
              <p class="dark:text-indigo-500 text-xl flex justify-between">Amount: <span class="dark:text-white text-black">₱{price}</span></p>
            </div>
            <QuantityCounter {quantity} {decrementQuantity} {incrementQuantity}/>
        </div>
        <h5 class="text-xl flex justify-between mt-3">Total Amount: <span class="text-white font-extrabold">₱{totalAmount}</span></h5>
        <button class="btn btn-accent w-full mt-5" onclick={checkout}>Pay</button>
          
      <div class="modal-action">
      </div>
    </div>
  </dialog>

