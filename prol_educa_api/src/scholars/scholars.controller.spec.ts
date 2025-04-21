import { Test, TestingModule } from '@nestjs/testing';
import { ScholarsController } from './scholars.controller';
import { ScholarsService } from './scholars.service';

describe('ScholarsController', () => {
  let controller: ScholarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScholarsController],
      providers: [ScholarsService],
    }).compile();

    controller = module.get<ScholarsController>(ScholarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
