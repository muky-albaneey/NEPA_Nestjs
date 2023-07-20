import { Test, TestingModule } from '@nestjs/testing';
import { MarchantController } from './marchant.controller';

describe('MarchantController', () => {
  let controller: MarchantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarchantController],
    }).compile();

    controller = module.get<MarchantController>(MarchantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
