import bcrypt from 'bcryptjs'


const users = [
    {
        name:'Admin User',
        email:'admin@email.com',
        password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10),
        isAdmin:true
    },
    {
        name:'John Doe',
        email:'doe@email.com',
        password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10),
        isAdmin:false
    },
    {
        name:'Maverick',
        email:'mav@email.com',
        password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10),
        isAdmin:false
    },
]

export default users;