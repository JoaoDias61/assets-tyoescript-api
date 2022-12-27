import express from 'express';
import { config } from "dotenv"
import { GetClientController } from './controllers/get-client/get-client';
import { PostgreGetClientsRepository } from './repositories/get-clients/postgre-get-clients';
import { PostgreClient } from './database/postgre';

const main = async () => {
    config()

    const app = express()

    await PostgreClient.connect()

    app.post("/clients", async (req, res) => {
        const postgreGetClientsRepository = new PostgreGetClientsRepository();
        const getClientController = new GetClientController(postgreGetClientsRepository);

        const response = await getClientController.handle()

        res.send(response.body).status(response.statusCode);
    })

    const port = process.env.PORT;

    app.listen(port, () => console.log(`listening on port ${port}`))

};

main();


