// this gets the input value and output it to getUser function
document.getElementById("button4").addEventListener("click", getUser);
//
function getUser() {
  // by this time putting value in the element you are saying that the value should be updated everytime as opposed to putt it outside the function
  let userGit = document.getElementById("user").value;
  console.log(userGit);

  fetch(`https://swapi.co/api/people/?search=${userGit}`)
    .then(res => {
      return res.json();
    })
    // below will refresh the results everytime
    .then(data => {
      // console.log(data);
      // console.log(data.results[0]);
      let output = "";
      // console.log(output);

      for (let i = 0; i < data.results.length; i++) {
        output += `
         <tr>
          <td>${data.results[i].name}</td>
          <td>${data.results[i].height}</td>
          <td>${data.results[i].hair_color}</td>
          <td>${data.results[i].mass}</td>
        </tr>
        <tr>
        </tr>
      `;
      }
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => {
      console.log(err);
      output.innerHTML = `<h1><span style="color:#33C3F0">User not Found</h1>`;
    });
}
