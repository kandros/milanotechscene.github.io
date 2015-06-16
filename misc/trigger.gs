var SPREADSHEET_ID = '<OMISSIS>';
var GROUPS_SHEET_NAME = '<OMISSIS>';
var MILANO_TECH_SCENE_SPREADSHEET = SpreadsheetApp.openById(SPREADSHEET_ID);
var GROUPS_SHEET = MILANO_TECH_SCENE_SPREADSHEET.getSheetByName(GROUPS_SHEET_NAME);
var GROUPS_JSON_FILE_ID = '<OMISSIS>';
var GROUPS_JSON_FILE = DriveApp.getFileById(GROUPS_JSON_FILE_ID);

function decorate(object) {
  this.withFunction = function (name) {
    object[name] = this[name];
    return object;
  }
  return this;
}

function andThen(f) {
  return decorate(f(this)).withFunction('andThen');
}

// Gets the raw values with an handy `andThen` function defined on it for further processing
function getAllRawValuesOf(sheet) {
  var rawValues = sheet.getSheetValues(1, 1, sheet.getLastRow(), sheet.getLastColumn());
  return decorate(rawValues).withFunction('andThen');
}

// Makes the raw data into a reasonable JSON value (basically, the first row defines the keys)
function formatThem(rawValues) {
  var keys = rawValues[0];
  return rawValues.slice(1).map(function (value) {
    return keys.reduce(function (object, key, index) {
      object[key] = value[index];
      return object;
    }, {});
  });
}

function sheetToJson(sheet) {
  return getAllRawValuesOf(sheet).andThen(formatThem).andThen(JSON.stringify);
}

function updateJson() {
  GROUPS_JSON_FILE.setContent(sheetToJson(GROUPS_SHEET));
}

function installTrigger() {
  ScriptApp.newTrigger('updateJson').forSpreadsheet(MILANO_TECH_SCENE_SPREADSHEET).onEdit().create();
}

