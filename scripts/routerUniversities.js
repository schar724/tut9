const data = require('./dataProvider.js');

const handleAll = app => {
    app.get('/', (req, resp)=> { resp.json(data)});
}

const handleById = app => {
    app.get('/:id', (req,resp) => {
        const matches = data.filter(u=>u.id==req.params.id)
        if(matches.length > 0)
            resp.json(matches)
        else
            resp.json({"message": "no universities for provided id"})
    })
}

module.exports = {
    handleAll, handleById
}