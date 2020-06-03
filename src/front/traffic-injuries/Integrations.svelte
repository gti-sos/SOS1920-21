<script>
    import { Button, Alert } from 'sveltestrap';

    // Alerts
    let infoAlertStatus = "";
    let infoAlertText = "";

    // G1 - poverty-stats
    async function loadInitialDataPovertyStats() {
        const res = await fetch("https://sos1920-01.herokuapp.com/api/v2/poverty-stats/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            highchartsGraphG1();
            infoAlertStatus = res.status + " - " + res.statusText;
            infoAlertText = "Recursos cargados correctamente.";
        });
    }

    async function deleteAllPovertyStats() {
        const res = await fetch("https://sos1920-01.herokuapp.com/api/v2/poverty-stats", {
            method: "DELETE"
        }).then(function (res) {
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

    // G2 - rural-tourism-stats
    async function loadInitialDataRuralTourismStats() {
        const res = await fetch("https://sos1920-02.herokuapp.com/api/v2/rural-tourism-stats/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            highchartsGraphG2();
            infoAlertStatus = res.status + " - " + res.statusText;
            infoAlertText = "Recursos cargados correctamente.";
        });
    }

    async function deleteAllRuralTourismStats() {
        const res = await fetch("https://sos1920-02.herokuapp.com/api/v2/rural-tourism-stats/", {
            method: "DELETE"
        }).then(function (res) {
            if (res.status == 404) {
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "No hay recursos que eliminar.";
            } else {
                highchartsGraphG2();
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "Se han eliminado todos los recursos correctamente.";
            }
        });
    }

    // G5 - books-exports
    async function loadInitialDataBooksExports() {
        const res = await fetch("https://sos1920-05.herokuapp.com/api/v1/books-exports/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            highchartsGraphG5();
            infoAlertStatus = res.status + " - " + res.statusText;
            infoAlertText = "Recursos cargados correctamente.";
        });
    }

    async function deleteAllBooksExports() {
        const res = await fetch("https://sos1920-05.herokuapp.com/api/v1/books-exports/", {
            method: "DELETE"
        }).then(function (res) {
            if (res.status == 404) {
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "No hay recursos que eliminar.";
            } else {
                highchartsGraphG5();
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "Se han eliminado todos los recursos correctamente.";
            }
        });
    }

    // G9 - oil-coal-nuclear-energy-consumption-stats
    async function loadInitialDataRenovableEnergy() {
        const res = await fetch("https://sos1920-09.herokuapp.com/api/v3/oil-coal-nuclear-energy-consumption-stats/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            highchartsGraphG9();
            infoAlertStatus = res.status + " - " + res.statusText;
            infoAlertText = "Recursos cargados correctamente.";
        });
    }

    async function deleteAllRenovableEnergy() {
        const res = await fetch("https://sos1920-09.herokuapp.com/api/v3/oil-coal-nuclear-energy-consumption-stats/", {
            method: "DELETE"
        }).then(function (res) {
            if (res.status == 404) {
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "No hay recursos que eliminar.";
            } else {
                highchartsGraphG9();
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "Se han eliminado todos los recursos correctamente.";
            }
        });
    }

    // G10 - global-marriages
    async function loadInitialDataGlobalMarriages() {
        const res = await fetch("https://sos1920-10.herokuapp.com/api/v3/global-marriages/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            highchartsGraphG10();
            infoAlertStatus = res.status + " - " + res.statusText;
            infoAlertText = "Recursos cargados correctamente.";
        });
    }

    async function deleteAllGlobalMarriages() {
        const res = await fetch("https://sos1920-10.herokuapp.com/api/v3/global-marriages/", {
            method: "DELETE"
        }).then(function (res) {
            if (res.status == 404) {
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "No hay recursos que eliminar.";
            } else {
                highchartsGraphG10();
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "Se han eliminado todos los recursos correctamente.";
            }
        });
    }

    // G22 - og-basket-stats
    async function loadInitialDataOgBasketStats() {
        const res = await fetch("https://sos1920-10.herokuapp.com/api/v1/og-basket-stats/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            highchartsGraphG22();
            infoAlertStatus = res.status + " - " + res.statusText;
            infoAlertText = "Recursos cargados correctamente.";
        });
    }

    async function deleteAllOgBasketStats() {
        const res = await fetch("https://sos1920-10.herokuapp.com/api/v1/og-basket-stats/", {
            method: "DELETE"
        }).then(function (res) {
            if (res.status == 404) {
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "No hay recursos que eliminar.";
            } else {
                highchartsGraphG22();
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "Se han eliminado todos los recursos correctamente.";
            }
        });
    }

    // G24 - univregs-stats
    async function loadInitialDataUnivregsStats() {
        const res = await fetch("https://sos1920-24.herokuapp.com/api/v2/univregs-stats/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            highchartsGraphG24();
            infoAlertStatus = res.status + " - " + res.statusText;
            infoAlertText = "Recursos cargados correctamente.";
        });
    }

    async function deleteAllUnivregsStats() {
        const res = await fetch("https://sos1920-24.herokuapp.com/api/v2/univregs-stats/", {
            method: "DELETE"
        }).then(function (res) {
            if (res.status == 404) {
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "No hay recursos que eliminar.";
            } else {
                highchartsGraphG24();
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "Se han eliminado todos los recursos correctamente.";
            }
        });
    }

    // G26 - goalscorers
    async function loadInitialDataGoalscorers() {
        const res = await fetch("https://sos1920-26.herokuapp.com/api/v3/goalscorers/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            highchartsGraphG26();
            infoAlertStatus = res.status + " - " + res.statusText;
            infoAlertText = "Recursos cargados correctamente.";
        });
    }

    async function deleteAllGoalscorers() {
        const res = await fetch("https://sos1920-26.herokuapp.com/api/v3/goalscorers/", {
            method: "DELETE"
        }).then(function (res) {
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

    // G28 - ppas
    async function loadInitialDataPpas() {
        const res = await fetch("/api/v1/ppas/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            highchartsGraphG28();
            infoAlertStatus = res.status + " - " + res.statusText;
            infoAlertText = "Recursos cargados correctamente.";
        });
    }

    async function deleteAllPpas() {
        const res = await fetch("/api/v1/ppas/", {
            method: "DELETE"
        }).then(function (res) {
            if (res.status == 404) {
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "No hay recursos que eliminar.";
            } else {
                highchartsGraphG28();
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "Se han eliminado todos los recursos correctamente.";
            }
        });
    }

    // G30 - indice_de_masa_corporal
    async function loadInitialDataIndiceMasaCorporal() {
        const res = await fetch("https://sos1920-30.herokuapp.com/api/v3/indice_de_masa_corporal/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            highchartsGraphG30();
            infoAlertStatus = res.status + " - " + res.statusText;
            infoAlertText = "Recursos cargados correctamente.";
        });
    }

    async function deleteAllIndiceMasaCorporal() {
        const res = await fetch("https://sos1920-30.herokuapp.com/api/v3/indice_de_masa_corporal/", {
            method: "DELETE"
        }).then(function (res) {
            if (res.status == 404) {
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "No hay recursos que eliminar.";
            } else {
                highchartsGraphG30();
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "Se han eliminado todos los recursos correctamente.";
            }
        });
    }

    // EXT1
    async function loadInitialDataEXT1() {
        const res = await fetch("/api/2020-06-03/country/spain", {
            method: "GET"
        }).then(function (res) {
            highchartsGraphGEXT1();
            infoAlertStatus = res.status + " - " + res.statusText;
            infoAlertText = "Recursos cargados correctamente.";
        });
    }

    // EXT2
    async function loadInitialDataEXT2() {
        const res = await fetch("http://api.openweathermap.org/data/2.5/forecast?id=2510112&units=metric&APPID=fdaf5c96bb5721f801ea220253b0985c", {
            method: "GET"
        }).then(function (res) {
            highchartsGraphGEXT2();
            infoAlertStatus = res.status + " - " + res.statusText;
            infoAlertText = "Recursos cargados correctamente.";
        });
    }




    // Graphs
    async function highchartsGraphG1() {
        console.log("Fetching poverty-stats...");
        const data = await fetch("https://sos1920-01.herokuapp.com/api/v2/poverty-stats");
        let jsonData = await data.json();
        console.log(jsonData);
        var UK = jsonData.filter(function (x) {
            return x.country == "unitedKingdom" && parseInt(x.year) || x.country == "spain" && parseInt(x.year);
        }).map((dato) => {
            return { 'name': dato.country + ' - ' + dato.year, 'data': [parseInt(dato.poverty_ht), parseInt(dato.poverty_prp), parseInt(dato.poverty_pt)] }
        });

        Highcharts.chart('container1', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Índices de pobreza entre Reino Unido y España'
            },
            subtitle: {
                text: '(2017 - 2010)'
            },
            xAxis: {
                categories: ["Riesgo de Pobreza", "Umbral Persona", "Umbral Hogar"],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Miles'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: UK
        });
    }
    highchartsGraphG1();

    async function highchartsGraphG2() {
        console.log("Fetching rural-tourism-stats...");
        const data = await fetch("https://sos1920-02.herokuapp.com/api/v2/rural-tourism-stats");
        let jsonData = await data.json();
        console.log(jsonData);
        var cadiz = jsonData.filter(function (x) {
            return x.province && parseInt(x.year) == 2016;
        }).map((dato) => {
            return { 'name': dato.province, 'y': parseInt(dato.averagestay) }
        });

        Highcharts.chart('container2', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Estancia media de turistas en Andalucía'
            },
            subtitle: {
                text: '(2016)'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Estancia media',
                colorByPoint: true,
                data: cadiz
            }]
        });
    }
    highchartsGraphG2();

    async function highchartsGraphG5() {
        console.log("Fetching books-exports...");
        const data = await fetch("https://sos1920-05.herokuapp.com/api/v1/books-exports");
        let jsonData = await data.json();
        console.log(jsonData);

        var cadiz = jsonData.filter(function (x) {
            return x.country && parseInt(x.year) == 2015;
        }).map((dato) => {
            return { 'name': dato.country + " - " + dato.year, 'data': [parseInt(dato.exp_book), parseInt(dato.exp_editorial), parseInt(dato.exp_graphic_sector)] }
        });

        Highcharts.chart('container5', {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Comparativa de exportación de libros entre Mexico y Francia'
            },
            subtitle: {
                text: '(2015)'
            },
            xAxis: {
                categories: ['Libros', 'Editoriales', 'Sector Gráfico'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Miles'
                }
            },
            tooltip: {
                split: true,
                valueSuffix: ' millions'
            },
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },
            series: cadiz
        });
    }
    highchartsGraphG5();

    async function highchartsGraphG9() {
        console.log("Fetching oil-coal-nuclear-energy-consumption-stats...");
        const data = await fetch("https://sos1920-09.herokuapp.com/api/v3/oil-coal-nuclear-energy-consumption-stats");
        let jsonData = await data.json();
        console.log(jsonData);

        var renovable = jsonData.filter(function (x) {
            return x.country && parseInt(x.year) == 2017;
        }).map((dato) => {
            return { 'name': dato.country, 'data': [{ 'name': dato.country, 'value': dato["oil-consumption"] }] }
        });

        console.log(renovable)

        Highcharts.chart('container9', {
            chart: {
                type: 'packedbubble',
                height: '50%'
            },
            title: {
                text: 'Consumo de Gasolina por país'
            },
            subtitle: {
                text: '(2017)'
            },
            tooltip: {
                useHTML: true,
                pointFormat: '<b>{point.name}:</b> {point.value} Litros'
            },
            plotOptions: {
                packedbubble: {
                    minSize: '40%',
                    maxSize: '100%',
                    zMin: 0,
                    zMax: 1000,
                    layoutAlgorithm: {
                        gravitationalConstant: 0.05,
                        splitSeries: true,
                        seriesInteraction: false,
                        dragBetweenSeries: true,
                        parentNodeLimit: true
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}',
                        filter: {
                            property: 'y',
                            operator: '>',
                            value: 250
                        },
                        style: {
                            color: 'white',
                            textOutline: 'none',
                            fontWeight: 'normal'
                        }
                    }
                }
            },
            series: renovable
        });

    }
    highchartsGraphG9();

    async function highchartsGraphG10() {
        console.log("Fetching global-marriages...");
        const data = await fetch("https://sos1920-10.herokuapp.com/api/v3/global-marriages/");
        let jsonData = await data.json();
        console.log(jsonData);

        var marriages = jsonData.filter(function (x) {
            return x.country && parseInt(x.year) == 2018;
        }).map((dato) => {
            return { 'name': dato.country, 'data': [{ 'name': "Mujeres - " + dato.avg_wm + " y Hombres - " + dato.avg_m, 'value': dato.marriages }] }
        });

        Highcharts.chart('container10', {
            chart: {
                type: 'packedbubble',
                height: '100%'
            },
            title: {
                text: 'Matrimonios registrados por país y media de edad entre géneros'
            },
            subtitle: {
                text: '(2018)'
            },
            tooltip: {
                useHTML: true,
            },
            plotOptions: {
                packedbubble: {
                    minSize: '40%',
                    maxSize: '100%',
                    zMin: 0,
                    zMax: 1000,
                    layoutAlgorithm: {
                        splitSeries: false,
                        gravitationalConstant: 0.02
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}',
                        filter: {
                            property: 'y',
                            operator: '>',
                            value: 250
                        },
                        style: {
                            color: 'black',
                            textOutline: 'none',
                            fontWeight: 'normal'
                        }
                    }
                }
            },
            series: marriages
        });

    }
    highchartsGraphG10();

    async function highchartsGraphG22() {
        console.log("Fetching og-basket-stats...");
        const data = await fetch("https://sos1920-10.herokuapp.com/api/v1/og-basket-stats/");
        let jsonData = await data.json();
        console.log(jsonData);

        var basket = jsonData.filter(function (x) {
            return x.country && parseInt(x.year);
        }).map((dato) => {
            return { 'name': dato.country + " - " + dato.year, 'data': [parseInt(dato.points), parseInt(dato.rebounds), parseInt(dato.threepoints)] }
        });

        Highcharts.chart('container22', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Ranking de puntuaciones de baloncesto por países'
            },
            subtitle: {
                text: '(2000 - 2016)'
            },
            xAxis: {
                categories: ['Puntos', 'Rebotes', 'Triples']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Puntos totales'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true
            },
            plotOptions: {
                column: {
                    stacking: 'percent'
                }
            },
            series: basket
        });
    }
    highchartsGraphG22();

    async function highchartsGraphG24() {
        console.log("Fetching univregs-stats...");
        const data = await fetch("https://sos1920-24.herokuapp.com/api/v2/univregs-stats/");
        let jsonData = await data.json();
        console.log(jsonData);

        var univ = jsonData.filter(function (x) {
            return x.community && parseInt(x.year);
        }).map((dato) => {
            return { 'name': dato.community, 'y': parseInt(dato.univreg_offer) }
        });

        Highcharts.chart('container24', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Oferta de plazas universitarias en España'
            },
            subtitle: {
                text: '(2018)'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: 'Oferta',
                colorByPoint: true,
                data: univ
            }]
        });
    }
    highchartsGraphG24();

    async function highchartsGraphG26() {
        console.log("Fetching goalscorers...");
        const data = await fetch("https://sos1920-26.herokuapp.com/api/v3/goalscorers/");
        let jsonData = await data.json();
        console.log(jsonData);

        var goals = jsonData.filter(function (x) {
            return x.country && parseInt(x.debut);
        }).map((dato) => {
            return { 'name': dato.name + " - " + dato.debut, 'data': [parseInt(dato.goals), parseInt(dato.matches)] }
        });

        Highcharts.chart('container26', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Estadísticas mejores goleadores (1993 - 2011) '
            },
            xAxis: {
                categories: ["Goles", "Partidos"]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total goles y partidos'
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
            series: goals
        });
    }
    highchartsGraphG26();

    async function highchartsGraphG28() {
        console.log("Fetching ppas...");
        const data = await fetch("/api/v1/ppas");
        let jsonData = await data.json();
        console.log(jsonData);

        var ppas = jsonData.filter(function (x) {
            return x.country && parseInt(x.year);
        }).map((dato) => {
            return { 'name': dato.country, 'data': [parseInt(dato.aas_gross), parseInt(dato.aas_net), parseInt(dato.ppa_per_capita)] }
        });

        console.log(ppas)

        Highcharts.chart('container28', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Paridad de poder adquisitivo (PPA)'
            },
            subtitle: {
                text: '(2017)'
            },
            xAxis: {
                categories: ["Bruto", "Neto", "Paridad"],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'PPA'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} PPAs</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: ppas
        });
    }
    highchartsGraphG28();

    async function highchartsGraphG30() {
        console.log("Fetching indice-de-masa-corporal...");
        const data = await fetch("https://sos1920-30.herokuapp.com/api/v3/indice_de_masa_corporal");
        let jsonData = await data.json();
        console.log(jsonData);

        var mass = jsonData.filter(function (x) {
            return x.place && parseInt(x.year);
        }).map((dato) => {
            return { 'name': dato.place + " - " + dato.year, 'y': parseFloat(dato.indice_de_masa_corporal), 'z': parseFloat(dato.tasa_obesidad) }
        });

        Highcharts.chart('container30', {
            chart: {
                type: 'variablepie'
            },
            title: {
                text: 'Estimaciones futuras entre la obesidad e IMC de países desarrollados'
            },
            subtitle: {
                text: '(2019 - 2021)'
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                    'IMC: <b>{point.y}</b><br/>' +
                    'Tasa de obesidad: <b>{point.z}</b><br/>'
            },
            series: [{
                minPointSize: 10,
                innerSize: '20%',
                zMin: 0,
                name: 'countries',
                data: mass
            }]
        });

    }
    highchartsGraphG30();

    async function highchartsGraphGEXT1() {
        console.log("Fetching EXT1...");
        const data = await fetch("/api/2020-06-03/country/spain");
        let jsonData = await data.json();
        console.log(jsonData);

        var data1 = jsonData["total"]["today_confirmed"]
        var data2 = jsonData["total"]["today_deaths"]
        var data3 = jsonData["total"]["yesterday_confirmed"]
        var data4 = jsonData["total"]["yesterday_deaths"]

        console.log(jsonData["total"])

        Highcharts.chart('containerExt1', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Información del COVID-19 en España'
            },
            subtitle: {
                text: '(Entre 02-06-2020 y 03-06-2020)'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: 'COVID-19',
                colorByPoint: true,
                data: [{
                    name: 'Confirmados hoy',
                    y: data1,
                }, {
                    name: 'Muertos hoy',
                    y: data2
                }, {
                    name: 'Confirmados ayer',
                    y: data3
                }, {
                    name: 'Muertos ayer',
                    y: data4
                }]
            }]
        });
    }
    highchartsGraphGEXT1();

    async function highchartsGraphGEXT2() {
        console.log("Fetching EXT2...");
        const data = await fetch("http://api.openweathermap.org/data/2.5/forecast?id=2510112&units=metric&APPID=fdaf5c96bb5721f801ea220253b0985c");
        let jsonData = await data.json();
        console.log(jsonData);

        var data1 = jsonData["list"][0]["main"]["temp"]
        var data2 = jsonData["list"][0]["main"]["temp_max"]
        var data3 = jsonData["list"][0]["main"]["temp_min"]

        Highcharts.chart('containerExt2', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Temperatura en Ubrique (Cádiz)'
            },
            subtitle: {
                text: '(Hoy)'
            },
            xAxis: {
                categories: [, , ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Temperatura (ºC)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} ªC</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: "Temperatura actual",
                data: [data1]

            }, {
                name: "Temperatura Máxima",
                data: [data2]

            }, {
                name: "Temperatura Mínima",
                data: [data3]

            }]
        });
    }

    highchartsGraphGEXT2();

