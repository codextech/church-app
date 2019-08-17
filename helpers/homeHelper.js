
var Sequelize = require('sequelize');
var Op = Sequelize.Op;


const Blog = require("../models/blog");
const Contact = require("../models/contact");
const Group = require("../models/event-group");
const Event = require("../models/event");
const Media = require("../models/media");
const NewsLetter = require("../models/news-letter");
const User = require("../models/user");
const ChurchLocation = require("../models/church-location");
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
      include: [{model: Group, as: 'eventGroup'}]
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


/* locations */

exports.getLocations = async () => {

  var locations;
  try {

    locations = await ChurchLocation.findAll();

  } catch (error) {
      console.log(error);
  }
  return locations;
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

/* Media */
exports.getMedia = async () => {

  var media;
  try {


    media = await Media.findAll({
      order: [['createdAt', 'DESC']],
    });

  } catch (error) {
      console.log(error);
  }
  return media;
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
