import { Controller, Get, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  index(@Res() res) {
    res.send(
      `<div>${JSON.stringify(this.configService['internalConfig'])}</div>`,
    );
  }
}
