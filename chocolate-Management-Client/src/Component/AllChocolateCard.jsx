import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllChocolateCard = ({ chocolate, index,setChocolates,chocolates }) => {
  const { _id, name, country, category } = chocolate;
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://chocolate-management-server-tzhasan.vercel.app/chocolates/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainingChocolates = chocolates.filter(
                (c) => c._id !== _id
              );
              setChocolates(remainingChocolates);
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{country}</td>
      <td>{category}</td>
      <td className="flex gap-4 text-xl">
        <Link to={`/updateData/${_id}`}>
          <AiFillEdit></AiFillEdit>
        </Link>
        <Link onClick={handleDelete}>
          <AiFillDelete></AiFillDelete>
        </Link>
      </td>
    </tr>
  );
};

export default AllChocolateCard;
