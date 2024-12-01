/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { ProjectService } from './project.service';
import { DadosProjeto } from './database/project.dto';


@Controller('project')
export class ProjectController{
    constructor(private readonly projectService: ProjectService){}

    @Get('all')
    findAll(){
        return this.projectService.lerTodos
    }

    @Get(':id')
    find(@Param('id') id: number){
        console.log('teste');
        return this.projectService.lerDados(id)
    }

    @Post('create')
    create(@Body() dadosProjeto: DadosProjeto){
        return this.projectService.criarProjeto(dadosProjeto)
    }

    @Put('update')
    update(@Body() dadosProjeto: DadosProjeto){
        return this.projectService.atualizarDados(dadosProjeto)
    }

    @Delete('delete')
    remove(@Body('id') id: number){
        return this.projectService.deletarProjeto(id)
    }
}
