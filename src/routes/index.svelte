<script>
  import { onMount } from "svelte";
  import { draw, fade, slide, scale } from "svelte/transition";
  import ChartLine from "../components/ChartLine";
  import ChartPie from "../components/ChartPie";
  import Loader from "../components/Loader";

  const baseURL = "https://api.covid19api.com/dayone/country/venezuela/status/";

  let data = undefined;
  let cases = {
    confirmed: [],
    recovered: [],
    deaths: []
  };
  let loading = false;

  const getAllCases = async () => {};

  const fetchData = async () => {
    const casesStatus = ["confirmed", "recovered", "deaths"];
    const promises = casesStatus.map(status =>
      fetch(`${baseURL}${status}/live`)
    );
    loading = true;
    Promise.all(promises)
      .then(res => {
        const responses = res.map(response => response.json());
        return Promise.all(responses);
      })
      .then(
        data => {
          cases = {
            confirmed: data[0],
            recovered: data[1],
            deaths: data[2]
          };
          loading = false;
        },
        error => {
          cases = new Error(error);
        }
      );
  };

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
        {cases}
        title="Todos los casos de COVID-19 en Venezuela de hoy" />
      <ChartLine
        {cases}
        title="Todos los casos desde el primer reporte COVID-19 en Venezuela" />
    </div>
  </main>
{/if}
