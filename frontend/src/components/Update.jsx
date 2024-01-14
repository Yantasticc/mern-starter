import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Update = () => {
  const [fname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState();
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  //receving single user data

  const getSingleData = async () => {
    try {
        const response = await fetch(`http://localhost:5000/${id}`);
        const result = await response.json();

        if (response.ok) {
            console.log("Fetched data successfully:", result);
            setName(result.name);
            setEmail(result.email);
            setAge(result.age);
        } else {
            console.error("Error fetching data:", result.error);
            setError(result.error);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
    }
};

const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedUser = { name: fname, email, age };
    console.log("Updating user with data:", updatedUser);

    try {
        const response = await fetch(`http://localhost:5000/edit/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        });

        const result = await response.json();

        if (response.ok) {
            console.log("Updated result:", result);
            setError("");
            navigate("/read");
        } else {
            console.error("Error updating user:", result.error);
            setError(result.error);
        }
    } catch (error) {
        console.error("Error updating user:", error);
        setError("Error updating user");
    }
};


    useEffect(() => {
        getSingleData();
    }, []);

  return (
    <div class="container my-2">
      <h1 class="h1 text-center">Edit Data</h1>
      {error && <div class="alert alert-danger"> {error} </div>}
      <form className="form" onSubmit={handleUpdate}>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            value={fname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Age</label>
          <input
            type="number"
            class="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-info">
          Update
        </button>
      </form>
    </div>
  );
};
export default Update;