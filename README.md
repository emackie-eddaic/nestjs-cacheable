# nestjs-cacheable

Add DNS caching to NestJS.

## Installation

```sh
npm install @eddaic/nestjs-cacheable
```

## Usage

```typescript
import { CacheableModule, CacheableService } from '@eddaic/nestjs-cacheable';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [CacheableModule, ConfigModule],
      inject: [CacheableService, ConfigService],
      useFactory: (cacheable: CacheableService, config: ConfigService) => ({
        baseURL: config.get('MY_URL'),
        lookup: cacheable.lookup(),
      }),
    }),
  ],
  providers: [MyService],
})
export class MyModule {}
```
