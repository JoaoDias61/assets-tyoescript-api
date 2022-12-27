import { IGetClientRepository } from "../../controllers/get-client/protocols";
import { PostgreClient } from "../../database/postgre";
import { Client } from "../../models/client";

export class PostgreGetClientsRepository implements IGetClientRepository {
    async getClient(): Promise<any> {
        const clients = await PostgreClient.client.query('SELECT * FROM clients', (err: any, res: any) => {
            return res
        });

    }
}