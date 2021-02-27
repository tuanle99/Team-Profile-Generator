function generateTeam(team) {
  let html = [];
  let type = "";
  let more_info = "";
  let icon = "";
  for (var i = 0; i < team.length; i++) {
    switch (team[i].getRole()) {
      case "Manager":
        type = "Office Number";
        more_info = `<p>${type}: ${team[i].office_number}</p>`;
        icon = `<i class="fas fa-mug-hot"></i>`;
        break;
      case "Engineer":
        type = "GitHub: ";
        more_info = `<p>${type}<a href="https://github.com/${team[i].github}" target="blank_">${team[i].github}</a></p>`;
        icon = `<i class="fas fa-glasses"></i>`;
        break;
      case "Intern":
        type = "School: ";
        more_info = `<p>${type}${team[i].school}</p>`;
        icon = `<i class="fas fa-user-graduate"></i>`;
        break;
    }
    let name = team[i].name.charAt(0).toUpperCase() + team[i].name.slice(1);
    let employee = `
      <div class="team-area col-4 d-flex justify-content-center">
        <div class="card card-container">
          <div class="card-header card-header-style">
            <h5 class="card-title">${name}</h5>
            <p class="">${icon} ${team[i].getRole()}</p>
          </div>
          <div class="card-body">
            <p>ID: ${team[i].id}</p>
            <p>Email: <a href="mailto: ${team[i].email}" target="blank_"> ${
      team[i].email
    }</a></p>
            ${more_info}
          </div>
        </div>
      </div>
    `;
    html.push(employee);
  }
  return html.join("");
}

function generateHtml(team) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="style.css" />
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
      <title>Team Profile</title>
    </head>
    <body>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center">My Team</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
            ${generateTeam(team)}
        </div>
      </div>
    </body>
  </html>
    `;
}

module.exports = generateHtml;
