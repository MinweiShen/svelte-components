<script lang="ts">
  import classnames from 'classnames';
  import { noop } from 'lodash';
  export let onClick = noop;
  export let count = 3;
  export let active = 0;
</script>

<div class="navs">
  {#each Array(count).fill(0).map((_, idx) => idx) as i}
    <div class={classnames('nav', {active: i === active})} on:click|stopPropagation={() => onClick(i)}></div>
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
  background-color: white;
}

.nav.active {
  background-color: #ccc;
}
.nav:hover {
  background-color: #aaa;
}
</style>