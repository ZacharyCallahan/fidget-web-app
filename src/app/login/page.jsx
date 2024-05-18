const page = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="bg-gray-300 rounded-md h-2/4 w-2/4">
                <h1>Login</h1>
                <form className=" flex justify-center items-center flex-col gap-6">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </form>
                
            </div>
        </div>
    );
}

export default page;