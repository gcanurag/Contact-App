const { contacts } = require('../model');
const db = require('../model/index');
const sequelize = db.sequelize;



exports.index = (req, res) => {
    res.render('index');
}


exports.renderAddContactForm = (req, res) => {
    res.render('addContactForm');
}

exports.addNewContact = async (req, res) => {
    const { name, contact, email } = req.body;
    if (!name || !contact || !email) {
        res.send("Please enter name contact number and email");
    } else {
        const userExists = await contacts.findOne({ where: { email: email } });
        const userExists1 = await contacts.findOne({ where: { contact: contact } });
        if (!userExists && !userExists1) {
            await contacts.create({
                name: name,
                contact: contact,
                email: email,
            });
            // res.send("Contact Added Successfully");
            res.redirect('myConracts');
        } else {
            res.send("Contact with provided data already exists")
        }

    }
}

exports.myContact = async (req, res) => {
    const contact = await contacts.findAll();
    res.render('myContacts', { contact });
}


exports.deleteContact = async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    await contacts.destroy({ where: { id: id } });
    res.redirect("/myContacts");
}


exports.renderEditContactForm = async (req, res) => {
    const id = req.params.id;

    const contact = await contacts.findAll({
        where: {
            id: id
        }
    })
    res.render('editContact', { contact });
}


exports.editContact = async (req, res) => {
    const { name, contact, email } = req.body;
    
    await contacts.update({
        name, contact, email
    }, {
        where:
        {
            id: req.params.id,
       
    }})
    res.redirect("/myContacts");
}



