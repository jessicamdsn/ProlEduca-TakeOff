import { Test, TestingModule } from '@nestjs/testing';
import { ScholarsService } from './scholars.service';

describe('ScholarsService', () => {
  let service: ScholarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScholarsService],
    }).compile();

    service = module.get<ScholarsService>(ScholarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
