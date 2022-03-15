/**
 * Controller for user routes
 */


exports.getUser = async (req, res) => {

    // Valida se o usuário existe
    const GetUser = require('../domains/GetUser');

    try {
        var User = await GetUser(req.params.username);

        // Retorna os dados do usuário
        return res.status(200).send({
            data: User,
        });
    } catch (error) {
        return res.status(404).send({
            data: User,
        });

    }
}