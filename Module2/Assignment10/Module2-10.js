let candidateCount = parseInt(prompt("Enter the number of candidates:"));

if (isNaN(candidateCount) || candidateCount < 1) {
    alert("Invalid input.");
} else {
    let candidates = [];
    for (let i = 0; i < candidateCount; i++) {
        let Name = prompt("Enter name for candidate " + (i + 1) + ":");
        candidates.push({
            name: Name,
            votes: 0
        });
    }

    let voterCount = parseInt(prompt("Enter the number of voters:"));
    if (isNaN(voterCount) || voterCount < 1) {
        alert("Please enter a valid number of voters.");
    } else {
        for (let i = 0; i < voterCount; i++) {
            let vote = prompt("Voter " + (i + 1) + ", enter the name of the candidate you want to vote for:");

            let found = false;
            for (let j = 0; j < candidates.length; j++) {
                if (candidates[j].name.toLowerCase() === vote.toLowerCase()) {
                    candidates[j].votes += 1;
                    found = true;
                    break;
                }
            }
        }

        candidates.sort((a, b) => b.votes - a.votes);

        console.log("Voting results:");
        candidates.forEach(candidate => {
            console.log(candidate.name + ": " + candidate.votes + " votes");
        });

        console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.");
    }
}
