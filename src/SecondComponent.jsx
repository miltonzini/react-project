import PropTypes from 'prop-types'

export const SecondComponent = ({title, subtitle, number}) => {
    return (
      <>
        <section>
            <h1>{ title }</h1>
            <h4>{ subtitle }</h4>
            <p>{ number * 2 }</p>
        </section>
      </>
    )
}

SecondComponent.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
}

SecondComponent.defaultProps = {
    title: "Section title",
    subtitle: "Section subtitle",
    number: 20
}

