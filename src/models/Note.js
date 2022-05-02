import { model, Schema } from 'mongoose';

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
},
{
    timestamps: true,
    versionKey: false
});

export default model('Mote', NoteSchema);