<script>
    import { enhance } from "$app/forms"
    import QuantityCounter from "./QuantityCounter.svelte"
	  import SponsorSummary from "./SponsorSummary.svelte";
    let { dialogRef = $bindable(), category } = $props()

    let dialogSum

    let email = $state("")
    let name = $state("")
    let quantity = $state(1)

    let formError = $state({
      email: "",
      name: ""
    })

    let mockCat
    let disabled = $state()
    if(category == "sponsor") {
        disabled = false
    } else {
        disabled = true
    }
    
    function toogleModals(e) {
      e.preventDefault()
      if(!email.includes("@")) {
        formError.name = ""
        return formError.email = "incomplete email"
      } else if (name.trim() == "") {
        formError.email = ""
        return formError.name = "name is empty"
      } else {
        formError.email = ""
        formError.name = ""
        dialogRef.close()
        dialogSum.showModal()
      }
    }

    function decrementQuantity() {
        quantity -= 1
    }
    function incrementQuantity() {
        quantity += 1
    }

    

</script>

<dialog id="my_modal_3" class="modal" bind:this={dialogRef}>
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="text-3xl mb-7 mt-4">Sponsor {category}</h3>
      <form class="flex flex-col gap-6">
        <div class="flex flex-col gap-1">
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
              <input type="text" class="grow" placeholder="Email" required name="email" bind:value={email}/>
            </label>
            <p class={formError.email == "" ? "hidden" : "text-red-600 ml-auto"}>{formError.email}</p>
        </div>
          <label class="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="h-4 w-4 opacity-70">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" class="grow" placeholder="Name" required name="name" bind:value={name}/>
          </label>
          <p class={formError.name == "" ? "hidden" : "text-red-600 ml-auto"}>{formError.name}</p>
        <div class="flex">
            <select class="select select-primary w-full font-bold" bind:value={category} disabled={disabled}>
                <option disabled selected value="sponsor">Choose a category</option>
                <option value="No one left behind">No one left behind</option>
                <option value="Say Yes to Kids' Campaign">'Say Yes to Kids' Campaign</option>
                <option value="Teevo">Teens Teevolution</option>
                <option value="Adopt a Language">Adopt A Language</option>
                <option value="Penetrating with Languages">Penetrating with Language</option>
            </select>
        </div>

          <button class="btn btn-primary" onclick={toogleModals}>Next</button>
      </form>
    </div>
</dialog>

<SponsorSummary bind:dialogRel={dialogSum} {email} {name} {quantity} {category} {decrementQuantity} {incrementQuantity}/>