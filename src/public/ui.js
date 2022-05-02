import { saveNote, deleteNote, getNoteById, updateNote } from './sockets.js';


const title = document.getElementById('title');
const description = document.getElementById('description');
let saveId = "";

export const onHandleSubmit = (e) => {
    e.preventDefault();
    if (saveId) {
        updateNote(saveId, title.value, description.value)
    }
    else {
        saveNote(title.value, description.value)

    }

    title.value = ''
    description.value = ''
    saveId = ''
}

const renderNote = (note) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="card card-body rounded-0 m-2 animate__animated animate__fadeInUp">
           <div class="d-flex justify-content-between">
                <h1>${note.title}</h1>
                <div>
                    <button class='btn btn-danger delete rounded-0' data-id="${note._id}">delete</button>
                    <button class ='update btn btn-primary rounded-0' data-id="${note._id}">update</button>
                </div>
           </div>
            <p>${note.description}</p>
        </div>`

    const btnDelete = div.querySelector('.delete')
    btnDelete.addEventListener('click', e => deleteNote(btnDelete.dataset.id))
    const btnUpdate = div.querySelector('.update')
    btnUpdate.addEventListener('click', e => getNoteById(btnUpdate.dataset.id))

    return div
}

const deleteViewNote = (id) => {
    const button = document.querySelector(`button[data-id="${id}"]`)
    const divParent = button.parentElement.parentElement.parentElement
    divParent.remove()
}

export const updateViewNote = (updateNote) => {
    deleteViewNote(updateNote._id)
    notesList.appendChild(renderNote(updateNote))
}

const notesList = document.querySelector('#notes')
export function renderNotes(notes) {
    notesList.innerHTML = ''
    notes.forEach(note => notesList.appendChild(renderNote(note)))


}

export const appendNote = note => {
    notesList.appendChild(renderNote(note))
}

export const fillForm = (note) => {
    title.value = note.title;
    description.value = note.description
    saveId = note._id
}