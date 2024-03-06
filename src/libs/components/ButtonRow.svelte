<script lang="ts">
  import { css } from "@emotion/css";

  export let label: string;

  const styleWrapper = css`
    padding: 0.5em 10vw;
    background-color: #671120;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: center;
  `;

  const styleLabel = css`
    color: white;
    text-shadow: 1px 1px black;
    text-align: right;
    width: 20vw;
  `;

  const styleRowContainer = css`
    display: flex;
    justify-content: center;
  `;
</script>

<div class={styleWrapper}>
  <span class={styleLabel}>{label}</span>
  <div class={styleRowContainer}>
    <slot />
  </div>
</div>
