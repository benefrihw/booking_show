import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/user/types/userRole.type';

import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { BookService } from './book.service';

@UseGuards(RolesGuard)
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  // 예매하기
  @Roles(Role.User)
  @Post(':userId/:showId')
  async postBook(
    @Param('userId') userId: number,
    @Param('showId') showId: number,
  ) {
    return await this.bookService.postBookByUserIdAndShowId(userId, showId);
  }

  // 에매 목록 조회
  @Get(':userId')
  async getBook(@Param('userId') userId: number) {
    return await this.bookService.getMyBooks(userId);
  }

  // @Delete(':userId/:bookId')
  // async deleteBook(
  //   @Param('userId') userId: number,
  //   @Param('bookId') showId: number) {
  //   return await this.bookService.cancelBook(userId, showId);
  //   }
}
