import { Test, TestingModule } from '@nestjs/testing';
import { EstanciasController } from './estancias.controller.js';

describe('EstanciasController', () => {
  let controller: EstanciasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstanciasController],
    }).compile();

    controller = module.get<EstanciasController>(EstanciasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
