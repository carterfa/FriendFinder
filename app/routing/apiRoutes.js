app.get("/api/friends", function (req, res) {
    return res.json(friends);
})

app.post("/api/friends", function (req, res) {

    const newFriend = req.body;
    
    function findFriend(newFriend, friends){
    
        let match = {};
        let currentDifference = 99;
        
        //goes through friend array
        for (let j = 0; j < friends.length; j++) {
            let totalDifference = 0;
            //compares answers
            for (let i = 0; i < friends[j].scores.length; i++) {
                totalDifference += Math.abs(newFriend.scores[i] - friends[j].scores[i])
        
            }
        
            if (totalDifference < currentDifference) {
                match = friends[j];
                currentDifference = totalDifference;
                
            }
        }
        
        return match;
        
        }

    res.send(findFriend(newFriend, friends));

})