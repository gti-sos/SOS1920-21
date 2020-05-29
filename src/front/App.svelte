<script>
	import Router from 'svelte-spa-router';

	import Home from './Home.svelte';
	import Info from './Info.svelte';
	import About from './About.svelte';
	import Integrations from './Integrations.svelte';
	import Analytics from './Analytics.svelte';
	import NotFound from './NotFound.svelte';

	// traffic-injuries
	import TI from './traffic-injuries/Home.svelte';
	import EditTI from './traffic-injuries/editTrafficInjury.svelte';
	import D3JS from './traffic-injuries/d3js.svelte';

	// driving-licenses
	import DL from './driving-licenses/Home.svelte';
	import EditDL from './driving-licenses/editDrivingLicense.svelte';

	const routes = {
		"/": Home,
		"/info": Info,
		"/about": About,
		"/integrations": Integrations,
		"/analytics": Analytics,
		"/traffic-injuries": TI,
		"/traffic-injuries/:auto_com/:year": EditTI,
		"/traffic-injuries/d3js": D3JS,
		"/driving-licenses": DL,
		"/driving-licenses/:aut_com/:year": EditDL,
		"*": NotFound
	};
</script>

<body>
	<header>
		<!--Navbar-->
		<nav class="navbar navbar-expand-lg navbar-light primary-color">

			<!-- Navbar brand -->
			<a class="navbar-brand" href="/">SOS1920-21</a>

			<!-- Collapse button -->
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
				aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<!-- Collapsible content -->
			<div class="collapse navbar-collapse" id="basicExampleNav">

				<!-- Links -->
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<a class="nav-link" href="svelte.html#/traffic-injuries">Accidentes de Tráfico</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="svelte.html#/driving-licenses">Licencias de Conducir</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="svelte.html#/info">Información</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="svelte.html#/about">Acerca de</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="svelte.html#/integrations">Integraciones</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="svelte.html#/analytics">Analíticas</a>
					</li>
					<!-- Dropdown -->
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
							aria-haspopup="true" aria-expanded="false">Extras</a>
						<div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
							<a class="dropdown-item" href="svelte.html#/traffic-injuries/d3js">Accidentes de Tráfico
								(Librería D3JS) </a>
						</div>
					</li>
				</ul>
		</nav>
	</header>

	<div class="container">
		<Router {routes} />
	</div>

</body>