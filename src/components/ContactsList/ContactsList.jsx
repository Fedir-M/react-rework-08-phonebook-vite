import { useEffect } from "react";
import Filter from "../Filter/Filter";
import ContactItem from "../ContactItem/ContactItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contact/contactsOperations";
import {
  contactsSelector,
  filterSelector,
} from "../../redux/contact/contactsSelectors";

import s from "./ContactsList.module.css";

const ContactsList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  console.log("Filter value ==> ", filter);


  const handleFilter = () => {
    
    return contacts?.filter((el) =>
      el.name.toLocaleLowerCase().includes(filter?.toLocaleLowerCase())
    );
  };

  const filteredList = handleFilter();
  // console.log("Filtered Contacts ==> ", filteredList);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Contacts</h2>

      <Filter />

      <ul className={s.listWrapper}>
        {filteredList?.map((el) => (
          <ContactItem
            key={el.id}
            id={el.id}
            name={el.name}
            number={el.number}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
