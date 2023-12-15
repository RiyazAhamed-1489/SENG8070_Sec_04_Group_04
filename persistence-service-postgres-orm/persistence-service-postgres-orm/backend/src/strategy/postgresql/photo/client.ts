import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"client-info"})
export class ClientInfo {
    @PrimaryGeneratedColumn({name: "emp_id, type:int"})
    id: number;
  
    @Column({ name: "f_name", type: "varchar", length: 255})
       
    firstName: string;
  
    
  @Column({ name: "l_name", type: "varchar", length: 255 })
  lastName: string;

  @Column({ name: "address", type: "text" })
  address: string;

  @Column({ name: "contact_num", type: "int" })
  contactNumber: string;
  }
  