<svelte:head>

</svelte:head>

<script>
    document.addEventListener('DOMContentLoaded', async function () {
        let res = [];
        const data = await fetch("/api/v2/traffic-injuries");
        let DataConverted = await data.json();
        console.log(DataConverted);

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
            series: [{
                name: 'Comunidad Autónoma 1',
                data: [5, 3, 4]
            }, {
                name: 'Comunidad Autónoma 2',
                data: [2, 2, 3]
            }, {
                name: 'Comunidad Autónoma 3',
                data: [3, 4, 4]
            }]
        });
    })
</script>

<h2>Gráfico (Highcharts)</h2>

<figure class="highcharts-figure">
    <div id="container"></div>
</figure>