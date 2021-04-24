import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


//Verificar se o usuario existe
//se existir retorna user
//senao salva no DB
class UsersService {

    private usersRepository: Repository <User>;

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create( email: string) {
        
        //select * from users where email = "email" limit 1;
        const userExists = await this.usersRepository.findOne({
            email
        })

        if(userExists){
            return userExists;
            
        }

        const users = this.usersRepository.create({
            email
        })

        await this.usersRepository.save(users);


        return users;
    }

    async findByEmail(email: string){
        return await this.usersRepository.findOne({email});
  }
}

export {UsersService};