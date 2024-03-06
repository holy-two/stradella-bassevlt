<script lang="ts">
  import { css } from "@emotion/css";
  import Button from "./Button.svelte";
  import ButtonRow from "./ButtonRow.svelte";

  const transpose = (amount: number) => (note: number) => note + amount;
  const transformRootToMajorTriad = (note: number) => [
    note,
    note + 4,
    note + 7,
  ];
  const transformRootToMinorTriad = (note: number) => [
    note,
    note + 3,
    note + 7,
  ];
  const transformRootTo7th = (note: number) => [note + 10, note + 4, note + 7]; // 7th on the stradella bass ommits the root
  const transformRootToDiminshed = (note: number) => [
    note + 3,
    note + 6,
    note + 9,
  ]; // Diminished on the stradella bass also ommits the root

  const BASS_ROW_NOTES = [
    51, // Eb3
    46, // Bb2
    53, // F3
    48, // C3
    55, // G3
    50, // D3
    57, // A3
    52, // E3
  ];

  // The counter bass in a stradella system is the major third above the root
  const COUNTER_BASS_ROW_NOTES = BASS_ROW_NOTES.map(transpose(4));
  // All the chord rows are one octave up from the bass row
  const MAJOR_CHORD_ROW_NOTES = BASS_ROW_NOTES.map(transpose(12)).map(
    transformRootToMajorTriad
  );
  const MINOR_CHORD_ROW_NOTES = BASS_ROW_NOTES.map(transpose(12)).map(
    transformRootToMinorTriad
  );
  const SEVENTH_CHORD_ROW_NOTES = BASS_ROW_NOTES.map(transpose(12)).map(
    transformRootTo7th
  );
  const DIMINSHED_CHORD_ROW_NOTES = BASS_ROW_NOTES.map(transpose(12)).map(
    transformRootToDiminshed
  );

  const styleWrapper = css`
    @keyframes bassEnter {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    background-color: red;
    animation-name: bassEnter;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: both;

    & > *:nth-child(1) {
      padding-left: 1em;
    }

    & > *:nth-child(2) {
      padding-left: 2em;
    }

    & > *:nth-child(3) {
      padding-left: 3em;
    }

    & > *:nth-child(4) {
      padding-left: 4em;
    }

    & > *:nth-child(5) {
      padding-left: 5em;
    }

    & > *:nth-child(6) {
      padding-left: 6em;
    }
  `;
</script>

<div class={styleWrapper}>
  <ButtonRow label="Counter Bass">
    {#each COUNTER_BASS_ROW_NOTES as midiNote (midiNote)}
      <Button {midiNote} />
    {/each}
  </ButtonRow>
  <ButtonRow label="Bass">
    {#each BASS_ROW_NOTES as midiNote (midiNote)}
      <Button {midiNote} />
    {/each}
  </ButtonRow>
  <ButtonRow label="Major">
    {#each MAJOR_CHORD_ROW_NOTES as midiNotes, index (index)}
      <Button {midiNotes} />
    {/each}
  </ButtonRow>
  <ButtonRow label="Minor">
    {#each MINOR_CHORD_ROW_NOTES as midiNotes, index (index)}
      <Button {midiNotes} />
    {/each}
  </ButtonRow>
  <ButtonRow label="Seventh">
    {#each SEVENTH_CHORD_ROW_NOTES as midiNotes, index (index)}
      <Button {midiNotes} />
    {/each}
  </ButtonRow>
  <ButtonRow label="Diminished">
    {#each DIMINSHED_CHORD_ROW_NOTES as midiNotes, index (index)}
      <Button {midiNotes} />
    {/each}
  </ButtonRow>
</div>
