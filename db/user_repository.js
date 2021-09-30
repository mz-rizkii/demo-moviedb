const {
    user, sequelize, Sequelize: { qu, QueryTypes, Op }
} = require('./models');

const bulkInsertUser = async (users) => user.bulkCreate(users);

const setUserCreator = async ({ UserName, Parent }) => {
    const [{ id }, { id: parent_id }] = await Promise.all([
        user.findOne({ where: { UserName } }), user.findOne({ where: { UserName: Parent } })
    ]);

    return user.update({ Parent: parent_id }, { where: { id } });
}

const showUserParents = async () => sequelize.query(`select u.id, u.UserName, p.UserName Parent 
from user u 
left join user p on p.id = u.Parent`, { type: QueryTypes.SELECT });

const dropUsers = async () => user.destroy({ where: { id: { [Op.gt]: 0 } } });

module.exports = {
    bulkInsertUser,
    showUserParents,
    setUserCreator,
    dropUsers
}