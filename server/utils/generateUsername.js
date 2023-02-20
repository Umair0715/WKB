const generateUsername = async (Model , username) => {
    try {
        const user = await Model.findOne({ username });
        if(user){
            console.log('no can do try again: ' + username);
            username += Math.floor((Math.random() * 100) + 1);
            return generateUsername(Model , username);
        }
        console.log('unique name is ' + username);
        return username;
    } catch (error) {
        console.log('username error' , error);
        throw error;
    }
}

module.exports = generateUsername;