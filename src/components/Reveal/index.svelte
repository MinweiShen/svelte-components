<script lang="ts">
  import { throttle } from 'lodash'
  export let trigger = 'click';

  function reveal() {
    const elements = document.getElementsByClassName('reveal');
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.classList.remove('reveal-from-left', 'reveal-from-right')
    }
  }

  function clickReveal() {
    if (trigger !== 'click') return;
    console.log('click');
    reveal();
  }

  function scrollReveal() {
    if (trigger !== 'scroll') return;

    console.log('scroll');
    reveal();
  }
</script>

<svelte:body 
  on:click={clickReveal}
  on:scroll={throttle(scrollReveal, 200)}
/>

<style>
  :global(.reveal) {
    transition: 0.8s all;
  }

  :global(.reveal-from-left) {
    transform: translateX(-1000px);
  }

  :global(.reveal-from-right) {
    transform: translateX(1000px);
  }
</style>