<script>
  import { Button, Alert } from "sveltestrap";
  import bb from "billboard.js";

  // Alerts
  let infoAlertStatus = "";
  let infoAlertText = "";

  function refreshPage() {
    window.location.reload();
  }

  async function loadInitialData() {
    deleteAllDrivingLicenses();
    const res = await fetch("/api/v2/driving-licenses/loadInitialData", {
      method: "GET"
    }).then(function(res) {
      loadGraph();
      infoAlertStatus = res.status + " - " + res.statusText;
      infoAlertText = "Recursos cargados correctamente.";
    });
  }

  async function deleteAllDrivingLicenses() {
    const res = await fetch("/api/v2/driving-licenses", {
      method: "DELETE"
    }).then(function(res) {
      if (res.status == 404) {
        infoAlertStatus = res.status + " - " + res.statusText;
        infoAlertText = "No hay recursos que eliminar.";
      } else {
        loadGraph();
        infoAlertStatus = res.status + " - " + res.statusText;
        infoAlertText = "Se han eliminado todos los recursos correctamente.";
      }
    });
  }
  async function loadGraph() {
    console.log("Fetching driving-licenses...");
    const data = await fetch("/api/v2/driving-licenses");
    let jsonData = await data.json();
    console.log(jsonData);
    var billboardData = jsonData
      .filter(function(x) {
        return x.aut_com && parseInt(x.year)==2018;
      })
      .map(dato => {
        return {
          name: dato.aut_com,
          data: [
            parseInt(dato.mot_men),
            parseInt(dato.mot_women),
          ]
        };
      });
      var resAut_com = ["x"];
      var resHombres = ["Hombres"];
      var resMujeres = ["Mujeres"];
      var i=0;
      for(i=0;i<billboardData.length;i++){
          resAut_com.push(billboardData[i].name);
          resHombres.push(billboardData[i].data[0]);
          resMujeres.push(billboardData[i].data[1]); 
      }
        console.log(resAut_com);
        console.log(resHombres);
        console.log(resMujeres);
      
    var BillBoardchart = bb.generate({
      data: {
          x: "x",
        columns: [resAut_com,
        resHombres,
        resMujeres],
        groups: [
            ["Hombres","Mujeres"]
        ],
        type: "bar"
      },  
      axis: {
    x: {
      type: "category"
    }
  },
  bindto: "#categoryData"
});

  }
  loadGraph();
</script>

<main>
  <h2>Gráfica (Billboard)</h2>
  <br />
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
    <Button color="success" on:click={loadInitialData}>
      Cargar Datos Iniciales
    </Button>
  </p>
  <p>
    <Button color="danger" on:click={deleteAllDrivingLicenses}>
      Elimina Todos los Recursos
    </Button>
  </p>
 <div id="#categoryData"></div>
</main>
