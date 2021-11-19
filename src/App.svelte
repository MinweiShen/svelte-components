<script lang="ts">
  import Carousel from "./components/carousel/Carousel.svelte";
  import Reveal from './components/Reveal/index.svelte';
</script>

<main>
  <Reveal />
  <section class="carousel">
    <p class="slogon left-slogon reveal reveal-from-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, aut cum. Amet ut dignissimos optio incidunt debitis ipsam omnis ullam nesciunt, recusandae eius quisquam quis perspiciatis aut quae fuga? Sit.</p>
    <p class="slogon right-slogon reveal reveal-from-right">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, aut cum. Amet ut dignissimos optio incidunt debitis ipsam omnis ullam nesciunt, recusandae eius quisquam quis perspiciatis aut quae fuga? Sit.</p>
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
    position: relative;
  }

  .slogon {
    width: 400px;
    position: absolute;
    color: white;
    z-index: 10;
    font-size: 24px;
  }

  .left-slogon {
    top: 50%;
    left: 40px;
  }

  .right-slogon {
    right: 40px;
    top: 30%;
  }
</style>
