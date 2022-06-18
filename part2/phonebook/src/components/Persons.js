import Person from "./Person";

const Persons = ({dataToShow}) => {
    return(
        <div>
        {dataToShow.map((person) => (
            // <p key={person.id}>
            //     {person.name} {person.number}
            // </p>
            <Person key={person.id} person={person} />
        ))}
        </div>
    )
}

export default Persons;