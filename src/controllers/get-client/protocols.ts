import { Client } from "../../models/client"
import { HttpResponse } from "../protocols"

export interface IGetClientController {
    handle(): Promise<HttpResponse<Client[]>>
}

export interface IGetClientRepository {
    getClient(): Promise<Client[]>
}