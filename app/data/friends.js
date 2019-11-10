var friends = [];

function Friend(name, photo, scores){
    this.name = name;
    this.photo = photo;
    this.scores = scores;
};

var matt_alaina = new Friend(
    "Matt & Alaina",
    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/18622242_10203498977392122_4842776264047503599_n.jpg?_nc_cat=101&_nc_oc=AQkfxc7Oq_c8McqC8cE1h7GHzR7GhOGhzGydGUlwnxU6SMHmIS9bsfVEtvQrm-1Eumu1t8kT5qIQc_mMk28SMx6M&_nc_ht=scontent-ort2-1.xx&oh=18c0883277522bf8e8dfaf1bc7b65891&oe=5E4AC7A0",
    [
        "2",
        "3",
        "5",
        "1",
        "4",
        "5",
        "4",
        "5",
        "2",
        "1"
    ]
);
var ray_rachel = new Friend(
    "Ray & Rachel",
    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/45862_10200844692466636_574631309_n.jpg?_nc_cat=110&_nc_oc=AQn_KpZ6rHRthauCr5E5OK8-2wt_gQoxOpMmUzQxTT1d5GK_fiUYSG7T_JFQezeTtQk&_nc_ht=scontent-ort2-1.xx&oh=3f3b6a525537e419459b3e30c7e7a745&oe=5E42B5AD",
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

var rytz_jay = new Friend(
    "Rytz & Jay Jay",
    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/198210_104100866340023_5016649_n.jpg?_nc_cat=104&_nc_oc=AQk2cVWBWuJMY49LbVuRuCahidnZScrEWMYGDDSUdFJmSOiDFIIXsOVU7HlQOql772Y&_nc_ht=scontent-ort2-1.xx&oh=f7d5caf25ba46ae4afbb3c6292b3be49&oe=5E6188CA",
    [
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1"
    ]
);

friends.push(matt_alaina, ray_rachel, rytz_jay);

module.exports = friends;
