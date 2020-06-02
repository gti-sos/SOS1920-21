<script>
    import { Button, Alert } from 'sveltestrap';

    // Alerts
    let infoAlertStatus = "";
    let infoAlertText = "";

    function refreshPage() {
        window.location.reload();
    }

    async function loadInitialData() {
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
        console.log("Fetching driving-licenses...");
        const data = await fetch("/api/v2/driving-licenses");
        let jsonData = await data.json();
        console.log(jsonData);

        var higchartsData = jsonData.filter(function (x) {
            return x.aut_com && parseInt(x.year);
        }).map((dato) => {
            return { 'name': dato.aut_com + ' - ' + dato.year, 'data': [parseInt(dato.cars_men), parseInt(dato.cars_women), parseInt(dato.total_cars)]}
        });

 Highcharts.chart('chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Permisos B entre 2015 y 2018',
    },
    xAxis: {
        categories: [
            'Hombres',
            'Mujeres',
            'Total',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Número de nuevos permisos'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mil personas</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
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
    <p><a href="/"><Button color="info">Volver</Button></a></p>
    <p><Button color="success" on:click="{loadInitialData}">Cargar Datos Iniciales</Button></p>
    <p><Button color="danger" on:click="{deleteAllDrivingLicenses}">Elimina Todos los Recursos</Button></p>
  
    <br><figure>
      <div id="chart"></div>
    </figure>
  </main>

  