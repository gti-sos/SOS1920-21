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
      apexchartsGraph();
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
        apexchartsGraph();
        infoAlertStatus = res.status + " - " + res.statusText;
        infoAlertText = "Se han eliminado todos los recursos correctamente.";
      }
    });
  }

  async function apexchartsGraph() {
    console.log("Fetching traffic-injuries...");
    const data = await fetch("/api/v2/traffic-injuries");
    let jsonData = await data.json();
    console.log(jsonData);

    var auto_com = jsonData.filter(function (x) {
      return x.auto_com && parseInt(x.year) == 2018;
    }).map((dato) => {
      return dato.auto_com
    });

    var accident = jsonData.filter(function (x) {
      return x.auto_com && parseInt(x.year) == 2018;
    }).map((dato) => {
      return dato.accident
    });

    var dead = jsonData.filter(function (x) {
      return x.auto_com && parseInt(x.year) == 2018;
    }).map((dato) => {
      return dato.dead
    });

    var injure = jsonData.filter(function (x) {
      return x.auto_com && parseInt(x.year) == 2018;
    }).map((dato) => {
      return dato.injure
    });

    var options = {
      title: {
        align: 'center',
        text: 'Incidentes de tráfico producidos en España durante 2018'
      },
      series: [{
        name: 'Accidentes',
        data: accident
      }, {
        name: 'Muertes',
        data: dead
      }, {
        name: 'Heridos',
        data: injure
      }],
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'province',
        categories: auto_com
      }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }
  apexchartsGraph();
</script>

<main>
  <h2>Gráfica (Apexcharts)</h2>
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