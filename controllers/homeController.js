const homeHelper = require("../helpers/homeHelper");
const genericHelper = require("../helpers/genericHelper");




/* add user Contact request */
exports.addContactRequest = async (req, res, next) => {
  const model = req.body;
  try {
     await  homeHelper.addContactRequest(model);

  } catch (error) {
   genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Rquest Added",null);
}


exports.getBlogs = async (req, res, next) => {
  var blogs;
  try {
    blogs = await  homeHelper.getBlogs();

  } catch (error) {
  genericHelper.jsonResponse(res,500,"bad request",error);

  }
  genericHelper.jsonResponse(res,200,"Blogs",blogs);

}


exports.getBlogById = async (req, res, next) => {
  var blogId = req.query.blogId;
  var blog;
  try {
      blog = await  homeHelper.getBlogDetails(blogId);
      if (blog == null) {
  genericHelper.jsonResponse(res,400,"Something Wrong",null);
      }

  } catch (error) {
  genericHelper.jsonResponse(res,400,"bad request",error);

  }
  genericHelper.jsonResponse(res,200,"",blog);
}


/* Events */


exports.getGroups = async (req, res, next) => {
  var groups;
  try {
    groups = await  homeHelper.getGroups();

  } catch (error) {
  genericHelper.jsonResponse(res,500,"bad request",error);

  }
  genericHelper.jsonResponse(res,200,"groups",groups);

}




exports.addNewsLetter = async (req, res, next) => {
  const model = req.body;
  try {
     await  homeHelper.addToNewsLetter(model);

  } catch (error) {
   genericHelper.jsonResponse(res,500,"Bad Request",error);
  }
  genericHelper.jsonResponse(res,200,"Rquest Added",null);
}


exports.getEvents = async (req, res, next) => {
  var events;
  try {

    events = await  homeHelper.getEvents();

  } catch (error) {
  genericHelper.jsonResponse(res,500,"bad request",error);

  }
  genericHelper.jsonResponse(res,200,"events",events);

}

exports.getMedia = async (req, res, next) => {
  var media;
  try {

    media = await  homeHelper.getMedia();

  } catch (error) {
  genericHelper.jsonResponse(res,500,"bad request",error);

  }
  genericHelper.jsonResponse(res,200,"media",media);

}



exports.getEventById = async (req, res, next) => {
  var eventId = req.query.eventId;
  var event;
  try {
    event = await  homeHelper.getEventDetails(eventId);
      if (event == null) {
  genericHelper.jsonResponse(res,400,"Something Wrong",null);
      }

  } catch (error) {
  genericHelper.jsonResponse(res,400,"bad request",error);

  }
  genericHelper.jsonResponse(res,200,"",event);
}
