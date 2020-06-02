<script>
    import { Button, Alert } from 'sveltestrap';

    // Alerts
    let infoAlertStatus = "";
    let infoAlertText = "";

    // poverty-stats
    async function loadInitialDataPovertyStats() {
        const res = await fetch("https://sos1920-01.herokuapp.com/api/v2/poverty-stats/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            higchartsGraphG1();
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
                higchartsGraphG1();
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "Se han eliminado todos los recursos correctamente.";
            }
        });
    }

    // rural-tourism-stats
    async function loadInitialDataRuralTourismStats() {
        const res = await fetch("https://sos1920-02.herokuapp.com/api/v2/rural-tourism-stats/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            higchartsGraphG2();
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
                higchartsGraphG2();
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "Se han eliminado todos los recursos correctamente.";
            }
        });
    }

    // books-exports
    async function loadInitialDataBooksExports() {
        const res = await fetch("https://sos1920-05.herokuapp.com/api/v1/books-exports/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            higchartsGraphG3();
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
                higchartsGraphG3();
                infoAlertStatus = res.status + " - " + res.statusText;
                infoAlertText = "Se han eliminado todos los recursos correctamente.";
            }
        });
    }

    async function higchartsGraphG1() {
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
    higchartsGraphG1();

    async function higchartsGraphG2() {
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
    higchartsGraphG2();

    async function higchartsGraphG3() {
        console.log("Fetching books-exports...");
        const data = await fetch("https://sos1920-05.herokuapp.com/api/v1/books-exports");
        let jsonData = await data.json();
        console.log(jsonData);
        
        var cadiz = jsonData.filter(function (x) {
            return x.country && parseInt(x.year) == 2015 ;
        }).map((dato) => {
            return { 'name': dato.country + " - " + dato.year, 'data': [parseInt(dato.exp_book), parseInt(dato.exp_editorial), parseInt(dato.exp_graphic_sector)] }
        });

        // uk intaly portugal france mexico
        console.log(cadiz);

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
        higchartsGraphG3();
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
                    href="#list-28" role="tab" aria-controls="profile">Integración con Grupo 28 <br>(ppas)</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-30" role="tab" aria-controls="profile">Integración con Grupo 30
                    <br>(indice_de_masa_corporal)</a>
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
                    <p><a href="/"><Button color="info">Volver a Inicio</Button></a></p>
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
                    <p><a href="/"><Button color="info">Volver a Inicio</Button></a></p>
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
                    <p><a href="/"><Button color="info">Volver a Inicio</Button></a></p>
                    <p><Button color="success" on:click="{loadInitialDataBooksExports}">Cargar Datos Iniciales</Button></p>
                    <p><Button color="danger" on:click="{deleteAllBooksExports}">Elimina Todos los Recursos</Button></p>
                    <figure class="highcharts-figure">
                        <div id="container5"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-09" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>Integración con Grupo 9 (oil-coal-nuclear-energy-consumption-stats)</h2>
                    <figure class="highcharts-figure">
                        <div id="container9"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-10" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>Integración con Grupo 10 (global-marriages)</h2>
                    <figure class="highcharts-figure">
                        <div id="container10"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-22" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>Integración con Grupo 22 (og-basket-stats)</h2>
                    <figure class="highcharts-figure">
                        <div id="container22"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-24" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>Integración con Grupo 24 (univregs-stats)</h2>
                    <figure class="highcharts-figure">
                        <div id="container24"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-26" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>Integración con Grupo 26 (goalscorers)</h2>
                    <figure class="highcharts-figure">
                        <div id="container26"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-28" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>Integración con Grupo 28 (ppas)</h2>
                    <figure class="highcharts-figure">
                        <div id="container28"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-30" role="tabpanel" aria-labelledby="list-profile-list">
                    <h2>Integración con Grupo 30 (indice_de_masa_corporal)</h2>
                    <figure class="highcharts-figure">
                        <div id="container30"></div>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</main>