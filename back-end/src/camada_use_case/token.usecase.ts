import * as jwt from 'jsonwebtoken';

export class TokenUseCase {
    gerarToken(email: string): string{
        const payload = { email };
        const segredo = 'G7@!pX8$uM^3kN2&rL6*qV1#tFzJ9zA';
        const opcoes = { expiresIn: '1h' }
    
        return jwt.sign(payload, segredo, opcoes)
    }
}