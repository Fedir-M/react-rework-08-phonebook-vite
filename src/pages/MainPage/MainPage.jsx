import ContactForm from '../../components/ContactForm/ContactForm';
import ContactsList from '../../components/ContactsList/ContactsList';

import s from './MainPage.module.css';

function MainPage() {
  return (
    <div className={s.MainPage}>
      <h1>Phonebook</h1>
      <ContactForm />

      <ContactsList />
    </div>
);}

export default MainPage