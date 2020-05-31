<svelte:head>

</svelte:head>

<script>
    document.addEventListener('DOMContentLoaded', async function () {
        let res = [];
        console.log("Fetching traffic-injuries...");
        const data = await fetch("/api/v2/traffic-injuries");
        let jsonData = await data.json();
        console.log(jsonData);

        var higchartsData = jsonData.filter(function(x){
            return x.auto_com && parseInt(x.year)==2018;
            }).map((dato)=> { 
                return {'name': dato.auto_com, 'data': [parseInt(dato.accident), parseInt(dato.dead), parseInt(dato.injure)]}
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
})

</script>

<h2>Gráfico (Highcharts)</h2>

<figure class="highcharts-figure">
    <div id="container"></div>
</figure>