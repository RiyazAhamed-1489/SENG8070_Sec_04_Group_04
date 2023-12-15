# SENG8070_Sec_04_Group_04

#SENG8070 Database Testing Finals <br>
Section 4 - Group 4 <br>
Riyaz Ahamed - 8881489 <br>
Nirali Patel(8863049) <br>
Yashleen Kaur(8833880) <br>
Final Project

<h1><b>Persistence Service with PostgreSQL and TypeORM</b></h1>
This repository contains code for a persistence service using PostgreSQL and TypeORM.

<ul><h2><b></b>Prerequisites</b></h2>
<li>Docker Desktop for Windows</li>
<li>Node.js installed</li>
<li>Visual Studio Code or any preferred text editor</li>
</ul>

<h2><b></b>Setup</b></h2>
<ol>
  <li><b>Install Docker Desktop for Windows</b>
  <ul>
    <li>Download and install Docker Desktop from Docker's official website.</li>
  </ul>
  </li>
  <li><b>Set Environment Variable for Docker</b>
  <ul>
    <li>Ensure that the Docker environment variables are properly set on your system.</li>
  </ul>
  </li>
  <li><b>Check Docker Version</b>
  <ul> 
    <li>Open the terminal and type:<br> 
   
  ```
  docker --version
  ```

</li><li>Expected output: Docker version 24.0.7, build afdd53b</li>
  </ul>
  </li>
   <li><b>Check Docker Compose Version</b>
  <ul>
    <li>Type the following command:<br>   
      
  ```
   docker-compose --version
  ``` 
      
  </li><li>Expected output: Docker Compose version v2.23.3-desktop.2</li>
  </ul>
  </li>
   <li><b>Clone the Repository</b>
  <ul>
    <li>Download or clone the sample code from GitHub - Persistence Service Code</li>
  </ul>
  </li>
   <li><b>Install TypeORM</b>
  <ul>
    <li>Open the project in Visual Studio Code and run:<br> 

      
   ```
   npm install typeorm
   ```
</li><li>Note: You might encounter an npm update message, follow the prompts to update to the latest version.</li>
  </ul>
  </li>
   <li><b>Check TypeORM Version</b>
  <ul>
    <li>Verify the TypeORM version details in the package.json file after installation.</li>
  </ul>
  </li>
  
</ol>

<h2>Running with Docker</h2>
<ol>
  <li><b>Run Docker Compose</b>
  <ul>
    <li>Execute the following command in the terminal:<br>
```      
docker-compose up
```    
    </li>
    <li>Expected output:<br>

   ```
   Container persistence-service-postgres-orm-db-1                Running ... 0.0s<br>
   Container persistence-service-postgres-orm-backend-1           Running ... 0.0s<br>
   Container persistence-service-postgres-orm-reverse-proxy-1     Running ... 0.0s<br>
   ```
      
</li>
    
  </ul>
  </li>
  <li>
    <b>Accessing the Application</b>
    <ul>
      <li>Open a web browser and navigate to localhost. You should see a "Hello, World!" message.</li>
    </ul>
  </li>
  <li>
    <b>Install Database Driver</b>
    <ul>
      <li>Install the PostgreSQL driver by running:<br>

        
  ```    
  npm install pg
  ```  
  </li></ul>
  </li>
</ol>
<br>
<h2><b>Backend Tesing</b></h2>
<ol>
  <li>
    <b>Navigate to Backend Directory</b>
    <ul>
      <li>Change directory to the backend folder:<br>

        
  ```      
  cd backend
  ```    
        
  </li></ul>
  </li>
   <li>
    <b>Run Tests</b>
    <ul>
      <li>Execute the following command to run tests:<br>



  ```
  npm run test
  ```

  
   </li><li>This will execute the tests for the backend.</li>   
    </ul>
  </li>
</ol>
