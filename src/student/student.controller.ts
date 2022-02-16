import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

@Controller('students')
export class StudentController {
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return [];
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentResponseDto {
    return;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): FindStudentResponseDto {
    console.log(body.id, body.name, body.teacher);

    return;
  }

  @Put('/:studentId')
  updateStudent(@Body() body: UpdateStudentDto): StudentResponseDto {
    return;
  }
}
