<script>

</script>

<style>
  .Header {
    background: var(--tertiary-100);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5em;
  }
  .Header h1 {
    font-size: 3em;
  }

  .Header h1 span:nth-child(1) {
    color: var(--primary-400);
  }
  .Header h1 span:nth-child(2) {
    color: var(--tertiary-400);
  }
  .Header h1 span:nth-child(3) {
    color: var(--secondary-300);
  }
  @media screen and (min-width: 320px) {
    .Header h1 {
      font-size: 2em;
    }
  }
  @media screen and (min-width: 375px) {
    .Header h1 {
      font-size: 2.2em;
    }
  }
  @media screen and (min-width: 425px) {
    .Header h1 {
      font-size: 2.5em;
    }
  }
</style>

<div class="Header">
  <h1>
    COVID-19 -
    <span>Ven</span>
    <span>ezu</span>
    <span>ela</span>
  </h1>
</div>
