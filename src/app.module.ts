import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule,ConfigService } from '@nestjs/config';

 
@Module({
  imports: [AuthModule, UserModule,
    GraphQLModule.forRootAsync({
      imports:[AppModule, ConfigModule],
      inject:[ConfigService],
      driver:ApolloDriver,
      useFactory:async(confiService:ConfigService) => {
        return{
          playground:true,
          autoSchemaFile:join(process.cwd(),'src/schema.gpl'),
          sortSchema:true,

        };
    },
  }),
  ConfigModule.forRoot({
    isGlobal:true,
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
