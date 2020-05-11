import { Controller, Post, Body,UseGuards ,Get,Request } from  '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from  './auth.service';
import { Usuarios} from '../routes/Usuarios/interfaces/usuarios.interface';
import * as crypto from 'crypto';

@Controller('auth')
export  class  AuthController {
    constructor(private  readonly  authService:  AuthService) {}

    // @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body() user: Usuarios): Promise<any> {
      // user.password = crypto.createHmac('sha256',  user.password).digest('hex').toString();
      return this.authService.login(user);
    }

    // @UseGuards(AuthGuard('jwt'))
    // @Post('register')
    // async register(@Body() user: Usuarios): Promise<any> {
    //   console.log("GGGG")
    //   return this.authService.register(user);
    // }

    @UseGuards(AuthGuard('jwt'))
    @Get('user')
    getProfile(@Request() req) {
      console.log("el jwt")
      let esto = this.authService.loading(req.user.username);
      console.log(esto)
      return esto
    }
}