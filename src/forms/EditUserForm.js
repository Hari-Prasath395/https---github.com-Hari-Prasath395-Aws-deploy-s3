import { useEffect, useState } from "react";

const EditUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(props.currentUser);

  useEffect(()=>{
        setUser(props.currentUser)
  },[props])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!user.name || !user.username) return;
        props.updateUser(user.id, user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Update User</button>
      <button
        className="button muted-button"
        onClick={() => {
          props.setEditing(false);
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;







































// import { useState } from "react";

// const EditUserForm = (props) => {
    
//   const [user, setUser] = useState(props.currentUser);
// };

// const handleInputChange = (e) => {
//   const { name, value } = e.target;

//   setUser({ ...user, [name]: value });

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         if (!user.name || !user.username) return;
//         props.updateUser(user.id, user);
//         setUser(initialFormState);
//       }}
//     >
//       <label>Name</label>
//       <input
//         type="text"
//         name="name"
//         value={user.name}
//         onChange={handleInputChange}
//       ></input>
//       <label>Username</label>
//       <input
//         type="text"
//         name="username"
//         value={user.username}
//         onChange={handleInputChange}
//       ></input>
//       <button>Update User</button>
//       <button
//         className="button muted-button"
//         onClick={() => {
//           props.setEditing(false);
//         }}
//       >
//         Cancel
//       </button>
//     </form>
//   );
// };

// export default EditUserForm;