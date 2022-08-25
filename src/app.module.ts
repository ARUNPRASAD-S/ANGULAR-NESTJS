import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/Employee.entity';
import { EmployeeService } from './employee/employee.service';
import { EmployeesdetailsController } from './employeesdetails/employeesdetails.controller';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    database:'Angular-Nestjs',
    username:'admin',
    password:'12345678',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
TypeOrmModule.forFeature([Employee])],
  controllers: [AppController, EmployeesdetailsController],
  providers: [AppService, EmployeeService],
})
export class AppModule {}
