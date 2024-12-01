import { Injectable } from '@nestjs/common';
import { ProjectDto } from './database/project.dto';
import { CadastroProjeto, DadosProjeto } from './database/project.dto';
import { PrismaClient } from '@prisma/client'

@Injectable()
export class ProjectService implements ProjectDto{
    private prisma = new PrismaClient();

    criarProjeto(dados: CadastroProjeto){
        const variavel = 2
    }

    atualizarDados(dados: CadastroProjeto){}
    
    deletarProjeto(id: number){}

    lerDados(id: number){}

    lerTodos() {}
}
