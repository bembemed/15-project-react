

const List = ({person})=>{

    return <>
    
    
        {person.map((people)=>{
            {console.log(people)}
            <div key={people.id} className="person">
            hello
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