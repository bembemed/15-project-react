

const List = ({person})=>{

    return <main>
        {person.map((people)=>{
            <div key={people.id} className="person">
                <img src={people.image}/>
                <div>
                    <h4>{people.name}</h4>
                    <p>{people.age} years</p>
                </div>
            </div>
        })}
    </main>
}

export default List