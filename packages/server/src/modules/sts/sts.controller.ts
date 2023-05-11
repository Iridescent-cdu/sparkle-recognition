import { Controller, Get, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard'
import { StsService } from './sts.service'

@Controller('/api/sts')
export class StsController {
  constructor(private readonly stsService: StsService) {
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getStsToken() {
    const ststoken = await this.stsService.getStsToken()
    return ststoken
  }
}
