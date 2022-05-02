import Note from './models/Note';


export default function(io) {
    io.on('connection', (socket) => {

        const emitNotes = async () => {
            const notes = await Note.find()
            io.emit('server:loadNotes', notes)
        }
        emitNotes()

        socket.on('client:newnote', async (data) => {
            const newNote = new Note(data)
            const savedNote = await newNote.save()
            io.emit('server:newnote', savedNote)
        })

        socket.on('client:deletenote', async (id) => {
            await Note.findByIdAndDelete(id)
            emitNotes()
        })

        socket.on('client:getnote', async (id) => {
            const note = await Note.findById(id)
            io.emit('server:selectnote', note)
        })

        socket.on('client:updatenote', async (note) => {
            const { id, title, description } = note
            const updateNote = await Note.findByIdAndUpdate(id, { title, description }, { new: true })
            io.emit('server:updatenote',updateNote)

        })
    })
}