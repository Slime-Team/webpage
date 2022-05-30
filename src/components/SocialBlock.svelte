<script>
    import SocialContainer from './SocialContainer.svelte'
    

    export let social_data;
</script>

<section>
        <div class = "social">
            {#each social_data as social_data, i }
                <SocialContainer data = {social_data}/>
            {/each}
        </div>

</section>

<style>
   .social{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    list-style-type: disc;
}
</style>