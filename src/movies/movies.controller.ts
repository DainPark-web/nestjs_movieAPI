import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }
  @Get('/search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie with a title: ${searchingYear}`;
  }
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `get movies param: ${id}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `Delete Movie ${movieId}`;
  }

  @Patch('/:id')
  update(@Param('id') movieId: string, @Body() updateData) {
    return `Update Movie ${movieId} ${updateData.name}`;
  }
}
