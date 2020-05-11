import { Controller, Get, Post, Body,Put,Delete,Param } from '@nestjs/common';
import { CrearUsuariosDto } from './dto/crear-usuario.dto';
import { UsuariosServices } from './usuarios.service';
import { Usuarios } from './interfaces/usuarios.interface';

@Controller('user')
export class UsuariosController {
  constructor(private readonly usuariosServices: UsuariosServices) {}

  @Post("/save")
  async create(@Body() crearUsuariosDto: CrearUsuariosDto) {
    return await this.usuariosServices.create(crearUsuariosDto);
  }

  @Get("/findAll")
  async findAll(): Promise<Usuarios[]> {
    return this.usuariosServices.findAll();
  }

  @Get("/findOneById/:id")
  async findOne(@Param('id') id): Promise<Usuarios[]> {
    return this.usuariosServices.findOneById(id);
  }
  
  @Put("/update/:id")
  async update(@Param('id') id,@Body() updatePersonasDto: CrearUsuariosDto,) {
    console.log('pero si :',updatePersonasDto);
    return this.usuariosServices.update(id,updatePersonasDto);
  }

  @Delete("/delete/:id")
  async delete(@Param('id') id,) {
    console.log('pero si :');
    return this.usuariosServices.delete(id);
  }
}
