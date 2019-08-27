import React  from 'react'

import * as S from './styles'
import "@material/checkbox/dist/mdc.checkbox.css"
import "@material/data-table/dist/mdc.data-table.css"

export default ({rows, headers}) => {
  return(
    <S.TableMaterial>
      <div className="mdc-data-table">
        <table className="mdc-data-table__table" aria-label="Dessert calories">
          <thead>
            <tr className="mdc-data-table__header-row">
            {
              headers && headers.length > 0 && headers.map( header=> (
                <th 
                  key={header}
                  className="mdc-data-table__header-cell"
                  role="columnheader"
                  scope="col">{header}
                </th>
              ))
            }
            </tr>
          </thead>
          <tbody className="mdc-data-table__content">
          {
            rows && rows.length > 0 && rows.map((row, index) =>   (
              <tr key={index} className="mdc-data-table__row">
              {
                row.map((Cell, index ) => <td key={index} b className="mdc-data-table__cell">{<Cell />}</td>)
              }
            </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </S.TableMaterial>
  )
}