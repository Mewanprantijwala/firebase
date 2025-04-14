import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deletetour, viewtour } from "../features/TourSlice"
import { BsTrash } from "react-icons/bs"
import { FaPen } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Tourlist = () => {
    const { Tourlist } = useSelector((state) => state.tour) // ✅ fixed path
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(viewtour())
    }, [dispatch])

    const trash = (id) => {
        if (window.confirm("Do you want to delete this tour?")) {
            dispatch(deletetour(id)).then(() => dispatch(viewtour()))

        }
    }
    
  

    return (
        <>
            <h1 className="text-center mt-5">TOUR BLOG LIST</h1>
            <div className="container my-5">
                <div className="row">
                    {Tourlist?.length > 0 ? (
                        Tourlist.map((tour) => (
                            <div className="col-lg-4 my-2" key={tour.id}>
                                <div className="card shadow border-5">
                                    <div className="card-body">
                                        <h4>Title: {tour?.title}</h4>
                                        <ul>
                                            <li>Category: {tour?.category}</li>
                                            <li>Guide Name: {tour?.chef}</li>
                                            <li>Price: {tour?.price}</li>
                                        </ul>
                                        <button
                                            onClick={() => trash(tour.id)}
                                            className="btn btn-danger"
                                        >
                                            <BsTrash />
                                        </button>
                                        <NavLink
                                            className="btn btn-warning mx-2"
                                            to={`/update/${tour.id}`}
                                        >
                                            <FaPen />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No Tours Found</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Tourlist
