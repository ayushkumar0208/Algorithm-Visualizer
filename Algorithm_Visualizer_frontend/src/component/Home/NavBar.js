import React from 'react'

function NavBar() {
    const user = localStorage.getItem('currentUsername')
    const handleLogout = () => {
		localStorage.removeItem("currentUser");
        localStorage.removeItem("currentUsername");
		window.location.href = '/home';
	};
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="/home">Algoritm Visualizer</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-5">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                        {user ? (<><div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                               {user}
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><a class="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
                                
                            </ul>
                        </div></>) : (<><li class="nav-item active">
                            <a class="nav-link" href="/signup/">Register</a>
                        </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Login</a>
                            </li></>)}

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar