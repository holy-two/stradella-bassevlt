<script lang="ts">
  import { css, cx } from "@emotion/css";
  import {
    NotesContainer,
    type NotesContainerConnectorOwnProps,
    buildTrigger,
    buildRelease,
  } from "../containers/Notes";

  export let midiNote: NotesContainerConnectorOwnProps["midiNote"] = undefined;
  export let midiNotes: NotesContainerConnectorOwnProps["midiNotes"] =
    undefined;

  const styleWrapper = css`
    width: 1em;
    height: 1em;
    border-radius: 1em;
    border: 1px solid rgb(109, 109, 109);
    transition:
      backgroun-color 0.5s,
      transform 0.1s;
    margin: 0 0.5em;
    cursor: pointer;
    box-shadow: 1px 3px 5px black;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
    user-select: none;

    &.isOn,
    &.isOn:hover {
      transform: scale(0.95) translateY(4px);
    }
  `;

  const styleInner = css`
    width: 100%;
    height: 100%;
    border-radius: 1em;
    background-color: white;
    box-shadow: inset 0 0 1em #000000;

    &.middleC {
      background-color: black;
      box-shadow: inset 0 0 1em #ffffff;
    }
  `;

  $: middleC = midiNote === 48;
</script>

<NotesContainer let:isOn let:releaseNote let:triggerNote {midiNote} {midiNotes}>
  <div
    class={cx(styleWrapper, { isOn })}
    on:pointerdown={buildTrigger(triggerNote, midiNote, midiNotes)}
    on:pointerup={buildRelease(releaseNote, midiNote, midiNotes)}
    on:pointerleave={buildRelease(releaseNote, midiNote, midiNotes)}
  >
    <div
      class={cx(styleInner, {
        middleC,
      })}
    />
  </div>
</NotesContainer>
