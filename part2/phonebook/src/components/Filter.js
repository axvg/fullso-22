const Filter = ({ search, handleChangeSea }) => {
    return (
        <div>
            filter shown with:{' '}
            <input onChange={handleChangeSea} value={search} />
        </div>
    );
};

export default Filter;
