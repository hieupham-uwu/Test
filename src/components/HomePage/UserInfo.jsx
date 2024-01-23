function UserInfo() {
    return (
        <div className="container mx-auto">
            <form className=" flex flex-col">
                <div>
                    <h2 className="font-semibold">Profile</h2>
                    <h3>This information will be displayed publicly so be careful what you share.</h3>
                </div>
                <div>
                    <label>Username</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>About</label>
                    <textarea type="text"></textarea>
                    <h3>Write a few sentences about yourself.</h3>
                </div>
                <div>
                    <h2>Photo</h2>
                    <image src="" alt="" />
                    <label>
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <button>Change</button>
                </div>
            </form>
        </div>
    );
}

export default UserInfo;
