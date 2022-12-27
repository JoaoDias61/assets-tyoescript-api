import { Client } from 'pg';

export const PostgreClient = {
    client: undefined as unknown as any,

    async connect(): Promise<void> {
        const client = new Client({
            user: 'jpdias61',
            host: 'postgres',
            database: 'clients',
            password: 'jpdias1999',
            port: 3333,
        });

        this.client = client
        console.log("testee")
    }

}
