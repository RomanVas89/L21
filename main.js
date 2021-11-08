const contactList = [
    {
      id: 1,
      first_name: 'Vasya',
      last_name: 'Petrov',
      nick_name: '',
      phone: 093945394,
      group: [
        {
          name: 'friends',
          id: 2
        }
      ],
      actions: null
    },
    {
      id: 2,
      first_name: 'Petya',
      last_name: '',
      nick_name: 'Sizo',
      phone: 09722122,
      group: [
        {
          name: 'best_friends',
          id: 1
        }
      ],
      actions: [
        {
          name: 'missed call',
          value: 3,
          id: 1
        }
      ]
    },
    {
      id: 2,
      first_name: 'Rustem',
      last_name: '',
      nick_name: 'Box',
      phone: 09700000,
      group: [
        {
          name: 'other',
          id: 3
        }
      ],
      actions: [
        {
          name: 'missed call',
          value: 13,
          id: 1
        }
      ]
    }
];


contactList.map(contacts => {

    let actName = contacts.actions !== null ? contacts.actions.map(action => action.name) : '';
    let actGroup = contacts.group !== null ? contacts.group.map(group => group.name) : '';
    console.log(
        `Имя: ${contacts.first_name} \n Фамилия: ${contacts.last_name} \n Номер телефона: ${contacts.phone} \n ${actName} \n ${actGroup}`
    );
})