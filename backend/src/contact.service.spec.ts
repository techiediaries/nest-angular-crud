import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactService],
    }).compile();
    service = module.get<ContactService>(ContactService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
