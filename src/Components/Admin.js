


export default function Admin() {
    return (
        <div>
            <div className="navbar bg-dark flex-nowrap">
                <a href="#" className="col-md-3 navbar-brand text-light">
                    Company Name
                </a>
                <input type="text" className="w-100 form-control bg-dark border-0" />
                <div className="nav text-nowrap">
                    <span className="text-light"> Log Out </span>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 bg-light">
                        <div className="nav  flex-column">
                            <div className="nav-item">
                                <a href="/admin" className="nav-link">
                                    Dashboard
                                </a>
                            </div>
                            <div className="nav-item">
                                <a className="nav-link">News</a>
                            </div>
                            <div className="nav-item">
                                <a href="/users" className="nav-link">
                                    Users
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">

                    </div>
                </div>
            </div>
        </div>
    );
}