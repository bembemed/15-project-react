

const List = ({person})=>{

    return <main>
        {person.map((person)=>{
            <div key={person.id} className="person">
                <img src={person.image}/>
            </div>
        })}
    </main>
}

export default List