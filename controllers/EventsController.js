const Events = require('../models').Events;
const validator = require('validator');

const create = async function (req, res) {
  res.setHeader('ContentType', 'application/json');
  let err, event, eventInfo;
  eventInfo = req.body;

  if (!eventInfo.name) {
    return ReE(res, 'Please enter an name of Event', 422);
  } else if (!eventInfo.location) {
    return ReE(res, 'Please enter the location of Event', 422);
  } else {
    [err, event] = await to(Events.create(eventInfo));
    if (err) {
      return ReE(res, err, 422);
    }
      return res.json({ success: false, error: err });
    }
  
    [err, event] = await to(Events.save());
    if (err) {
      return ReE(res, err, 422);
    }  
    return ReS(res, event, 201);
}
module.exports.create = create;

const update = async function (req, res) {
  let err, event, data;
  event = req.event;
  data = req.body;
  event.set(data);  //sequelize set command 
  [err, event] = await to(Events.save());     //sequelize save() 
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

  [err, event] = await to(Events.findAll({ where: whereStatement }))
  if (err) TE(err.message);
  
  return res.json(event);
}

module.exports.getAll = getAll;

const get = async (req, res) => {
  let err, event;
  let eventId = parseInt(req.params.currentEventId);

  res.setHeader('Content-Type', 'application/json');
  [err, event] = await to(Events.findByPk(eventId));
  if (!event) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
  return res.json(event);
}
module.exports.get = get;

