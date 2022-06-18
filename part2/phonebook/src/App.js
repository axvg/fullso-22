import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/Personform';
import Persons from './components/Persons';

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    ]);
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [search, setSearch] = useState('');

    const addPerson = (e) => {
        e.preventDefault();

        const personObj = {
            name: newName,
            number: newPhone,
            id: persons.length + 1,
        };

        if (persons.find((person) => person.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            return;
        }

        setPersons(persons.concat(personObj));

        setNewName('');
        setNewPhone('');
    };

    const handleChangeNam = (e) => {
        setNewName(e.target.value);
    };
    const handleChangePho = (e) => {
        setNewPhone(e.target.value);
    };
    const handleChangeSea = (e) => {
        setSearch(e.target.value);
    };

    const dataToShow = persons.filter((p) =>
        p.name.toUpperCase().includes(search.toUpperCase())
    );

    return (
        <div>
            <h2>Phonebook</h2>

            <Filter search={search} handleChangeSea={handleChangeSea} />

            <h2>add a new</h2>

            <PersonForm
                addPerson={addPerson}
                newName={newName}
                newPhone={newPhone}
                handleChangeNam={handleChangeNam}
                handleChangePho={handleChangePho}
            />
            <h2>Numbers</h2>

            <Persons dataToShow={dataToShow}/>
        </div>
    );
};

export default App;
