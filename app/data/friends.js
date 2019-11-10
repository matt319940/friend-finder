var friends = [];

function Friend(name, photo, scores){
    this.name = name;
    this.photo = photo;
    this.scores = scores;
};

var matt = new Friend(
    "Matt",
    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/18622242_10203498977392122_4842776264047503599_n.jpg?_nc_cat=101&_nc_oc=AQkfxc7Oq_c8McqC8cE1h7GHzR7GhOGhzGydGUlwnxU6SMHmIS9bsfVEtvQrm-1Eumu1t8kT5qIQc_mMk28SMx6M&_nc_ht=scontent-ort2-1.xx&oh=18c0883277522bf8e8dfaf1bc7b65891&oe=5E4AC7A0",
    [
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
    ]
);
var alaina = new Friend(
    "Alaina",
    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/18622242_10203498977392122_4842776264047503599_n.jpg?_nc_cat=101&_nc_oc=AQkfxc7Oq_c8McqC8cE1h7GHzR7GhOGhzGydGUlwnxU6SMHmIS9bsfVEtvQrm-1Eumu1t8kT5qIQc_mMk28SMx6M&_nc_ht=scontent-ort2-1.xx&oh=18c0883277522bf8e8dfaf1bc7b65891&oe=5E4AC7A0",
    [
        "3",
        "5",
        "2",
        "1",
        "4",
        "3",
        "2",
        "4",
        "3",
        "2"
    ]
);

friends.push(matt, alaina);

module.exports = friends;
