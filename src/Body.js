import React from 'react';
import BodyComponent from './BodyComponent';

export default class Body extends React.Component {
    render() {
        return(
            <div>
                {this.props.lists.map((data, index) => {
                    return <BodyComponent key={index} main={data.weather[0].main} index={index + 1} desc={data.weather[0].description} icon={data.weather[0].icon} />
                })}
            </div>
        )
    }
}