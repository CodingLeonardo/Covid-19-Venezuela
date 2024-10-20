<script>
  import { onMount } from "svelte";
  import { draw, fade, slide, scale } from "svelte/transition";
  import ChartLine from "../components/ChartLine";
  import ChartPie from "../components/ChartPie";
  import Loader from "../components/Loader";

  let timeline = [];
  let summary = {}
  let loading = false;

  const fetchData = async () => {
    loading = true;
    const promises = [fetch("https://covid19.patria.org.ve/api/v1/timeline"), fetch("https://covid19.patria.org.ve/api/v1/summary")]

    Promise.all(promises).then((res) => {
      const responses = res.map(response => response.json());
      return Promise.all(responses);
    }).then((data) => {
      timeline = data[0];
      summary = data[1];
      loading = false;
    }).catch((error) => {
      console.error(error);
      error = true;
    })
  }

  onMount(fetchData);
</script>

<style>
  main {
    padding: 1.5em 0;
    background: var(--primary-300);
    width: 100%;
  }
  .PageLoading {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--secondary-100);
    width: 100%;
    height: calc(100vh - 5em - 3.5em);
  }
</style>

<svelte:head>
  <title>COVID-19 - Venezuela</title>
  <meta
    name="description"
    content="Mantente informado sobre los nuevos casos de Covid-19 en Venezuela." />
</svelte:head>

{#if loading}
  <div class="PageLoading" transition:fade={{ x: -200, duration: 300 }}>
    <div class="container">
      <Loader />
    </div>
  </div>
{:else}
  <main in:scale={{ x: -200, duration: 500, delay: 100 }}>
    <div class="container">
      <ChartPie
        data={summary}
        title="Resumen de todos los casos hasta la fecha" />
      <ChartLine
        data={timeline}
        title="Todos los casos desde el primer reporte COVID-19 en Venezuela" />
    </div>
  </main>
{/if}
