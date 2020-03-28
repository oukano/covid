import React, { useEffect } from 'react';
import { LineChart, BarChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, PieChart, Pie, Cell } from 'recharts';

function App(props) {

    const data = props.history
    const daily_data = [
        {
            "name": "Deaths",
            "value": parseInt(props.daily_status.deaths)
        },
        {
            "name": "Recovered",
            "value": parseInt(props.daily_status.recovered)
        },
        {
            "name": "confirmed",
            "value": parseInt(props.daily_status.confirmed)
        },
    ]
    const colors = ['black','green','#b10026']

    console.log(daily_data)

    const renderLineChart = (
        
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="confirmed" strokeWidth="3" stroke="#bd1620" />
            <Line type="monotone" dataKey="deaths" strokeWidth="3" stroke="#b10026" />
            <Line type="monotone" dataKey="negative" strokeWidth="3" stroke="#006634" />
            <CartesianGrid stroke="#ccc" strokeDasharray="0.3 1" />
            <XAxis  dataKey="created_at" />
            <YAxis domain={[0, parseInt(props.daily_status.negative) ]} />
            <Tooltip />
        </LineChart>
    );



    const renderBarChart = (
        <BarChart width={730} height={320} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="confirmed" fill="#8884d8" />
        </BarChart>)

    const renderPirChart = (
        <PieChart width={730} height={250}>
            <Pie data={daily_data} dataKey="value" nameKey="name" outerRadius={120} fill="#8884d8" label>
                {
                    daily_data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))
                }
            </Pie>
        </PieChart>)

    return (
        <div className="mainChart">
            <div style={{ flexGrow: 6 }}>
                {renderLineChart}
            </div>

            <div style={{ flexGrow: 6 }}>
            {renderPirChart}
                {/* {renderBarChart} */}
            </div>
            

        </div>
    );
}

export default App;
