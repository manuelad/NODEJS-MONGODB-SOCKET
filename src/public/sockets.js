const socket = io()


export const loadNotes = (callBack) => {
    socket.on('server:loadNotes', callBack)
}

export const saveNote = (title, description) => {
    socket.emit('client:newnote', { title, description })
}

export const onNewNote = (callBack) => {
    socket.on('server:newnote', callBack)
}

export const deleteNote = id => {
    socket.emit('client:deletenote', id)
}

export const getNoteById = (id) => {
    socket.emit('client:getnote', id)
}

export const selectedNote = (callBack) => {
    socket.on('server:selectnote', callBack)

}

export const updateNote = (id, title, description) => {
    socket.emit('client:updatenote', { id, title, description })
}

export const onUpdateNote = (callBack) => {
    socket.on('server:updatenote', callBack)
}