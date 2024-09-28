import { Injectable } from '@nestjs/common';
import CacheableLookup from 'cacheable-lookup';

@Injectable()
export class CacheableService {
  readonly cacheable = new CacheableLookup();
}
