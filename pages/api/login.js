const handler = (req, res) => {
    if(req.method === "POST"){
        const { username, password } = req.body;
        if(
            username === process.env.USERNAME &&
            password === process.env.PASSWORD
        ) {
            res.setHeaders(
                "Set-Cookie",
                cookie.serialize("token", process.env.TOKEN, {
                    MaxAge: 60 * 60,
                    sameSite: "Strict",
                    path: "/",
                })
            );
            res.status(200).json("Logged in!");
        } else{
            res.status(400).json("Invalid username or password");
        }
    }
};

export default handler; 

