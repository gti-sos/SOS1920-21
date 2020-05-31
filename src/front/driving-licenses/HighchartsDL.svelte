<script>

    import { Button } from 'sveltestrap';

    async function highchartsGraph() {
        console.log("Fetching driving-licenses...");
        const data = await fetch("/api/v2/driving-licenses");
        let jsonData = await data.json();
        console.log(jsonData);

        var higchartsData = jsonData.filter(function (x) {
            return x.aut_com && parseInt(x.year) == 2018;
        }).map((dato) => {
            return { 'name': dato.aut_com, 'data': [parseInt(dato.car_men), parseInt(dato.car_women),parseInt(dato.mot_men), parseInt(dato.mot_women),parseInt(dato.total_cars),
            parseInt(dato.total_mot),parseInt(dato.rel_cars),parseInt(dato.rel_mot)]}
        });

        Highcharts.chart('container', {

        chart: {
            type: 'column'
        },

        title: {
            text: 'Nuevos conductores de Permiso B de Conducir (2018)'
        },

        xAxis: {
            categories: ['Carnet Coche Hombres', 'Carnet Coche Mujeres']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
            text: 'Número de nuevos conductores'
            }
        },

        tooltip: {
            formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
            stacking: 'normal'
            }
        },

        series: higchartsData
        });
    highchartsGraph();
    }
</script>

<main>
    <h2>Gráfica (Highcharts)</h2>
    <h3>Acciones</h3>
    <p><a href="/"><Button color="info">Volver a Inicio</Button></a></p>

 <figure class="highcharts-figure">
  <div id="container"></div>
</figure>

</main>