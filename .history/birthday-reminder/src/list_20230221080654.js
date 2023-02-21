

const List = ({person})=>{

    return <>
    
    {console.log(person)}
        {person.map((people)=>{
            <div key={people.id} className="person">
                <img src={people.image}/>
                <div>
                    <h4>{people.name}</h4>
                    <p>{people.age} years</p>
                </div>
            </div>
        })}
    </>
}

export default List