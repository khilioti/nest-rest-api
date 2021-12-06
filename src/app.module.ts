import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from "./products/products.module";

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(`mongodb+srv://admin:AX5kRD4fp6sbu9f@cluster0.kogwf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
