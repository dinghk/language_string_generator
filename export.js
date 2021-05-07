function exportToIOS() {
  var spreadsheet = SpreadsheetApp.getActive();
  var total = spreadsheet.getSheets().length;
  var enData = new Array();
  var tcData = new Array();

  for (var a=0; a<total; a++)
  {
    var sheet = spreadsheet.getSheets()[a]
    if (sheet.getSheetName() == 'en' || sheet.getSheetName() == 'tc') {
        // do nothing
    } else {
      enData.push([""])
      enData.push(['/*******************************'])
      enData.push(['* ' + sheet.getSheetName()])
      enData.push(['*******************************/'])

      tcData.push([""])
      tcData.push(['/*******************************'])
      tcData.push(['* ' + sheet.getSheetName()])
      tcData.push(['*******************************/'])

      var range = 'A2:C' + sheet.getLastRow().toString()
      sheet.getRange(range)
        .getValues()
        .forEach(function(r, i) {
          if (r[0] == "") {
            
          } else {
            enData.push(['"' + r[0] + '" = ' + '"' + r[1] + '";'])
            tcData.push(['"' + r[0] + '" = ' + '"' + r[2] + '";'])
          }
        });
    }
  }

  // Add to sheet
  var enSheet = spreadsheet.getSheetByName('en');
  var tcSheet = spreadsheet.getSheetByName('tc');
  enSheet.clearContents()
  tcSheet.clearContents()
  for (var i=0; i<enData.length; i++) {
    enSheet.getRange(1,1,enData.length, 1)
      .setValues(enData)
  }
  for (var i=0; i<tcData.length; i++) {
    tcSheet.getRange(1,1,tcData.length, 1)
      .setValues(tcData)
  }

}

function exportToAndroid() {
  var spreadsheet = SpreadsheetApp.getActive();
  var total = spreadsheet.getSheets().length;
  var enData = new Array();
  var tcData = new Array();

  for (var a=0; a<total; a++)
  {
    var sheet = spreadsheet.getSheets()[a]
    if (sheet.getSheetName() == 'en' || sheet.getSheetName() == 'tc') {
        // do nothing
    } else {
      enData.push([""])
      enData.push(['/*******************************'])
      enData.push(['* ' + sheet.getSheetName()])
      enData.push(['*******************************/'])

      tcData.push([""])
      tcData.push(['/*******************************'])
      tcData.push(['* ' + sheet.getSheetName()])
      tcData.push(['*******************************/'])

      var range = 'A2:C' + sheet.getLastRow().toString()
      sheet.getRange(range)
        .getValues()
        .forEach(function(r, i) {
          if (r[0] == "") {
            
          } else {
            enData.push(['<string name="' + r[0] + '">' + r[1] + '</string>'])
            tcData.push(['<string name="' + r[0] + '">' + r[2] + '</string>'])
          }
        });
    }
  }

  // Add to sheet
  var enSheet = spreadsheet.getSheetByName('en');
  var tcSheet = spreadsheet.getSheetByName('tc');
  enSheet.clearContents()
  tcSheet.clearContents()
  for (var i=0; i<enData.length; i++) {
    enSheet.getRange(1,1,enData.length, 1)
      .setValues(enData)
  }
  for (var i=0; i<tcData.length; i++) {
    tcSheet.getRange(1,1,tcData.length, 1)
      .setValues(tcData)
  }

}
