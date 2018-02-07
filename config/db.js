require('dotenv').config()

module.exports = {
    url: "mongodb://"+process.env.DBUSERNAME+":"+process.env.DBPASSWORD+"@ds113098.mlab.com:13098/showcase"
};
