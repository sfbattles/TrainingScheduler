const Events = require('../models').events;
const validator = require('validator');

const create = async function (req, res) {
  res.setHeader('ContentType', 'application/json');
  const body = req.body;

  if (!body.name) {
    return ReE(res, 'Please enter an name of Event', 422);
  } else if (!body.location) {
    return ReE(res, 'Please enter the location of event', 422);
  } else {
    let err, event

    [err, event] = await to(event.save());
    if (err) return ReE(res, err, 422);
    return ReS(res, event, 201);
  }
}
module.exports.create = create;

const createEvent = async function (eventInfo) {
  let err;
  if (validator.isEmail(eventInfo.email)) {
    [err, event] = await to(Events.create(eventInfo));
    if (err) TE('event already exists with that email');
    return event;
  } else {
    TE('Email is invalid');
  }
}
module.exports.createEvent = createEvent;

const update = async function (req, res) {
  let err, event, data;
  event = req.event;
  data = req.body;
  event.set(data);  //sequelize set command 
  [err, event] = await to(event.save());     //sequelize save() 
  if (err) {
    if (typeof err == 'object' && typeof err.message != 'undefined') {
      err = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;
    res.statusCode = 422
    return res.json({ success: false, error: err });
  }

  return res.json(event);
}
module.exports.update = update;
