
const DB = require("./STDB");

const insertions = async _ => {

    await DB.models.Admins.create({
        admin_name: "Emanuel Henkel",
        admin_email: "emanuel.henkel@gmail.com",
        admin_password: "Emanuel2002"
    });
    
    await DB.models.Companies.create({
        company_name: "Souza Treinamentos",
        company_contact: "Souza",
        company_register: "19003553000126",
        company_telephone: "",
        company_email: "root@st.com.br",
        company_password: "root"
    });
    
    await DB.models.CompaniesRegistrations.create({
        company_id: 1
    })
}
insertions()