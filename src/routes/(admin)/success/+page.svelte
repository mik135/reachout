


<main class="bg-green-700 w-screen min-h-screen">
        <div class="bg-green-400 container">
            <h1 class="text-3xl lg:text-5xl text-white">Thank you for sponsoring the gospel!</h1>
            <p class="text-white mt-5">You gave successfully, you'll get a confirmation mail soon.</p>
            <div class="btns">
                <a href="/"><button class="btn">Give</button></a>
                <a href="/" class=""><button class="btn btn-accent">Back to home</button></a>
             </div>
        </div>  
</main>

<style>
    main {
        background-color: rgba(37, 2, 75, 0.857);
        min-height: 100vh;
        padding: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container {
        background-color: rgba(102, 0, 255, 0.117);
        padding: 30px;
        border-radius: 20px;
        max-width: 600px;
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
        }
    }
    a:nth-of-type(2) {
        width: 70%;

        & button {
            width: 100%;
        }
    }
</style>
