
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

    getEmail(): string {
        return this.email;
    }

    setEmail(value: string) {
        this.email = value;
    }

    getSenha(): string {
        return this.senha;
    }

    setSenha(value: string) {
        this.senha = value;
    }
}