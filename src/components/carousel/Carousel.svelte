<script lang="ts">
  import Nav from './Nav.svelte'
  import type { ImageProps } from './types'
  import p1 from '../../assets/p1.jpg'
  import p2 from '../../assets/p2.jpg'
  import p3 from '../../assets/p3.jpg'

  export let images: Array<ImageProps|string> = [p1, p2, p3]
  export let current = 0

  function clickNav(i) {
    current = i
  }
</script>



<div class="carousel">
  {#each images as image, i}
    <img class={i === current ? '' : 'hidden'} src={typeof image === 'string' ? image : image.url} alt={typeof image === 'string' ? `carousel ${i}` : image.alt}>
  {/each}
  
  <Nav count={images.length} onClick={clickNav} />
</div>

<style>
  .carousel {
    height: 100%;
    width: 100%;
    position: relative;
    text-align: center;
    overflow: hidden;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    height: 100%;
    width: 100%;
    transition: 0.8s opacity;
  }

  img.hidden {
    opacity: 0;
    animation: fade-out 1.5s ease 1;
  }

  @keyframes fade-out {
    100% {
      transform: rotate(45deg) translateX(150%);
    }
  }
</style>