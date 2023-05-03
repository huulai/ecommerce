import { UserModule } from '@api/api/feature-user';
import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import path from 'path';

const validationProvider = {
  provide: APP_PIPE,
  useValue: new ValidationPipe(),
};

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: path.join(__dirname, './autogenerated-schema.gql'),
    }),
    UserModule,
  ],
  providers: [validationProvider],
})
export class AppModule {}
