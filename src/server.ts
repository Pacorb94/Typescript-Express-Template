import cors from 'cors';
import express, { Application } from 'express';
import { dbConnect } from '../config/mongo';
import { environment } from './environments/environment';
import userRoutes from './routes/user.routes';


export class AppServer {
    //Singleton
    private static _instance: AppServer;
    private app: Application;

    //Singleton
    static get instance() {
        return this._instance || (this._instance = new this());
    }

    private constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', environment.port || process.env.PORT || 3000);
    }

    private middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private routes() {
        this.app.use('/users', userRoutes);
    }

    listen() {
        dbConnect();
        this.app.listen();
        console.log('Server on port', this.app.get('port'));
    }
}
