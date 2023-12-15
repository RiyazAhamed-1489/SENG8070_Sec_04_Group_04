import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"employee-details"})
export class EmployeeDetails {
    @PrimaryGeneratedColumn({name: "emp_id, type:int"})
    id: number;
  
    @Column({ name: "f_name", type: "varchar", length: 255})
      
    
    firstName: string;
  
    
  @Column({ name: "l_name", type: "varchar", length: 255 })
  lastName: string;

  @Column({ name: "designation", type: "varchar", length: 255 })
  designation: string;

  @Column({ name: "brand_name", type: "varchar", length: 255 })
  brandName: string;
  }
  