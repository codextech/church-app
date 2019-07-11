

const EventGroup = require("../models/event-group");
const Event = require("../models/event");
const User = require("../models/user");





exports.allTableRealtions = () => {


/* User & Group */
  User.belongsTo(EventGroup, {foreignKey: 'eventGroupId'});
  EventGroup.hasMany(User, {foreignKey: 'eventGroupId'});


/* Event & EventGroup */

  EventGroup.hasMany(Event, {foreignKey: 'eventGroupId'});
   Event.belongsTo(EventGroup, {foreignKey: 'eventGroupId'});

}
