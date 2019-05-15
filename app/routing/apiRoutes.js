const friends = require("../data/friends");
module.exports = function (app) {

    app.get(
        "/api/friends",
        function (req, res) {
            return res.json(friends);
        });
    app.post(
        "/api/friends",
        function (req, res) {
            let match = {
                name: "",
                photo: "",
                matchDiff: 500
            };

            let trainerAnswers = req.body;
            // console.log(trainerAnswers);
            // console.log("^^^^");
            
            
            let trainerScores = trainerAnswers.scores;
            let totalDifference = 0;

            for (let index = 0; index < friends.length; index++) {
                const element = friends[index];
                totalDifference = 0;
                console.log("This is for ", element.name);
                console.log("=====");
                

                for (let i = 0; i < friends[index].socres.length; i++) {
                    const element = friends[index].socres[i];
                    console.log(">>", Math.abs(Number(trainerScores[i] - Number(element))));
                    
                    totalDifference += Math.abs(Number(trainerScores[i]) - Number(element));
                }
                if (totalDifference <= match.matchDiff) {
                    // console.log(totalDifference);
                    console.log("New match is ", friends[index].name);
                    match.name = friends[index].name;
                    match.photo = friends[index].photo;
                    match.matchDiff = totalDifference;
                }
            }
            res.json(match);
        }
    );
};