import { get, writable } from "svelte/store";
import { NOTE_OFF, NOTE_ON } from "./actionTypes/notes";
import createActionEffect from "./middleware/actionEffect";

export const allNotes = writable([] as boolean[])

export function useAllNotesActions() {
  const actionEffect = createActionEffect()

  const noteOn = (midiNote: number) => {
    allNotes.update(notes => {
      notes[midiNote] = true
      return notes
    })
    actionEffect({
      type: NOTE_ON,
      payload: {
        midiNote
      }
    })
  }

  const noteOff = (midiNote: number) => {
    allNotes.update(notes => {
      notes[midiNote] = false
      return notes
    })
    actionEffect({
      type: NOTE_OFF,
      payload: {
        midiNote
      }
    })
  }

  return {
    noteOn, noteOff
  }
}

export function useAllNoteSelector() {

  const isNoteOn = (noteNumber: number) => {
    const notes = get(allNotes)
    return !!notes[noteNumber]
  }

  return {
    isNoteOn
  }
}
