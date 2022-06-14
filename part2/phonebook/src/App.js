import { useState } from 'react';

const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
    const [newName, setNewName] = useState('');

    const addPerson = (e) => {
        e.preventDefault();

        const personObj = {
            name: newName,
        };

        setPersons(persons.concat(personObj));

        setNewName('');
    };

    const handleChange = (e) => {
        setNewName(e.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input onChange={handleChange} value={newName} />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>

            {persons.map((p) => (
                <p key={p.name}>{p.name}</p>
            ))}
        </div>
    );
};

export default App;
