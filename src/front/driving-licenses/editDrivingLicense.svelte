<script>
    import { onMount } from "svelte";
    import { pop } from "svelte-spa-router";
	import { Table, Button, Alert } from 'sveltestrap';

    export let params = {};
    let drivingLicense = {};
    let updatedAutCom = "";
    let updatedYear = 0;
	let updatedCars_men = 0;
	let updatedCars_women = 0;
	let updatedMot_men = 0;
    let updatedMot_women = 0;
    let updatedTot_cars = 0;
    let updatedTot_mot = 0;
    let updatedRel_cars = 0;
    let updatedRel_mot = 0;
    let infoAlertStatus = "";
	let infoAlertText="";

    onMount(getDrivingLicense);

    async function getDrivingLicense() {

        console.log("Fetching driving-license...");
        const res = await fetch("/api/v2/driving-licenses/" + params.aut_com + "/" + params.year);
		
        if (res.ok) {
            const json = await res.json();
            drivingLicense = json;
            updatedAutCom = params.aut_com;
            updatedYear = params.year;
            updatedCars_men = drivingLicense.cars_men;
			updatedCars_women = drivingLicense.cars_women;
            updatedMot_men = drivingLicense.mot_men;
            updatedMot_women = drivingLicense.mot_women;
            updatedTot_cars = drivingLicense.total_cars;
            updatedTot_mot = drivingLicense.total_mot;
            updatedRel_cars = drivingLicense.rel_cars;
            updatedRel_mot = drivingLicense.rel_mot;

            console.log("Received driving-license");	
		}
		else if(res.status == 404){
			window.alert("El recurso: " + params.aut_com + " " + params.year + " no existe");
		}
    }


    async function updateDrivingLicense() {
        console.log("Updating driving-license (aut_com = " + params.aut_com + " and year = " + params.year +  ")");
		
        const res = await fetch("/api/v2/driving-licenses/" + params.aut_com + "/" + params.year, {
            method: "PUT",
            body: JSON.stringify({
                aut_com: params.aut_com,
                year: parseInt(params.year),
                cars_men: updatedCars_men,
				cars_women: updatedCars_women,
				mot_men: updatedMot_men,
                mot_women: updatedMot_women,
                total_cars: updatedTot_cars,
                total_mot: updatedTot_mot,
                rel_cars: updatedRel_cars,
                rel_mot: updatedRel_mot
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (res) {
            getDrivingLicense();
			if(res.ok){	
                infoAlertStatus = res.status + " - " + res.statusText;
			    infoAlertText =  "Recurso actualizado correctamente.";
				console.log("Resource modified");

			}else if(res.status == 400){
				window.alert("No es posible realizar el cambio deseado.");
			} 
        });
    }

</script>
<main>
    <h2>Se encuentra dentro de driving-licenses</h2>
    <p><Button color="info" outline on:click="{pop}">Volver a driving-licenses</Button></p>

	{#if infoAlertStatus}
	<Alert>
		<h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
		{infoAlertText}
	</Alert>

    {/if}

    <h3>Editar el dato: <strong>{params.aut_com} {params.year}</strong></h3>
    {#await drivingLicense}
        Loading drivingLicense...
    {:then drivingLicense}
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
                    <td>{updatedAutCom}</td>
                    <td>{updatedYear}</td>
                    <td><input type="number" bind:value="{updatedCars_men}"></td>
                    <td><input type="number" bind:value="{updatedCars_women}"></td>
					<td><input type="number" bind:value="{updatedMot_men}"></td>
                    <td><input type="number" bind:value="{updatedMot_women}"></td>
                    <td><input type="number" bind:value="{updatedTot_cars}"></td>
					<td><input type="number" bind:value="{updatedTot_mot}"></td>
                    <td><input type="number" bind:value="{updatedRel_cars}"></td>
                    <td><input type="number" bind:value="{updatedRel_mot}"></td>
                    <td> <Button outline color="success" on:click={updateDrivingLicense}>Actualizar</Button></td>
                </tr>
        </tbody>
        </Table>
    {/await}

</main>