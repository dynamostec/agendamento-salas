import { TipoUsuario } from "src/camada_domain/tipoUsario";

export class UsuarioDto {

    constructor(
        id: string,
        nome: string,
        email: string,
        senha: string,
        tipoUsuario: TipoUsuario
    ){
        this.id=id;
        this.nome=nome;
        this.email=email;
        this.senha=senha;
        this.tipoUsuario=tipoUsuario;
    }

    private id: string;
    private nome: string;
    private email: string;
    private senha: string;
    private tipoUsuario: TipoUsuario;
    
    get getId(): string {
        return this.id;
    }

    get getNome(): string {
        return this.nome;
    }

    set setNome(value: string) {
        this.nome = value;
    }

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

    get getTipoUsuario(): TipoUsuario {
        return this.tipoUsuario;
    }

    set setTipoUsuario(value: TipoUsuario) {
        this.tipoUsuario = value;
    }
} 