const moment = require("moment");
const formmatMessage = (id, username, text) => {
  return {
    id,
    username,
    text,
    time: moment().format("h:mm a"),
  };
};

module.exports = {
  formmatMessage,
};
