require('dotenv').config();

// console.log('Loaded Environment Variables:', process.env);
module.exports = {
    baseURL    : process.env.BASE_URL||'https://dev1.cyberprimatama.id/',
    browser    : process.env.BROWSER||'chrome',
    credentials : {
        emailSuperAdmin     :process.env.SUPER_ADMIN,
        emailIntern         :process.env.INTERN,
        emailDepartmenAdmin :process.env.DEPARTMENT_ADMIN,
        emailUnvSupervisor  :process.env.UNV_SUPERVISOR,
        emailMentor         :process.env.MENTOR,
        Password            :process.env.PASSWORD
    }
}