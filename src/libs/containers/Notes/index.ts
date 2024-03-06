export interface NotesContainerConnectorOwnProps {
  midiNote: number | undefined
  midiNotes: number[] | undefined
}

export interface NotesContainerComponentTrigger {
  (midiNote: number): void
}

export interface NotesContainerConnectorProvidProps {
  isOn: boolean
  triggerNote: NotesContainerComponentTrigger
  releaseNote: NotesContainerComponentTrigger
}

export { default as NotesContainer } from "./NotesContainer.svelte"

export function buildTrigger(triggerNote: NotesContainerComponentTrigger, midiNote?: number, midiNotes?: number[]) {
  return () => {
    const isChord = !!midiNotes
    if (isChord) {
      midiNotes!.forEach((note) => triggerNote(note));
    } else {
      triggerNote(midiNote!);
    }
  };
};

export function buildRelease(releaseNote: NotesContainerComponentTrigger, midiNote?: number, midiNotes?: number[]) {
  return () => {
    const isChord = !!midiNotes
    if (isChord) {
      midiNotes!.forEach((note) => releaseNote(note));
    } else {
      releaseNote(midiNote!);
    }
  };
};
