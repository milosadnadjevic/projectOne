const $firstName = $('#first_name');
const $lastName = $('#last_name');
const $position = $('#position');
const $team = $('#team')
const $conference = $('#conference')
const $input = $('input[type="text"]')

let playerData, userInput;

$("form").on("submit", handleGetData)

function handleGetData(event) {
  event.preventDefault()
  
  userInput = $input.val()
  console.log(userInput)
  $.ajax({
    url: "https://www.balldontlie.io/api/v1/players?search=" + userInput,
  }).then(
    (data) => {
      playerData = data.data[0]
      render()
    },
    (error) => {
      console.log("bad request", error)
    }
  )
}

function render() {
    $firstName.text(playerData.first_name);
    $lastName.text(playerData.last_name);
    $position.text(playerData.position);
    $team.text(playerData.team.full_name);
    $conference.text(playerData.team.conference);
}


