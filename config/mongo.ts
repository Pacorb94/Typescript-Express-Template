import mongoose from 'mongoose';
import { environment } from '../src/environments/environment';

export function dbConnect() {
    mongoose.connect(environment.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, err => {
        if (!err) {
            console.log('**** CONEXION CORRECTA ****')
        } else {
            console.log('***** ERROR DE CONEXION ****')
        }
    });
}