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
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }
  @Get('/search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie with a title: ${searchingYear}`;
  }
  @Get('/:id')
  getOne(@Param('id') id: string): Movie {
    return this.movieService.getOne(id);
  }

  @Post()
  create(@Body() movieData) {
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.movieService.deleteOne(movieId);
  }

  @Patch('/:id')
  update(@Param('id') movieId: string, @Body() updateData) {
    return `Update Movie ${movieId} ${updateData.name}`;
  }
}
