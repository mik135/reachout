<script>
    let { linkToCopy } = $props()
    let copied = $state(false)
  
    // Function to handle copying the link to the clipboard
    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(linkToCopy);
        copied = true
      } catch (error) {
        console.error('Error copying link:', error);
      }
    };
  </script>
  
  <div class="flex items-center mt-5">
    <input type="text" class="border rounded px-2 py-1 w-96" bind:value={linkToCopy} />
    <button class="btn bg-blue-500 text-white px-2 py-1 w-16 rounded ml-2" onclick={copyToClipboard}>
    {#if copied}
        Copied
    {:else}
        Copy
    {/if}
    </button>
  </div>