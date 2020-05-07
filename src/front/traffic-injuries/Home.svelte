<script>
	import {
		onMount
	} from "svelte";

	import { Table, Button } from 'sveltestrap';

	let trafficInjuries = [];
	let newTrafficInjury = {
		auto_com: "",
		year: "",
		accident: "",
		dead: "",
		injure: ""
	};

	onMount(getTrafficInjuries);

	async function getTrafficInjuries() {

		console.log("Fetching trafficInjuries...");
		const res = await fetch("/api/v2/traffic-injuries");

		if (res.ok) {
			console.log("Ok:");
			const json = await res.json();
			trafficInjuries = json;
			console.log("Received " + trafficInjuries.length + " trafficInjuries.");
		} else {
			console.log("ERROR!");
		}
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
	async function deleteTrafficInjury(name) {
		const res = await fetch("/api/v2/traffic-injuries/" + name, {
			method: "DELETE"
		}).then(function (res) {
			getTrafficInjuries();
		});
	}
</script>

<main>
    <h1>Bienvenido a traffic-injuries</h1>
    <br><p><Button color="info" outline href="/">Volver a Inicio</Button></p>
    
	{#await trafficInjuries}
		Loading trafficInjuries...
	{:then trafficInjuries}
		<Table bordered>
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
							<a href="#/trafficInjury/{trafficInjury.auto_com}">{trafficInjury.auto_com}</a>
						</td>
						<td>{trafficInjury.year}</td>
						<td>{trafficInjury.accident}</td>
						<td>{trafficInjury.dead}</td>
						<td>{trafficInjury.injure}</td>
						<td><Button outline color="danger" on:click="{deleteTrafficInjury(trafficInjury.auto_com)}">Eliminar</Button></td>
					</tr>
				{/each}
			</tbody>
		</Table>
	{/await}


</main>