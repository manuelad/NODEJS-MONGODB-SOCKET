import { loadNotes,onNewNote,selectedNote,onUpdateNote } from './sockets.js';
import { onHandleSubmit,renderNotes,appendNote,fillForm,updateViewNote } from './ui.js';


onNewNote(appendNote)
loadNotes(renderNotes)
selectedNote(fillForm)
onUpdateNote(updateViewNote)


const noteForm = document.querySelector('#noteForm');
noteForm.addEventListener('submit', onHandleSubmit)