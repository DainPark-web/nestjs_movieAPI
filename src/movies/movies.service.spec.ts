import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return a array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });
  describe('getOne', () => {
    it('It should return a Movie', () => {
      service.create({
        title: 'test',
        genres: ['test'],
        year: 1222,
      });
      const result = service.getOne(1);
      expect(result).toBeDefined();
      expect(result.id).toEqual(1);
      expect(result.title).toEqual('test');
    });
    // 에러 발견시
    it('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Movie with ID: ${999} not Found`);
      }
    });
  });
  describe('deleteOne', () => {
    it('delete a movie', () => {
      service.create({
        title: 'test',
        genres: ['test'],
        year: 1222,
      });

      const allMovies = service.getAll();
      service.deleteOne(1);
      const afterDelete = service.getAll();

      expect(afterDelete.length).toBeLessThan(allMovies.length);
    });

    it('Should return a 404 Error', () => {
      try {
        service.deleteOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('create', () => {
    it('Should create a Movie', () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: 'test',
        genres: ['test'],
        year: 1222,
      });
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });
});
