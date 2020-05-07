<script>
	import {
		onMount
	} from "svelte";

	import { Table, Button } from 'sveltestrap';

	let drivingLicenses = [];
	let newDrivingLicense = {
		aut_com: "",
		year: "",
		cars_men: "",
		cars_women: "",
		mot_men: "",
        mot_women: "",
        total_cars: "",
        total_mot: "",
        rel_cars: "",
        rel_mot: ""
	};

	onMount(getDrivingLicenses);

	async function getDrivingLicenses() {

		console.log("Fetching DrivingLicenses...");
		const res = await fetch("/api/v2/driving-licenses");

		if (res.ok) {
			console.log("Ok:");
			const json = await res.json();
			drivingLicenses = json;
			console.log("Received " + drivingLicenses.length + " drivingLicenses.");
		} else {
			console.log("ERROR!");
		}
	}

	async function insertDrivingLicense() {

		console.log("Inserting DrivingLicense..." + JSON.stringify(newDrivingLicense));

		const res = await fetch("/api/v2/driving-licenses", {
			method: "POST",
			body: JSON.stringify(newDrivingLicense),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(function (res) {
			getDrivingLicenses();
		});

	}
	async function deleteDrivingLicense(name) {
		const res = await fetch("/api/v2/driving-licenses/" + name, {
			method: "DELETE"
		}).then(function (res) {
			getDrivingLicenses();
		});
	}
</script>

<main>
    <h1>Bienvenido a driving-licenses</h1>
    <br><p><Button color="info" outline href="/">Volver a Inicio</Button></p>
    
	{#await drivingLicenses}
		Loading drivingLicenses...
	{:then drivingLicenses}
		<Table bordered>
			<thead>
				<tr>
					<th>Comunidad Autónoma</th>
					<th>Año</th>
					<th>Permiso B hombres</th>
					<th>Permiso B mujeres</th>
					<th>Permiso A2 hombres</th>
					<th>Permiso A2 mujeres</th>
                    <th>Total coches</th>
                    <th>Total motos</th>
                    <th>Relación coches</th>
                    <th>Relación motos</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><input bind:value="{newDrivingLicense.aut_com}"></td>
					<td><input bind:value="{newDrivingLicense.year}"></td>
					<td><input bind:value="{newDrivingLicense.cars_men}"></td>
					<td><input bind:value="{newDrivingLicense.cars_women}"></td>
					<td><input bind:value="{newDrivingLicense.mot_men}"></td>
                    <td><input bind:value="{newDrivingLicense.mot_women}"></td>
                    <td><input bind:value="{newDrivingLicense.total_cars}"></td>
                    <td><input bind:value="{newDrivingLicense.total_mot}"></td>
                    <td><input bind:value="{newDrivingLicense.rel_cars}"></td>
                    <td><input bind:value="{newDrivingLicense.rel_mot}"></td>
					<td> <Button outline  color="primary" on:click={insertDrivingLicense}>Insertar</Button> </td>
				</tr>

				{#each drivingLicenses as drivingLicense}
					<tr>
						<td>
							<a href="#/drivingLicense/{drivingLicense.aut_com}">{drivingLicense.aut_com}</a>
						</td>
						<td>{drivingLicense.year}</td>
						<td>{drivingLicense.cars_men}</td>
						<td>{drivingLicense.cars_women}</td>
						<td>{drivingLicense.mot_men}</td>
                        <td>{drivingLicense.mot_women}</td>
                        <td>{drivingLicense.total_cars}</td>
                        <td>{drivingLicense.total_mot}</td>
                        <td>{drivingLicense.rel_cars}</td>
                        <td>{drivingLicense.rel_mot}</td>
						<td><Button outline color="danger" on:click="{deleteDrivingLicense(drivingLicense.aut_com)}">Eliminar</Button></td>
					</tr>
				{/each}
			</tbody>
		</Table>
	{/await}


</main>