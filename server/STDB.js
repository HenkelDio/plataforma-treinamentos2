
const {Sequelize, DataTypes } = require("sequelize");

const DB = new Sequelize("treinamentos", "Emanuel", "Emanuel2002", {
    host: "localhost",
    dialect: "mysql",
    logging: false
})

let conex = false
try {
    DB.authenticate()
    conex = true
    console.log("Conexão com o banco de dados efetuada com sucesso!")
} catch {
    console.log("Erro ao efetuar a conexão com o banco de dados!")
}

if (conex) {

    const Admins = DB.define("Admins", {
        admin_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        admin_name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        admin_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admin_password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    const Companies = DB.define("Companies", {
        company_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        company_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        company_contact: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        company_register: {
            type: DataTypes.STRING(14),
            allowNull: false
        },
        company_telephone: {
            type: DataTypes.STRING(11),
            allowNull: true
        },
        company_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company_password: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    })

    const Users = DB.define("Users", {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_company_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Companies,
                key: "company_id"
            }
        }, 
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_register: {
            type: DataTypes.STRING(11),
            allowNull: false
        }, 
        user_telephone: {
            type: DataTypes.STRING(11),
            allowNull: false
        }, 
        user_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    const Courses = DB.define("Courses", {
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            autoIncrement: true, 
            primaryKey: true
        },
        course_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content_path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        course_hours: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        registrations: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    const CompaniesRegistrations = DB.define("CompaniesRegistrations", {
        company_registration_id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            allowNull: false, 
            autoIncrement: true
        }, 
        company_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Companies, 
                key: "company_id"
            }
        }, 
        course_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Courses, 
                key: "course_id"
            }
        },
        n_users: {
            type: DataTypes.INTEGER, 
            defaultValue: 0
        }
    })

    const UsersRegistrations = DB.define("UsersRegistrations", {
        user_registration_id: {
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            allowNull: false, 
            autoIncrement: true
        }, 
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        course_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Courses,
                key: "course_id"
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "incomplete"
        }
    })

    DB.sync()
}
module.exports = DB;