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
            return { 'name': dato.aut_com, 'data': [parseInt(dato.car_men), parseInt(dato.car_women)]}
        });

            Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Permisos B (2018)'
        },
        xAxis: {
            categories: ['Hombres', 'Mujeres']
        },
        yAxis: {
            min: 0,
            title: {
            text: 'Número de nuevos conductores'
            },
            stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
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
    <p><a href="javascript:location.reload(true)"><Button color="success">Recargar</Button></a></p>

 <figure class="highcharts-figure">
  <div id="container"></div>
</figure>

</main>