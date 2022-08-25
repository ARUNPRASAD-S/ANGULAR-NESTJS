import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesdetailsController } from './employeesdetails.controller';

describe('EmployeesdetailsController', () => {
  let controller: EmployeesdetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeesdetailsController],
    }).compile();

    controller = module.get<EmployeesdetailsController>(EmployeesdetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
