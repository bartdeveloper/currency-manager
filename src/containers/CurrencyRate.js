import React, {Component} from 'react'

class CurrencyRate extends Component {

    render(){

        const { no, mid } = this.props

        return(
            <div><strong>{mid}</strong> PLN<br/><small>{no}</small></div>
        )
    }
}

export default CurrencyRate