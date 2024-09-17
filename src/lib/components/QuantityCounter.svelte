<script>
    let { quantity, decrementQuantity, incrementQuantity }  = $props()

    
</script>

<div class="">
    <label for="" class="font-bold">Quantity</label>
    <div class="flex items-center gap-4 mt-2">
        <button class="btn text-2xl font-extrabold" type="button" onclick={decrementQuantity}>-</button>
        <h3 class="text-xl text-white">{quantity}</h3>
        <button class="btn text-2xl font-extrabold" type="button" onclick={incrementQuantity}>+</button>
    </div>
</div>