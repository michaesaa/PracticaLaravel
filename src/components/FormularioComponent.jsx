import { useState } from "react"
export const FormularioComponent = () => {
    const [formState, setFormState] = useState({
        userName: 'michael saa',
        email: 'michaelsaa@122.com',
        password: '123456'
        
    })
    const { userName, email, password } = formState
    const onInputChange = ({target}) => {
        // console.log(target.name)
        // console.log(target.value)
        const { name, value } = target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        console.log(formState)
    }


    return (
        <form onSubmit={onSubmit} className="row g-3">
            <div className="col-auto">
                <label htmlFor="UserName" className="visually-hidden">User Name</label>
                <input
                    type="text" 
                    className="form-control"
                    name="UserName"
                    placeholder="userName"
                    value={userName}
                    onChange={onInputChange}
                />
            </div>
            <div className="col-auto">
                <label htmlFor="email" className="visually-hidden">Email</label>
                <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="mail"
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div className="col-auto">
                <label htmlFor="password" className="visually-hidden">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            <div className="col-auto">
                <button
                type="submit"
                className="btn btn-primary mb-3">
                send
                </button>
            </div>
        </form>
    )
}
