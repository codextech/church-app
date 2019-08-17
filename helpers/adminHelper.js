
const Blog = require("../models/blog");
const Contact = require("../models/contact");
const  NewsLetter = require("../models/news-letter");
const Group = require("../models/event-group");
const Event = require("../models/event");
const Media = require("../models/media");
const User = require("../models/user");
const ChurchLocation = require("../models/church-location");
const genericHelper = require("../helpers/genericHelper");

const bcrypt = require("bcryptjs");



/* Add user */
exports.addUser = async (model) => {

  try {

    var hash = await bcrypt.hashSync(model.password, bcrypt.genSaltSync(10));

      await User.create({
      name: model.name,
      readablePassword: model.password,
      password: hash,
      eventGroupId: model.eventGroupId
    });

  } catch (error) {
     console.log(error);
  }
}


// get users

exports.getUsers = async () => {

  var users;
  try {

     // check  unique name
     users = await User.findAll({
      include: [
        { model: Group },
    ]
     });

  } catch (error) {
    console.log(error);
  }
  return users;
}


// find user by name

exports.findUserByName = async (name) => {

  var user;
  try {

     // check  unique name
     user = await User.findOne({where: { name: name}});

  } catch (error) {
    console.log(error);
  }
  return user;
}


exports.getSubscribers = async () => {

  var data;
  try {

    data = await NewsLetter.findAll({
      order: [['createdAt', 'DESC']]
    });

  } catch (error) {
    console.log(error);
  }
  return data;
}

/* Contacts */

exports.getUserContactRequests = async () => {

  var requests;
  try {

    requests = await Contact.findAll({
      order: [['createdAt', 'DESC']],
      where : {isRead : false}
    });

  } catch (error) {
    console.log(error);
  }
  return requests;
}



exports.contactRequestRead = async (id) => {

  try {

    await Contact.update({
      isRead : true
    },
      {
        where: { contactId: id }
      }
    );

  } catch (error) {
    console.log(error);
  }
}


/* Locations */

exports.addLocation = async (model) => {

  try {
     await ChurchLocation.create(model);
  } catch (error) {
     console.log(error);
  }
}

exports.deleteLocation  = async (id) => {

  try {
     await ChurchLocation.destroy({
       where: {id: id}
     });
  } catch (error) {
     console.log(error);
  }
}

/* Media */

exports.addMedia = async (model) => {

  try {
     await Media.create(model);
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






exports.addGroup = async (model,groupImage) => {

  var group;
  try {
    group = await Group.create({
       name : model.name,
       isDefault: model.isDefault,
       description: model.description,
       image: groupImage
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



/* Event */

exports.addEvent = async (model) => {

  try {
     await Event.create(model);
  } catch (error) {
     console.log(error);
  }
}
