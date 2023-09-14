import './FirstComponent.css'

const exampleString = 'text'
const exampleNumber = 123
const exampleArray = ['text', 123, 5, 'text' ]
const exampleBoolean = true
const exampleFunction = () => 1+1*10
const exampleObject = { day: 'monday', number: 5}
const exampleDate = new Date()


export const FirstComponent = () => {
  return (
    <>
        <h1>Variables!</h1>
        <h4>String type variable</h4>
        <p>{ exampleString }</p>

        <h4>Number type variable</h4>
        <p>{ exampleNumber }</p>

        <h4>Array type variable</h4>
        <p>{ exampleArray }</p>

        <h4>Boolean type variable</h4>
        <p>{ exampleBoolean }</p>

        <h4>String type variable</h4>
        <p>{ exampleFunction() }</p>
        
        <h4>String type variable</h4>
        <p>{ JSON.stringify(exampleObject) }</p>
        
        <h4>String type variable</h4>
        <p>{ JSON.stringify(exampleDate) }</p>
    </>
  )
}


