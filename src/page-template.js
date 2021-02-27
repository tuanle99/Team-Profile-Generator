function generateTeam(team) {
  let html = [];
  let type = "";
  let more_info = "";
  for (var i = 0; i < team.length; i++) {
    switch (team[i].type) {
      case "Team Manager":
        type = "Office Number: ";
        more_info = team[i].office_number;
        break;
      case "Engineer":
        type = "Github: ";
        more_info = team[i].git_user;
        break;
      case "Intern":
        type = "School: ";
        more_info = team[i].school;
        break;
    }
    let employee = `
      <div class="team-area col-4 d-flex justify-content-center">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">${team[i].name}</h5>
            <p class="">${team[i].type}</p>
          </div>
          <div class="card-body">
            <p>id: ${team[i].id}</p>
            <p>email:${team[i].email}</p>
            <p>${type}${more_info}</p>
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
