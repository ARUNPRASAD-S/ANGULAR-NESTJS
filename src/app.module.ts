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
    host:'localhost',
    database:'Angular-Nestjs',
    port:3306,
    username:'root',
    password:'aA181296@',
    entities: [Employee],
    synchronize:true,
    insecureAuth:true
  }),
TypeOrmModule.forFeature([Employee])],
  controllers: [AppController, EmployeesdetailsController],
  providers: [AppService, EmployeeService],
  })
export class AppModule {}
