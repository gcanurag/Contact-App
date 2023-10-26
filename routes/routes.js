const { index, renderAddContactForm, addNewContact, myContact, deleteContact, editContact, renderEditContactForm } = require("../controller/controller");

const router = require("express").Router();



router.route('/').get(index);
router.route('/addContact').get(renderAddContactForm).post(addNewContact);
router.route('/myContacts').get(myContact);
router.route('/delete/:id').get(deleteContact);
router.route('/edit/:id').get(renderEditContactForm).post(editContact);




module.exports = router;