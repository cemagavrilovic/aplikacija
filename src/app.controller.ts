import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {
  

  @Get()
  getHello(): string {
    return 'HELLO WORLD';
  }
  
  @Get('world')
  getWorld(): string {
    return 'world';
  }
  
}
