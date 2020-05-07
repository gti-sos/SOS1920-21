<script>
	import Router from 'svelte-spa-router';
	import { Navbar } from 'sveltestrap';

	import Home from './Home.svelte';
	import Info from './Info.svelte';
	import DL from './driving-licenses/Home.svelte';
	import TI from './traffic-injuries/Home.svelte';
	import EditDL from './driving-licenses/editDrivingLicense.svelte';
	import EditTI from './traffic-injuries/editTrafficInjury.svelte';
	import NotFound from './NotFound.svelte';

	const routes = {
		"/": Home,
		"/info": Info,
		"/driving-licenses": DL,
		"/traffic-injuries": TI,
		"/driving-licenses/:aut_com/:year": EditDL,
		"/traffic-injuries/:auto_com/:year": EditTI,
		"*": NotFound
	};
</script>

<main>
	<h1>SOS1920-21</h1>
	<Router {routes} />
</main>