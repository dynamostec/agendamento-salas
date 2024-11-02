
export class LoginDto {
    
    constructor(
        email: string,
        senha: string
    ){
        this.email=email;
        this.senha=senha;
    }

    email: string;
    senha: string;

    get _email(): string {
        return this.email;
    }

    set _email(value: string) {
        this.email = value;
    }

    get _senha(): string {
        return this.senha;
    }

    set _senha(value: string) {
        this.senha = value;
    }
}