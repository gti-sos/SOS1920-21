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

        async function higchartsGraph() {
        console.log("Fetching driving-licenses...");
        const data = await fetch("/api/v2/driving-licenses");
        let jsonData = await data.json();
        console.log(jsonData);

        var higchartsData = jsonData.filter(function (x) {
            return x.aut_com && parseInt(x.year) == 2018;
        }).map((dato) => {
            return { 'name': dato.aut_com + ' - ' + dato.year, 'data': [parseInt(dato.total_mot)]}
        });
    }

           am4core.ready(function() {
            // Themes begin
            am4core.useTheme(am4themes_kelly);
            // Create chart instance
            var chart = am4core.create("chartdiv", am4charts.PieChart);
            // Add data
            chart.data = MyDataGraph;
            // Set inner radius
            chart.innerRadius = am4core.;
            // Add and configure Series
            var pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "data";
            pieSeries.dataFields.category = "aut_com";
            pieSeries.slices.template.stroke = am4core.color("#fff");
            pieSeries.slices.template.strokeWidth = 2;
            pieSeries.slices.template.strokeOpacity = 1;
            // This creates initial animation
            pieSeries.hiddenState.properties.opacity = 1;
            pieSeries.hiddenState.properties.endAngle = -90;
            pieSeries.hiddenState.properties.startAngle = -90;
            });
    higchartsGraph();
    }


</script>

<main>
    <h2>Gráfica (am4charts)</h2>
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
    <p><Button color="danger" on:click="{deleteAllDrivingLicenses}">Elimina Todos los Recursos</Button></p>
  
    <br><figure>
       <div id="chartdiv"></div>
    </figure>
  </main>
  