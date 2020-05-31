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
	import HighchartsTI from './traffic-injuries/Highcharts.svelte';
	import ApexchartsTI from './traffic-injuries/Apexcharts.svelte';
	import IntegrationsTI from './traffic-injuries/Integrations.svelte';

	// driving-licenses
	import DL from './driving-licenses/Home.svelte';
	import EditDL from './driving-licenses/editDrivingLicense.svelte';
	import HighchartsDL from './driving-licenses/HighchartsDL.svelte';

	const routes = {
		"/": Home,
		"/info": Info,
		"/about": About,
		"/integrations": Integrations,
		"/analytics": Analytics,
		"/traffic-injuries": TI,
		"/traffic-injuries/:auto_com/:year": EditTI,
		"/traffic-injuries/d3js": D3JS,
		"/traffic-injuries/Highcharts": HighchartsTI,
		"/traffic-injuries/Apexcharts": ApexchartsTI,
		"/integrations/traffic-injuries": IntegrationsTI,
		"/driving-licenses": DL,
		"/driving-licenses/:aut_com/:year": EditDL,
		"/driving-licenses/Highcharts": HighchartsDL,
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
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
							aria-haspopup="true" aria-expanded="false">Accidentes de Tráfico</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="#/traffic-injuries/">API</a>
							<a class="dropdown-item" href="#/traffic-injuries/Highcharts">Gráfica (Highcharts)</a>
							<a class="dropdown-item" href="#/traffic-injuries/Apexcharts">Gráfica (Apexcharts)</a>
							<a class="dropdown-item" href="#/traffic-injuries/D3JS">Puntos Extra (Librería D3JS)</a>
						</div>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
							aria-haspopup="true" aria-expanded="false">Licencias de Conducir </a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="#/driving-licenses/">API</a>
							<a class="dropdown-item" href="#/driving-licenses/Highcharts">Gráfica (Highcharts)</a>
							
						</div>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/info">Información</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/about">Acerca de</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/integrations">Integraciones</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/analytics">Analíticas</a>
					</li>
				</ul>
		</nav>
	</header>

	<Router {routes} />

</body>