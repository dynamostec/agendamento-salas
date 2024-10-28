
export class LoginDto {
    
    constructor(
        email: String,
        senha: String
    ){
        this.email=email,
        this.senha=senha
    }

    email: String;
    senha: String;
}