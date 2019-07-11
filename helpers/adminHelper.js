
const Blog = require("../models/blog");
const Contact = require("../models/contact");
const Group = require("../models/event-group");
const Event = require("../models/event");
const User = require("../models/user");
const genericHelper = require("../helpers/genericHelper");

/* Contacts */

exports.getUserContactRequests = async () => {

  try {

    await Contact.findAll({
      order: [['createdAt', 'DESC']],
    },{where : {isRead : false}});

  } catch (error) {
    console.log(error);
  }
}



exports.contactRequestRead = async (contactId) => {

  try {

    await Contact.update({
      isRead : true
    },
      {
        where: { contactId: contactId }
      }
    );

  } catch (error) {
    console.log(error);
  }
}


/* Blog */

exports.addBlog = async (model) => {

  try {
     await Blog.create(model);
  } catch (error) {
     console.log(error);
  }
}




/* App Calculator */

exports.addGroup = async (model) => {

  var group;
  try {
    group = await Group.create({
       name : model.name,
       isDefault: model.isDefault
     });
  } catch (error) {
     console.log(error);
  }
  return group;
}


exports.removeGroup = async (id) => {

  try {
     await Group.destroy({
       where: {eventGroupId: id}
     });
  } catch (error) {
     console.log(error);
  }
}



exports.getCustomerAppRequests = async () => {

  var appRequests;
  try {

   appRequests =  await AppEstimate.findAll({
      include: [{
        model: SubCategory,
        as: 'subCategories',
      }],
      order: [['createdAt', 'DESC']],
  })

    // subCategories = await Category.findAll({
    //   order: [['createdAt', 'DESC']],
    //   include: [{model: SubCategory, as: 'subcategories'}]
    // });

  } catch (error) {
      console.log(error);
  }
  return appRequests;
}


/* Event */

exports.addEvent = async (model) => {

  try {
     await Event.create(model);
  } catch (error) {
     console.log(error);
  }
}
