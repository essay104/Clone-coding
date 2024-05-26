const table = document.querySelector(".league-table");

const getTableData = () => {
  fetch(`./PL_data.json`)
    .then((response) => response.json())
    .then((data) => {
      createTable(data);
    });
};

const createTable = (data) => {
  data.forEach((team, idx) => {
    const ul = document.createElement(`ul`);
    ul.className = `team-info`;

    ul.innerHTML = `
    <li>${idx + 1}</li>
    <li>${team.team}</li>
    <li>${team.wins}</li>
    <li>${team.draws}</li>
    <li>${team.losses}</li>
    <li>${team.goals_for}</li>
    <li>${team.goals_against}</li>
    <li>${team.goal_difference}</li>
    <li>${team.points}</li>
    <li></li>
    `;

    table.appendChild(ul);
  });
};

document.addEventListener("DOMContentLoaded", getTableData);
