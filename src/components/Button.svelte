
<script lang="ts">
  import classnames from 'classnames';

  export let primary = false;
  export let hoverAnimation = false;

  const classes = classnames({
    primary,
    "hover-animation": hoverAnimation,
  })
</script>

<button class="{classes}"><slot></slot></button>

<style>
  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    padding: 8px 24px;
    font-size: 24px;
    color: white;
    border-radius: 4px;
    transition: 0.3s all;
  }

  .primary {
    background-color: var(--primary-color);
  }

  .hover-animation:hover {
    transform: translateY(-8px) scale(1.1);
  }
  
</style>