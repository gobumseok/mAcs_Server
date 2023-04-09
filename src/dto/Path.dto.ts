
import { PositiontagDto } from './Positiontag.dto';
import { IsString, IsNumber, IsBoolean, IsDate, IsOptional, IsEmpty } from 'class-validator';

export class PathDto {
  
  @IsString()
  path_id: string;

  @IsNumber()
  isBidirectional: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsString()
  fromTagId: string;

  @IsString()
  toTagId: string;

  
  fromTag: PositiontagDto;
  toTag: PositiontagDto;
  
}
