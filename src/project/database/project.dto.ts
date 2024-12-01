export interface CadastroProjeto {
    name: string,
    email: string,
    tel: string
}

export interface DadosProjeto{
    id: number,
    name: string,
    email: string,
    tel: string | null,
    createdAt: Date
}

export interface ProjectDto{

    criarProjeto(dados: CadastroProjeto)

    lerDados(id: number)

    atualizarDados(dados: CadastroProjeto)

    deletarProjeto(id: number)

    lerTodos()
    
}