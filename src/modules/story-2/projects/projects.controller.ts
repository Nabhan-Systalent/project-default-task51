import { Controller, Get, Delete, Param, HttpCode } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ProjectResponseDto } from '../shared/dto';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiResponse({ status: 200, type: [ProjectResponseDto] })
  findAll() {
    return this.projectsService.findAll();
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return this.projectsService.delete(id);
  }
}
