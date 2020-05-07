<script>
	import Router from 'svelte-spa-router';
	import { Navbar } from 'sveltestrap';

	import Home from './Home.svelte';
	import Info from './Info.svelte';
	import DL from './driving-licenses/Home.svelte';
	import TI from './traffic-injuries/Home.svelte';
	import EditTI from './traffic-injuries/editTrafficInjurie.svelte';
	import NotFound from './NotFound.svelte';

	const routes = {
		"/": Home,
		"/info": Info,
		"/driving-licenses": DL,
		"/traffic-injuries": TI,
		"/traffic-injuries/:auto_com/:year": EditTI,
		"*": NotFound
	};
</script>

<main>
	<h1>SOS1920-21</h1>
	<Router {routes} />
</main>