import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";
import {useEffect, useState} from "react";

function App() {

    const [currencies, setCurrencies] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1")
            .then(response => response.json())
            .then(json => setCurrencies(json))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    // const id = fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1')
    //     .then((response) => response.json())
    //     .then((data) => (data.map((obj) => obj.id)));
    //
    // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1')
    //     .then((response) => response.json())
    //     .then((data) => (data.map((obj) => obj.symbol)));
    //
    // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1')
    //     .then((response) => response.json())
    //     .then((data) => (data.map((obj) => obj.name)));
    // console.log(id);

    return (

        <div>
            {
                loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <h1 className="text-center">Currency</h1>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>id</th>
                                <th>symbol</th>
                                <th>name</th>
                            </tr>
                            </thead>
                            <tbody>
                            {currencies.map((currency, index) => (
                                <tr key={currency.id}>
                                    <td className={index <= 4 ? "table-primary" : null}>{index + 1}</td>
                                    <td className={index <= 4 ? "table-primary" : null}>{currency.id}</td>
                                    <td className={index <= 4 ? "table-success" : null}>{currency.symbol}</td>
                                    <td className={index <= 4 ? "table-primary" : null}>{currency.name}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>

                    </>
                )
            }
        </div>

    )
        ;
}

// <div className="App">
//     {loading ? (
//         <div>Loading...</div>
//     ) : (
//         <>
//             <h1>Users</h1>
//             <table border={1}>
//                 <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                 </tr>
//                 {currencies.map((currency, index) => (
//                     <tr key={currency.id}>
//                         <td>{index + 1}</td>
//                         <td>{currency.id}</td>
//                         <td>{currency.symbol}</td>
//                         <td>{currency.name}</td>
//                     </tr>
//                 ))}
//             </table>
//         </>
//     )}
// </div>


export default App;
