<script>
    import { Button, Alert } from 'sveltestrap';

    // Alerts
    let infoAlertStatus = "";
    let infoAlertText = "";

    function refreshPage() {
        window.location.reload();
    }

    async function loadInitialData() {
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

    async function higchartsGraph() {
        console.log("Fetching traffic-injuries...");
        const data = await fetch("/api/v2/traffic-injuries");
        let jsonData = await data.json();
        console.log(jsonData);

        var higchartsData = jsonData.filter(function (x) {
            return x.auto_com && parseInt(x.year);
        }).map((dato) => {
            return { 'name': dato.auto_com + ' - ' + dato.year, 'data': [parseInt(dato.accident), parseInt(dato.dead), parseInt(dato.injure)] }
        });

        Highcharts.chart('chart', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Incidentes de tráfico producidos en España entre 2015 y 2018'
            },
            xAxis: {
                categories: ['Accidentes', 'Muertes', 'Heridos']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total'
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
    <h2>Gráfica (Highcharts)</h2>
    <br>
    <h3>Acciones</h3>
    {#if infoAlertStatus}
	<Alert>
		<h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
		{infoAlertText}
	</Alert>
    {/if}
    <p><a href="/"><Button color="info">Volver a Inicio</Button></a></p>
    <p><Button color="success" on:click="{loadInitialData}">Cargar Datos Iniciales</Button></p>
    <p><Button color="danger" on:click="{deleteAllTrafficInjuries}">Elimina Todos los Recursos</Button></p>
  
    <br><figure>
      <div id="chart"></div>
    </figure>
  </main>