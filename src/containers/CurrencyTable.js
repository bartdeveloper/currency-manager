import React, { Component } from 'react'
import CurrencyItem from './CurrencyItem'

class CurrencyTable extends Component {

  render() {

    const { table, no, date, rates } = this.props

    return(
        <div>
            <div className="currency-header">
                <strong>Table {table}</strong> no <strong>{no}</strong> from <strong>{date}</strong>
            </div>
            <div className="currency-table">
                <div className="currency-table-items">
                    {rates.map(r =>
                        <CurrencyItem
                            key={r.code}
                            code={r.code}
                            currency={r.currency}
                            mid={r.mid}
                    />    
                    )}
                </div>
            </div>
        </div>
    )
  }
}

export default CurrencyTable