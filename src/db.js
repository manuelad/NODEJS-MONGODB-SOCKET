import {connect} from 'mongoose';
import {DB_URI} from './config';

export async function connectDB(){
    try {
        await connect(DB_URI)
        console.log('connected to mongodb');
    } catch (error) {
        console.error(error);
    }
}