<svelte:head>

</svelte:head>

<script

    document.addEventListener('DOMContentLoaded', async function () {
        let res = [];
        console.log("Fetching driving-licenses...");
        const data = await fetch("/api/v2/driving-licenses");
        let jsonData = await data.json();
        console.log(jsonData);

        var higchartsData = jsonData.filter(function(x){
            return x.aut_com && parseInt(x.year)==2018;
            }).map((dato)=> { 
                return {'name': dato.aut_com, 'data': [parseInt(dato.car_men), parseInt(dato.car_women)]}
        };

    Highcharts.chart('container', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Permisos B de conducir'
    },

    xAxis: {
        categories: ['Carnet coche hombres', 'Carnet coche mujeres']
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
</script>

<h2>Gráfico (Highcharts)</h2>

<figure class="highcharts-figure">
    <div id="container"></div>
</figure>