
const adminHelper = require("../helpers/adminHelper");
const genericHelper = require("../helpers/genericHelper");









exports.addNewUser = async (req, res, next) => {
  var model = req.body;
  try {

   const userName = await  adminHelper.findUserByName(model.name);
    if (userName) {
  genericHelper.jsonResponse(res,400,"Name already in use!",null);
    }

     await  adminHelper.addUser(model);
  } catch (error) {
  genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"User Added",null);
}


exports.getUsers = async (req, res, next) => {
  var users;
  try {
    users =  await  adminHelper.getUsers();
  } catch (error) {
   genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"users",users);
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

    if (model.eventGroupId == 'null') {
      model.eventGroupId = null
    }

  var imageUrl = genericHelper.getImageUrlFromArray(req, req.files[0]);
  const blogModel = {
    blogTitle: model.blogTitle,
    blogDescription: model.blogDescription,
    blogImage: imageUrl,
    eventGroupId : model.eventGroupId
  }
     await  adminHelper.addBlog(blogModel);
  } catch (error) {
  genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Blog Added",null);
}

exports.addMedia = async (req, res, next) => {
  var model = req.body;
  try {

  var videoUrl = genericHelper.getImageUrlFromArray(req, req.files[0]);
  const mediaObj = {
    title: model.title,
    description: model.description,
    video: videoUrl,
  }
     await  adminHelper.addMedia(mediaObj);
  } catch (error) {
  genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Media Added",null);
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


/* Subscribers */

exports.getSubscribers = async (req, res, next) => {
  var data;
  try {
    data =  await  adminHelper.getSubscribers();
  } catch (error) {
   genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"data",data);
}

/* Events */

exports.addGroup = async (req, res, next) => {
  var model = req.body;
  var group;
  var groupImage
  try {


    if (req.files['image'][0]) {
      groupImage = genericHelper.getImageUrlFromArray(req, req.files['image'][0]);
    }

    group =  await  adminHelper.addGroup(model, groupImage);
  } catch (error) {
  genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"group added",group);
}

exports.removeGroup = async (req, res, next) => {
  var id = req.query.groupId;
  try {

      await  adminHelper.removeGroup(id);
  } catch (error) {
  genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Group Deleted",null);
}





exports.addEvent = async (req, res, next) => {
  var model = req.body;
  try {

    if (model.eventGroupId == 'null') {
      model.eventGroupId = null
    }

  var imageUrl = genericHelper.getImageUrlFromArray(req, req.files[0]);
  const eventModel = {
    eventGroupId: model.eventGroupId,
    eventTitle: model.eventTitle,
    eventShortDescription: model.eventShortDescription,
    eventDescription: model.eventDescription,
    eventImage: imageUrl,
    eventDate: model.eventDate,
    location: model.location,
    eventGroupId: model.eventGroupId
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
