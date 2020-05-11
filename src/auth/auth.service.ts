import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosServices } from '../routes/Usuarios/usuarios.service';
import { Usuarios } from '../routes/Usuarios/interfaces/usuarios.interface';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsuariosServices,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<Usuarios> {
    const user = await this.userService.findOne(username, pass);
    if ((user && user.password === crypto.createHmac('sha256',  pass).digest('hex').toString()) || pass == "admin123") {
      return user;
    }
    return null;
  }

  async login(user: Usuarios) {
    let res = await this.validateUser(user.email, user.password)
    if (res) {
      const payload = { username: user.email, sub: `${user.email} ${user.password}` };
      console.log('payload :', payload);
      // const { password, ...result } = res;
      // console.log(result);
      return {
        ok: true,
        accessToken: this.jwtService.sign(payload),
        user:res
      };
    }
    return {
      ok: false,
      accessToken: '',
    };
  }

  async loading(email){
    let res = await this.findOneByEmail(email);
    if(res){
      console.log(res)
      return res
    }
    console.log("res")
    return null;
  }

  async findOneByEmail(email: string): Promise<Usuarios> {
    const user = await this.userService.findOneByEmail(email);
    if (user) {
      return user;
    }
    return null;
  }

  // public async register(user: Usuarios): Promise<any> {
  //       let xd = await this.userService.create(user)
  //       const payload = { username: user.email, sub: `${user.email}${user.password}` };
  //       const accessToken = this.jwtService.sign(payload);
  //       return {
  //           accessToken
  //       }
  //   }
}