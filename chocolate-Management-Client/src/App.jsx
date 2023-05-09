
import { Link, useLoaderData } from 'react-router-dom';
import './App.css'
import AllChocolateCard from './Component/AllChocolateCard';
import { useState } from 'react';
import { GiChocolateBar } from "react-icons/gi";

function App() {
  const Loaderchocolates = useLoaderData()
  // console.log(chocolates);
  const [chocolates, setChocolates] = useState(Loaderchocolates);
  
  return (
    <div className="p-10">
      <h2 className="text-4xl text-center my-6 font-bold text-orange-900">
        Chocolate Management System (ALL){" "}
      </h2>
      <Link to={"/newChocolate"}>
        <button className="btn mb-4">New Chocolate <GiChocolateBar className='text-red-400 ml-2 text-2xl'></GiChocolateBar></button>
      </Link>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Country</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {chocolates.map((chocolate, index) => (
                <AllChocolateCard
                  key={chocolate._id}
                  chocolate={chocolate}
                  index={index}
                  chocolates={chocolates}
                  setChocolates={setChocolates}
                ></AllChocolateCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App
