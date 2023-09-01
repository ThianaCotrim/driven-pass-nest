import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService) { }

    async canActivate(context: ExecutionContext){
      
    const request = context.switchToHttp().getRequest()
    const {authorization} = request.headers

    try {
        const token = authorization?.split(' ')[1];
        console.log(token)
        const data = this.authService.checkToken(token)
        const user = await this.usersService.getUserById(parseInt(data.sub))
        request.user = user
        return true
    } catch (error) {
        console.log(error)
        throw new UnauthorizedException()  
    }
    }

}