import * as express from 'express';
import server from '../../src/server';
export default class IntegrationHelpers {
    public static appInstance: express.Application;
    public static async getApp(): Promise<express.Application> {
        if (this.appInstance) {
            return this.appInstance;
        }
        const testServer: server = new server();
        await testServer.start();
        this.appInstance = testServer.app;
        return this.appInstance;
    }

}