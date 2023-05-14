import { IsString } from 'class-validator'

/* Image DTO验证 */
export class CreateImageDto {
  @IsString()
  imageUrl: string

  @IsString()
  recognitionResult: string
}
