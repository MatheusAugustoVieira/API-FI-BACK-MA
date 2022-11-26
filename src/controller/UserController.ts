import { getRepository } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { UserMA } from "../entity/UserMA"
import { SistemaMA } from "../entity/SistemaMA";
import { AppDataSource } from "../data-source"

export class UserController {

    private userRepository = AppDataSource.getRepository(UserMA)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        
        return this.userRepository.findOneBy({ id: request.params.id })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {

        const email = request.params
            const user = await AppDataSource.getRepository(UserMA).delete(email)
            if(user.affected ==1){
                const userUpdated = await AppDataSource.getRepository(UserMA).findOneBy(email)
                response.json(userUpdated)                 
                    
            }
        }

}

export class SistemaMAController {  

private SistemaMARepository = AppDataSource.getRepository(SistemaMA);

async all(request: Request, response: Response, next: NextFunction) {
    return this.SistemaMARepository.find();
}

async one(request: Request, response: Response, next: NextFunction) {
    
    return this.SistemaMARepository.findOneBy({ id: request.params.id })
}

async save(request: Request, response: Response, next: NextFunction) {
    return this.SistemaMARepository.save(request.body);
}

async update(request: Request, response: Response, next: NextFunction) {
    const id = request.params
    const sistema = await AppDataSource.getRepository(SistemaMA).update(id,request.body)
    if(sistema.affected ==1){
        const sistemaUpdated = await AppDataSource.getRepository(SistemaMA).findOneBy(id)
        response.json(sistemaUpdated)
    }
} 

async remove(request: Request, response: Response, next: NextFunction) {

    const atualizado = request.params
        const sistema = await AppDataSource.getRepository(SistemaMA).delete(atualizado)
        if(sistema.affected ==1){
            const sistemaUpdated = await AppDataSource.getRepository(SistemaMA).findOneBy(atualizado)
            response.json(sistemaUpdated)
            }}
}