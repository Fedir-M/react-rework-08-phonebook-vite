import Input from '../Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contact/contactsSlice';
import { filterSelector } from '../../redux/contact/contactsSelectors';

const Filter = () => {
  const filter = useSelector(filterSelector)
  const dispatch = useDispatch();


  const handleChange = e => {
    dispatch(filterContacts(e));
  };
 

  return (
    <div>
      <Input
        title={'Find contacts by name'}
        type="text"
        name="filter"
        placeholder={'Enter name...'}
        value={filter}
        method={handleChange}
      />
    </div>
  );
};

export default Filter;
