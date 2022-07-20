import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"
function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    })

    const { username, email, password, passwordConfirm } = formData
    const onChange = e => {
        setFormData(previousState => ({
            ...previousState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = e => {
        e.preventDefault()
    }
    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            value={username}
                            placeholder="Enter Your Name"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter Your Email"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Enter a Password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="passwordConfirm"
                            name="passwordConfirm"
                            value={passwordConfirm}
                            placeholder="Confirm your Password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">
                            Register
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register
