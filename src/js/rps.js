function outcome(player, opponent)
{
    if (player == opponent)
    {
        return ('draw');
    }

    if (player == 'rock')
    {
        if (opponent == 'paper')
        {
            return ('lose');
        }

        else
        {
            return ('win');
        }
    }

    if (player == 'paper')
    {
        if (opponent == 'scissors')
        {
            return ('lose');
        }

        else
        {
            return ('win');
        }
    }

    if (player == 'scissors')
    {
        if (opponent == 'rock')
        {
            return ('lose');
        }

        else
        {
            return ('win');
        }
    }
}


function choose(choices)
{
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}


function playRound(choice)
{
    var options = ['rock', 'paper', 'scissors'];
    var ai_choice = choose(options);
    var roundOutcome = outcome(choice, ai_choice);
    document.getElementById("ai_choice").innerHTML = `Computer played: ${ai_choice[0].toUpperCase() + ai_choice.slice(1)}`;
    document.getElementById("outcome").innerHTML = `You ${roundOutcome}!`;
}