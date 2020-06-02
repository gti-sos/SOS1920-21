<script>
	import {
		onMount
	} from "svelte";

	import { Table, Button } from 'sveltestrap';
	import {Pagination, PaginationItem, PaginationLink} from 'sveltestrap';
	import Input from "sveltestrap/src/Input.svelte";
	import FormGroup from "sveltestrap/src/FormGroup.svelte";
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

	let SearchDrivingLicense = {
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

	let numObject = 10;
    let offset = 0;
	let currentPage = 1; 
	let moreData = true; 

	let successMsg = "";
    let success = "";
    let errorMsg = "";
	
	let search = "";
    let value = "";

    let combinada = "";

	onMount(getDrivingLicenses);

	async function getDrivingLicenses() {
		const res = await fetch("/api/v2/driving-licenses?offset=" + numObject * offset + "&limit=" + numObject);
        const resNext = await fetch("/api/v2/driving-licenses?offset="  + numObject * (offset + 1) + "&limit=" + numObject);

		console.log("Fetching DrivingLicenses...");
		
		 if (res.ok && resNext.ok) {
            const json = await res.json();
            const jsonNext = await resNext.json();
            drivingLicenses = json;
            if (jsonNext.length == 0) {
                moreData = false;
            } else {
                moreData = true;
            }
            console.log("Received " + drivingLicenses.length + "drivingLicenses.")
        } else {
            console.log("ERROR!");
        }
    }

	    async function loadInitialData() {
            deleteAllDrivingLicenses();
        const res = await fetch("/api/v2/driving-licenses/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            getDrivingLicenses();
            if (res.ok) {
                successMsg = res.status + ": " + res.statusText;
                console.log(successMsg);
                success = "Los datos iniciales se han introducido correctamente."
            };
        });
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
 if (res.ok) {
                successMsg = res.status + ": " + res.statusText;
                console.log(successMsg);
                success = "El dato " +newDrivingLicense.aut_com + " " + newDrivingLicense.year + " ha sido insertado con exito.";
            } else if (res.status == 400){
                errorMsg = res.status + ": " + res.statusText;
                window.alert("Error! Rellene todos los campos.");
                console.log(errorMsg);
				            } else if (res.status == 409) {
                errorMsg = res.status + ": " + res.statusText;
                window.alert("Error! El recurso " + newDrivingLicense.aut_com + " " + newDrivingLicense.year + " ya existe.");
                console.log(errorMsg);
            };
        });

	}
    async function deleteDrivingLicense(aut_com, year) {
        console.log("Deleting DrivingLicenses...");
		const res = await fetch("/api/v2/driving-licenses/"+aut_com+"/"+year, {
			method: "DELETE"
		}).then(function (res) {
            getDrivingLicenses();
            if (res.ok) {
                successMsg = res.status + ": " + res.statusText;
                console.log(successMsg);
                success = "El dato " + aut_com + " " + year + " se ha borrado correctamente."
            } else if (res.status == 404) {
                errorMsg = res.status + ": " + res.statusText;
                window.alert("Error! El dato " + aut_com + " " + year + " no se ha podido borrar.");
                console.log(errorMsg);
            };
		});
    }
		    async function deleteAllDrivingLicenses() {
	    console.log("Deleting All DrivingLicenses ...");
		const res = await fetch("/api/v2/driving-licenses", {
			method: "DELETE"
		}).then(function (res) {
            getDrivingLicenses();
            if (res.ok) {
                successMsg = res.status + ": " + res.statusText;
                console.log(successMsg);
                success = "Los datos se han borrado correctamente."
            };
		});
    }

	    function upOffset (numPag) {
		offset += numPag;
		currentPage += numPag;
		getDrivingLicenses();
	}

	    async function findAutCom(search, value) {
        offset = 0;
		currentPage = 1; 
        moreData = false;
        
        console.log("Searching " + value + " for " + search + " DrivingLicenses...");
        var url = "/api/v2/driving-licenses";
        if (search != "" && value != "") {
            url = url + "?" + search + "=" + value;
        }
        const res = await fetch(url);
        if (res.ok) {
            console.log("OK: ");
            const json = await res.json();
            drivingLicenses = json;
            successMsg = res.status + ": " + res.statusText;
            console.log(successMsg);
            success = "Se han encontrado " + drivingLicenses.length + " datos en la busqueda."
            console.log("Found " + drivingLicenses.length + "driving-licenses.")
        } else {
            window.alert("ERROR: Introduzca correctamente los value para la busqueda.");
            errorMsg = res.status + ": " + res.statusText;
            console.log("ERROR!" + errorMsg);
        }
    }

	    
