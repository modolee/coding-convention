// 나쁜 예 - 어떤 행동을 하는지 알 수 없음
function name(person) {
  return `${person.firstName} ${person.lastName}`;
}

// 좋은 예
function getFullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

// 나쁜 예 - 무엇이 행동하는지 알 수 없음
function process(employee) {}

// 좋은 예
function calculateActualSalary(employee) {
  return employee.salary - tax;
}
