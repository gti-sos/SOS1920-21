<script>
	import { onMount } from "svelte";
	import { pop } from "svelte-spa-router";
	import { Table, Button, Alert, Pagination, PaginationItem, PaginationLink, Input, FormGroup } from 'sveltestrap';

	let trafficInjuries = [];
	let newTrafficInjury = {
		auto_com: "",
		year: "",
		accident: "",
		dead: "",
		injure: ""
	};

	// Pagination
	let numeroRecursos = 10;
	let offset = 0;
	let currentPage = 1; 
	let moreData = true; 

	// Search
	let campo1 = "";
	let valor1 = "";
	let campo2 = "";
	let valor2 = "";

	onMount(getTrafficInjuries);

	async function getTrafficInjuries() {

		console.log("Fetching trafficInjuries...");

        const res = await fetch("/api/v2/traffic-injuries?offset="  + numeroRecursos * offset + "&limit=" + numeroRecursos);
		const resNext = await fetch("/api/v2/traffic-injuries?offset="  + numeroRecursos * (offset + 1) + "&limit=" + numeroRecursos);

		if (res.ok  && resNext.ok) {
			console.log("Ok:");
			const json = await res.json();
			const jsonNext = await resNext.json();
			trafficInjuries = json;
			
			if (jsonNext.length == 0) {
				moreData = false;
			} else {
				moreData = true;
			}
			
			console.log("Received " + trafficInjuries.length + " trafficInjuries.");
		} else {
			console.log("ERROR!");
		}
	}

	function incrementOffset(valor) {
		offset += valor;
		currentPage += valor;
		getTourism();
	}

	async function insertTrafficInjury() {

		console.log("Inserting trafficInjury..." + JSON.stringify(newTrafficInjury));

		const res = await fetch("/api/v2/traffic-injuries", {
			method: "POST",
			body: JSON.stringify(newTrafficInjury),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(function (res) {
			getTrafficInjuries();
		});

	}

	async function deleteTrafficInjuries(auto_com) {
		const res = await fetch("/api/v2/traffic-injuries/" + auto_com, {
			method: "DELETE"
		}).then(function (res) {
			getTrafficInjuries();
		});
	}

	async function deleteTrafficInjury(auto_com, year) {
		const res = await fetch("/api/v2/traffic-injuries/" + auto_com + "/" + year, {
			method: "DELETE"
		}).then(function (res) {
			getTrafficInjuries();
		});
	}

	async function deleteAllTrafficInjuries() {
		const res = await fetch("/api/v2/traffic-injuries", {
			method: "DELETE"
		}).then(function (res) {
			getTrafficInjuries();
			if(res.status == 404){
				infoAlertStatus = res.status + " - " + res.statusText;
				infoAlertText =  "No hay recursos que eliminar.";
			}else{
				infoAlertStatus = res.status + " - " + res.statusText;
				infoAlertText =  "Se han eliminado todos los recursos correctamente.";
			}
		});
	}

	async function loadInitialData() {
        const res = await fetch("/api/v2/traffic-injuries/loadInitialData", {
            method: "GET"
        }).then(function (res) {
			getTrafficInjuries();
			infoAlertStatus = res.status + " - " + res.statusText;
			infoAlertText =  "Recursos cargados correctamente.";
        });
	}
	
	async function busqueda(campo1, valor1, campo2, valor2) {
		offset = 0;
		currentPage = 1; 
		moreData = false;
		infoAlertStatus="";
		infoAlertText="";
		console.log("Searching data: " + campo1 + ": " + valor1 + ", " + campo2 + ": " + valor2);
		
		var url = "/api/v2/traffic-injuries";
		
		if (campo1 != "" && campo2 != "" && valor1 != "" && valor2 != "") {
			url = url + "?" + campo1 + "=" + valor1 + "&" + campo2 + "=" + valor2; 
		}else if(campo1 == "" && campo2 != "" && valor2 != ""){
			url = url + "?" + campo2 + "=" + valor2;
		}else if(campo1 != "" && campo2 == "" && valor1 != ""){
			url = url + "?" + campo1 + "=" + valor1;
		}
			
		console.log(url);
		
		const res = await fetch(url);
		
		if (res.ok) {
			console.log("Ok:");
			const json = await res.json();
			trafficInjuries = json;			
			console.log("Found " + trafficInjuries.length + " traffic-injuries.");
			infoAlertStatus = res.status + " - " + res.statusText;
			infoAlertText =  "Búsqueda realizada con éxito. Se han encontrado " + trafficInjuries.length + " recursos.";
		} else {
			window.alert("ERROR: Compruebe que ha insertado valores correctos para la búsqueda");
			console.log("ERROR!");
		}
	}
	
	let infoAlertStatus="";
	let infoAlertText="";

</script>

<main>
	<h2>Bienvenido a traffic-injuries</h2>
	<h3>Acciones</h3>
    <p><Button color="info" outline on:click="{pop}">Volver a Inicio</Button></p>
	<p><Button color="success" on:click="{loadInitialData}">Cargar Datos Iniciales</Button></p>
	<p><Button color="danger" on:click="{deleteAllTrafficInjuries}">Elimina Todos los Recursos</Button></p>

	{#if infoAlertStatus}
	<Alert>
		<h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
		{infoAlertText}
	</Alert>

    {/if}

	{#await trafficInjuries}
		Loading trafficInjuries...
	{:then trafficInjuries}

	<h3>Búsqueda de Recursos</h3>
	<FormGroup> 
		<table>
			<tr>
				<td>
					<label>Buscar por:</label>
					<Input type="select" name="inputCampo" id="inputCampo" bind:value="{campo1}">
						<option disabled selected></option>
						<option value="auto_com">Comunidad Autónoma</option>
						<option value="year">Año</option>
						<option value="accident">Accidentes</option>
						<option value="dead">Muertes</option>
						<option value="injure">Heridos</option>
					</Input>
				</td>
				<td>
					<label>Valor:</label>
					<Input type="text"  name="inputValor" id="inputValor" bind:value="{valor1}"></Input>
				
				</td>
			</tr>
			<tr>
				<td>
					<label>Buscar por:</label>
					<Input type="select" name="inputCampo" id="inputCampo" bind:value="{campo2}">
						<option disabled selected></option>
						<option value="auto_com">Comunidad Autónoma</option>
						<option value="year">Año</option>
						<option value="accident">Accidentes</option>
						<option value="dead">Muertes</option>
						<option value="injure">Heridos</option>
					</Input>
				</td>
				<td>
					<label>Valor:</label>
					<Input type="text"  name="inputValor" id="inputValor" bind:value="{valor2}"></Input>
				
				</td>
			</tr>
			
		</table>
	</FormGroup>

	<Button style="margin-bottom:3%;" color="primary" on:click="{busqueda(campo1, valor1,campo2, valor2)}" class="button-search" >Buscar </Button>
		
	<h3>Recursos</h3>
		<Table responsive bordered>
			<thead>
				<tr>
					<th>Comunidad Autónoma</th>
					<th>Año</th>
					<th>Accidentes</th>
					<th>Muertes</th>
					<th>Heridos</th>
					<th>Acciones</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><input bind:value="{newTrafficInjury.auto_com}"></td>
					<td><input bind:value="{newTrafficInjury.year}"></td>
					<td><input bind:value="{newTrafficInjury.accident}"></td>
					<td><input bind:value="{newTrafficInjury.dead}"></td>
					<td><input bind:value="{newTrafficInjury.injure}"></td>
					<td> <Button outline  color="primary" on:click={insertTrafficInjury}>Insertar</Button> </td>
				</tr>

				{#each trafficInjuries as trafficInjury}
					<tr>
						<td>
							<a href="#/traffic-injuries/{trafficInjury.auto_com}/{trafficInjury.year}">{trafficInjury.auto_com}</a>
						</td>
						<td>{trafficInjury.year}</td>
						<td>{trafficInjury.accident}</td>
						<td>{trafficInjury.dead}</td>
						<td>{trafficInjury.injure}</td>
						<td><Button outline color="danger" on:click="{deleteTrafficInjury(trafficInjury.auto_com, trafficInjury.year)}">Eliminar</Button></td>
					</tr>
				{/each}
			</tbody>
		</Table>
	{/await}

	<Pagination ariaLabel="Cambiar de página">

		<PaginationItem class="{currentPage === 1 ? 'disabled' : ''}">
		  <PaginationLink previous href="#/traffic-injuries" on:click="{() => incrementOffset(-1)}" />
		</PaginationItem>
		
		<!-- If we are not in the first page-->
		{#if currentPage != 1}
		<PaginationItem>
			<PaginationLink href="#/traffic-injuries" on:click="{() => incrementOffset(-1)}" >{currentPage - 1}</PaginationLink>
		</PaginationItem>
		{/if}
		<PaginationItem active>
			<PaginationLink href="#/traffic-injuries" >{currentPage}</PaginationLink>
		</PaginationItem>

		<!-- If there are more elements-->
		{#if moreData}
		<PaginationItem >
			<PaginationLink href="#/traffic-injuries" on:click="{() => incrementOffset(1)}">{currentPage + 1}</PaginationLink>
		</PaginationItem>
		{/if}

		<PaginationItem class="{moreData ? '' : 'disabled'}">
			<PaginationLink next href="#/traffic-injuries" on:click="{() => incrementOffset(1)}"/>
		</PaginationItem>

	</Pagination>

</main>