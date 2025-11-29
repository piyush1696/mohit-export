// Function to process the form submission and add it to the Google Sheet
function doPost(e) {
  // Prevent spam by validating the request method
  if (e.parameter['token'] !== 'abcd1234') {
    return ContentService.createTextOutput("Invalid request");
  }

  // Validate the parameters to make sure they're not empty or invalid
  const fullName = e.parameter.fullName;
  const email = e.parameter.email;
  const mobile = e.parameter.mobile;
  const message = e.parameter.message;

  if (!fullName || !email || !mobile || !message) {
    return ContentService.createTextOutput("Missing form fields");
  }

  // Access the Google Sheet
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  
  // Append data to the sheet
  sheet.appendRow([new Date(), fullName, email, mobile, message]);

  // Return success message
  return ContentService.createTextOutput("Submission successful");
}
