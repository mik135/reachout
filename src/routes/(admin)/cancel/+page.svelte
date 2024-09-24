





<main class="bg-green-700 w-screen min-h-screen">
        <div class="container">
            <h1 class="text-3xl lg:text-5xl text-white">Oops, something went wrong!</h1>
            <p class="text-white mt-5">Your payment has been cancelled because we couldn't process it. Please try again.</p>
            <div class="btns">
                <a href="/"><button class="btn btn-ghost">Home</button></a>
                <a href="/" class=""><button class="btn btn-accent w-[70%]">Try Again</button></a>
             </div>

        </div>
</main>


<style>
    main {
        background-color: rgb(90, 1, 1);
        min-height: 100vh;
        padding: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container {
        background-color: rgba(255, 0, 0, 0.624);
        padding: 30px;
        border-radius: 20px;
        max-width: 430px;
    }
    h1 {
        font-weight: 800;
    }
    .btns {
        margin-top: 20px;
        display: flex;
        width: 100%;
        gap: 10px;
    }
    a:nth-of-type(1) {
        width: 30%;

        & button {
            width: 100%;
            color: white;
        }
    }
    a:nth-of-type(2) {
        width: 70%;

        & button {
            width: 100%;
            background-color: white;
            color: red;
            border-color: white;
            outline-color: white;
            font-weight: 700;
        }
    }
</style>

