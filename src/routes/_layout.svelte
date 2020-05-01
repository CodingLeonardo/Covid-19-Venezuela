<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  export let segment;
</script>

<style>
  main {
    width: 100%;
  }
</style>

<Header {segment} />

<main>
  <slot />
</main>

<Footer />
