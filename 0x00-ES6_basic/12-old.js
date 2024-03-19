export default function createReportObject(employeesList) {
  this."allEmployees" = employeesList;
  this."getNumberOfDepartments" = (dict) => dict.length;
  return this;
}
