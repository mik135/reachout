<script>
    let { noOfCopies, checked, updateCopiesState } = $props()

    
</script>

<div class="form-control">
    <label class="label cursor-pointer w-28 h-24 shadow-lg p-5 rounded-lg flex gap-3 justify-center items-center">
        <input type="radio" name="radio-10" class="radio radio-success" checked={checked} value={noOfCopies} onchange={updateCopiesState}/>
        <span class="label-text text-black"><span class="font-extrabold">{noOfCopies}</span> Copies</span> <br>
    </label>
</div>