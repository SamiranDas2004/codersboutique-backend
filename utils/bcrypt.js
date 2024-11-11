import bcrypt from 'bcrypt'

export const hashingPassword = async (password, saltRounds = 10) => {
    return await bcrypt.hashSync(password, saltRounds, function (err, hash) {
        if (err) throw new Error(err)
        else return hash
    });
}

export const decodedPassword = async (clientPassword, userPassword) => {
    return await bcrypt.compare(clientPassword, userPassword);
}
