<script>

    import { Button } from 'sveltestrap';

    async function higchartsGraph() {
        console.log("Fetching traffic-injuries...");
        const data = await fetch("/api/v2/traffic-injuries");
        let jsonData = await data.json();
        console.log(jsonData);

        var higchartsData = jsonData.filter(function (x) {
            return x.auto_com && parseInt(x.year) == 2018;
        }).map((dato) => {
            return { 'name': dato.auto_com, 'data': [parseInt(dato.accident), parseInt(dato.dead), parseInt(dato.injure)] }
        });

        Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Incidentes de tráfico producidos en España (2018)'
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
    higchartsGraph()
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