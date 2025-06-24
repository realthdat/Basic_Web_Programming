# Student Information System

This is a simple web-based application that allows users to manage student records. It provides features for adding, deleting, and exporting student data.

## 🚀 Features

- Add new students with **ID**, **Name**, **Email**, and **GPA**
- Prevent duplicate **ID** or **Email**
- Delete individual or selected student rows
- Export student data to an Excel (.xlsx) file
- Display today's date in the footer

## 📋 Technologies Used

- HTML, CSS, JavaScript (jQuery)
- [XLSX.js](https://github.com/SheetJS/sheetjs) for Excel export
- [FileSaver.js](https://github.com/eligrey/FileSaver.js) for file download

## 📂 Project Structure
```
project/
├── index.html    # Main HTML file
├── styles.css    # Stylesheet for styling the webpage
├── script.js     # JavaScript file for interactivity
├── logo.png      # Project logo image
└── README.md     # Project documentation
```


## 💡 How to Use

1. Open `index.html` in a web browser.
2. Fill in the student form and click "Submit" to add a new student.
3. Click a table row to select it, then click "Delete" to remove selected students.
4. Use the "Delete" button in the Action column to remove a specific row.
5. Click "Export to Excel" to download student data.

## 📅 Date Display

The current date is displayed dynamically in the footer each time the page is loaded.

## 📜 License

This project is for educational/demo purposes and does not include a license.

