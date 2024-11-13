window.onload = function listParticipants() {
    let participantCount = parseInt(prompt("Enter the number of participants:"));
    let participants = [];
    for (let i = 0; i < participantCount; i++) {
        participants.push(prompt("Enter the name of participant " + (i + 1) + ":"));
    }

    participants.sort();

    let listHtml = "<ol>";
    for (let i = 0; i < participants.length; i++) {
        listHtml += "<li>" + participants[i] + "</li>";
    }
    listHtml += "</ol>";

    document.body.innerHTML += listHtml;
}
