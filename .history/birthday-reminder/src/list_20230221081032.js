

const List = ({person})=>{

    return <div>
    {person.map((people)=>{
            {console.log(people)}
            <article key={people.id} className="person">
            
                <img src={people.image}/>
                <div>
                    <h4>{people.name}</h4>
                    <p>{people.age} years</p>
                </div>
            </article>
        })}
    </div>
    
   
}

export default List