import { Injectable } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { teachers } from '../db';

@Injectable()
export class TeacherService {
  private teachers = teachers;

  getTeachers(): FindTeacherResponseDto[] {
    return this.teachers;
  }

  getTeacherById(teacherId: string): FindTeacherResponseDto {
    const teacher = this.teachers.find((student) => {
      return student.id === teacherId;
    });
    return teacher;
  }
}
