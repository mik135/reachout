<script>
    import Home from "$lib/components/Home.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Menu from "$lib/components/Menu.svelte";

    let language = $state("")
    function changeLang(e) {
        language = e.target.value
    }

    
    
</script>

<Navbar {language} {changeLang}/>
<Menu {language}/>

<Home language={language}/>

<slot></slot>



<style lang="postcss">
    :global(body) {
        background-color: white;
        min-height: 100vh;
    }
</style>




