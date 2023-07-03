<script>
    let files;
    import { upload } from '../services/uploadFile';
    import PreviewImage from './preview-image.svelte';
    import Uploader from './uploader.svelte';

    function example(event){
        event.preventDefault();
        files= event.dataTransfer.files;
    }

    function toggleActive(ev){
        ev.preventDefault();
        ev.stopPropagation();
    }
</script>


{#if !files}
    <div class="container">
        <div class="uploader">
            <h1>Upload your image</h1>
            <p>File should be Jpeg, Png,...</p>
            <div on:dragenter|preventDefault={toggleActive} on:dragleave|preventDefault={toggleActive} on:dragover|preventDefault={toggleActive} on:drop={event => example(event)} class="drag-and-drop">
                <img src="image.svg" alt="bag and drop background image">
                <h3>Drag & Drop your image here</h3>
            </div>
            <p>Or</p>
            <div class="btn">
                <input type="file" accept="image/*" name="image" id="upload" bind:files hidden>
                <label for="upload">Choose file</label>
            </div>
        </div>   
    </div>
{/if}

{#if files}
    {#await upload(files)}
        <Uploader/>
    {:then result}
        <PreviewImage imageName={result.fileName}/>
    {:catch error}
        <p style="color: red">{error}</p>
    {/await}
{/if}









<style lang="scss">
    .drag-and-drop{
        border: 2px dashed #97BEF4;
        background: #F6F8FB;
        border-radius: 12px;
        width: 80%;
        height: 50%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img{
            pointer-events: none;
        }
    }

    .uploader{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;


        p{
            color: #828282;
            font-size: 10px;
        }

        .btn{
            display: grid;
            place-items: center;
            font-size: 12px;
            color: white;
            background: #2F80ED;
            border-radius: 8px;
            width: 101px;
            height: 31.98px;
            cursor: pointer;
        } 
    } 
</style>