<script>
	import { onMount } from "svelte";
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
	let firstField = "";
	let firstValue = "";
	let secondField = "";
	let secondValue = "";

	// Alerts
	let infoAlertStatus = "";
	let infoAlertText = "";

	onMount(getTrafficInjuries);

	async function getTrafficInjuries() {

		console.log("Fetching traffic-injuries...");

		const res = await fetch("/api/v2/traffic-injuries?offset=" + numeroRecursos * offset + "&limit=" + numeroRecursos);
		const resNext = await fetch("/api/v2/traffic-injuries?offset=" + numeroRecursos * (offset + 1) + "&limit=" + numeroRecursos);

		if (res.ok && resNext.ok) {
			const json = await res.json();
			const jsonNext = await resNext.json();
			trafficInjuries = json;

			if (jsonNext.length == 0) {
				moreData = false;
			} else {
				moreData = true;
			}

			console.log("Received " + trafficInjuries.length + " traffic-injuries");
		} else {
			console.log("Can't fetch data from DB");
		}
	}

	function upOffset(valor) {
		offset += valor;
		currentPage += valor;
		getTrafficInjuries();
	}

	async function loadInitialData() {
		const res = await fetch("/api/v2/traffic-injuries/loadInitialData", {
			method: "GET"
		}).then(function (res) {
			getTrafficInjuries();
			infoAlertStatus = res.status + " - " + res.statusText;
			infoAlertText = "Recursos cargados correctamente.";
		});
	}

	async function insertTrafficInjury() {
		console.log("Inserting traffic-injury (" + JSON.stringify(newTrafficInjury) + ")");
		const res = await fetch("/api/v2/traffic-injuries", {
			method: "POST",
			body: JSON.stringify(newTrafficInjury),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(function (res) {
			getTrafficInjuries();
			if (res.ok) {
				newTrafficInjury = {
					auto_com: "",
					year: "",
					accident: "",
					dead: "",
					injure: ""
				};
				infoAlertStatus = res.status + " - " + res.statusText;
				infoAlertText = "Recurso insertado correctamente.";
			}
			else if (res.status == 400) {
				window.alert("ERROR: Debe completar todos los campos");

			}
			else if (res.status == 409) {
				window.alert("ERROR: el dato " + newTrafficInjury.auto_com + " " + newTrafficInjury.year + " ya existe.");

			}
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
			if (res.status == 404) {
				infoAlertStatus = res.status + " - " + res.statusText;
				infoAlertText = "No hay recursos que eliminar.";
			} else {
				infoAlertStatus = res.status + " - " + res.statusText;
				infoAlertText = "Se han eliminado todos los recursos correctamente.";
			}
		});
	}

	async function search(firstField, firstValue, secondField, secondValue) {
		offset = 0;
		currentPage = 1;
		moreData = false;
		console.log("Searching data " + firstField + " = " + firstValue + " and " + secondField + " = " + secondValue);

		var url = "/api/v2/traffic-injuries";

		if (firstField != "" && secondField != "" && firstValue != "" && secondValue != "") {
			url = url + "?" + firstField + "=" + firstValue + "&" + secondField + "=" + secondValue;
		} else if (firstField == "" && secondField != "" && secondValue != "") {
			url = url + "?" + secondField + "=" + secondValue;
		} else if (firstField != "" && secondField == "" && firstValue != "") {
			url = url + "?" + firstField + "=" + firstValue;
		}

		console.log("Preview search url " + url);

		const res = await fetch(url);

		if (res.ok) {
			const json = await res.json();
			trafficInjuries = json;
			console.log("Found " + trafficInjuries.length + " traffic-injuries");
			infoAlertStatus = res.status + " - " + res.statusText;
			infoAlertText = "Búsqueda realizada con éxito. Se han encontrado " + trafficInjuries.length + " recursos.";
		} else {
			window.alert("Hay un problema con los valores insertados.");
			console.log("Error check value types");
		}
	}
</script>

<main>
	<h2>Bienvenido a traffic-injuries</h2>
	<br>
	<h3>Acciones</h3>
	{#if infoAlertStatus}
	<Alert>
		<h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
		{infoAlertText}
	</Alert>

    {/if}
	<p><a href="/"><Button color="info">Volver</Button></a></p>
	<p><Button color="success" on:click="{loadInitialData}">Cargar Datos Iniciales</Button></p>
	<p><Button color="danger" on:click="{deleteAllTrafficInjuries}">Elimina Todos los Recursos</Button></p>
  
	{#await trafficInjuries}
		Loading trafficInjuries...
	{:then trafficInjuries}

	<h3>Búsqueda de Recursos</h3>
	<FormGroup> 
		<table>
			<tr>
				<td>
					<label>Buscar por:</label>
					<Input type="select" name="inputCampo" id="inputCampo" bind:value="{firstField}">
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
					<Input type="text"  name="inputValor" id="inputValor" bind:value="{firstValue}"></Input>
				
				</td>
			</tr>
			<tr>
				<td>
					<label>Buscar por:</label>
					<Input type="select" name="inputCampo" id="inputCampo" bind:value="{secondField}">
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
					<Input type="text"  name="inputValor" id="inputValor" bind:value="{secondValue}"></Input>
				
				</td>
			</tr>
			
		</table>
	</FormGroup>

	<Button style="margin-bottom:3%;" color="primary" on:click="{search(firstField, firstValue,secondField, secondValue)}" class="button-search" >Buscar </Button>
		
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
					<td><input type="number" bind:value="{newTrafficInjury.year}"></td>
					<td><input type="number" bind:value="{newTrafficInjury.accident}"></td>
					<td><input type="number" bind:value="{newTrafficInjury.dead}"></td>
					<td><input type="number" bind:value="{newTrafficInjury.injure}"></td>
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

	<br><div><Pagination ariaLabel="Cambiar de página">

		<PaginationItem class="{currentPage === 1 ? 'disabled' : ''}">
		  <PaginationLink previous href="#/traffic-injuries" on:click="{() => upOffset(-1)}" />
		</PaginationItem>
		
		<!-- If we are not in the first page-->
		{#if currentPage != 1}
		<PaginationItem>
			<PaginationLink href="#/traffic-injuries" on:click="{() => upOffset(-1)}" >{currentPage - 1}</PaginationLink>
		</PaginationItem>
		{/if}
		<PaginationItem active>
			<PaginationLink href="#/traffic-injuries" >{currentPage}</PaginationLink>
		</PaginationItem>

		<!-- If there are more elements-->
		{#if moreData}
		<PaginationItem >
			<PaginationLink href="#/traffic-injuries" on:click="{() => upOffset(1)}">{currentPage + 1}</PaginationLink>
		</PaginationItem>
		{/if}

		<PaginationItem class="{moreData ? '' : 'disabled'}">
			<PaginationLink next href="#/traffic-injuries" on:click="{() => upOffset(1)}"/>
		</PaginationItem>

	</Pagination>
	</div>
</main>