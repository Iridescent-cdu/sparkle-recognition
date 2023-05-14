import { Controller, Get } from '@nestjs/common'
import { StsService } from './sts.service'

@Controller('/api/sts')
export class StsController {
  constructor(private readonly stsService: StsService) {
  }

  @Get()
  async getStsToken() {
    const ststoken = await this.stsService.getStsToken()
    return ststoken
  }
}
