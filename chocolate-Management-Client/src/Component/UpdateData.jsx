import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateData = () => {
  const chocolate = useLoaderData()
  const { _id, name, country, category } = chocolate;

  console.log(chocolate);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const NewChocolate = { name, country, category };
    fetch(
      `https://chocolate-management-server-tzhasan.vercel.app/chocolates/${chocolate._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(NewChocolate),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          Swal.fire({
            title: "Update Chocolate data",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        console.log(data);
      });
  };
  return (
    <div className="p-10">
      <h2 className="text-4xl text-center my-6 font-bold text-orange-900">
        Chocolate Management System (Update)
      </h2>
      <Link to={"/"} className="btn mb-6">
        <button>All chocolates</button>
      </Link>
      <div className="bg-gray-300 px-20 pt-10 pb-20 rounded-lg">
        <h2 className="text-center text-2xl font-bold text-orange-900">
          Update Chocolates
        </h2>
        <h2 className="text-center text-sm font-bold text-gray-600 mt-4">
          Use the below form to update:{" "}
          <span className="text-orange-800">{name}</span>
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Hot Pink Chocolate"
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <input
              type="text"
              name="country"
              defaultValue={country}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select className="select select-bordered" name="category" defaultValue={category}>
              <option>Premium</option>
              <option>Artisanal chocolate</option>
              <option>Organic chocolate</option>
              <option>Novelty chocolate</option>
            </select>
          </div>
          <button className="btn w-full mt-6">Update Now</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateData;