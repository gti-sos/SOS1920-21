<script>
	import Router from 'svelte-spa-router';
	import { Navbar } from 'sveltestrap';

	import Home from './Home.svelte';
	import Info from './Info.svelte';
	import TI from './traffic-injuries/Home.svelte';
	import NotFound from './NotFound.svelte';

	const routes = {
		"/": Home,
		"/info": Info,
		"/traffic-injuries": TI,
		"*": NotFound
	};
</script>

<main>
	<div {navbar-primary} class="navbar"></div>
	<h1>SOS1920-21</h1>
	<Router {routes} />
</main>