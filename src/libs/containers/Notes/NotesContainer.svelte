<script lang="ts">
  import type { NotesContainerConnectorProvidProps,NotesContainerConnectorOwnProps } from ".";
  import { useAllNoteSelector, useAllNotesActions } from "../../store";

  export let midiNote: NotesContainerConnectorOwnProps['midiNote'];
  export let midiNotes: NotesContainerConnectorOwnProps['midiNotes'];

  const { isNoteOn } = useAllNoteSelector();

  const { noteOff, noteOn } = useAllNotesActions();

  $: isOn = Array.isArray(midiNotes)
    ? midiNotes.every((midiNote) => isNoteOn(midiNote))
    : isNoteOn(midiNote!);

  const triggerNote = (midiNote: number) => {
    noteOn(midiNote);
  };

  const releaseNote = (midiNote: number) => {
    noteOff(midiNote);
  };

  $: providProps = {
    isOn,
    triggerNote,
    releaseNote,
  } as NotesContainerConnectorProvidProps;
</script>

<slot {...providProps} />
