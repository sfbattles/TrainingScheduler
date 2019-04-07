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

    [err, event] = await to(events.save());
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

const getAll = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let err, event;

  let whereStatement = {};
  if (req.query.name) {
    whereStatement.name = {
      $like: '%' + req.query.name + '%'
    };
  }

  [err, event] = await to(Events.findAll({ include: [{ model: Events }], where: whereStatement }))

  return res.json(event);
}

module.exports.getAll = getAll;

const get = async (req, res) => {
  let err, event;
 // let eventId = parseInt(req.params.currentEventId)
  let eventId = req.params.currentEventId[1]
  res.setHeader('Content-Type', 'application/json');
  console.log(eventId.length)
  console.log(eventId)
  console.log(Events)
  console.log(req.params)
  [err, event] = await to(Events.findById(eventId))
  if (!event) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
  return res.json(event);
}
module.exports.get = get;

