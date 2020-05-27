<script>
	import Router from 'svelte-spa-router';

	import Home from './Home.svelte';
	import Info from './Info.svelte';
	import DL from './driving-licenses/Home.svelte';
	import TI from './traffic-injuries/Home.svelte';
	import EditDL from './driving-licenses/editDrivingLicense.svelte';
	import EditTI from './traffic-injuries/editTrafficInjury.svelte';
	import NotFound from './NotFound.svelte';

	const routes = {
		"/": Home ,
		"/svelte": Home,
		"/info": Info,
		"/driving-licenses": DL,
		"/traffic-injuries": TI,
		"/driving-licenses/:aut_com/:year": EditDL,
		"/traffic-injuries/:auto_com/:year": EditTI,
		"*": NotFound
	};

	import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'sveltestrap';

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<body>
	
	<div class="container">
		<nav class="navbar navbar-expand-lg navbar-primary bg-white py-3" id="mainNav">
			<div class="container">
				<a class="navbar-brand js-scroll-trigger" href="/">SOS1920-21</a><button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav ml-auto my-2 my-lg-0">
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="svelte.html#/traffic-injuries">Accidentes de Tráfico</a></li>
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="svelte.html#/driving-licenses">Licencias de Conducir</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
	<div class="container">
		<Router {routes} />
	</div>

</body>