</script>

<main>
    <h2>Bienvenido a driving-licenses</h2>
    <h3>Acciones</h3>
    <p><a href="/"><Button color="info">Volver a Inicio</Button></a></p>
	<p><Button color="primary" on:click="{loadInitialData}">Cargar valores predeterminados</Button></p>
	<p><Button outline  color="primary" on:click="{deleteAllDrivingLicenses}">Borrar todo</Button></p>
            <table style="width: 100%;">
                <thead>
                    <tr>
                        <th><label>Buscar por:</label></th>
                        <th><label>Valor:</label></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Input type="select" name="busqueda" id="busqueda" bind:value="{search}">
                                <option disabled selected></option>
                                <option value="aut_com">Comunidad Autónoma</option>
								<option value="year">Año</option>
							</Input>
						</td>	
						<td>
                                <Input type="text" name="valor" id="valor" bind:value="{value}"></Input>
                        </td>
					</tr>
                    <tr>
                        <td style="width: 25%;">
                            <Button color="primary" on:click="{findAutCom(search, value)}" class="button-search">Buscar</Button>
                        </td>
                    </tr>
                </tbody>
            </table>	

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
					<td><input type="number" bind:value="{newDrivingLicense.year}"></td>
					<td><input type="number" bind:value="{newDrivingLicense.cars_men}"></td>
					<td><input type="number" bind:value="{newDrivingLicense.cars_women}"></td>
					<td><input type="number" bind:value="{newDrivingLicense.mot_men}"></td>
                    <td><input type="number" bind:value="{newDrivingLicense.mot_women}"></td>
                    <td><input type="number" bind:value="{newDrivingLicense.total_cars}"></td>
                    <td><input type="number" bind:value="{newDrivingLicense.total_mot}"></td>
                    <td><input type="number" bind:value="{newDrivingLicense.rel_cars}"></td>
                    <td><input type="number" bind:value="{newDrivingLicense.rel_mot}"></td>
					<td> <Button outline  color="primary" on:click={insertDrivingLicense}>Insertar</Button> </td>
				</tr>

				{#each drivingLicenses as drivingLicense}
					<tr>
						<td>
							<a href="#/driving-licenses/{drivingLicense.aut_com}/{drivingLicense.year}">{drivingLicense.aut_com}</a>
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
						<td><Button outline color="danger" on:click="{deleteDrivingLicense(drivingLicense.aut_com,drivingLicense.year)}">Eliminar</Button></td>
					</tr>
				{/each}
			</tbody>
		</Table>
	{/await}
	 <Pagination ariaLabel="Cambiar de página" style="padding-left: 45%;">

        <PaginationItem class="{currentPage === 1 ? 'disabled' : ''}">
            <PaginationLink previous href="#/driving-licenses" on:click="{() => upOffset(-1)}" />
        </PaginationItem>
        
        {#if currentPage != 1}
            <PaginationItem>
                <PaginationLink href="#/driving-licenses" on:click="{() => upOffset(-1)}" >{currentPage - 1}</PaginationLink>
            </PaginationItem>
        {/if}
        <PaginationItem active>
            <PaginationLink href="#/driving-licenses" >{currentPage}</PaginationLink>
        </PaginationItem>
        
        {#if moreData}
            <PaginationItem >
                <PaginationLink href="#/driving-licenses" on:click="{() => upOffset(1)}">{currentPage + 1}</PaginationLink>
            </PaginationItem>
        {/if}
        <PaginationItem class="{moreData ? '' : 'disabled'}">
            <PaginationLink next href="#/driving-licenses" on:click="{() => upOffset(1)}"/>
        </PaginationItem>  
    </Pagination>

</main>
