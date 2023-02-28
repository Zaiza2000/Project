const fs = require("fs");
const path = "./logs/requisition_id.log";

function write_log_file(requisition_id) {
  fs.writeFileSync(path, requisition_id, (err) => {
    if (err) throw err;
    else {
      console.log(requisition_id + " was writed to log file.");
    }
  });
}

function append_log_file(requisition_id) {
  let text = "\n" + requisition_id;
  fs.appendFileSync(path, text, (err) => {
    if (err) throw err;
    else {
      console.log(requisition_id + " was appending to log file.");
    }
  });
}

function read_log_file() {
  let content;
  try {
    content = fs.readFileSync(path, "utf-8");
  } catch (err) {
    if (err.code == "ENOENT") {
      const requisition_id_number = 0;
      const requisition_id = parse_requisition_id(requisition_id_number);
      return [requisition_id];
    } else {
      throw err;
    }
  }

  const output = content.split(/\r?\n/);
  return output;
}

function get_tail(requisition_list) {
  const lastest = requisition_list.pop();
  return lastest;
}

function parse_requisition_id(number) {
  // TODO: If you wanna change prefix name
  prefix = "RID";
  requisition_id = number.toLocaleString("en-US", {
    minimumIntegerDigits: 6,
    useGrouping: false,
  });
  output = prefix + requisition_id;
  return output.toString();
}

function extract_number_from_requisition_id(requisition_id) {
  var thenum = requisition_id.replace(/^\D+/g, "");
  return thenum;
}

function text_to_number(text) {
  return parseInt(text);
}

function get_latest_requisition_id() {
  requisition_list = read_log_file();
  lastest = get_tail(requisition_list); // ORD000001
  new_requisition_id = parse_requisition_id(
    text_to_number(extract_number_from_requisition_id(lastest)) + 1
  );
  append_log_file(new_requisition_id);
  //   console.log(new_requisition_id);
  return new_requisition_id;
}

module.exports = { get_latest_requisition_id };
