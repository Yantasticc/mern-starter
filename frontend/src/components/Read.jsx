import React, { useEffect, useState } from 'react';

const Read = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    async function getData() {
        try {
            const response = await fetch("http://localhost:5000");
            const result = await response.json();

            if (!response.ok) {
                console.log(result.error);
                setError(result.error);
            } else {
                setData(result);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Error fetching data");
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/${id}`, {
                method: "DELETE"
            });

            if (!response.ok) {
                const result = await response.json();
                console.log(result.error);
                setError(result.error);
            } else {
                setError("Deleted Successfully");

                setTimeout(() => {
                    setError("");
                    getData();
                }, 10000);
            }
        } catch (error) {
            console.error("Error deleting post:", error);
            setError("Error deleting post");
        }
    }

    // refresh the all post page after creating new successful post
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='container my-2'>
            {error && <div className="alert alert-danger">{error}</div>}
            <h2 className='text-center'>Show data</h2>

            <div className="row">
                {data.map((ele) => (
                    <div key={ele._id} className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{ele.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{ele.age}</h6>
                                <a href="/" className="card-link" onClick={() => handleDelete(ele._id)}>Delete</a>
                                <a href="/" className="card-link">Edit</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Read;
