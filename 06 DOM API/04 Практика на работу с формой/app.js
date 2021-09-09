const registeredUsers = [
    ['admin', 'KoI18'],
    ['manager', 'SuperMe108'],
    ['editor', '12345'],
];

const fields = document.getElementsByTagName('input');
const form = document.getElementsByTagName('form')[0];
const btn = document.getElementsByTagName('button')[0];

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (validate()) {
    console.log("Access granted");
    form.reset();
  }
}

function validate() {
  let isValid = true;

  for (let field of fields) {
    if (!field.value.trim()) {
      console.log("All fields are required");
      isValid = false;
    }
  }
  
  if (isValid) {
      const login = fields[0].value;
      
      const user = registeredUsers.find(user => user[0] === login);
      
      if (!user || user[1] !== fields[1].value) {
          console.log("Incorrect login or password");
          isValid = false;
      }
  }

  return isValid;
}