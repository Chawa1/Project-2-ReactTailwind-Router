import ContactDetails from "./ContactDetails";

const Contacts=[
    {name: 'Ana Rose',
avatar: ' https://source.unsplash.com/IF9TK5Uy-KI/400x400',
  },

{name: 'John steve',
avatar: ' https://source.unsplash.com/ZHvM3XIOHoE/400x400'
},

{name: 'Ana Rose',
avatar: ' https://source.unsplash.com/jzz_3jWMzHA/400x400'
},

{name: 'Ana Rose',
avatar: ' https://source.unsplash.com/WNoLnJo7tS8/400x400'
},

{name: 'Ana Rose',
avatar: ' https://source.unsplash.com/rDEOVtE7vOs/400x400'
},

{name: 'Ana Rose',
avatar: ' https://source.unsplash.com/C8Ta0gwPbQg/400x400'
},

];



export default function ContactList() {
  return (
  <ul> 
    {Contacts.map((Contact) => {
      return <ContactDetails name={Contact.name} avatar={Contact.avatar}/>;

    })}
  </ul>
  );
}
