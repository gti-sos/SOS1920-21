<script>
    import { Button } from 'sveltestrap';
</script>

<main>
    <h2>Gráfica (Apexcharts)</h2>
    <h3>Acciones</h3>
    <p><a href="/"><Button color="info">Volver a Inicio</Button></a></p>
    <p><a href="javascript:location.reload(true)"><Button color="success">Recargar</Button></a></p>

    <figure class="highcharts-figure">
        <div id="container"></div>
    </figure>
</main>