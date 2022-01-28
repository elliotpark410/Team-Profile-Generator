
function generateManager (manager) {
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


function generateEngineer (engineer) {
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


function generateIntern (intern) {
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




module.exports = generateHTML; 