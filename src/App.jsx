import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactsList/ContactsList";
import s from "./App.module.css";

export const App = () => {
  return (
    <div className={s.app}>
      <h1>Phonebook</h1>
      <ContactForm />

      <ContactsList />
    </div>
  );
};

// test
