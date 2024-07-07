import { IsNotEmpty, IsString } from 'class-validator';

export class BookDto {
  @IsString()
  @IsNotEmpty({ message: '예매 정보를 입력해주세요.' })
  message: string;
}
