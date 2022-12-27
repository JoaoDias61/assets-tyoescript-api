import { IGetClientController, IGetClientRepository } from "./protocols"

export class GetClientController implements IGetClientController {
    constructor(private readonly getClientRepository: IGetClientRepository) {
    }
    async handle() {
        try {
            const clients = await this.getClientRepository.getClient()

            return {
                statusCode: 200,
                body: clients,
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: "Something went wrong."
            }
        }
    }
}