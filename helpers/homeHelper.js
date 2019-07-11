
var Sequelize = require('sequelize');
var Op = Sequelize.Op;


const Blog = require("../models/blog");
const Contact = require("../models/contact");
const Group = require("../models/event-group");
const Event = require("../models/event");
const NewsLetter = require("../models/news-letter");
const genericHelper = require("../helpers/genericHelper");



exports.addContactRequest = async (model) => {

  try {

     await Contact.create(model);

  } catch (error) {
     console.log(error);
  }
}

exports.addToNewsLetter = async (model) => {

  try {

     await NewsLetter.create(model);

  } catch (error) {
     console.log(error);
  }
}




exports.getBlogs = async () => {

  var blogs;
  try {

    blogs = await Blog.findAll({
      order: [['blogId', 'DESC']],
    });

  } catch (error) {
      console.log(error);
  }
  return blogs;
}


exports.getBlogDetails = async (id) => {
  var blog;
  try {
    blog = await Blog.findOne({ where: {blogId: id} });

  } catch (error) {
      console.log(error);
  }
  return blog;
}



/* Events */


exports.getGroups = async () => {

  var groups;
  try {

    groups = await Group.findAll({
      order: [['createdAt', 'DESC']],
      include: [{model: Event, as: 'events'}]
    });

  } catch (error) {
      console.log(error);
  }
  return groups;
}



exports.getEvents = async () => {

  var events;
  try {


    events = await Event.findAll({
      order: [['eventDate', 'DESC']],
    });

  } catch (error) {
      console.log(error);
  }
  return events;
}



exports.getEventDetails = async (id) => {
  var event;
  try {
    event = await Event.findOne({ where: {eventId: id} });

  } catch (error) {
      console.log(error);
  }
  return event;
}
