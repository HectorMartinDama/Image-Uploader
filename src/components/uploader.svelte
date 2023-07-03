
<section class="uploader">
    <h4>Uploading...</h4>
    <div class="card">
        <progress indeterminate tabindex="-1">unknow</progress>
    </div>
</section>



<style lang="scss">

    h4{
        margin-left: 10%;
    }

    .uploader{
        width: 400px;
        height: 140px;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 12px;     
    }

    progress:focus-visible {
        outline-color: var(--_progress);
    }

    progress{
        appearance: none;
        border: none;
        
        position: relative;
        inline-size: 80%;
        overflow: hidden;
        border-radius: 8px;
        height: 8px;

        &:focus-visible{
            outline-color: #F2F2F2;
        }
        &::-webkit-progress-bar{
            background-color: #2F80ED;
        }
        &::-webkit-progress-value {
            background-color: #F2F2F2;
            transition: inline-size .25s ease-out;
        }

        &:indeterminate::after {
            content: "";
            inset: 0;
            position: absolute;
            background: linear-gradient(to right, #F2F2F2 45%, #2F80ED 0%, #2F80ED 55%, #F2F2F2 0%);
            background-size: 225% 100%;
            background-position: right; 
            animation: progress-loading 2s infinite ease;
        }    

        &:indeterminate::-moz-progress-bar {
            content: "";
            inset: 0;
            position: absolute;
            background: linear-gradient(to right, #F2F2F2 45%, #2F80ED 0%, #2F80ED 55%, #F2F2F2 0%);
            background-size: 225% 100%;
            background-position: right; 
            animation: progress-loading 2s infinite ease;
        }    
    }

    @keyframes progress-loading {
        50% {
            background-position: left; 
        }
    }

    .card{
        display: flex;
        flex-direction: column;
        align-items: center;    
    }

  
   

</style>

