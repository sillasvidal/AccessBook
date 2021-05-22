import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Book from '../infra/typeorm/entities/Book';
import IBooksRepository from '../repositories/IBooksRepository';

interface IRequest {
  name: string;
}

@injectable()
class FindBookByNameService {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) { }

  public async execute({ name }: IRequest): Promise<Book> {
    const checkBookExists = await this.booksRepository.findByName(
      name,
    );

    if (!checkBookExists) {
      throw new AppError('Book not found');
    }

    return checkBookExists;
  }
}

export default FindBookByNameService;
