import { Module } from '@nestjs/common';
import { TeacherController } from 'src/teacher/teacher.controller';
import { StudentTeacherController } from 'src/teacher/student.controller';
import { StudentController } from '../student/student.controller';
import { StudentService } from 'src/student/student.service';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherController],
  providers: [StudentService],
})
export class AppModule {}
