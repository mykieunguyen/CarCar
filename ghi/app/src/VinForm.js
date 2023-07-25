import React, {useState, useEffect} from 'react';


function VinList(){
  const [vins, setVins] = useState([])

  const getData = async () => {
    const url = 'http://localhost:8100/api/automobiles/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data)
      setVins(data.autos.vin);
      console.log(data.autos.vin)
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <table className="table table-striped">
      <thead>
        <tr>

          <th>vin</th>
        </tr>
      </thead>
      <tbody>
        {vins.map(vin => {
          return (
            <tr key={vin.id}>
              <td>{ vin }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export default VinList;
