<script>
	//import components
	import ProfilePage from './components/MainPage.svelte';
	import SocialBlock from './components/SocialBlock.svelte';
	import GameBlock from './components/GameBlock.svelte';
	import Footer from './components/Footer.svelte';
	//import database
	import slime_data from '../data/slime_data.json';

	//import svg_item from '../public/assets/svgs/logo.svg';
	
	//declare variables
	let name = 'Slime';

</script>


<!-- <h1>Hello {name}!</h1> -->
<section class="main-page">
	<ProfilePage/>
	<div class = "block"> 
		<SocialBlock social_data = {slime_data.social}/>
	</div>
	<hr>
	<GameBlock block_title = "OUR GAMES" block_data = {slime_data.games} />
	<hr>
	<Footer/>


</section>

<style>
    .main-page{
		display: flex;
		flex-direction: column;
		background-color: #0B1824;
		width: 85%;
		height:100%;
		min-width: 480px;
		margin: auto;
	}

	.block{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
	}
</style>