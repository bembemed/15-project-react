

const List = ({person})=>{

    return <main>
        {person.map((people)=>{
            <div key={people.id} className="person">
                <img src={people.image}/>
            </div>
        })}
    </main>
}

export default List