// Create function to dynamically generateHTML using employeeData (inquirer prompt user input)
function generateHTML(employeeData) {

  // Create an array to determine which cards need to be made
  employeeCardsArray = [];

  // Create a for loop to capture all the ojbects in the array and get the employee object and role
  for (let i = 0; i < employeeData.length; i++) {
    const employee = employeeData[i];
    const role = employee.getRole()

    // if role equals "Manager", create a manager card
    if (role === 'Manager') {
      const managerCard = generateManagerCard(employee);

      // push managerCard to employeeCardsArray to eventually generate team cards
      employeeCardsArray.push(managerCard);      
    }

    // if role equals "Engineer", create an engineer card
    if (role === 'Engineer') {
      const engineerCard = generateEngineerCard(employee);

      //  push engineerCard to employeeCardsArray to eventually generate team cards
      employeeCardsArray.push(engineerCard);      
    }

    // if role equals "Intern", create an intern card
    if (role === 'Intern') {
      const internCard = generateInternCard(employee);

      //  push internCard to employeeCardsArray to eventually generate team cards
      employeeCardsArray.push(internCard);      
    }
  }

  // .join('') returns the employeeCardsArray as a string which is needed for creating the html page
  const employeeCards = employeeCardsArray.join('');
  
  // call function generateTeamCards with employeeCards argument 
  // return generateTeam to create html
  const generateTeam = generateTeamCards(employeeCards);
  return generateTeam;
}




// generateManagerCard with manager object and template literals
function generateManagerCard (manager) {
  return `
    <div class="card mx-4 mb-4" id="manager-card">
      <div class="card-header text-center card-title bg-info text-white">
        <h3>${manager.name}</h3>
        <h4><i class="fas fa-mug-hot mr-2"></i>Manager</h4>
      </div>

      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
          <li class="list-group-item">Office number: <a href="tel:${manager.officeNumber}">${manager.officeNumber}</a></li>
        </ul>
      </div>
    </div>
  `;
}


// generateEngineerCard with engineer object and template literals
function generateEngineerCard (engineer) {
  return `
    <div class="card mx-4 mb-4" id="engineer-card">
      <div class="card-header text-center card-title bg-info text-white">
        <h3>${engineer.name}</h3>
        <h4><i class="fas fa-glasses mr-2"></i>Engineer</h4>
      </div>

      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
      </div>
    </div>
  `;
}


// generateInternCard with intern object and template literals
function generateInternCard (intern) {
  return `
    <div class="card mx-4 mb-4" id="intern-card">
      <div class="card-header text-center card-title bg-info text-white">
          <h3>${intern.name}</h3>
          <h4><i class="fas fa-user-graduate mr-2"></i>Intern</h4>
      </div>

      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
      </div>
    </div>
  `;
}


// generateTeamCard with employeeCards argument and template literals
function generateTeamCards(employeeCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    
    <!-- Add CDN links for bootstrap, jQuery, and fontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  
    <!-- Add link to style.css -->
    <link rel="stylesheet" href="style.css">
  
  
    <title>Team Profile Generator</title>
  </head>
  
  
  <body>
  
    <!-- Create header section and create container fluid expands the container to fill the available width -->
    <header class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 bg-primary text-white">
            <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </header>
  
    <!-- Create main section with cards -->
    <main class="container document-body">
      <div class="row">
          <div class="col-12 d-flex justify-content-center mt-4">
              
            ${employeeCards}
  
          </div>
      </div>
    </main>
  
  
    <!-- Add script links for bootstrap, jQuery, and fontAwesome -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
  
    <script src="https://kit.fontawesome.com/c44c0358b1.js" crossorigin="anonymous"></script>
  
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
  
    <script src="https://kit.fontawesome.com/c44c0358b1.js" crossorigin="anonymous"></script>
    
  </body>
  </html>  
  `;
}

// Export generateHTML module so Node.js tells oher files are allowed to access the code
module.exports = generateHTML;  