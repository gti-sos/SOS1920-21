<script>
    import { onMount } from "svelte";
    import { pop } from "svelte-spa-router";
	import { Table, Button, Alert } from 'sveltestrap';

    export let params = {};
    let trafficInjury = {};
    let updatedAutoCom = "";
    let updatedYear = 0;
	let updatedAccident = 0;
	let updatedDead = 0;
	let updatedInjure = 0;
    let infoAlertStatus = "";
	let infoAlertText="";

    onMount(getTrafficInjury);

    async function getTrafficInjury() {

        console.log("Fetching traffic-injury...");
        const res = await fetch("/api/v2/traffic-injuries/" + params.auto_com + "/" + params.year);
		
        if (res.ok) {
            const json = await res.json();
            trafficInjury = json;
            updatedAutoCom = params.auto_com;
            updatedYear = params.year;
            updatedAccident = trafficInjury.accident;
			updatedDead = trafficInjury.dead;
            updatedInjure = trafficInjury.injure;
            console.log("Received traffic-injury");	
		}
		else if(res.status == 404){
			window.alert("El recurso: " + params.auto_com + " " + params.year + " no existe");
		}
    }


    async function updateTrafficInjury() {
        console.log("Updating traffic-injury (auto_com = " + params.auto_com + " and year = " + params.year +  ")");
		
        const res = await fetch("/api/v2/traffic-injuries/" + params.auto_com + "/" + params.year, {
            method: "PUT",
            body: JSON.stringify({
                auto_com: params.auto_com,
                year: parseInt(params.year),
                accident: updatedAccident,
				dead: updatedDead,
				injure: updatedInjure
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (res) {
            getTrafficInjury();
			if(res.ok){	
                infoAlertStatus = res.status + " - " + res.statusText;
			    infoAlertText =  "Recurso actualizado correctamente.";
				console.log("Resource modified");

			}else if(res.status == 400){
				window.alert("Hay un problema con los valores insertados.");
			} 
        });
    }

</script>
<main>
    <h2>Se encuentra dentro de traffic-injuries</h2>
    <p><Button color="info" outline on:click="{pop}">Volver a traffic-injuries</Button></p>

	{#if infoAlertStatus}
	<Alert>
		<h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
		{infoAlertText}
	</Alert>

    {/if}

    <h3>Editar el dato: <strong>{params.auto_com} {params.year}</strong></h3>
    {#await trafficInjury}
        Loading trafficInjury...
    {:then trafficInjury}
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
                    <td>{updatedAutoCom}</td>
                    <td>{updatedYear}</td>
                    <td><input type="number" bind:value="{updatedAccident}"></td>
                    <td><input type="number" bind:value="{updatedDead}"></td>
					<td><input type="number" bind:value="{updatedInjure}"></td>
                    <td> <Button outline color="success" on:click={updateTrafficInjury}>Actualizar</Button></td>
                </tr>
        </tbody>
        </Table>
    {/await}

</main>