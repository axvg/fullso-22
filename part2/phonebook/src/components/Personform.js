const PersonForm = ({
    addPerson,
    newName,
    newPhone,
    handleChangeNam,
    handleChangePho,
}) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input onChange={handleChangeNam} value={newName} />
            </div>
            <div>
                number:
                <input onChange={handleChangePho} value={newPhone} />
            </div>
            <div>
                <button type='submit'>add</button>
            </div>
        </form>
    );
};

export default PersonForm;
