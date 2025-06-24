$(document).ready(function () {
  // Form submission
  $("#studentForm").submit(function (event) {
    event.preventDefault();

    const studentId = $("#studentId").val().trim();
    const studentName = $("#studentName").val().trim();
    const studentEmail = $("#studentEmail").val().trim().toLowerCase();
    const studentGpa = $("#studentGpa").val().trim();

    if (!$.isNumeric(studentId)) {
      alert("ID must be a number");
      return;
    }

    if (!$.isNumeric(studentGpa)) {
      alert("GPA must be a number");
      return;
    }

    let isDuplicate = false;

    // Check for duplicate ID or Email
    $("#studentTable tbody tr").each(function () {
      const existingId = $(this).find("td:eq(0)").text().trim();
      const existingEmail = $(this).find("td:eq(2)").text().trim().toLowerCase();

      if (existingId === studentId) {
        alert("Student ID already exists!");
        isDuplicate = true;
        return false; // Break loop
      }

      if (existingEmail === studentEmail) {
        alert("Email already exists!");
        isDuplicate = true;
        return false; // Break loop
      }
    });

    if (isDuplicate) return;

    const row = `<tr>
      <td>${studentId}</td>
      <td>${studentName}</td>
      <td>${studentEmail}</td>
      <td>${studentGpa}</td>
      <td><button class='delete-button'>Delete</button></td>
    </tr>`;

    $("#studentTable tbody").append(row);
    $("#studentForm")[0].reset();
  });

  // Delete selected rows
  $("#deleteButton").click(function () {
    $(".selected").remove();
  });

  // Row selection
  $("#studentTable tbody").on("click", "td", function () {
    $(this).parent().toggleClass("selected");
  });

  // Delete single row
  $(document).on("click", ".delete-button", function () {
    $(this).closest("tr").remove();
  });

  // Export to Excel
  $("#export-to-excel").click(function () {
    const tableData = [];
    $("#studentTable tbody tr").each(function () {
      const rowData = [];
      $(this).find("td").each(function (index, td) {
        if (index < 4) {
          rowData.push($(td).text());
        }
      });
      tableData.push(rowData);
    });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(tableData);
    XLSX.utils.book_append_sheet(wb, ws, "Student Information");

    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([wbout], { type: "application/octet-stream" });
    saveAs(blob, "student_information.xlsx");
  });

  // Display date in footer
  const currentDate = new Date();
  $("#date").text(`${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`);
});
