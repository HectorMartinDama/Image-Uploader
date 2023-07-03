
<!-- https://svelte.dev/examples/await-blocks -->

<script>
    import ImageLoader from "../components/image-loader.svelte";
</script>




<ImageLoader/>



<style lang="scss">

:global(.container){
    width: 402px;
    height: 469px;
    border-radius: 12px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    background-color: white;     
}    

:global(h1, h4){
    font-size: 18px;
    letter-spacing: -0.035em;
    color: #4F4F4F;  
}

:global(h3){
    font-size: 12px;
    color: #BDBDBD;
}
</style>






