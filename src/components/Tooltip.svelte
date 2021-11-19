<script lang="ts">
  export let content = 'This is a tooltip'
  let element: HTMLDivElement | undefined;
  let timer;

  function positionTooltip(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    const exist = document.getElementById('tooltip');
    const tooltip: HTMLElement = exist ? document.getElementById('tooltip') : (function() {
      const div = document.createElement('div');
      div.id = 'tooltip';
      div.innerHTML = content;
      document.body.appendChild(div);
      return div;
    })();

    tooltip.style.top = `${rect.y - 50}px`;
    tooltip.style.left = `${rect.x + rect.width / 2  - 70}px`;
    return tooltip;
  }

  function fadeOut() {
    let opacity = 1;
    const t = setInterval(function() {
      opacity -= 0.1;
      opacity = Math.max(0, opacity);
      document.getElementById('tooltip').style.opacity = opacity + '';
      if (opacity <= 0) {
        clearInterval(t);
      }
    }, 30);
  }

  function fadeInt() {
    let opacity = 0;
    const t = setInterval(function() {
      opacity += 0.1;
      opacity = Math.min(1, opacity);
      document.getElementById('tooltip').style.opacity = opacity + '';
      if (opacity >= 1) {
        clearInterval(t);
      }
    }, 30);
    return t;
  }

  function mouseEnter() {
    positionTooltip(element);
    timer = fadeInt();
  }

  function mouseLeave() {
    fadeOut();
    if (timer) {
      clearInterval(timer);
    }
  }
</script>

<div class="tooltip-wrapper" bind:this={element}
  on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}
>
  <slot></slot>
</div>


<style>
  :global(#tooltip) {
    z-index: 1000;
    position: fixed;
    color: white;
    height: 40px;
    line-height: 40px;
    width: 140px;
    text-align: center;
    background-color: rgba(111, 111, 111, 0.8);
  }
  .tooltip-wrapper {
    display: inline-block;
  }
</style>