import { Controller } from "@nestjs/common";
import { loginUseCase } from "src/camada_use_case/loguin.usecase";

@Controller('login')
export class loginController {
   
    constructor (private useCase: loginUseCase){}

    
}