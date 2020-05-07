<script>
    import Router from 'svelte-spa-router';

	import NotFound from './NotFound.svelte';
	import Home from './Home.svelte';
	import TI from './traffic-injuries/Home.svelte';
    import GUI2 from './GUI2/Home.svelte';
    
	const routes = {
		"/": Home,
		"/traffic-injuries": TI,
		"/gui2": GUI2,
		"*": NotFound
	};
</script>

<main>
	<h1>Contenido</h1>
	<Router {routes} />
</main>