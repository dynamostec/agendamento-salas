
export class LoginDto {
    
    constructor(
        email: string,
        senha: string
    ){
        this.email=email;
        this.senha=senha;
    }

    private email: string;
    private senha: string;

    get getEmail(): string {
        return this.email;
    }

    set setEmail(value: string) {
        this.email = value;
    }

    get getSenha(): string {
        return this.senha;
    }

    set setSenha(value: string) {
        this.senha = value;
    }
}