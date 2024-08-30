import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // npm run start:dev
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('falou')
  getFalou(): string {
    return this.appService.getHello();

  }


  @Post('biri')
  postFalou(): string {
    return this.appService.getHello();
  }
}

// get hello