import { Express } from "express";
import { DataSource } from "typeorm";
import { EmployeeDetails } from "./employee"; 

export default class EmployeeDetailsApi {
  #dataSource: DataSource;
  #express: Express;

  constructor(dataSource: DataSource, express: Express) {
    this.#dataSource = dataSource;
    this.#express = express;

    this.#express.get("/employee/:id", async (req, res) => {
      return res.json(
        await this.#dataSource.manager.findBy(EmployeeDetails, {
          id: parseInt(req.params.id),
        })
      );
    });

    this.#express.post("/employee", async (req, res) => {
      const { body } = req;
      console.log(body);

      const employeeDetails = new EmployeeDetails();
      
      employeeDetails.firstName = body.firstName;
      employeeDetails.lastName = body.lastName;
      employeeDetails.designation = body.designation;
      employeeDetails.brandName = body.brandName;

      try {
        await this.#dataSource.manager.save(employeeDetails);
        console.log(`Employee details have been created with emp_id: ${employeeDetails.id}`);
      } catch (err) {
        res.status(503);
        return res.json({
          error: "Employee details creation failed in db.",
        });
      }

      res.status(200);
      return res.json({
        emp_id: employeeDetails.id,
      });
    });
  }
}
