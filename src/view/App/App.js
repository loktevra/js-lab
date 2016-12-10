import React from 'react'
import { Link } from 'react-router'
import Prjs from '../../prjs'

class App extends React.Component {
    render(){
        const style = {
            link:{
                display: "block"
            }
        }
        return (
            <div>
                <div className="container-fluid">
                    <div className="page-header">
                        <h1> Experiments <small>v16.12.10</small></h1>
                    </div>
                </div>
                <div className="container">
                    {
                        Prjs.map((v,i)=>(
                            <Link key={i} to={v.path} style={style.link}>{v.title}</Link>
                        ))
                    }
                    </div>
            </div>
        )
    }
}
export default App
