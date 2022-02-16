import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  private students = students;
  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentById(id: string): FindStudentResponseDto {
    return this.students.find((student) => {
      return student.id === id;
    });
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    let newStudent = {
      id: uuid(),
      ...payload,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(
    payload: UpdateStudentDto,
    studentId: string,
  ): StudentResponseDto {
    let updatedStudent: StudentResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
      } else {
        return student;
      }
    });

    this.students = updatedStudentList;

    return updatedStudent;

    // let oldStudent = this.students.find((student) => {
    //   if (student.id === studentId) {
    //     student.name = payload.name;
    //     student.teacher = payload.teacher;
    //   } else {
    //     return student;
    //   }
    // });
    // // oldStudent.name = payload.name;
    // // oldStudent.teacher = payload.teacher;
    // return oldStudent;
  }
}
