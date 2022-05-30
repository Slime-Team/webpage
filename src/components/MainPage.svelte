<script>
    import SvgLogo from './SVGLogo.svelte'

    //let main_image = './assets/main_logo.png';
    let slime_title = "SLIME TEAM";
    let subtitle = 'PASSIONATE INDIE GAME DEVELOPERS AND ARTIST COLLECTIVE'

</script>


<section class="profile_block block">
    <div style="margin-top: 32px;"></div>
        <!-- <img src = {main_image} alt = "logo">  -->
        <SvgLogo class="svg"/>
        <h1 id = slime_title >{slime_title}</h1>
        <h2 id = "subtitle">{subtitle}</h2>
    <div style="margin-top: 32px;"></div>

</section>


<style>
    /* .profile_block img{
        width: 256px;
} */

    #slime_title{
        color: #01F48B;
        font-family: 'Nunito', sans-serif;
        font-size: 2.6rem;
        letter-spacing: 8px;
    }

    #subtitle{
        font-family: 'Nunito', sans-serif;
        padding: 0px 4rem 0px 4rem;
        font-size: 1.4rem;
        letter-spacing: 3px;
    }
</style>