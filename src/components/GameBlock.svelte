<script>
    import SocialContainer from './SocialContainer.svelte';
    import GameItem from './GameItem.svelte';

    export let block_data;
    export let block_title = "OUR TITLE";
</script>

<section>
    <h1 class="blue-title"><center> {block_title} </center></h1>
    <div class = "block_container">
            {#each block_data as block_data, i }
                <GameItem data = {block_data}/>
            {/each}
    </div>

</section>

<style>
    .blue-title {
        color: #6786D3;
    } 
    .block_container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 0px;
        list-style-type: disc;
        margin-bottom: 0px;
    } 
</style>