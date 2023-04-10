import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { WebsocketModule } from './websocketservice/websocket.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmrEntity } from './entity/Amr.entity';
import { AmrModule } from './module/Amr.module';
import { AmrtypeEntity } from './entity/Amrtype.entity';
import { AmrtypeModule } from './module/Amrtype.module';
import { CallorderEntity } from './entity/Callorder.entity';
import { MapEntity } from './entity/Map.entity';
import { MapModule } from './module/Map.module';

import { WorkplaceEntity }  from './entity/Workplace.entity';
import { WorkPlaceModule } from './module/WorkPlace.module';
import { PositiontagEntity } from './entity/Positiontag.entity';
import { PositionTagModule } from './module/PositionTag.module';

import { PositiontagtypeEntity } from './entity/Positiontagtype.entity';
import { PositionTagTypeModule } from './module/PositionTagType.module';

import { PathEntity } from './entity/Path.entity';
import { PathModule } from './module/Path.module';
import { CrossroadEntity } from './entity/Crossroad.entity';
import { CrossroadPositionTagEntity } from './entity/CrossroadPositionTag.entity';
import { FileModule } from './file/file.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

//import { MapEntity } from './entity/Map.entity'
//import { WorkplaceEntity } from './entity/Workplace.entity';
//import { PositiontagtypeEntity } from './entity/Positiontagtype.entity';
//import { PathEntity } from './entity/Path.entity';
//import { CrossroadEntity } from './entity/Crossroad.entity';
//import { CrossroadPositionTagEntity } from './entity/CrossroadPositionTag.entity'
//import { CallorderEntity } from './entity/Callorder.entity';
//import { JobEntity } from './entity/Job.entity';
//import { OrderEntity } from './entity/Order.entity';
//import { TaskEntity } from './entity/Task.entity';



/*import { AcsAmrtypeEntity } from './entity/AcsAmrtype.entity';
import { AcsCallorderEntity } from './entity/AcsCallorder.entity';
import { AcsCrossroadEntity } from './entity/AcsCrossroad.entity';
import { AcsCrossroadPositionTagEntity } from './entity/AcsCrossroadPositionTag.entity';
import { AcsElevatorEntity } from './entity/AcsElevator.entity';
import { AcsElevatorEvPositionTagEntity } from './entity/AcsElevatorEvPositionTag.entity';
import { AcsEquipmentautodoorEntity } from './entity/AcsEquipmentautodoor.entity';
import { AcsEquipmentautodoorlogEntity } from './entity/AcsEquipmentautodoorlog.entity';
import { AcsEquipmentdockingEntity } from './entity/AcsEquipmentdocking.entity';
import { AcsJobEntity } from './entity/AcsJob.entity';
import { AcsManualorderEntity } from './entity/AcsManualorder.entity';
import { AcsManualpathEntity } from './entity/AcsManualpath.entity';
import { AcsMapEntity } from './entity/AcsMap.entity';
import { AcsMemoEntity } from './entity/AcsMemo.entity';
import { AcsOrderEntity } from './entity/AcsOrder.entity';
import { AcsPathEntity } from './entity/AcsPath.entity';
import { AcsPositiontagEntity } from './entity/AcsPositiontag.entity';
import { AcsPositiontagtypeEntity } from './entity/AcsPositiontagtype.entity';
import { AcsTaskEntity } from './entity/AcsTask.entity';
import { AcsWorkplaceEntity } from './entity/AcsWorkplace.entity';
import { AcsAmrModule } from './module/AcsAmr.module';
import { AcsAmrTypeModule } from './module/AcsAmrType.module';
import { AcsCallorderModule } from './module/AcsCallorder.module';
import { AcsCrossroadModule } from './module/AcsCrossroad.module';
import { AcsCrossroadRfPositionModule } from './module/AcsCrossroadPositionTag.module';
import { AcsElevatorModule } from './module/AcsElevator.module';
import { AcsElevatorEvPositionTagModule } from './module/AcsElevatorEvPositionTag.module';
import { AcsEquipmentautodoorlogModule } from './module/AcsEquipmentautodoorlog.module';
import { AcsEquipmentdockingModule } from './module/AcsEquipmentdocking.module';
import { AcsJobModule } from './module/AcsJob.module';
import { AcsManualorderModule } from './module/AcsManualorder.module';
import { AcsManualpathModule } from './module/AcsManualpath.module';
import { AcsMaphModule } from './module/AcsMap.module';
import { AcsMemoEModule } from './module/AcsMemo.module';
import { AcsOrderEModule } from './module/AcsOrder.module';
import { AcsPathEntityModule } from './module/AcsPath.module';
import { AcsPositiontagModule } from './module/AcsPositiontag.module';
import { AcsTaskEModule } from './module/AcsTask.module';
import { AcsWorkplaceModule } from './module/AcsWorkplace.module';
import { AcsEquipmentautodoorModule } from './service/AcsEquipmentautodoor.module';
import { FileModule } from './file/file.module';
*/
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ck123123',
      database:'postgres',
      autoLoadEntities: true,
      entities: [AmrEntity,
        AmrtypeEntity,
        CallorderEntity,
        MapEntity,
        WorkplaceEntity,
        PositiontagtypeEntity,
        PositiontagEntity,
        PathEntity,
        //CrossroadEntity,
        //CrossroadPositionTagEntity,  
        
        //JobEntity,
        //TaskEntity,
        //OrderEntity
      ],
    //subscribers: ["dist/subscriber/**/*.js"],
    //migrations: ["dist/migration/**/*.js"],
    
      synchronize: true,
      logging:true,
      
    }),
    WebsocketModule,
    AmrModule,
    AmrtypeModule,
    WorkPlaceModule,
    MapModule,
    PositionTagTypeModule,
    FileModule,
    PositionTagModule,
    PathModule,
    /*AcsAmrTypeModule,
    AcsCallorderModule,
    AcsCrossroadModule,
    AcsCrossroadRfPositionModule,
    AcsElevatorModule,
    AcsElevatorEvPositionTagModule,
    AcsEquipmentautodoorModule,
    AcsEquipmentautodoorlogModule,
    AcsEquipmentdockingModule,
    AcsJobModule,
    AcsManualorderModule,
    AcsManualpathModule,
    AcsMaphModule,
    AcsMemoEModule,
    AcsOrderEModule,
    AcsPathEntityModule,
    AcsPositiontagModule,
    AcsTaskEModule,
    AcsWorkplaceModule,*/
  ],
  controllers: [AppController],
  providers: [AppService,{
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
  }],
})
export class AppModule {}
