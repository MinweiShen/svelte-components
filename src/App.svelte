<script lang="ts">
  import Carousel from "./components/carousel/Carousel.svelte";
</script>

<main>
  <section class="carousel">
    <Carousel />
  </section>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .carousel {
    height: 100vh;
  }
</style>
