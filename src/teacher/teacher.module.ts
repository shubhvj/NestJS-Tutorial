import { Module } from '@nestjs/common';
import { TeacherController } from './teacher.controller';
import { StudentTeacherController } from './student.controller';
import { TeacherService } from './teacher.service';
import { StudentModule } from 'src/student/student.module';

@Module({
  controllers: [TeacherController, StudentTeacherController],
  providers: [TeacherService],
  imports: [StudentModule],
})
export class TeacherModule {}
