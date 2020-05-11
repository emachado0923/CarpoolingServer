import { Controller, Get, Post, Body,Put,Delete,Param } from '@nestjs/common';
import { CrearPersonasDto } from './dto/crear-personas.dto';
import { PersonasService } from './personas.service';
import { Personas } from './interfaces/Personas.interface';
import { UsuariosServices } from '../Usuarios/usuarios.service';


@Controller('person')
export class PersonasController {
  constructor(
    private readonly personasService: PersonasService,
    private readonly usuariosServices: UsuariosServices
  ){}

  @Post("/save")
  async create(@Body() crearPersonasDto: CrearPersonasDto) {
    return await this.personasService.create(crearPersonasDto)
      .then(res=>{
        let user = {
          email:res.email,
          password:res.documento.toString(),
          profile:"ninguno",
          id_person: res._id
        }
        this.usuariosServices.create(user);
        return {
          ok:true,
          person:res
        };
      })
      .catch(MessageError=>{
        return {
          ok:false,
          person:[],
          MessageError
        }; 
      })
  }

  @Get("/findAll")
  async findAll(): Promise<Personas[]> {
    return this.personasService.findAll();
  }
  
  @Put("/update/:id")
  async update(@Param('id') id,@Body() updatePersonasDto: CrearPersonasDto,) {
    return this.personasService.update(id,updatePersonasDto);
  }

  @Delete("/delete/:id")
  async delete(@Param('id') id,) {
    console.log('pero si :');
    return this.personasService.delete(id);
  }
}
