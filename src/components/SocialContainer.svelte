<script>
    export let data;
    console.log(data.url)
    console.log(data.icon)
    console.log(data.name)
    
</script>

<div class = "social-item" >
    <a href = {data.url} target="_blank">
        <img src = {data.icon} alt={data.name}>
    </a>
</div>

<style>
    .social-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1rem;
        height: 5rem;
        width: 5rem;
        background-color: #26324F;
        border-radius: 128px;
    }
    .social-item a {
        color: #ffffff;
        text-align: center;
    }
    .social-item a img{
        filter: invert(43%) sepia(12%) saturate(1652%) hue-rotate(185deg) brightness(97%) contrast(89%);
        opacity: 0.3;
        width: 3.6rem;
    }
    .social-item:hover img{
        filter: invert(100%) invert(79%) sepia(32%) saturate(3446%) hue-rotate(97deg) brightness(94%) contrast(106%);
        transform: scale(1.05);
        opacity: 1;
    }
    .social-item:hover {
        transform: scale(1.1);
        opacity: 1;
    }
</style>