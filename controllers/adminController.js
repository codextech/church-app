
const adminHelper = require("../helpers/adminHelper");
const genericHelper = require("../helpers/genericHelper");









exports.addNewUser = async (req, res, next) => {
  var model = req.body;
  try {

     await  adminHelper.addUser(blogModel);
  } catch (error) {
  genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Blog Added",null);
}





exports.blogContent = async (req, res, next) => {
  try {

  } catch (error) {
  genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Blog Image",null);
}

exports.addBlog = async (req, res, next) => {
  var model = req.body;
  try {

  var imageUrl = genericHelper.getImageUrlFromArray(req, req.files[0]);
  const blogModel = {
    blogTitle: model.blogTitle,
    blogDescription: model.blogDescription,
    blogImage: imageUrl,
  }
     await  adminHelper.addBlog(blogModel);
  } catch (error) {
  genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Blog Added",null);
}

exports.getBlogDetails = async (req, res, next) => {
  var id = req.query.blogId;
  var blogDetails;
  try {
    blogDetails =  await  adminHelper.getSingleBlog(id);
  } catch (error) {
   genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Rquests",blogDetails);
}

/* User contact Requests */

exports.getContactRequests = async (req, res, next) => {
  var requests;
  try {
    requests =  await  adminHelper.getUserContactRequests();
  } catch (error) {
   genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Rquests",requests);
}

exports.readContactRequests = async (req, res, next) => {
  const contactId = req.query.contactId;
  try {
      await  adminHelper.contactRequestRead(contactId);
  } catch (error) {
   genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"",null);
}



/* Events */

exports.addGroup = async (req, res, next) => {
  var model = req.body;
  var group;
  try {

    group =  await  adminHelper.addGroup(model);
  } catch (error) {
  genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"group added",group);
}

exports.removeGroup = async (req, res, next) => {
  var id = req.query.categoryId;
  try {

      await  adminHelper.removeCategory(id);
  } catch (error) {
  genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Category Deleted",null);
}





exports.addEvent = async (req, res, next) => {
  var model = req.body;
  try {

  var imageUrl = genericHelper.getImageUrlFromArray(req, req.files[0]);
  const eventModel = {
    eventGroupId: model.eventGroupId,
    eventTitle: model.eventTitle,
    eventShortDescription: model.eventShortDescription,
    eventDescription: model.eventDescription,
    eventImage: imageUrl,
    eventDate: model.eventDate,
    location: model.location
  }
     await  adminHelper.addEvent(eventModel);
  } catch (error) {
  genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Event Added",null);
}




exports.removeEvent = async (req, res, next) => {
  var id = req.query.categoryId;
  try {

      await  adminHelper.removeCategory(id);
  } catch (error) {
  genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Category Deleted",null);
}
