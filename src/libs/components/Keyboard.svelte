<script lang="ts">
  import { css } from "@emotion/css";
  import Key from "./Key.svelte";

  const BASE_NOTE = 45;
  const KEYS = 33;

  $: mapList = Array.from({ length: KEYS }, () => true);

  const styleWrapper = css`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1em 0;
    perspective: 100px;
    perspective-origin: bottom;
    transform-style: preserve-3d;
    transform: rotateX(45deg);
  `;
</script>

<div class={styleWrapper}>
  {#each mapList as _, index (index)}
    <Key midiNote={BASE_NOTE + index} />
  {/each}
</div>
