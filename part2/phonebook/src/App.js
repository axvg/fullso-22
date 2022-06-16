import { useState } from 'react';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');

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

    const handleChangeNum = (e) => {
        setNewName(e.target.value);
    };
    const handleChangePho = (e) => {
        setNewPhone(e.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input onChange={handleChangeNum} value={newName} />
                </div>
                <div>
                    number:{' '}
                    <input onChange={handleChangePho} value={newPhone} />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>

            {persons.map((p) => (
                <p key={p.id}>
                    {p.name} {p.number}
                </p>
            ))}
        </div>
    );
};

export default App;
