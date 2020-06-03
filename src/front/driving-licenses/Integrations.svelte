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

  async function loadInitialOffworksStats() {
    const res = await fetch(
      "https://sos1920-23.herokuapp.com/api/v2/offworks-stats/loadInitialData",
      {
        method: "GET"
      }
    ).then(function(res) {
      highchartsGraphG23();
      infoAlertStatus = res.status + " - " + res.statusText;
      infoAlertText = "Recursos cargados correctamente.";
    });
  }

  async function deleteAllOffworksStats() {
    const res = await fetch(
      "https://sos1920-23.herokuapp.com/api/v2/offworks-stats",
      {
        method: "DELETE"
      }
    ).then(function(res) {
      if (res.status == 404) {
        infoAlertStatus = res.status + " - " + res.statusText;
        infoAlertText = "No hay recursos que eliminar.";
      } else {
        highchartsGraphG23();
        infoAlertStatus = res.status + " - " + res.statusText;
        infoAlertText = "Se han eliminado todos los recursos correctamente.";
      }
    });
  }

  async function loadInitialDataFormulaStats() {
    const res = await fetch(
      "https://sos1920-22.herokuapp.com/api/v2/formula-stats/loadInitialData",
      {
        method: "GET"
      }
    ).then(function(res) {
      highchartsGraphG1();
      infoAlertStatus = res.status + " - " + res.statusText;
      infoAlertText = "Recursos cargados correctamente.";
    });
  }

  async function deleteAllFormulaStats() {
    const res = await fetch(
      "https://sos1920-22.herokuapp.com/api/v2/formula-stats",
      {
        method: "DELETE"
      }
    ).then(function(res) {
      if (res.status == 404) {
        infoAlertStatus = res.status + " - " + res.statusText;
        infoAlertText = "No hay recursos que eliminar.";
      } else {
        highchartsGraphG23();
        infoAlertStatus = res.status + " - " + res.statusText;
        infoAlertText = "Se han eliminado todos los recursos correctamente.";
      }
    });
  }

  async function loadInitialDataUclStats() {
    const res = await fetch(
      "https://sos1920-08.herokuapp.com/api/v1/ucl_stats/loadInitialData",
      {
        method: "GET"
      }
    ).then(function(res) {
      highchartsGraphG8();
      infoAlertStatus = res.status + " - " + res.statusText;
      infoAlertText = "Recursos cargados correctamente.";
    });
  }

  async function deleteAllUclStats() {
    const res = await fetch(
      "https://sos1920-08.herokuapp.com/api/v1/ucl_stats",
      {
        method: "DELETE"
      }
    ).then(function(res) {
      if (res.status == 404) {
        infoAlertStatus = res.status + " - " + res.statusText;
        infoAlertText = "No hay recursos que eliminar.";
      } else {
        highchartsGraphG8();
        infoAlertStatus = res.status + " - " + res.statusText;
        infoAlertText = "Se han eliminado todos los recursos correctamente.";
      }
    });
  }

  async function loadInitialGlobalTransfers() {
    const res = await fetch(
      "https://sos1920-26.herokuapp.com/api/v2/global-transfers/loadInitialData",
      {
        method: "GET"
      }
    ).then(function(res) {
      highchartsGraphG26();
      infoAlertStatus = res.status + " - " + res.statusText;
      infoAlertText = "Recursos cargados correctamente.";
    });
  }

  async function deleteAllGlobalTransfers() {
    const res = await fetch(
      "https://sos1920-26.herokuapp.com/api/v2/global-transfers",
      {
        method: "DELETE"
      }
    ).then(function(res) {
      if (res.status == 404) {
        infoAlertStatus = res.status + " - " + res.statusText;
        infoAlertText = "No hay recursos que eliminar.";
      } else {
        highchartsGraphG26();
        infoAlertStatus = res.status + " - " + res.statusText;
        infoAlertText = "Se han eliminado todos los recursos correctamente.";
      }
    });
  }

  async function loadInitialDrugOffences() {
    const res = await fetch(
      "https://sos1920-12.herokuapp.com/api/v1/drug_offences/loadInitData",
      {
        method: "GET"
      }
    ).then(function(res) {
      highchartsGraphG12();
      infoAlertStatus = res.status + " - " + res.statusText;
      infoAlertText = "Recursos cargados correctamente.";
    });
  }

  async function deleteAlldrugOffences() {
    const res = await fetch(
      "https://sos1920-12.herokuapp.com/api/v1/drug_offences/",
      {
        method: "DELETE"
      }
    ).then(function(res) {
      if (res.status == 404) {
        infoAlertStatus = res.status + " - " + res.statusText;
        infoAlertText = "No hay recursos que eliminar.";
      } else {
        highchartsGraphG26();
        infoAlertStatus = res.status + " - " + res.statusText;
        infoAlertText = "Se han eliminado todos los recursos correctamente.";
      }
    });
  }

  async function highchartsGraphG1() {
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

  async function highchartsGraphG8() {
    console.log("Fetching ucl_stats...");
    const data = await fetch(
      "https://sos1920-08.herokuapp.com/api/v1/ucl_stats"
    );
    let jsonData = await data.json();
    console.log(jsonData);
    var uclData = jsonData
      .filter(function(x) {
        return x.country && x.team;
      })
      .map(dato => {
        return {
          name: dato.country + " - " + dato.team,
          y: parseInt(dato.title)
        };
      });

    Highcharts.chart("container8", {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie"
      },
      title: {
        text: "Porcentaje de títulos europeos ganados"
      },
      subtitle: {
        text: "(Hasta 2019)"
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
      series: [
        {
          name: "Porcentaje",
          colorByPoint: true,
          data: uclData
        }
      ]
    });
  }
  highchartsGraphG8();

  async function highchartsGraphG23() {
    console.log("Fetching offworks-stats...");
    const data = await fetch(
      "https://sos1920-23.herokuapp.com/api/v2/offworks-stats"
    );
    let jsonData = await data.json();
    console.log(jsonData);

    var offworksData = jsonData
      .filter(function(x) {
        return x.community && parseInt(x.year) == 2008;
      })
      .map(dato => {
        return {
          name: dato.community + " - " + dato.year,
          data: [
            parseInt(dato.accident),
            parseInt(dato.sick),
            parseInt(dato.numberzone)
          ]
        };
      });

    Highcharts.chart("container23", {
      chart: {
        type: "area"
      },
      title: {
        text: "Accidentes laborales"
      },
      subtitle: {
        text: "(2008)"
      },
      xAxis: {
        categories: [
          "Baja por accidente",
          "Baja por enfermedad",
          "Número de zona"
        ],
        tickmarkPlacement: "on",
        title: {
          enabled: false
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: "Números"
        }
      },
      plotOptions: {
        area: {
          stacking: "normal",
          lineColor: "#666666",
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: "#666666"
          }
        }
      },
      series: offworksData
    });
  }
  highchartsGraphG23();

  async function highchartsGraphG22() {
    console.log("Fetching formula-stats...");
    const data = await fetch(
      "https://sos1920-22.herokuapp.com/api/v2/formula-stats"
    );
    let jsonData = await data.json();
    console.log(jsonData);
    var natalityData = jsonData
      .filter(function(x) {
        return x.country && parseInt(x.year);
      })
      .map(dato => {
        return {
          name: dato.country + "-" + parseInt(dato.year),
          data: [
            parseInt(dato.pilotnumber),
            parseInt(dato.victorynumber),
            parseInt(dato.totalpointnumber)
          ]
        };
      });

    Highcharts.chart("container22", {
      chart: {
        type: "column"
      },
      title: {
        text: ""
      },
      xAxis: {
        categories: [
          "Número de pilotos",
          "Número de Victorias",
          "Número de puntos"
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: " "
        }
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
  highchartsGraphG22();

  async function highchartsGraphG26() {
    console.log("Fetching global-transfers...");
    const data = await fetch(
      "https://sos1920-26.herokuapp.com/api/v2/global-transfers"
    );
    let jsonData = await data.json();
    console.log(jsonData);
    var globalTransfersData = jsonData
      .filter(function(x) {
        return x.team && parseInt(x.year);
      })
      .map(dato => {
        return {
          name: dato.team + " - " + parseInt(dato.year),
          data: [parseInt(dato.signing), parseInt(dato.sale)]
        };
      });

    Highcharts.chart("container26", {
      chart: {
        type: "column"
      },
      title: {
        text: "Dinero gastado y obtenido en fichajes"
      },
      xAxis: {
        categories: ["Fichajes", "Ventas"],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: "Millones de Euros"
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} millones de Euros </b></td></tr>',
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
      series: globalTransfersData
    });
  }
  highchartsGraphG26();

  async function highchartsGraphG12() {
    console.log("Fetching drug_offences...");
    const data = await fetch(
      "https://sos1920-12.herokuapp.com/api/v1/drug_offences"
    );
    let jsonData = await data.json();
    console.log(jsonData);

    var drugOffencesData = jsonData
      .filter(function(x) {
        return x.country && parseInt(x.year) == 2015;
      })
      .map(dato => {
        return {
          name: dato.country,
          data: [
            parseInt(dato.offences_use),
            parseInt(dato.offences_supply),
            parseInt(dato.cannabis_offences)
          ]
        };
      });

    Highcharts.chart("container12", {
      chart: {
        type: "area"
      },
      title: {
        text: "Delitos relacionados con la droga"
      },
      subtitle: {
        text: "(2015)"
      },
      xAxis: {
        categories: [
          "Delitos relacionados con el uso",
          "Delitos relacionados con el tráfico",
          "Delitos relacionados con el cannabis"
        ],
        tickmarkPlacement: "on",
        title: {
          enabled: false
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: " "
        }
      },
      plotOptions: {
        area: {
          stacking: "normal",
          lineColor: "#666666",
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: "#666666"
          }
        }
      },
      series: drugOffencesData
    });
  }
  highchartsGraphG12();

  // API EXTERNA 1

  async function loadPrueba(){
    console.log("Fetching cryptos...");
     const res = await fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?X-CMC_PRO_API_KEY=320accd4-62dc-4177-9718-bbda3efd9c52",
      {
        method: "GET"
      }
    ).then(function(res) {
      infoAlertStatus = res.status + " - " + res.statusText;
      infoAlertText = "Recursos cargados correctamente.";
      console.log(res);
    });
  }
   loadPrueba();
  
</script>

<main>
  <h2>Integraciones - Licencias de Conducir</h2>
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
        <a
          class="list-group-item list-group-item-action"
          id="list-profile-list"
          data-toggle="list"
          href="#list-02"
          role="tab"
          aria-controls="profile">
          Integración con Grupo 8
          <br />
          (ucl_stats)
        </a>
        <a
          class="list-group-item list-group-item-action"
          id="list-profile-list"
          data-toggle="list"
          href="#list-03"
          role="tab"
          aria-controls="profile">
          Integración con Grupo 12 con Proxy
          <br />
          (drug_offences)
        </a>
        <a
          class="list-group-item list-group-item-action"
          id="list-profile-list"
          data-toggle="list"
          href="#list-04"
          role="tab"
          aria-controls="profile">
          Integración con Grupo 22
          <br />
          (formula-stats)
        </a>
        <a
          class="list-group-item list-group-item-action"
          id="list-profile-list"
          data-toggle="list"
          href="#list-05"
          role="tab"
          aria-controls="profile">
          Integración con Grupo 23
          <br />
          (offworks-stats)
        </a>
        <a
          class="list-group-item list-group-item-action"
          id="list-profile-list"
          data-toggle="list"
          href="#list-06"
          role="tab"
          aria-controls="profile">
          Integración con Grupo 26
          <br />
          (global-transfers)
        </a>
        <a
          class="list-group-item list-group-item-action"
          id="list-profile-list"
          data-toggle="list"
          href="#list-07"
          role="tab"
          aria-controls="profile">
          Integración con coinmarketcap (API EXTERNA)
          <br />
          (cryptocurrency information)
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
              <Button color="info">Volver</Button>
            </a>
          </p>
          <p>
            <a href="https://sos1920-01.herokuapp.com/">
              <Button color="primary">Página Web</Button>
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
        <div
          class="tab-pane fade"
          id="list-02"
          role="tabpanel"
          aria-labelledby="list-home-list">
          <h2>Integración con Grupo 8 (ucl_stats)</h2>
          <h3>Acciones</h3>
          {#if infoAlertStatus}
            <Alert>
              <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
              {infoAlertText}
            </Alert>
          {/if}
          <p>
            <a href="/">
              <Button color="info">Volver</Button>
            </a>
          </p>
          <p>
            <a href="https://sos1920-08.herokuapp.com/">
              <Button color="primary">Página Web</Button>
            </a>
          </p>
          <p>
            <Button color="success" on:click={loadInitialDataUclStats}>
              Cargar Datos Iniciales
            </Button>
          </p>
          <p>
            <Button color="danger" on:click={deleteAllUclStats}>
              Elimina Todos los Recursos
            </Button>
          </p>
          <figure class="highcharts-figure">
            <div id="container8" />
          </figure>
        </div>
        <div
          class="tab-pane fade"
          id="list-04"
          role="tabpanel"
          aria-labelledby="list-profile-list">
          <h2>Integración con Grupo 22 (formula-stats)</h2>
          <h3>Acciones</h3>
          {#if infoAlertStatus}
            <Alert>
              <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
              {infoAlertText}
            </Alert>
          {/if}
          <p>
            <a href="/">
              <Button color="info">Volver</Button>
            </a>
          </p>
          <p>
            <a href="https://sos1920-22.herokuapp.com/">
              <Button color="primary">Página Web</Button>
            </a>
          </p>
          <p>
            <Button color="success" on:click={loadInitialDataFormulaStats}>
              Cargar Datos Iniciales
            </Button>
          </p>
          <p>
            <Button color="danger" on:click={deleteAllFormulaStats}>
              Elimina Todos los Recursos
            </Button>
          </p>
          <figure class="highcharts-figure">
            <div id="container22" />
          </figure>
        </div>
        <div
          class="tab-pane fade"
          id="list-03"
          role="tabpanel"
          aria-labelledby="list-profile-list">
          <h2>Integración con Grupo 12 (drug_offences) con Proxy</h2>
          <h3>Acciones</h3>
          {#if infoAlertStatus}
            <Alert>
              <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
              {infoAlertText}
            </Alert>
          {/if}
          <p>
            <a href="/">
              <Button color="info">Volver</Button>
            </a>
          </p>
          <p>
            <a href="https://sos1920-12.herokuapp.com/">
              <Button color="primary">Página Web</Button>
            </a>
          </p>
          <p>
            <Button color="success" on:click={loadInitialDrugOffences}>
              Cargar Datos Iniciales
            </Button>
          </p>
          <p>
            <Button color="danger" on:click={deleteAlldrugOffences}>
              Elimina Todos los Recursos
            </Button>
          </p>
          <figure class="highcharts-figure">
            <div id="container12" />
          </figure>
        </div>
        <div
          class="tab-pane fade"
          id="list-05"
          role="tabpanel"
          aria-labelledby="list-profile-list">
          <h2>Integración con Grupo 23 (offworks-stats)</h2>
          <h3>Acciones</h3>
          {#if infoAlertStatus}
            <Alert>
              <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
              {infoAlertText}
            </Alert>
          {/if}
          <p>
            <a href="/">
              <Button color="info">Volver</Button>
            </a>
          </p>
          <p>
            <a href="https://sos1920-23.herokuapp.com/">
              <Button color="primary">Página Web</Button>
            </a>
          </p>
          <p>
            <Button color="success" on:click={loadInitialOffworksStats}>
              Cargar Datos Iniciales
            </Button>
          </p>
          <p>
            <Button color="danger" on:click={deleteAllOffworksStats}>
              Elimina Todos los Recursos
            </Button>
          </p>
          <figure class="highcharts-figure">
            <div id="container23" />
          </figure>
        </div>
        <div
          class="tab-pane fade"
          id="list-06"
          role="tabpanel"
          aria-labelledby="list-profile-list">
          <h2>Integración con Grupo 26 (global-transfers)</h2>
          <h3>Acciones</h3>
          {#if infoAlertStatus}
            <Alert>
              <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
              {infoAlertText}
            </Alert>
          {/if}
          <p>
            <a href="/">
              <Button color="info">Volver</Button>
            </a>
          </p>
          <p>
            <a href="https://sos1920-26.herokuapp.com/">
              <Button color="primary">Página Web</Button>
            </a>
          </p>
          <p>
            <Button color="success" on:click={loadInitialGlobalTransfers}>
              Cargar Datos Iniciales
            </Button>
          </p>
          <p>
            <Button color="danger" on:click={deleteAllGlobalTransfers}>
              Elimina Todos los Recursos
            </Button>
          </p>
          <figure class="highcharts-figure">
            <div id="container26" />
          </figure>
        </div>
        <div
          class="tab-pane fade"
          id="list-07"
          role="tabpanel"
          aria-labelledby="list-profile-list">
          <h2>Integración con coinmarketcap (cryptocurrency information)</h2>
          <h3>Acciones</h3>
          {#if infoAlertStatus}
            <Alert>
              <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
              {infoAlertText}
            </Alert>
          {/if}
          <p>
            <a href="/">
              <Button color="info">Volver</Button>
            </a>
          </p>
          <p>
            <a href="https://coinmarketcap.com/api/">
              <Button color="primary">Página Web</Button>
            </a>
          </p>
          <p>
            <Button color="success" on:click={loadPrueba}>
              Cargar Datos Iniciales
            </Button>
          </p>
          <figure class="highcharts-figure">
            <div id="containerAPIext1" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</main>
