<script>
    import { Button, Alert } from 'sveltestrap';

    // Alerts
    let infoAlertStatus = "";
    let infoAlertText = "";

    function refreshPage() {
        window.location.reload();
    }

    async function loadInitialData() {
        const res = await fetch("https://sos1920-01.herokuapp.com/api/v2/poverty-stats/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            higchartsGraphG1();
            infoAlertStatus = res.status + " - " + res.statusText;
            infoAlertText = "Recursos cargados correctamente.";
        });
    }

    async function deleteAllTrafficInjuries() {
        const res = await fetch("/api/v2/traffic-injuries", {
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

    async function higchartsGraphG1() {
        console.log("Fetching traffic-injuries...");
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
</script>

<main>
    <h2>Integraciones - Accidentes de Tráfico</h2>
    <br>
    <div class="row">
        <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">

                <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list"
                    href="#list-01" role="tab" aria-controls="home">Integración con Grupo 1 <br>poverty-stats</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-02" role="tab" aria-controls="profile">Integración con Grupo 2
                    <br>rural-tourism-stats</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-05" role="tab" aria-controls="profile">Integración con Grupo 5 <br>books-exports</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-09" role="tab" aria-controls="profile">Integración con Grupo 9
                    <br>oil-coal-nuclear-energy-consumption-stats</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-10" role="tab" aria-controls="profile">Integración con Grupo 10 <br>global-marriages</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-22" role="tab" aria-controls="profile">Integración con Grupo 22 <br>og-basket-stats</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-24" role="tab" aria-controls="profile">Integración con Grupo 24 <br>univregs-stats</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-26" role="tab" aria-controls="profile">Integración con Grupo 26 <br>goalscorers</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-28" role="tab" aria-controls="profile">Integración con Grupo 28 <br>ppas</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                    href="#list-30" role="tab" aria-controls="profile">Integración con Grupo 30
                    <br>indice_de_masa_corporal</a>
            </div>
        </div>
        <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="list-01" role="tabpanel" aria-labelledby="list-home-list">
                    <figure class="highcharts-figure">
                        <div id="container1"></div>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-02" role="tabpanel" aria-labelledby="list-profile-list">
                    <figure class="highcharts-figure">
                        <div id="container2"></div>
                        <p class="highcharts-description">
                            Descripcion 2
                        </p>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-05" role="tabpanel" aria-labelledby="list-profile-list">
                    <figure class="highcharts-figure">
                        <div id="container5"></div>
                        <p class="highcharts-description">
                            Descripcion 5
                        </p>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-09" role="tabpanel" aria-labelledby="list-profile-list">
                    <figure class="highcharts-figure">
                        <div id="container9"></div>
                        <p class="highcharts-description">
                            Descripcion 9
                        </p>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-10" role="tabpanel" aria-labelledby="list-profile-list">
                    <figure class="highcharts-figure">
                        <div id="container10"></div>
                        <p class="highcharts-description">
                            Descripcion 10
                        </p>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-22" role="tabpanel" aria-labelledby="list-profile-list">
                    <figure class="highcharts-figure">
                        <div id="container22"></div>
                        <p class="highcharts-description">
                            Descripcion 22
                        </p>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-24" role="tabpanel" aria-labelledby="list-profile-list">
                    <figure class="highcharts-figure">
                        <div id="container24"></div>
                        <p class="highcharts-description">
                            Descripcion 24
                        </p>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-26" role="tabpanel" aria-labelledby="list-profile-list">
                    <figure class="highcharts-figure">
                        <div id="container26"></div>
                        <p class="highcharts-description">
                            Descripcion 26
                        </p>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-28" role="tabpanel" aria-labelledby="list-profile-list">
                    <figure class="highcharts-figure">
                        <div id="container28"></div>
                        <p class="highcharts-description">
                            Descripcion 28
                        </p>
                    </figure>
                </div>
                <div class="tab-pane fade" id="list-30" role="tabpanel" aria-labelledby="list-profile-list">
                    <figure class="highcharts-figure">
                        <div id="container30"></div>
                        <p class="highcharts-description">
                            Descripcion 30
                        </p>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</main>