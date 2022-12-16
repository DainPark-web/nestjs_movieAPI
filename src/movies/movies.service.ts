import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === parseInt(id));
  }

  deleteOne(id: string): boolean {
    return this.movies.filter((movie) => movie.id === +id) ? true : false;
  }

  create(movieData): boolean {
    this.movies.push({
      id: movieData.id,
      ...movieData,
    });
    return true;
  }
}
