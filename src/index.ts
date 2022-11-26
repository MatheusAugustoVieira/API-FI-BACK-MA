import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from 'cors';
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"

import { UserMA } from "./entity/UserMA"
import { SistemaMA } from "./entity/SistemaMA"

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    const cors=require('cors');

    app.use(bodyParser.json())
    app.use(cors());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000)

    // insert new users for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserMA, {
            id:0,
            email: "mthsav@gmail.com",
            senha: "huoosnco"
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserMA, {
            id:1,
            email: "jksbche@gmail.com",
            senha: "spdisnw"
        })
    )


    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaMA, {
            id: 1,
        atualizado: "Sim",
        ferramenta: "NMAP",
        objetivo: "Analise",
        campo: "hackerone"
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaMA, {
            atualizado: "Sim",
            ferramenta: "Wireshark",
            objetivo: "Analise",
            campo: "hackerone"
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaMA, {
            atualizado: "Sim",
            ferramenta: "THC Hydra",
            objetivo: "Penetracao",
            campo: "hackerone"
        })
    )

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
