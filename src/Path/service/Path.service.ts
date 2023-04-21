import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository , DataSource, IsNull  } from 'typeorm';
import { PathEntity } from '../entity/Path.entity';
import { PositiontagEntity } from '../../PositionTag/entity/Positiontag.entity';
import { PathDto } from '../dto/Path.dto';
import { PositiontagDto } from '../../PositionTag/dto/Positiontag.dto';
import { GraphArray } from '../algorism/GraphArray';


@Injectable()
export class PathService{
    private readonly logger = new Logger(PathService.name);

    constructor(
        @InjectRepository(PathEntity)
        private readonly pathRepository: Repository<PathEntity>,
        @InjectRepository(PositiontagEntity)
        private readonly positiontagRepository: Repository<PositiontagEntity>,
    
    ) {}


    async create_Path(pathDto : PathDto) : Promise<void>{
        await this.pathRepository.insert(pathDto);
    }

    //경로 찾기 알고리즘 추가
    async Find_Path(start_Tad_Id: string , End_Tag_Id : string) : Promise<PositiontagDto[]>{
        
        
        let all_Path_List : PathDto[] = await this.FindAll();
        let all_Position_Tag : PositiontagDto[] = await this.positiontagRepository.find();
        //다이익스트라
        let pGraphArray : GraphArray = new GraphArray(all_Position_Tag.length);

        let Start : number = 0;
        let End : number = 0;

        for(let j = 0; j < all_Position_Tag.length; j++){
            
            if(start_Tad_Id == all_Position_Tag[j].tag_id){
                Start = j;
            }
            
            if(End_Tag_Id == all_Position_Tag[j].tag_id){
                End = j;
            }
            
        }


        for(let i = 0; i < all_Path_List.length; i++){
            
            let point1 : number = 0;
            let point2 : number = 0;

            for(let j = 0; j < all_Position_Tag.length; j++){
                
                if(all_Path_List[i].fromTagId == all_Position_Tag[j].tag_id){
                    point1 = j;
                    break;
                }
            }

            for(let j = 0; j < all_Position_Tag.length; j++){
                
                if(all_Path_List[i].toTagId == all_Position_Tag[j].tag_id){
                    point2 = j;
                    break;
                }
            }
            //그래프 구축
            pGraphArray.AddEdge(point1,point2);

           
        }
        //경로 탐색
        pGraphArray.Dijkstra(Start,End);

        let Return_Tag_List : PositiontagDto[] = [];

        for(let i of pGraphArray._path){

            Return_Tag_List.push(all_Position_Tag[i]);

        }
        
        return Return_Tag_List;
    }

    async Relation_FindAll() : Promise<PathDto[]>{
        return await this.pathRepository.find({
            relations : {
                fromTag : true,
                toTag : true
            }

        });
    }

    async FindAll() : Promise<PathDto[]>{
        return await this.pathRepository.find();
    }

    async Update(id : string, pathDto : PathDto) : Promise<void>{
        await this.pathRepository.createQueryBuilder()
                              .update(pathDto)
                              .where('path_id = :path_id',{path_id: id})
                              .execute();
    }

    async remove(id : string) : Promise<void>{
        await this.pathRepository.createQueryBuilder()
          .where('path_id = :path_id',{path_id: id})
          .delete().execute();
    }

}