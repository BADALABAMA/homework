export {};

const IT_STEP = {
  teachers: [
    { id: '1', name: 'Frank', surname: 'Sinatra', income: 2000 },
    { id: '2', name: 'Bob', surname: 'Dylan', income: 1500 },
    { id: '3', name: 'Jimi', surname: 'Hendrix', income: 5000 },
    { id: '4', name: 'Kurt', surname: 'Cobain', income: 10000 },
  ],
  students: [
    { id: '1', name: 'Nancy', surname: 'Sinatra', outcome: 3000 },
    { id: '2', name: 'Bob', surname: 'Marley', outcome: 500 },
    { id: '3', name: 'Jim', surname: 'Morisson', outcome: 7000 },
    { id: '4', name: 'Elvis', surname: 'Presley', outcome: 2500 },
  ],
};

function calculateBudget(): void {
  const totalTeachersIncome = IT_STEP.teachers.reduce(
    (sum, teacher) => sum + teacher.income / 4,
    0
  );

  const totalStudentsOutcome = IT_STEP.students.reduce(
    (sum, student) => sum + student.outcome / 4,
    0
  );

  const totalBudget = totalTeachersIncome - totalStudentsOutcome / 2;
  console.log(`Total teachers income: ${totalTeachersIncome}`);
  console.log(`Total teachers Outcome: ${totalStudentsOutcome}`);
  console.log(`IT STEP total budget is: ${totalBudget}`);
}

calculateBudget();
