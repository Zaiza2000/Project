const fs = require("fs");
const path = "./logs/order_id.log";

function write_log_file(order_id) {
  fs.writeFileSync(path, order_id, (err) => {
    if (err) throw err;
    else {
      console.log(order_id + " was writed to log file.");
    }
  });
}

function append_log_file(order_id) {
  let text = "\n" + order_id;
  fs.appendFileSync(path, text, (err) => {
    if (err) throw err;
    else {
      console.log(order_id + " was appending to log file.");
    }
  });
}

function read_log_file() {
  let content;
  try {
    content = fs.readFileSync(path, "utf-8");
  } catch (err) {
    if (err.code == "ENOENT") {
      const order_id_number = 0;
      const order_id = parse_order_id(order_id_number);
      return [order_id];
    } else {
      throw err;
    }
  }

  const output = content.split(/\r?\n/);
  return output;
}

function get_tail(order_list) {
  const lastest = order_list.pop();
  return lastest;
}

function parse_order_id(number) {
  prefix = "ORD";
  order_id = number.toLocaleString("en-US", {
    minimumIntegerDigits: 6,
    useGrouping: false,
  });
  output = prefix + order_id;
  return output.toString();
}

function extract_number_from_order_id(order_id) {
  var thenum = order_id.replace(/^\D+/g, "");
  return thenum;
}

function text_to_number(text) {
  return parseInt(text);
}

function get_latest_order_id() {
  order_list = read_log_file();
  lastest = get_tail(order_list); // ORD000001
  new_order_id = parse_order_id(
    text_to_number(extract_number_from_order_id(lastest)) + 1
  );
  append_log_file(new_order_id);
  //   console.log(new_order_id);
  return new_order_id;
}

module.exports = { get_latest_order_id };
