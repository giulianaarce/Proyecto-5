import React from 'react'
import Banner from './Banner'

export default class Home extends React.Component {

    render() {
        return (
            <>
                {this.props.banner.map((data) => {
                    return (
                        <div>
                            <Banner title={data.title} link={data.link} banner={data.imgUrl} />
                        </div>
                    )
                })}
                {this.props.dataHome.map((home) => {
                    return (
                        <div>
                            <h3>{home.title}</h3>
                            <p>{home.data}</p>
                        </div>
                    )
                })}
                <table>
                    <tr>
                        <th>Premio</th>
                        <th>Año</th>
                    </tr>
                    <tr>
                        <td>Mejor Bici del Mundo Mundial</td>
                        <td>1959</td>

                    </tr>
                    <tr>
                        <td>Mejor pedal para no Humanos</td>
                        <td>1978</td>

                    </tr>
                    <tr>
                        <td>Gran Campeón</td>
                        <td>1983</td>

                    </tr>
                    <tr>
                        <td>Premio al diseño Experimental</td>
                        <td>1994</td>

                    </tr>
                    <tr>
                        <td>Quinto puesto Mundial de bici</td>
                        <td>2006</td>

                    </tr>
                </table>
            </>
        )
    }
}