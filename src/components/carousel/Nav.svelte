<script lang="ts">
  import { noop } from 'lodash';
  export let onClick = noop;
  export let count = 3;
</script>

<div class="navs">
  {#each Array(count).fill(0).map((_, idx) => idx) as i}
    <div class="nav" on:click|stopPropagation={() => onClick(i)}></div>
  {/each}
</div>

<style> .navs {
  position: absolute;
  display: flex;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.nav {
  cursor: pointer;
  margin: 10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #ccc;
}
.nav:hover {
  background-color: #aaa;
}
</style>