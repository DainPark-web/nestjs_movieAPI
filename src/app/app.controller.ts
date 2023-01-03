import { Controller, Get, Req, Res } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  home(@Req() req, @Res() res) {
    return 'Welcome to my Movie API';
  }
}
