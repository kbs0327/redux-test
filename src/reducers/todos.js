import {atom} from 'recoil';

const todos = atom({
  key: 'todos',
  default: [
    {
      text: "Use Recoil",
      completed: false,
      id: 0
    }
  ]
});

export default todos;
