import { Module } from '@nestjs/common';
import { Websocketgateway } from './websocket.gateway';

@Module({
  providers: [Websocketgateway],
})
export class WebsocketModule {}
