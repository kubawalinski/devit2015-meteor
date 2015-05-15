if (Notes.find().count() === 0) {
    Notes.insert({text: "web standards FTW"});
    Notes.insert({text: "unicode is king"});
    Notes.insert({text: "start using Docker"});
};