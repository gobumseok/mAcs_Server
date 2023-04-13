import { PositiontagDto} from "../../PositionTag/dto/Positiontag.dto";
import { IsString, IsNumber, IsBoolean, IsDate, IsOptional, IsEmpty } from 'class-validator';

export class PositiontagtypeDto {
  
  @IsString()
  type_id: string;

  @IsNumber()
  code: number;
  
  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  description: string | null;
  
  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
  //Positiontags: PositiontagDto[];
}
