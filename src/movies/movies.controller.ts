import { Controller, Get } from '@nestjs/common';

@Controller()
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne() {
    return 'This will return One Movie';
  }
}
