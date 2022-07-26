const React = require('react')
const Default = require('./layouts/default')

function Show ({bread, id}) {
    return (
        <Default>
            <h3>{bread.name}</h3>
            <p>
                and it
                {bread.hasGluten 
                    ?<span> does </span>
                    :<span> does NOT </span>
                }
                have gluten.
            </p>
            <img src={bread.img} alt={bread.name}/>
            <form action={`/breads/${id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
            <a href={`/breads/${id}/edit`}><button>Edit</button></a>
            <li><a href="/breads">Go home</a></li>
        </Default>
    )
}

module.exports = Show