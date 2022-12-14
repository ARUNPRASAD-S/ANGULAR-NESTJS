import { Controller,Get,Put,Post,Body,Delete,Param } from '@nestjs/common';
import { create } from 'domain';
import { identity } from 'rxjs';
import { EmployeeService } from 'src/employee/employee.service';
import { Employee } from 'src/entities/Employee.entity';

@Controller('employeesdetails')
export class EmployeesdetailsController {
    constructor(private employeeservice:EmployeeService){}
    @Get()
    read():Promise<Employee[]>{
        return this.employeeservice.readAll();
    }
    @Post('create')
        async create(@Body() employee:Employee):Promise<any>{
            return this.employeeservice.create(employee);
        }
    @Put(':id/update')
    async update(@Param('id') id,@Body() employee:Employee):Promise<any>{
        return this.employeeservice.update(employee);
    }
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return this.employeeservice.delete(id);
    }
}