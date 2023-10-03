<script>
    import { Toaster } from "svelte-french-toast";
    import { downloadImage, SERVER, copyText } from "../services/uploadFile";
    export let imageName;
    const promise= downloadImage(imageName);
    const path= `${SERVER}/image/${imageName}`

    let animationContainer;
</script> 


<div class="container">
    <div class="preview">
        <div bind:this={animationContainer} id="animation"></div>
        <h1>Uploaded Successfully!</h1>
        {#await promise}
            <div class="imageSkeleton skeleton"></div>
        {:then uploadedImage} 
            <img src="{uploadedImage}" alt="image uploaded">
        {/await}
        <div class="btnIn">
            <input type="text" value="{path}" readonly>
            <button on:click={copyText(imageName)}>Copy Link</button>
        </div>
    </div>
    <Toaster/>
</div>







<style lang="scss">


    #animation{
        height: 42px;
        width: 42px;
    }
    


    .btnIn{
        width: 80%;
        margin-top: 25px;
        border: 1px solid #E0E0E0;
        border-radius: 8px;
        background-color: #F6F8FB;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button{
        border-radius: 8px;
        right: 0px;
        border: none;
        top: 2px;
        width: 90px;
        height: 30px;
        cursor: pointer;
        color: white;
        background-color: #1e90ff;
        width: 120px;
        margin-right: 5px;
    }

    .preview{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .imageSkeleton{
        width: 80%;
        height: 50%;
        border-radius: 12px;
    }


    .skeleton{
        animation: skeleton-loading 1s linear infinite alternate;
    }


    @keyframes skeleton-loading{
        0%{
            background-color: hsl(200, 20%, 70%);
        }
        100%{
            background-color: hsl(200, 20%, 95%);
        }
    }



    img{
        border-radius: 12px;
        width: 80%;
        height: 50%;
        object-fit: cover;
    }

    input{
        text-overflow: ellipsis;
        outline: none;
        width: 100%;
        height: 34px;
        background-color: transparent;
        border: none;
        padding-left: 10px;
        padding-right: 10px;
        
    }
</style>