const {
    user, sequelize: { query }, Sequelize: { QueryTypes, Op }
} = require('./models');

const bulkInsertUser = async (users) => user.bulkCreate(users);

const setUserCreator = async ({ UserName, Parent }) => {
    const [{ id }, { id: parent_id }] = await Promise.all([
        user.findOne({ where: { UserName } }), user.findOne({ where: { UserName: Parent } })
    ]);

    return user.update({ Parent: parent_id }, { where: { id } });
}

const showUserParents = async () => [];

const dropUsers = async () => user.destroy({ where: { id: { [Op.gt]: 0 } } });

module.exports = {
    bulkInsertUser,
    showUserParents,
    setUserCreator,
    dropUsers
}