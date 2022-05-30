<script>
    export let data;
</script>


<div class="game-item img-hover-zoom">
    <a class="game-item-frame"
        href={data.link}
        target="_blank" 
        style="background-image: url({data.background});">
        <img src={data.game_title} alt="">
    </a>
    <div class="game-item-name">
        {data.name}
    </div>
    
    <div class="game-item-desc">
        {data.description}
    </div>
</div>


<style>
    .game-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1rem;
        width: 16rem;
        border-radius: 10px;

    }
    .game-item a{
        width: 16rem;
        height: 9rem;
        background-size: cover;
        background-position: center;
        margin-bottom: 8px;
        background-color: #7388bb;
        border-radius: 10px;
        filter: brightness(97%) contrast(89%);
        opacity: 0.3;
    }
    .game-item-name {
        color:#6786D3;
    }
    .game-item:hover a{
        filter: brightness(94%) contrast(106%);
        transform: scale(1.1);
        opacity: 1;
    }
    .game-item-desc {
        opacity: 70%;
        font-weight: 200;
        text-align: center;
    }
    .game-item-frame {
        text-align: center;  
    }
    .game-item-frame img{
        width: 80%;
        opacity: 100%;
        margin-top: 10px;
    }
    .game-item-frame:hover img{
        transform: scale(1.1);
    }

</style>