</script>

<main>
    <h2>Integraciones - Accidentes de Tráfico</h2>
    <br>
    <div class="row">
        <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">

                <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list"
                    href="#list-01" role="tab" aria-controls="home">Integración con Grupo 1 <br>(poverty-stats)</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-02" role="tab" aria-controls="profile">Integración con Grupo 2
                    <br>(rural-tourism-stats)</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-05" role="tab" aria-controls="profile">Integración con Grupo 5 <br>(books-exports)</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-09" role="tab" aria-controls="profile">Integración con Grupo 9
                    <br>(oil-coal-nuclear-energy-consumption-stats)</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-10" role="tab" aria-controls="profile">Integración con Grupo 10
                    <br>(global-marriages)</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-22" role="tab" aria-controls="profile">Integración con Grupo 22
                    <br>(og-basket-stats)</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-24" role="tab" aria-controls="profile">Integración con Grupo 24 <br>(univregs-stats)</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-26" role="tab" aria-controls="profile">Integración con Grupo 26 <br>(goalscorers)</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-28" role="tab" aria-controls="profile">Integración con Grupo 28 - Usando
                    Proxy<br>(ppas)</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-30" role="tab" aria-controls="profile">Integración con Grupo 30
                    <br>(indice_de_masa_corporal)</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-ext1" role="tab" aria-controls="profile">API Externa <br>(COVID-19)</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-ext2" role="tab" aria-controls="profile">API Externa <br>(OpenWeatherMap)</a>

            </div>
        </div>
        <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="list-01" role="tabpanel" aria-labelledby="list-home-list">
                    <h2>Integración con Grupo 1 (poverty-stats)</h2>
                    <h3>Acciones</h3>
                    {#if infoAlertStatus}
                    <Alert>
                        <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
                        {infoAlertText}
                    </Alert>
                    {/if}
                    <p><a href="/"><Button color="info">Volver</Button></a></p>
                    <p><a href="https://sos1920-01.herokuapp.com/"><Button color="primary">Página Web</Button></a></p>
                    <p><Button color="success" on:click="{loadInitialDataPovertyStats}">Cargar Datos Iniciales</Button></p>
                    <p><Button color="danger" on:click="{deleteAllPovertyStats}">Elimina Todos los Recursos</Button></p>
                    <figure class="highcharts-figure">
                        <div id="container1"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-02" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>Integración con Grupo 2 (rural-tourism-stats)</h2>
                    <h3>Acciones</h3>
                    {#if infoAlertStatus}
                    <Alert>
                        <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
                        {infoAlertText}
                    </Alert>
                    {/if}
                    <p><a href="/"><Button color="info">Volver</Button></a></p>
                    <p><a href="https://sos1920-02.herokuapp.com/"><Button color="primary">Página Web</Button></a></p>
                    <p><Button color="success" on:click="{loadInitialDataRuralTourismStats}">Cargar Datos Iniciales</Button></p>
                    <p><Button color="danger" on:click="{deleteAllRuralTourismStats}">Elimina Todos los Recursos</Button></p>
                    <figure class="highcharts-figure">
                        <div id="container2"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-05" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>Integración con Grupo 5 (books-exports)</h2>
                    <h3>Acciones</h3>
                    {#if infoAlertStatus}
                    <Alert>
                        <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
                        {infoAlertText}
                    </Alert>
                    {/if}
                    <p><a href="/"><Button color="info">Volver</Button></a></p>
                    <p><a href="https://sos1920-05.herokuapp.com/"><Button color="primary">Página Web</Button></a></p>
                    <p><Button color="success" on:click="{loadInitialDataBooksExports}">Cargar Datos Iniciales</Button></p>
                    <p><Button color="danger" on:click="{deleteAllBooksExports}">Elimina Todos los Recursos</Button></p>
                    <figure class="highcharts-figure">
                        <div id="container5"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-09" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>Integración con Grupo 9 (oil-coal-nuclear-energy-consumption-stats)</h2>
                    <h3>Acciones</h3>
                    {#if infoAlertStatus}
                    <Alert>
                        <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
                        {infoAlertText}
                    </Alert>
                    {/if}
                    <p><a href="/"><Button color="info">Volver</Button></a></p>
                    <p><a href="https://sos1920-09.herokuapp.com/"><Button color="primary">Página Web</Button></a></p>
                    <p><Button color="success" on:click="{loadInitialDataRenovableEnergy}">Cargar Datos Iniciales</Button></p>
                    <p><Button color="danger" on:click="{deleteAllRenovableEnergy}">Elimina Todos los Recursos</Button></p>
                    <figure class="highcharts-figure">
                        <div id="container9"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-10" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>Integración con Grupo 10 (global-marriages)</h2>
                    <h3>Acciones</h3>
                    {#if infoAlertStatus}
                    <Alert>
                        <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
                        {infoAlertText}
                    </Alert>
                    {/if}
                    <p><a href="/"><Button color="info">Volver</Button></a></p>
                    <p><a href="https://sos1920-10.herokuapp.com/"><Button color="primary">Página Web</Button></a></p>
                    <p><Button color="success" on:click="{loadInitialDataGlobalMarriages}">Cargar Datos Iniciales</Button></p>
                    <p><Button color="danger" on:click="{deleteAllGlobalMarriages}">Elimina Todos los Recursos</Button></p>
                    <figure class="highcharts-figure">
                        <div id="container10"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-22" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>Integración con Grupo 22 (og-basket-stats)</h2>
                    <h3>Acciones</h3>
                    {#if infoAlertStatus}
                    <Alert>
                        <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
                        {infoAlertText}
                    </Alert>
                    {/if}
                    <p><a href="/"><Button color="info">Volver</Button></a></p>
                    <p><a href="https://sos1920-22.herokuapp.com/"><Button color="primary">Página Web</Button></a></p>
                    <p><Button color="success" on:click="{loadInitialDataOgBasketStats}">Cargar Datos Iniciales</Button></p>
                    <p><Button color="danger" on:click="{deleteAllOgBasketStats}">Elimina Todos los Recursos</Button></p>
                    <figure class="highcharts-figure">
                        <div id="container22"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-24" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>Integración con Grupo 24 (univregs-stats)</h2>
                    <h3>Acciones</h3>
                    {#if infoAlertStatus}
                    <Alert>
                        <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
                        {infoAlertText}
                    </Alert>
                    {/if}
                    <p><a href="/"><Button color="info">Volver</Button></a></p>
                    <p><a href="https://sos1920-24.herokuapp.com/"><Button color="primary">Página Web</Button></a></p>
                    <p><Button color="success" on:click="{loadInitialDataUnivregsStats}">Cargar Datos Iniciales</Button></p>
                    <p><Button color="danger" on:click="{deleteAllUnivregsStats}">Elimina Todos los Recursos</Button></p>
                    <figure class="highcharts-figure">
                        <div id="container24"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-26" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>Integración con Grupo 26 (goalscorers)</h2>
                    <h3>Acciones</h3>
                    {#if infoAlertStatus}
                    <Alert>
                        <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
                        {infoAlertText}
                    </Alert>
                    {/if}
                    <p><a href="/"><Button color="info">Volver</Button></a></p>
                    <p><a href="https://sos1920-26.herokuapp.com/"><Button color="primary">Página Web</Button></a></p>
                    <p><Button color="success" on:click="{loadInitialDataGoalscorers}">Cargar Datos Iniciales</Button></p>
                    <p><Button color="danger" on:click="{deleteAllGoalscorers}">Elimina Todos los Recursos</Button></p>
                    <figure class="highcharts-figure">
                        <div id="container26"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-28" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>Integración con Grupo 28 (ppas)</h2>
                    <h3>Acciones</h3>
                    {#if infoAlertStatus}
                    <Alert>
                        <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
                        {infoAlertText}
                    </Alert>
                    {/if}
                    <p><a href="/"><Button color="info">Volver</Button></a></p>
                    <p><a href="https://sos1920-28.herokuapp.com/"><Button color="primary">Página Web</Button></a></p>
                    <p><Button color="success" on:click="{loadInitialDataPpas}">Cargar Datos Iniciales</Button></p>
                    <p><Button color="danger" on:click="{deleteAllPpas}">Elimina Todos los Recursos</Button></p>
                    <figure class="highcharts-figure">
                        <div id="container28"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-30" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>Integración con Grupo 30 (indice_de_masa_corporal)</h2>
                    <h3>Acciones</h3>
                    {#if infoAlertStatus}
                    <Alert>
                        <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
                        {infoAlertText}
                    </Alert>
                    {/if}
                    <p><a href="/"><Button color="info">Volver</Button></a></p>
                    <p><a href="https://sos1920-30.herokuapp.com/"><Button color="primary">Página Web</Button></a></p>
                    <p><Button color="success" on:click="{loadInitialDataIndiceMasaCorporal}">Cargar Datos Iniciales</Button></p>
                    <p><Button color="danger" on:click="{deleteAllIndiceMasaCorporal}">Elimina Todos los Recursos</Button></p>
                    <figure class="highcharts-figure">
                        <div id="container30"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-ext1" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>API Externa (COVID-19)</h2>
                    <h3>Acciones</h3>
                    {#if infoAlertStatus}
                    <Alert>
                        <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
                        {infoAlertText}
                    </Alert>
                    {/if}
                    <p><a href="/"><Button color="info">Volver</Button></a></p>
                    <p><a href="https://covid19tracking.narrativa.com/"><Button color="primary">Página Web</Button></a></p>
                    <p><Button color="success" on:click="{loadInitialDataEXT1}">Cargar Datos Iniciales</Button></p>
                    <figure class="highcharts-figure">
                        <div id="containerExt1"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-ext2" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>API Externa (OpenWeatherMap)</h2>
                    <h3>Acciones</h3>
                    {#if infoAlertStatus}
                    <Alert>
                        <h4 class="alert-heading text-capitalize">{infoAlertStatus}</h4>
                        {infoAlertText}
                    </Alert>
                    {/if}
                    <p><a href="/"><Button color="info">Volver</Button></a></p>
                    <p><a href="https://home.openweathermap.org/"><Button color="primary">Página Web</Button></a></p>
                    <p><Button color="success" on:click="{loadInitialDataEXT2}">Cargar Datos Iniciales</Button></p>
                    <figure class="highcharts-figure">
                        <div id="containerExt2"></div>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</main>