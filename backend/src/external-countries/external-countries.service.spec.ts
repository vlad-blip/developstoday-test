import { Test, TestingModule } from '@nestjs/testing';
import { ExternalCountriesService } from './external-countries.service';

describe('ExternalCountriesService', () => {
  let service: ExternalCountriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalCountriesService],
    }).compile();

    service = module.get<ExternalCountriesService>(ExternalCountriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
