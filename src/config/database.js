module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'gobarber',
    define: {
        timestamps: true, // padroniza o create_at, update_att,
        underscored: true,
        underscoredAll: true,
    },
};
