import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserMA } from "./entity/UserMA"
import { SistemaMA } from "./entity/SistemaMA";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "romiseta1",
    database: "Faculdade",
    entities: [UserMA, SistemaMA],
    synchronize: true,
    logging:false
    
})