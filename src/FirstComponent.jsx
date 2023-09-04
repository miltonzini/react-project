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

        <p>{ exampleString }</p>
        <p>{ exampleNumber }</p>
        <p>{ exampleArray }</p>
        <p>{ exampleBoolean }</p>
        <p>{ exampleFunction() }</p>
        <p>{ JSON.stringify(exampleObject) }</p>
        <p>{ JSON.stringify(exampleDate) }</p>
    </>
  )
}


