<script>
  import { Button, Alert } from "sveltestrap";

  // Alerts
  let infoAlertStatus = "";
  let infoAlertText = "";

  // Natality-stats
  async function loadInitialDataNatalityStats() {
    const res = await fetch(
      "https://sos1920-01.herokuapp.com/api/v2/natality-stats/loadInitialData",
      {
        method: "GET"
      }
    ).then(function(res) {
      highchartsGraphG1();
      infoAlertStatus = res.status + " - " + res.statusText;
      infoAlertText = "Recursos cargados correctamente.";
    });
  }

  async function deleteAllNatalityStats() {
    const res = await fetch(
      "https://sos1920-01.herokuapp.com/api/v2/natality-stats",
      {
        method: "DELETE"
      }
    ).then(function(res) {
      if (res.status == 404) {
        infoAlertStatus = res.status + " - " + res.statusText;
        infoAlertText = "No hay recursos que eliminar.";
      } else {
        highchartsGraphG1();
        infoAlertStatus = res.status + " - " + res.statusText;
        infoAlertText = "Se han eliminado todos los recursos correctamente.";
      }
    });
  }

  async function highchartsGraphG1() {
    console.log("Fetching poverty-stats...");
    const data = await fetch(
      "https://sos1920-01.herokuapp.com/api/v2/natality-stats"
    );
    let jsonData = await data.json();
    console.log(jsonData);
    var natalityData = jsonData
      .filter(function(x) {
        return x.country && parseInt(x.year) == 2010;
      })
      .map(dato => {
        return {
          name: dato.country,
          data: [
            parseInt(dato.natality_men),
            parseInt(dato.natality_women),
            parseInt(dato.natality_totals)
          ]
        };
      });

    Highcharts.chart("container1", {
      chart: {
        type: "column"
      },
      title: {
        text: "Natalidad por sexos"
      },
      subtitle: {
        text: "(2010)"
      },
      xAxis: {
        categories: ["Niños", "Niñas", "Total"],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: "Número de niños nacidos"
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: natalityData
    });
  }
  highchartsGraphG1();

  async function highchartsGraphG2() {
    console.log("Fetching Natality-stats...");
    const data = await fetch(
      "https://sos1920-01.herokuapp.com/api/v2/natality-stats"
    );
    let jsonData = await data.json();
    console.log(jsonData);
    var natalityData = jsonData
      .filter(function(x) {
        return x.country && parseInt(x.year) == 2010;
      })
      .map(dato => {
        return {
          name: dato.country,
          y: [
            parseInt(dato.natality_men),
            parseInt(dato.natality_women),
            parseInt(dato.natality_totals)
          ]
        };
      });

    Highcharts.chart("container2", {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie"
      },
      title: {
        text: "Natalidad por sexos"
      },
      subtitle: {
        text: "(2010)"
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
      accessibility: {
        point: {
          valueSuffix: "%"
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: natalityData
    });
  }
  highchartsGraphG2();
</script>

<main>
  <h2>Integraciones - Accidentes de Tráfico</h2>
  <br />
  <div class="row">
    <div class="col-4">
      <div class="list-group" id="list-tab" role="tablist">

        <a
          class="list-group-item list-group-item-action active"
          id="list-home-list"
          data-toggle="list"
          href="#list-01"
          role="tab"
          aria-controls="home">
          Integración con Grupo 1
          <br />
          (Natality-stats)
        </a>
      </div>
    </div>
    <div class="col-8">
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="list-01"
          role="tabpanel"
          aria-labelledby="list-home-list">
          <h2>Integración con Grupo 1 (Natality-stats)</h2>
          <h3>Acciones</h3>
          {#if infoAlertStatus}
            <Alert>
              <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
              {infoAlertText}
            </Alert>
          {/if}
          <p>
            <a href="/">
              <Button color="info">Volver a Inicio</Button>
            </a>
          </p>
          <p>
            <Button color="success" on:click={loadInitialDataNatalityStats}>
              Cargar Datos Iniciales
            </Button>
          </p>
          <p>
            <Button color="danger" on:click={deleteAllNatalityStats}>
              Elimina Todos los Recursos
            </Button>
          </p>
          <figure class="highcharts-figure">
            <div id="container1" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</main>
