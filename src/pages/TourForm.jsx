import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createTour } from "../features/TourSlice"; // Update the action to match your new feature
import { useNavigate } from "react-router-dom";

const TourForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function addedTour(data) {
        dispatch(createTour(data)); // Update the action to match your new feature
        alert("Tour added!");
        navigate('/view'); // Redirect to the appropriate page
    }

    return (
        <>
            <h1 className="text-center mt-5">TOUR FORM</h1>

            <div className="col-lg-6 mx-auto my-5 p-5 shadow">
                <form action="" method="post" onSubmit={handleSubmit(addedTour)}>
                    <div className="mt-4">
                        <select className="form-select" {...register('destination')}>
                            <option value="">--- Select Destination ---</option>
                            <option value="Beach">Beach</option>
                            <option value="Mountain">Mountain</option>
                            <option value="City">City</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <input type="text" {...register('title')} placeholder="Tour Title" className="form-control" />
                    </div>
                    <div className="mt-4">
                        <input type="text" {...register('guide')} placeholder="Tour Guide" className="form-control" />
                    </div>
                    <div className="mt-4">
                        <input type="number" {...register('price')} placeholder="Price" className="form-control" />
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-outline-info">Add Tour</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default TourForm;