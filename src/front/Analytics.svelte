<script>
    import { Button, Alert } from 'sveltestrap';

    // Alerts
    let infoAlertStatus = "";
    let infoAlertText = "";

    async function loadInitialData() {
        loadInitialDataTrafficInjuries();
        loadInitialDataDrivingLicenses();
    }

    async function deleteAllData() {
        deleteAllTrafficInjuries();
        deleteAllDrivingLicenses();
    }

    async function loadInitialDataTrafficInjuries() {
        const res = await fetch("/api/v2/traffic-injuries/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            higchartsGraph();
            infoAlertStatus = res.status + " - " + res.statusText;
            infoAlertText = "Recursos cargados correctamente.";
        });
    }

    async function deleteAllTrafficInjuries() {
        const res = await fetch("/api/v2/traffic-injuries", {
            method: "DELETE"
        }).then(function (res) {
            if (res.status == 404) {
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "No hay recursos que eliminar.";
            } else {
                higchartsGraph();
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "Se han eliminado todos los recursos correctamente.";
            }
        });
    }

    async function loadInitialDataDrivingLicenses() {
        const res = await fetch("/api/v2/driving-licenses/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            higchartsGraph();
            infoAlertStatus = res.status + " - " + res.statusText;
            infoAlertText = "Recursos cargados correctamente.";
        });
    }

    async function deleteAllDrivingLicenses() {
        const res = await fetch("/api/v2/driving-licenses", {
            method: "DELETE"
        }).then(function (res) {
            if (res.status == 404) {
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "No hay recursos que eliminar.";
            } else {
                higchartsGraph();
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "Se han eliminado todos los recursos correctamente.";
            }
        });
    }

    async function higchartsGraph() {
        console.log("Fetching traffic-injuries...");
        const data1 = await fetch("/api/v2/traffic-injuries");
        let jsonData1 = await data1.json();

        console.log("Fetching driving-licenses...");
        const data2 = await fetch("/api/v2/driving-licenses");
        let jsonData2 = await data2.json();

        const res1 = Object.assign(jsonData1, jsonData2)

        var higchartsData = res1.filter(function (x) {
            return (x.auto_com || x.aut_com) && parseInt(x.year);
        }).map((dato) => {
            return { 'name': (dato.auto_com || dato.aut_com) + " - " + dato.year, 'data': [parseInt(dato.accident), parseInt(dato.dead), parseInt(dato.injure), parseInt(dato.total_mot), parseInt(dato.total_cars)]}
        });

        Highcharts.chart('chart', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Integración entre accidentes de tráfico y vehículos implicados'
            },
            subtitle: {
                text: '(2015 - 2018)'
            },
            xAxis: {
                categories: ['Accidentes', 'Muertes', 'Heridos', 'Total Motos', 'Total Coches']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total (miles)'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: higchartsData
        });
    }
    higchartsGraph();
</script>

<main>
    <h2>Analíticas</h2>
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
    <p><Button color="danger" on:click="{deleteAllData}">Elimina Todos los Recursos</Button></p>
    <figure>
      <div id="chart"></div>
    </figure>
  </main>