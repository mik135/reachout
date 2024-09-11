<script>
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Menu from "$lib/components/Menu.svelte";
    let { children } = $props()
</script>

<Navbar />
<Menu />

{@render children()}

<style lang="postcss">
    :global(body) {
        background-color: white;
        min-height: 100vh;
    }
</style>